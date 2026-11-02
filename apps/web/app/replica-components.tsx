"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import type { FormEvent, KeyboardEvent, ReactNode } from "react";
import faqs from "../reference/faq.json";
import { site } from "./content";
import { BrandLogo } from "./brand-logo";

type CaptureContext = { open: (origin: string) => void };
const Capture = createContext<CaptureContext | null>(null);

export function LeadCaptureProvider({ children }: { children: ReactNode }) {
  const [origin, setOrigin] = useState<string | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLElement | null>(null);
  function close() {
    setOrigin(null);
  }
  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    if (origin) {
      if (!element.open) element.showModal();
      element.querySelector<HTMLInputElement>("input")?.focus();
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
    if (element.open) {
      element.close();
      trigger.current?.focus();
    }
  }, [origin]);
  return (
    <Capture.Provider
      value={{
        open: (value) => {
          trigger.current = document.activeElement as HTMLElement;
          setOrigin(value);
        },
      }}
    >
      {children}
      <dialog
        ref={dialog}
        className="replica-modal"
        aria-labelledby="capture-title"
        onCancel={(event) => {
          event.preventDefault();
          close();
        }}
        onClose={close}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const r = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < r.left ||
            event.clientX > r.right ||
            event.clientY < r.top ||
            event.clientY > r.bottom
          )
            close();
        }}
      >
        <button
          className="replica-modal-close"
          onClick={close}
          aria-label="Fechar formulário"
        >
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="m6 6 12 12M6 18 18 6"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </button>
        <BrandLogo variant="modal" />
        <h2 id="capture-title" className="replica-modal-title">
          Preencha o formulário e descubra como economizar até 60% nos seus
          móveis
        </h2>
        {origin && <CaptureForm origin={origin} />}
      </dialog>
    </Capture.Provider>
  );
}

export function LeadCaptureButton({
  children,
  className,
  origin,
}: {
  children: ReactNode;
  className?: string;
  origin: string;
}) {
  const context = useContext(Capture);
  return (
    <button
      type="button"
      className={className}
      onClick={() => context?.open(origin)}
    >
      {children}
    </button>
  );
}

type Result = {
  ok?: boolean;
  checkoutUrl?: string;
  message?: string;
  fieldErrors?: Record<string, string>;
};

function CaptureForm({ origin }: { origin: string }) {
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const error = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (result) error.current?.focus();
  }, [result]);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    const values = new FormData(event.currentTarget);
    setBusy(true);
    setResult(null);
    try {
      const response = await fetch("/api/inscricao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: values.get("nome"),
          email: values.get("email"),
          ddi: values.get("ddi"),
          whatsapp: values.get("whatsapp"),
          origem: `replica-${origin}`,
        }),
        signal: AbortSignal.timeout(18000),
      });
      const data: Result = await response.json();
      if (response.ok && data.ok && data.checkoutUrl === site.checkoutUrl) {
        window.location.assign(data.checkoutUrl);
        return;
      }
      setResult(
        data.message
          ? data
          : {
              message:
                "Não foi possível confirmar seu cadastro. Tente novamente.",
            },
      );
    } catch {
      setResult({
        message:
          "Não foi possível confirmar seu cadastro. Confira a conexão e tente novamente.",
      });
    }
    setBusy(false);
  }
  return (
    <form className="replica-capture-form" onSubmit={submit} aria-busy={busy}>
      <div>
        <label className="sr-only" htmlFor="capture-name">
          Nome completo
        </label>
        <input
          id="capture-name"
          name="nome"
          autoComplete="name"
          placeholder="Nome completo *"
          required
          minLength={2}
          maxLength={100}
          aria-invalid={Boolean(result?.fieldErrors?.nome)}
          aria-describedby={
            result?.fieldErrors?.nome ? "capture-name-error" : undefined
          }
        />
        {result?.fieldErrors?.nome && (
          <p className="replica-field-error" id="capture-name-error">
            {result.fieldErrors.nome}
          </p>
        )}
      </div>
      <div>
        <label className="sr-only" htmlFor="capture-email">
          E-mail
        </label>
        <input
          id="capture-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Seu melhor e-mail *"
          required
          maxLength={254}
          aria-invalid={Boolean(result?.fieldErrors?.email)}
          aria-describedby={
            result?.fieldErrors?.email ? "capture-email-error" : undefined
          }
        />
        {result?.fieldErrors?.email && (
          <p className="replica-field-error" id="capture-email-error">
            {result.fieldErrors.email}
          </p>
        )}
      </div>
      <div>
        <div className="replica-phone">
          <label className="sr-only" htmlFor="capture-country">
            Código do país
          </label>
          <select
            id="capture-country"
            name="ddi"
            defaultValue="+55"
            autoComplete="tel-country-code"
          >
            <option value="+55">+55 BR</option>
            <option value="+351">+351 PT</option>
            <option value="+1">+1 EUA / CA</option>
            <option value="+54">+54 AR</option>
            <option value="+44">+44 UK</option>
            <option value="+33">+33 FR</option>
            <option value="+49">+49 DE</option>
            <option value="+34">+34 ES</option>
            <option value="+39">+39 IT</option>
            <option value="+598">+598 UY</option>
            <option value="+595">+595 PY</option>
          </select>
          <label className="sr-only" htmlFor="capture-phone">
            WhatsApp com DDD
          </label>
          <input
            id="capture-phone"
            name="whatsapp"
            type="tel"
            autoComplete="tel-national"
            inputMode="tel"
            placeholder="(DDD) WhatsApp"
            required
            minLength={8}
            maxLength={20}
            aria-invalid={Boolean(result?.fieldErrors?.whatsapp)}
            aria-describedby={
              result?.fieldErrors?.whatsapp ? "capture-phone-error" : undefined
            }
          />
        </div>
        {result?.fieldErrors?.whatsapp && (
          <p className="replica-field-error" id="capture-phone-error">
            {result.fieldErrors.whatsapp}
          </p>
        )}
      </div>
      <button className="replica-submit" type="submit" disabled={busy}>
        {busy ? "Enviando..." : "SEGUIR PARA A INSCRIÇÃO"}
      </button>
      {result && (
        <div
          className="replica-form-error"
          role="alert"
          tabIndex={-1}
          ref={error}
        >
          {result.message}
        </div>
      )}
    </form>
  );
}

