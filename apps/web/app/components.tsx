"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent, KeyboardEvent } from "react";
import { site } from "./content";

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  function close() {
    setOpen(false);
  }
  return (
    <header className="header" id="topo">
      <div className="header-inner">
        <a
          className="brand-frame"
          href="#topo"
          aria-label="Móveis Por Você — início"
        >
          <img
            src="/brand/logo-preto.svg"
            alt="Método Móveis Por Você"
            width="156"
            height="156"
          />
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="navegacao"
          onClick={() => setOpen(!open)}
        >
          {open ? "Fechar" : "Menu"}
          <span
            className={open ? "menu-lines open" : "menu-lines"}
            aria-hidden="true"
          />
        </button>
        <nav
          id="navegacao"
          className={open ? "nav is-open" : "nav"}
          aria-label="Navegação principal"
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              close();
              toggle.current?.focus();
            }
          }}
        >
          <a href="#como-funciona" onClick={close}>
            Como funciona
          </a>
          <a href="#curso" onClick={close}>
            O curso
          </a>
          <a href="#duvidas" onClick={close}>
            Dúvidas
          </a>
          <a href="#inscricao" className="nav-cta" onClick={close}>
            Quero aprender <Arrow diagonal />
          </a>
        </nav>
      </div>
    </header>
  );
}

const stages = [
  {
    title: "Você planeja",
    label: "Projeto",
    text: "Tudo começa no seu ambiente. Medidas, uso e escolhas de materiais orientam o projeto antes de qualquer peça ser cortada.",
    note: "Pensar antes de executar.",
    type: "project",
  },
  {
    title: "A central prepara",
    label: "Corte",
    text: "O projeto segue para uma central de corte. O serviço contratado prepara as peças conforme as especificações combinadas.",
    note: "Você não precisa ter uma marcenaria.",
    type: "cut",
  },
  {
    title: "O móvel ganha forma",
    label: "Montagem",
    text: "Com as peças prontas, é hora de organizar a montagem. Você pode contratar um profissional para executar essa etapa.",
    note: "A montagem também pode ser terceirizada.",
    type: "assembly",
  },
];

export function ProcessExplorer() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = stages[active];
  function move(event: KeyboardEvent<HTMLButtonElement>) {
    let next = active;
    if (event.key === "ArrowRight") next = (active + 1) % stages.length;
    else if (event.key === "ArrowLeft")
      next = (active + stages.length - 1) % stages.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = stages.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    refs.current[next]?.focus();
  }
  return (
    <div className="process-explorer">
      <div className="process-visual" data-stage={current.type}>
        <div className="diagram-heading">
          <span>Da ideia ao móvel</span>
          <span aria-hidden="true">{active + 1} / 3</span>
        </div>
        <svg
          className="cabinet"
          viewBox="0 0 560 320"
          role="img"
          aria-label={`Esquema ilustrativo de armário: etapa ${current.label.toLowerCase()}`}
        >
          <g
            className="dimension"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M72 46h416M72 37v18m416-18v18M41 76v181m-9-181h18m-18 181h18" />
            <path
              strokeDasharray="3 6"
              d="M72 58v18m416-18v18M55 76h17M55 257h17"
            />
          </g>
          <g
            className="cabinet-body"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinejoin="round"
          >
            <path d="M72 76h416v181H72zM72 84h416M210 84v173M349 84v173M218 84v173M357 84v173M80 84v173" />
            <path
              d="M196 153v27m36-27v27M335 153v27m36-27v27M474 153v27"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path d="M80 257v13h12v-13m376 0v13h12v-13" />
          </g>
          <g
            className="cut-lines"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="5 5"
          >
            <path d="M211 65v204M350 65v204M61 83h438" />
          </g>
          <g
            className="diagram-pointer"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          >
            <path d="m250 290 26-10 10 26-36-16Z" />
            <path d="m276 280 23 20" />
          </g>
        </svg>
        <span className="diagram-caption">
          Esquema ilustrativo, sem medidas de execução.
        </span>
      </div>
      <div className="process-controls">
        <div
          className="process-tabs"
          role="tablist"
          aria-label="Etapas do processo"
        >
          {stages.map((stage, index) => (
            <button
              key={stage.type}
              id={`tab-${stage.type}`}
              ref={(element) => {
                refs.current[index] = element;
              }}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-controls="etapa-processo"
              tabIndex={index === active ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={move}
            >
              <span className="stage-index">{index + 1}</span>
              {stage.label}
            </button>
          ))}
        </div>
        <div
          id="etapa-processo"
          role="tabpanel"
          aria-labelledby={`tab-${current.type}`}
          tabIndex={0}
          className="stage-content"
        >
          <h3>{current.title}</h3>
          <p>{current.text}</p>
          <span className="stage-note">
            <span className="small-check" aria-hidden="true" />
            {current.note}
          </span>
        </div>
      </div>
    </div>
  );
}

