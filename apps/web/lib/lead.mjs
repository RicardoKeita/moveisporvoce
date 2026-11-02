// Integração de servidor: nunca importar este módulo em componentes cliente.
export const CHECKOUT_URL = "https://pay.hotmart.com/W103336663R";
export const FALLBACK_URL = "https://www.moveisporvoce.com.br/";
export const MAX_BODY_BYTES = 4096;

const failure = (status, message, fieldErrors) => ({
  status,
  body: {
    ok: false,
    message,
    fallbackUrl: FALLBACK_URL,
    ...(fieldErrors ? { fieldErrors } : {}),
  },
});

function requestOrigin(request) {
  // Next pode normalizar Request.url para localhost no servidor. O Host contém
  // a autoridade realmente recebida; cabeçalhos X-Forwarded-* não são usados.
  const host = request.headers.get("host");
  if (
    !host ||
    host.length > 261 ||
    !/^(?:[a-zA-Z0-9](?:[a-zA-Z0-9.-]*[a-zA-Z0-9])?|\[[a-fA-F0-9:]+\])(?::[0-9]{1,5})?$/.test(
      host,
    )
  )
    return null;
  try {
    const protocol = new URL(request.url).protocol;
    if (protocol !== "http:" && protocol !== "https:") return null;
    const url = new URL(`${protocol}//${host}`);
    if (
      !url.hostname.startsWith("[") &&
      url.hostname
        .split(".")
        .some(
          (label) =>
            !/^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?$/.test(label),
        )
    )
      return null;
    return url.origin;
  } catch {
    return null;
  }
}

/** Limita bytes efetivamente lidos, inclusive sem Content-Length. */
export async function readLeadRequest(request) {
  const origin = request.headers.get("origin");
  if (!origin || origin !== requestOrigin(request)) {
    return {
      ok: false,
      response: failure(403, "Origem da solicitação não permitida."),
    };
  }
  if (request.headers.get("sec-fetch-site") === "cross-site") {
    return {
      ok: false,
      response: failure(403, "Origem da solicitação não permitida."),
    };
  }
  const contentType = request.headers
    .get("content-type")
    ?.split(";", 1)[0]
    .trim()
    .toLowerCase();
  if (contentType !== "application/json") {
    return {
      ok: false,
      response: failure(415, "Envie os dados no formato JSON."),
    };
  }
  const declaredSize = request.headers.get("content-length");
  if (
    declaredSize &&
    (!/^\d+$/.test(declaredSize) || Number(declaredSize) > MAX_BODY_BYTES)
  ) {
    return {
      ok: false,
      response: failure(413, "Os dados enviados excedem o limite permitido."),
    };
  }
  if (!request.body)
    return {
      ok: false,
      response: failure(400, "Preencha os dados do formulário."),
    };
  const reader = request.body.getReader();
  const chunks = [];
  let size = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > MAX_BODY_BYTES) {
        await reader.cancel();
        return {
          ok: false,
          response: failure(
            413,
            "Os dados enviados excedem o limite permitido.",
          ),
        };
      }
      chunks.push(value);
    }
    const bytes = new Uint8Array(size);
    let offset = 0;
    for (const chunk of chunks) {
      bytes.set(chunk, offset);
      offset += chunk.byteLength;
    }
    const body = JSON.parse(
      new TextDecoder("utf-8", { fatal: true }).decode(bytes),
    );
    return { ok: true, body };
  } catch {
    return {
      ok: false,
      response: failure(
        400,
        "Não foi possível ler o formulário. Confira os dados e tente novamente.",
      ),
    };
  } finally {
    reader.releaseLock();
  }
}