export function SalesVideo() {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-border/50 bg-black">
      {playing ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube-nocookie.com/embed/JF6v-T2RRyI?rel=0&autoplay=1&playsinline=1"
          title="Vídeo de apresentação — Móveis Por Você"
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <button
          className="absolute inset-0 w-full h-full cursor-pointer group"
          aria-label="Reproduzir vídeo"
          onClick={() => setPlaying(true)}
        >
          <img
            src="/reference/mqdefault.jpg"
            alt="Thumbnail do vídeo"
            width="320"
            height="180"
            fetchPriority="high"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <svg
                viewBox="0 0 24 24"
                className="w-7 h-7 md:w-9 md:h-9 text-primary-foreground ml-1"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="m6 3 14 9-14 9V3Z" />
              </svg>
            </div>
          </div>
        </button>
      )}
    </div>
  );
}

function useRotation(count: number, delay: number) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (
      count <= 1 ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const timer = setInterval(() => setActive((v) => (v + 1) % count), delay);
    return () => clearInterval(timer);
  }, [count, delay]);
  return [active, setActive] as const;
}

export function ProjectRotation({
  images,
  title,
  children,
}: {
  images: string[];
  title: string;
  children: ReactNode;
}) {
  const [active, setActive] = useRotation(images.length, 3500);
  return (
    <div className="aspect-[4/5] relative overflow-hidden">
      {images.map((src, index) => (
        <img
          key={`${src}-${index}`}
          src={src}
          alt={title}
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${index === active ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      {children}
      <div className="absolute top-3 right-3 flex gap-1.5 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={`replica-gallery-dot ${index === active ? "is-active" : ""}`}
            aria-label={`Foto ${index + 1} do projeto de ${title}`}
            aria-pressed={index === active}
            onClick={() => setActive(index)}
          >
            <span
              className={`h-1.5 rounded-full transition-all ${index === active ? "w-4 bg-primary" : "w-1.5 bg-white/60"}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

const testimonials = [
  {
    src: "depoimento-maicon-Fp3TiPAt.webp",
    alt: "Depoimento do Maicon — economizou mais de R$10.000 na cozinha",
    name: "Maicon",
    highlight: "Economizou R$ 10.500",
    caption: "Orçamento de R$ 18.000 → fez por R$ 7.500",
  },
  {
    src: "depoimento-taina-C1aqwT2L.webp",
    alt: "Depoimento da Taina — economizou R$6.600 na reforma",
    name: "Taina",
    highlight: "Economizou R$ 8.840",
    caption: "Pagou menos da metade do orçamento da marcenaria",
  },
  {
    src: "depoimento-juliany-DUE4m-Aa.webp",
    alt: "Depoimento da Juliany — economizou R$2.700 no projeto",
    name: "Juliany",
    highlight: "Economizou R$ 2.700",
    caption: "Orçamento de R$ 5.200 → fez por R$ 2.500",
  },
  {
    src: "depoimento-thais-bprr3Mk9.webp",
    alt: "Depoimento da Thais — projeto executado e instalado",
    name: "Thais",
    highlight: "Projeto executado e instalado",
    caption: "Do zero ao móvel pronto em casa",
  },
];

export function Testimonials() {
  const [active, setActive] = useRotation(testimonials.length, 5000);
  const item = testimonials[active];
  return (
    <section className="section-padding bg-card" aria-label="Depoimentos">
      <div className="max-w-3xl mx-auto">
        <div>
          <div className="glow-divider mb-8" />
          <h2 className="section-title text-center text-foreground mb-4">
            Pessoas comuns já estão economizando{" "}
            <span className="text-primary">mais da metade do valor</span>{" "}
            fazendo seus próprios móveis
          </h2>
        </div>
        <div>
          <div className="relative mt-12">
            <div className="relative rounded-2xl overflow-hidden border border-primary/20 bg-card max-w-[320px] sm:max-w-md mx-auto aspect-[3/4]">
              <img
                src={`/reference/${item.src}`}
                alt={item.alt}
                className="w-full h-full object-cover animate-fade-in"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 z-10">
                <span className="inline-flex items-center gap-2 bg-background/90 backdrop-blur border border-primary/40 rounded-full px-3 py-1.5 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-display font-bold text-foreground">
                    {item.name}
                  </span>
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 pt-12">
                <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-3 py-1.5 mb-2 shadow-lg shadow-primary/40">
                  <span className="text-sm font-display font-extrabold tracking-wide">
                    💰 {item.highlight}
                  </span>
                </div>
                <p className="text-white text-sm font-semibold leading-snug">
                  {item.caption}
                </p>
              </div>
            </div>
            <button
              onClick={() =>
                setActive(
                  (v) => (v + testimonials.length - 1) % testimonials.length,
                )
              }
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-primary/40 bg-background/80 backdrop-blur flex items-center justify-center text-primary active:scale-95 transition-transform"
              aria-label="Anterior"
            >
              <Chevron direction="left" />
            </button>
            <button
              onClick={() => setActive((v) => (v + 1) % testimonials.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-primary/40 bg-background/80 backdrop-blur flex items-center justify-center text-primary active:scale-95 transition-transform"
              aria-label="Próximo"
            >
              <Chevron direction="right" />
            </button>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                onClick={() => setActive(index)}
                key={index}
                className={`h-2.5 rounded-full transition-all ${index === active ? "w-8 bg-primary" : "w-2.5 bg-muted-foreground/30"}`}
                aria-label={`Depoimento ${index + 1}`}
                aria-pressed={index === active}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={direction === "left" ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FAQAccordion() {
  const [active, setActive] = useState<number | null>(null);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  function navigate(event: KeyboardEvent, index: number) {
    let next = index;
    if (event.key === "ArrowDown") next = (index + 1) % faqs.length;
    else if (event.key === "ArrowUp")
      next = (index + faqs.length - 1) % faqs.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = faqs.length - 1;
    else return;
    event.preventDefault();
    refs.current[next]?.focus();
  }
  return (
    <div className="space-y-3">
      {faqs.map((item, index) => (
        <div
          key={item.q}
          className="border-b bg-secondary rounded-xl border border-border px-6"
          data-state={active === index ? "open" : "closed"}
        >
          <h3 className="flex">
            <button
              type="button"
              ref={(el) => {
                refs.current[index] = el;
              }}
              className="flex flex-1 items-center justify-between py-4 font-medium transition-all text-foreground text-lg font-semibold hover:no-underline hover:text-primary text-left"
              id={`faq-question-${index}`}
              aria-expanded={active === index}
              aria-controls={`faq-answer-${index}`}
              onKeyDown={(event) => navigate(event, index)}
              onClick={() => setActive(active === index ? null : index)}
            >
              {item.q}
              <svg
                className="h-4 w-4 shrink-0 transition-transform duration-200"
                style={{
                  transform: active === index ? "rotate(180deg)" : undefined,
                }}
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="m6 9 6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </h3>
          <div
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
            hidden={active !== index}
          >
            <div className="pb-4 pt-0 text-muted-foreground text-base leading-relaxed">
              {item.a}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