type LeadResult = {
  ok?: boolean;
  message?: string;
  fieldErrors?: Record<string, string>;
  checkoutUrl?: string;
  fallbackUrl?: string;
};

export function SignupForm() {
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<LeadResult | null>(null);
  const notice = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (result) notice.current?.focus();
  }, [result]);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;
    const data = new FormData(event.currentTarget);
    setSending(true);
    setResult(null);
    try {
      const response = await fetch("/api/inscricao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: data.get("nome"),
          email: data.get("email"),
          ddi: data.get("ddi"),
          whatsapp: data.get("whatsapp"),
          origem: "site-next-inscricao",
        }),
        signal: AbortSignal.timeout(18000),
      });
      const payload: LeadResult = await response.json();
      if (
        response.ok &&
        payload.ok &&
        payload.checkoutUrl === site.checkoutUrl
      ) {
        window.location.assign(payload.checkoutUrl);
        return;
      }
      setResult(
        payload.message
          ? payload
          : {
              message:
                "Não foi possível confirmar o envio. Tente novamente ou continue pelo site atual.",
            },
      );
    } catch {
      setResult({
        message:
          "Não foi possível confirmar o envio. Confira sua conexão e tente novamente, ou continue pelo site atual.",
      });
    }
    setSending(false);
  }
  return (
    <form className="signup-form" onSubmit={submit} aria-busy={sending}>
      <div className="form-heading">
        <h3>Comece por aqui.</h3>
        <p>Preencha seus dados para seguir à inscrição.</p>
      </div>
      <div className="field">
        <label htmlFor="nome">Nome completo</label>
        <input
          id="nome"
          name="nome"
          autoComplete="name"
          placeholder="Como podemos chamar você?"
          minLength={2}
          maxLength={100}
          required
          aria-invalid={Boolean(result?.fieldErrors?.nome)}
          aria-describedby={result?.fieldErrors?.nome ? "erro-nome" : undefined}
        />
        {result?.fieldErrors?.nome && (
          <span className="field-error" id="erro-nome">
            {result.fieldErrors.nome}
          </span>
        )}
      </div>
      <div className="field">
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="voce@exemplo.com"
          maxLength={255}
          required
          aria-invalid={Boolean(result?.fieldErrors?.email)}
          aria-describedby={
            result?.fieldErrors?.email ? "erro-email" : undefined
          }
        />
        {result?.fieldErrors?.email && (
          <span className="field-error" id="erro-email">
            {result.fieldErrors.email}
          </span>
        )}
      </div>
      <div className="phone-row">
        <div className="field country-field">
          <label htmlFor="ddi">País / DDI</label>
          <select
            id="ddi"
            name="ddi"
            autoComplete="tel-country-code"
            defaultValue="+55"
          >
            <option value="+55">Brasil +55</option>
            <option value="+351">Portugal +351</option>
            <option value="+1">EUA / Canadá +1</option>
            <option value="+54">Argentina +54</option>
            <option value="+44">Reino Unido +44</option>
            <option value="+33">França +33</option>
            <option value="+49">Alemanha +49</option>
            <option value="+34">Espanha +34</option>
            <option value="+39">Itália +39</option>
            <option value="+598">Uruguai +598</option>
            <option value="+595">Paraguai +595</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="whatsapp">WhatsApp com DDD</label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            autoComplete="tel-national"
            inputMode="tel"
            placeholder="(00) 00000-0000"
            minLength={8}
            maxLength={20}
            required
            aria-invalid={Boolean(result?.fieldErrors?.whatsapp)}
            aria-describedby={
              result?.fieldErrors?.whatsapp ? "erro-whatsapp" : undefined
            }
          />
        </div>
      </div>
      {result?.fieldErrors?.whatsapp && (
        <span className="field-error" id="erro-whatsapp">
          {result.fieldErrors.whatsapp}
        </span>
      )}
      <p className="form-use">
        Seus dados serão enviados à Móveis Por Você para dar continuidade à sua
        inscrição.
      </p>
      <button
        type="submit"
        className="button button-primary form-submit"
        disabled={sending}
      >
        {sending ? "Confirmando envio…" : "Seguir para a inscrição"}
        <Arrow />
      </button>
      <p className="checkout-note">
        Na próxima etapa, confira o preço e as condições na Hotmart antes de
        comprar.
      </p>
      {result && (
        <div className="form-result" ref={notice} tabIndex={-1} role="alert">
          <p>{result.message}</p>
          <a className="text-link" href={site.currentUrl}>
            Continuar pelo site atual <Arrow diagonal />
          </a>
        </div>
      )}
    </form>
  );
}
