import test from "node:test";
import assert from "node:assert/strict";
import {
  CHECKOUT_URL,
  FALLBACK_URL,
  MAX_BODY_BYTES,
  handleLead,
  readLeadRequest,
} from "../lib/lead.mjs";

const valid = {
  nome: "  Ana   Souza ",
  email: "ana@example.com",
  ddi: "+55",
  whatsapp: "(47) 99999-1234",
  origem: "hero",
};
const config = {
  supabaseUrl: "https://projeto-teste.supabase.co",
  publishableKey: "sb_publishable_apenas_dados_ficticios_teste",
  timeoutMs: 100,
};
const request = (body, headers = {}) =>
  new Request("http://localhost:3000/api/inscricao", {
    method: "POST",
    headers: {
      host: "localhost:3000",
      origin: "http://localhost:3000",
      "content-type": "application/json",
      ...headers,
    },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
const neverFetch = () => {
  throw new Error("Não deveria enviar dados.");
};
const jwt = (role) =>
  [
    "eyJhbGciOiJIUzI1NiJ9",
    Buffer.from(JSON.stringify({ role })).toString("base64url"),
    "assinatura_ficticia",
  ].join(".");

test("aguarda o insert e só então retorna checkout e 201", async () => {
  let finish;
  let settled = false;
  const resultPromise = handleLead(valid, config, (url, init) => {
    assert.equal(url, "https://projeto-teste.supabase.co/rest/v1/leads");
    assert.equal(init.method, "POST");
    assert.equal(init.redirect, "error");
    assert.equal(init.cache, "no-store");
    assert.equal(init.headers.Prefer, "return=minimal");
    assert.equal(init.headers.Authorization, undefined);
    assert.equal(init.headers.apikey, config.publishableKey);
    assert.deepEqual(JSON.parse(init.body), {
      nome: "Ana Souza",
      email: "ana@example.com",
      whatsapp: "+55 47999991234",
      origem: "hero",
    });
    return new Promise((resolve) => {
      finish = resolve;
    });
  }).then((result) => {
    settled = true;
    return result;
  });
  await Promise.resolve();
  assert.equal(settled, false);
  finish(new Response(null, { status: 201 }));
  const result = await resultPromise;
  assert.equal(result.status, 201);
  assert.equal(result.body.ok, true);
  assert.equal(result.body.checkoutUrl, CHECKOUT_URL);
});

test("erro upstream não vaza mensagens ou permite checkout", async () => {
  const result = await handleLead(
    valid,
    config,
    async () => new Response("detalhes internos", { status: 403 }),
  );
  assert.equal(result.status, 502);
  assert.equal(result.body.ok, false);
  assert.equal(result.body.checkoutUrl, undefined);
  assert.equal(result.body.fallbackUrl, FALLBACK_URL);
  assert.doesNotMatch(result.body.message, /detalhes internos/);
});

test("falha de rede não afirma cadastro recebido", async () => {
  const result = await handleLead(valid, config, async () => {
    throw new Error("credenciais e dados privados");
  });
  assert.equal(result.status, 502);
  assert.equal(result.body.checkoutUrl, undefined);
  assert.doesNotMatch(result.body.message, /credenciais|privados/);
});

test("timeout aborta upstream e não libera checkout, mesmo se fetch ignorar abort", async () => {
  let signal;
  const result = await handleLead(
    valid,
    { ...config, timeoutMs: 5 },
    (_url, init) => {
      signal = init.signal;
      return new Promise(() => {});
    },
  );
  assert.equal(result.status, 504);
  assert.equal(signal.aborted, true);
  assert.equal(result.body.checkoutUrl, undefined);
  assert.match(result.body.message, /não foi confirmado/);
});

test("campos inválidos e tipos inesperados são recusados antes de qualquer fetch", async () => {
  for (const body of [
    null,
    [],
    "texto",
    {},
    { ...valid, nome: "<script>" },
    { ...valid, nome: "A\nB" },
    { ...valid, email: "a..b@example.com" },
    { ...valid, email: "a@-dominio.com" },
    { ...valid, email: "a@example.com\r\nCC:outro" },
    { ...valid, email: 10 },
    { ...valid, ddi: "+0" },
    { ...valid, whatsapp: "119999" },
    { ...valid, whatsapp: "(20) 99999-1234" },
    { ...valid, whatsapp: "1198765432" },
    { ...valid, whatsapp: "+55 47999991234" },
    { ...valid, origem: "email=ana@example.com" },
  ]) {
    const result = await handleLead(body, config, neverFetch);
    assert.equal(result.status, 400);
    assert.equal(result.body.checkoutUrl, undefined);
    assert.ok(result.body.fieldErrors);
  }
});

test("configuração ausente, host arbitrário e chaves privilegiadas são recusados", async () => {
  for (const settings of [
    undefined,
    {},
    { ...config, supabaseUrl: "http://projeto-teste.supabase.co" },
    { ...config, supabaseUrl: "https://projeto-teste.supabase.co.evil.com" },
    { ...config, supabaseUrl: "https://projeto-teste.supabase.co/rest/v1" },
    {
      ...config,
      supabaseUrl: "https://usuario:senha@projeto-teste.supabase.co",
    },
    { ...config, publishableKey: "sb_secret_nunca_aceitar_isto" },
    { ...config, publishableKey: jwt("service_role") },
    { ...config, publishableKey: jwt("authenticated") },
  ]) {
    const result = await handleLead(valid, settings, neverFetch);
    assert.equal(result.status, 503);
    assert.match(result.body.message, /não foram enviados/);
    assert.equal(result.body.checkoutUrl, undefined);
  }
});

test("JWT público anon é aceito, origem padrão é estável e extras não são enviados", async () => {
  const { origem, ...fields } = valid;
  const result = await handleLead(
    { ...fields, permissao_admin: true },
    { ...config, publishableKey: jwt("anon") },
    async (_url, init) => {
      assert.equal(init.headers.Authorization, `Bearer ${jwt("anon")}`);
      const data = JSON.parse(init.body);
      assert.equal(data.origem, "site-next");
      assert.equal(data.permissao_admin, undefined);
      return new Response(null, { status: 201 });
    },
  );
  assert.equal(result.status, 201);
});

test("proxy lê JSON válido com charset", async () => {
  const parsed = await readLeadRequest(
    request(valid, { "content-type": "application/json; charset=utf-8" }),
  );
  assert.equal(parsed.ok, true);
  assert.deepEqual(parsed.body, valid);
});

test("origem ausente, diferente e cross-site são recusadas", async () => {
  for (const headers of [
    { origin: "" },
    { origin: "https://outro.example" },
    { "sec-fetch-site": "cross-site" },
  ]) {
    const parsed = await readLeadRequest(request(valid, headers));
    assert.equal(parsed.ok, false);
    assert.equal(parsed.response.status, 403);
  }
});

test("Host real permite 127.0.0.1 quando Request.url interno usa localhost", async () => {
  const parsed = await readLeadRequest(
    request(valid, { host: "127.0.0.1:3000", origin: "http://127.0.0.1:3000" }),
  );
  assert.equal(parsed.ok, true);
  assert.deepEqual(parsed.body, valid);
});

test("Host IPv6 válido mantém a comparação exata de origem", async () => {
  const parsed = await readLeadRequest(
    request(valid, { host: "[::1]:3000", origin: "http://[::1]:3000" }),
  );
  assert.equal(parsed.ok, true);
});

test("Host malformado, ausente, com credenciais ou caminho é recusado", async () => {
  for (const host of [
    "",
    "usuario@localhost:3000",
    "localhost:3000/caminho",
    "localhost:3000?x=1",
    "localhost:3000#trecho",
    "localhost:3000\\caminho",
    "localhost:3000,outro.example",
    "https://localhost:3000",
    "local..host:3000",
    "-localhost:3000",
    "localhost:65536",
    "localhost:3000:80",
  ]) {
    const parsed = await readLeadRequest(
      request(valid, { host, origin: `http://${host}` }),
    );
    assert.equal(parsed.ok, false, `Host deveria ser recusado: ${host}`);
    assert.equal(parsed.response.status, 403);
  }
});

test("origem não aceita credenciais, caminho, porta ou protocolo diferentes", async () => {
  for (const origin of [
    "http://usuario@localhost:3000",
    "http://localhost:3000/caminho",
    "http://localhost:3000/",
    "http://localhost:3001",
    "https://localhost:3000",
    "null",
    "http://localhost:3000.evil.example",
  ]) {
    const parsed = await readLeadRequest(request(valid, { origin }));
    assert.equal(parsed.ok, false, `Origem deveria ser recusada: ${origin}`);
    assert.equal(parsed.response.status, 403);
  }
});

test("X-Forwarded-Host e X-Forwarded-Proto arbitrários não autorizam outra origem", async () => {
  const parsed = await readLeadRequest(
    request(valid, {
      origin: "https://outro.example",
      "x-forwarded-host": "outro.example",
      "x-forwarded-proto": "https",
    }),
  );
  assert.equal(parsed.ok, false);
  assert.equal(parsed.response.status, 403);
});

test("limite de 4 KB vale para corpo real e Content-Length", async () => {
  for (const req of [
    request("x".repeat(MAX_BODY_BYTES + 1)),
    request(valid, { "content-length": "4097" }),
    request("á".repeat(2100)),
  ]) {
    const parsed = await readLeadRequest(req);
    assert.equal(parsed.ok, false);
    assert.equal(parsed.response.status, 413);
  }
});

test("JSON inválido e tipo de conteúdo diferente são recusados", async () => {
  assert.equal((await readLeadRequest(request("{"))).response.status, 400);
  assert.equal(
    (await readLeadRequest(request(valid, { "content-type": "text/plain" })))
      .response.status,
    415,
  );
});