function validateBody(body) {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return { errors: { form: "Preencha os dados do formulário." } };
  }
  const text = (key) =>
    typeof body[key] === "string" ? body[key].normalize("NFC").trim() : "";
  const nome = text("nome").replace(/ +/g, " ");
  const email = text("email");
  const ddi = text("ddi");
  const phoneInput = text("whatsapp");
  const origem = body.origem === undefined ? "site-next" : text("origem");
  const errors = {};
  if (
    nome.length < 2 ||
    nome.length > 100 ||
    !/^[\p{L}\p{M}][\p{L}\p{M} .’'\-]*$/u.test(nome)
  ) {
    errors.nome = "Informe seu nome, com 2 a 100 caracteres.";
  }
  const emailParts = email.split("@");
  const domain = emailParts[1] || "";
  if (
    email.length > 254 ||
    emailParts.length !== 2 ||
    !emailParts[0] ||
    emailParts[0].length > 64 ||
    /[\s\u0000-\u001f\u007f]/.test(email) ||
    emailParts[0].startsWith(".") ||
    emailParts[0].endsWith(".") ||
    emailParts[0].includes("..") ||
    !/^[A-Za-z0-9.!#$%&'*+\-/=?^_`{|}~]+$/.test(emailParts[0]) ||
    !domain.includes(".") ||
    domain
      .split(".")
      .some(
        (label) =>
          !/^[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?$/.test(label),
      )
  ) {
    errors.email = "Informe um e-mail válido.";
  }
  if (!/^\+[1-9]\d{0,2}$/.test(ddi))
    errors.ddi = "Selecione um código de país válido.";
  const whatsapp = phoneInput.replace(/[\s().-]/g, "");
  const ddd = whatsapp.slice(0, 2);
  const validDdds = new Set(
    "11 12 13 14 15 16 17 18 19 21 22 24 27 28 31 32 33 34 35 37 38 41 42 43 44 45 46 47 48 49 51 53 54 55 61 62 63 64 65 66 67 68 69 71 73 74 75 77 79 81 82 83 84 85 86 87 88 89 91 92 93 94 95 96 97 98 99".split(
      " ",
    ),
  );
  if (
    phoneInput.length > 30 ||
    !/^[\d\s().-]+$/.test(phoneInput) ||
    !/^\d{7,14}$/.test(whatsapp) ||
    ddi.length - 1 + whatsapp.length > 15 ||
    /^(\d)\1+$/.test(whatsapp) ||
    (ddi === "+55" &&
      (!validDdds.has(ddd) ||
        !/^(?:\d{2}[2-5]\d{7}|\d{2}9\d{8})$/.test(whatsapp)))
  ) {
    errors.whatsapp = "Informe um WhatsApp válido com DDD.";
  }
  if (!/^[a-zA-Z0-9][a-zA-Z0-9_-]{0,63}$/.test(origem))
    errors.origem = "A origem do formulário é inválida. Recarregue a página.";
  return Object.keys(errors).length
    ? { errors }
    : { data: { nome, email, whatsapp: `${ddi} ${whatsapp}`, origem } };
}

function resolveConfig(config) {
  if (
    !config ||
    typeof config.supabaseUrl !== "string" ||
    typeof config.publishableKey !== "string"
  )
    return null;
  try {
    const url = new URL(config.supabaseUrl);
    if (
      url.protocol !== "https:" ||
      !/^[a-z0-9-]+\.supabase\.co$/.test(url.hostname) ||
      url.username ||
      url.password ||
      url.port ||
      url.search ||
      url.hash ||
      url.pathname !== "/"
    )
      return null;
    const key = config.publishableKey.trim();
    if (key.length > 4096 || /[\r\n]/.test(key) || key.startsWith("sb_secret_"))
      return null;
    let isPublic = /^sb_publishable_[A-Za-z0-9_-]{16,}$/.test(key);
    if (
      !isPublic &&
      /^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/.test(key)
    ) {
      const payload = JSON.parse(
        Buffer.from(key.split(".")[1], "base64url").toString("utf8"),
      );
      isPublic = payload.role === "anon";
    }
    if (!isPublic) return null;
    const timeoutMs = config.timeoutMs ?? 8000;
    if (!Number.isInteger(timeoutMs) || timeoutMs < 1 || timeoutMs > 30000)
      return null;
    return { url: `${url.origin}/rest/v1/leads`, key, timeoutMs };
  } catch {
    return null;
  }
}

/** Só confirma a captação após o Supabase aceitar o insert. Nenhum dado é registrado em logs. */
export async function handleLead(body, config, fetcher = fetch) {
  const validated = validateBody(body);
  if (validated.errors)
    return failure(
      400,
      "Confira os campos indicados e tente novamente.",
      validated.errors,
    );
  const settings = resolveConfig(config);
  if (!settings)
    return failure(
      503,
      "O formulário está temporariamente indisponível. Seus dados não foram enviados. Você pode continuar pelo site atual.",
    );
  const controller = new AbortController();
  let timer;
  try {
    const timeout = new Promise((_, reject) => {
      timer = setTimeout(() => {
        controller.abort();
        reject(new Error("lead-timeout"));
      }, settings.timeoutMs);
    });
    const response = await Promise.race([
      fetcher(settings.url, {
        method: "POST",
        headers: {
          apikey: settings.key,
          // As chaves publishable novas não são JWTs; só a chave anon legada
          // também ocupa Authorization. A publishable segue apenas em apikey.
          ...(!settings.key.startsWith("sb_publishable_")
            ? { Authorization: `Bearer ${settings.key}` }
            : {}),
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify(validated.data),
        signal: controller.signal,
        redirect: "error",
        cache: "no-store",
      }),
      timeout,
    ]);
    if (!response.ok)
      return failure(
        502,
        "Não foi possível confirmar seu cadastro. Tente novamente ou continue pelo site atual.",
      );
    return {
      status: 201,
      body: {
        ok: true,
        message: "Cadastro recebido. Você pode seguir para a inscrição.",
        checkoutUrl: CHECKOUT_URL,
      },
    };
  } catch {
    return controller.signal.aborted
      ? failure(
          504,
          "A confirmação demorou mais que o esperado. Seu cadastro ainda não foi confirmado. Tente novamente ou continue pelo site atual.",
        )
      : failure(
          502,
          "Não foi possível confirmar seu cadastro. Tente novamente ou continue pelo site atual.",
        );
  } finally {
    clearTimeout(timer);
  }
}
