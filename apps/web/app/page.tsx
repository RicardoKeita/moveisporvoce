// Replica do DOM publico observado em 31/10/2026. Fonte: ../reference/page-tree.json.
import "./reference-fonts.css";
import "./reference.css";
import "./replica.css";
import { BrandLogo } from "./brand-logo";
import {
  LeadCaptureProvider,
  LeadCaptureButton,
  SalesVideo,
  ProjectRotation,
  Testimonials,
  FAQAccordion,
} from "./replica-components";

function HeroSection() {
  return (
    <section
      className={
        "section-padding bg-background relative overflow-hidden flex items-center pt-2 pb-4 md:py-20"
      }
    >
      <div
        className={
          "absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"
        }
      ></div>
      <div className={"relative z-10 max-w-4xl mx-auto w-full"}>
        <div>
          <div className={"text-center mb-4 md:mb-6"}>
            <h1 className={"sr-only"}>
              {"Móveis Por Você - Móveis Planejados Sem Marcenaria"}
            </h1>
            <BrandLogo variant="hero" />
            <p
              className={
                "mt-2 md:mt-6 mb-2 md:mb-4 text-2xl md:text-4xl lg:text-5xl text-primary font-extrabold italic font-display leading-tight"
              }
            >
              {"Descubra como eu economizei mais de "}
              <span className={"text-white"}>{"R$50.000"}</span>
              {" nos móveis planejados da minha casa"}
            </p>
            <p
              className={
                "mt-2 text-base md:text-lg text-muted-foreground italic"
              }
            >
              {"(sem nunca ter sido marceneiro)"}
            </p>
          </div>
        </div>
        <div>
          <div className={"max-w-[360px] mx-auto"}>
            <p
              className={
                "text-center text-sm md:text-base font-medium text-foreground/90 mb-3 md:mb-4 leading-snug"
              }
            >
              {"Assista ao vídeo abaixo e veja:"}
              <br />
              <span className={"block mt-2"}>
                {
                  "1- Como pessoas comuns, mesmo sem experiência, estão aprendendo do zero a fazer seus próprios móveis planejados"
                }
              </span>
              <span className={"block mt-2"}>
                {"2- Como economizar até 60% nos móveis planejados da sua casa"}
              </span>
              <span className={"block mt-2"}>
                {
                  "3- O passo a passo para enviar seu projeto pra uma central de corte e receber todas as peças prontas sem precisar de marcenaria"
                }
              </span>
            </p>
            <SalesVideo />
            <div className={"text-center mt-8 md:mt-10"}>
              <p
                className={
                  "text-base md:text-lg text-foreground mb-6 leading-relaxed max-w-xl mx-auto"
                }
              >
                {
                  "O método foi criado para iniciantes e te mostra como coordenar todo o processo: o corte é feito por profissionais e a montagem pode ser terceirizada."
                }
              </p>
              <LeadCaptureButton
                className={
                  "btn-cta inline-block text-center text-lg px-10 py-4"
                }
                origin={"hero"}
              >
                {"QUERO APRENDER AGORA"}
              </LeadCaptureButton>
              <div
                className={
                  "mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto text-center"
                }
              >
                <div className={"flex flex-col items-center gap-3"}>
                  <div
                    className={
                      "w-11 h-11 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center"
                    }
                  >
                    <svg
                      xmlns={"http://www.w3.org/2000/svg"}
                      width={"24"}
                      height={"24"}
                      viewBox={"0 0 24 24"}
                      fill={"none"}
                      stroke={"currentColor"}
                      strokeWidth={"2"}
                      strokeLinecap={"round"}
                      strokeLinejoin={"round"}
                      className={"lucide lucide-zap w-5 h-5 text-primary"}
                    >
                      <path
                        d={
                          "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
                        }
                      ></path>
                    </svg>
                  </div>
                  <h3
                    className={
                      "font-display font-bold text-base md:text-lg text-foreground leading-snug"
                    }
                  >
                    {"Acesso imediato"}
                  </h3>
                  <p
                    className={"text-sm text-muted-foreground leading-relaxed"}
                  >
                    {
                      "Aulas simples e passo a passo para você aprender do zero sem complicação"
                    }
                  </p>
                </div>
                <div className={"flex flex-col items-center gap-3"}>
                  <div
                    className={
                      "w-11 h-11 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center"
                    }
                  >
                    <svg
                      xmlns={"http://www.w3.org/2000/svg"}
                      width={"24"}
                      height={"24"}
                      viewBox={"0 0 24 24"}
                      fill={"none"}
                      stroke={"currentColor"}
                      strokeWidth={"2"}
                      strokeLinecap={"round"}
                      strokeLinejoin={"round"}
                      className={
                        "lucide lucide-shield-check w-5 h-5 text-primary"
                      }
                    >
                      <path
                        d={
                          "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                        }
                      ></path>
                      <path d={"m9 12 2 2 4-4"}></path>
                    </svg>
                  </div>
                  <h3
                    className={
                      "font-display font-bold text-base md:text-lg text-foreground leading-snug"
                    }
                  >
                    {"Garantia de 7 dias"}
                  </h3>
                  <p
                    className={"text-sm text-muted-foreground leading-relaxed"}
                  >
                    {
                      "O risco é todo meu: se em 7 dias você não projetar o seu primeiro móvel, eu devolvo o seu dinheiro."
                    }
                  </p>
                </div>
                <div className={"flex flex-col items-center gap-3"}>
                  <div
                    className={
                      "w-11 h-11 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center"
                    }
                  >
                    <svg
                      xmlns={"http://www.w3.org/2000/svg"}
                      width={"24"}
                      height={"24"}
                      viewBox={"0 0 24 24"}
                      fill={"none"}
                      stroke={"currentColor"}
                      strokeWidth={"2"}
                      strokeLinecap={"round"}
                      strokeLinejoin={"round"}
                      className={"lucide lucide-users w-5 h-5 text-primary"}
                    >
                      <path
                        d={"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}
                      ></path>
                      <circle cx={"9"} cy={"7"} r={"4"}></circle>
                      <path d={"M22 21v-2a4 4 0 0 0-3-3.87"}></path>
                      <path d={"M16 3.13a4 4 0 0 1 0 7.75"}></path>
                    </svg>
                  </div>
                  <h3
                    className={
                      "font-display font-bold text-base md:text-lg text-foreground leading-snug"
                    }
                  >
                    {"Suporte que vale ouro"}
                  </h3>
                  <p
                    className={"text-sm text-muted-foreground leading-relaxed"}
                  >
                    {
                      "Suporte no grupo exclusivo para analisar o seu projeto e tirar dúvidas"
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className={"bg-background pt-4 pb-12 md:pt-6 md:pb-20 px-4"}>
      <div className={"max-w-5xl mx-auto"}>
        <div
          className={""}
          style={{
            transition: "opacity 500ms ease-out, transform 500ms ease-out",
            willChange: "opacity, transform",
          }}
        >
          <div className={"glow-divider mb-8"}></div>
          <p
            className={
              "text-primary text-sm font-bold tracking-widest uppercase text-center mb-3"
            }
          >
            {"🏠 Projetos Realizados"}
          </p>
          <h2 className={"section-title text-center text-foreground mb-2"}>
            {"Projetos de pessoas que seguiram o método"}{" "}
            <span className={"text-primary italic"}>{"Móveis por Você"}</span>
          </h2>
          <p
            className={
              "text-center mb-10 max-w-xl mx-auto text-lg md:text-xl font-display font-bold text-foreground leading-snug"
            }
          >
            {"Pessoas "}
            <span className={"text-primary"}>{"sem experiência prévia"}</span>
            {" que aprenderam do zero e construíram seus próprios móveis."}
          </p>
        </div>
        <div className={"grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"}>
          <div
            className={""}
            style={{
              transition: "opacity 500ms ease-out, transform 500ms ease-out",
              willChange: "opacity, transform",
            }}
          >
            <div
              className={
                "rounded-2xl overflow-hidden border border-primary/20 bg-card"
              }
            >
              <ProjectRotation
                images={[
                  "/reference/projeto-casa-schaien-Cqg_s0G-.webp",
                  "/reference/projeto-casa-schaien-Cqg_s0G-.webp",
                  "/reference/projeto-casa-schaien-5-oR3sc4Kq.webp",
                  "/reference/projeto-casa-schaien-3-B1FtxBjb.webp",
                  "/reference/projeto-casa-schaien-6-CNkCd7ZO.webp",
                  "/reference/projeto-casa-schaien-2-qLI_ZiRS.webp",
                ]}
                title={"Cozinha + Cristaleira"}
              >
                <div
                  className={
                    "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-end justify-between z-10"
                  }
                >
                  <p className={"text-white font-bold text-lg"}>
                    {"Cozinha + Cristaleira"}
                  </p>
                  <span
                    className={
                      "bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full"
                    }
                  >
                    {"Schaien"}
                  </span>
                </div>
              </ProjectRotation>
              <div
                className={
                  "p-4 border-t border-primary/20 grid grid-cols-3 gap-2 text-center"
                }
              >
                <div>
                  <p
                    className={
                      "text-[10px] uppercase tracking-wider text-muted-foreground mb-1"
                    }
                  >
                    {"Orçamento marcenaria"}
                  </p>
                  <p
                    className={
                      "text-sm font-bold text-foreground line-through opacity-70"
                    }
                  >
                    {"R$ 45.000"}
                  </p>
                </div>
                <div>
                  <p
                    className={
                      "text-[10px] uppercase tracking-wider text-muted-foreground mb-1"
                    }
                  >
                    {"Fez por"}
                  </p>
                  <p className={"text-sm font-bold text-foreground"}>
                    {"R$ 19.500"}
                  </p>
                </div>
                <div>
                  <p
                    className={
                      "text-[10px] uppercase tracking-wider text-muted-foreground mb-1"
                    }
                  >
                    {"Economizou"}
                  </p>
                  <p className={"text-sm font-extrabold text-primary"}>
                    {"R$ 25.500"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={""}
            style={{
              transition:
                "opacity 500ms ease-out 0.08s, transform 500ms ease-out 0.08s",
              willChange: "opacity, transform",
            }}
          >
            <div
              className={
                "rounded-2xl overflow-hidden border border-primary/20 bg-card"
              }
            >
              <div className={"aspect-[4/5] relative overflow-hidden"}>
                <img
                  src={"/reference/projeto-cozinha-maicon-DXNTkTsd.webp"}
                  alt={"Cozinha Planejada"}
                  loading={"lazy"}
                  decoding={"async"}
                  className={
                    "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-100"
                  }
                />
                <div
                  className={
                    "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-end justify-between z-10"
                  }
                >
                  <p className={"text-white font-bold text-lg"}>
                    {"Cozinha Planejada"}
                  </p>
                  <span
                    className={
                      "bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full"
                    }
                  >
                    {"Maicon"}
                  </span>
                </div>
              </div>
              <div
                className={
                  "p-4 border-t border-primary/20 grid grid-cols-3 gap-2 text-center"
                }
              >
                <div>
                  <p
                    className={
                      "text-[10px] uppercase tracking-wider text-muted-foreground mb-1"
                    }
                  >
                    {"Orçamento marcenaria"}
                  </p>
                  <p
                    className={
                      "text-sm font-bold text-foreground line-through opacity-70"
                    }
                  >
                    {"R$ 18.000"}
                  </p>
                </div>
                <div>
                  <p
                    className={
                      "text-[10px] uppercase tracking-wider text-muted-foreground mb-1"
                    }
                  >
                    {"Fez por"}
                  </p>
                  <p className={"text-sm font-bold text-foreground"}>
                    {"R$ 7.500"}
                  </p>
                </div>
                <div>
                  <p
                    className={
                      "text-[10px] uppercase tracking-wider text-muted-foreground mb-1"
                    }
                  >
                    {"Economizou"}
                  </p>
                  <p className={"text-sm font-extrabold text-primary"}>
                    {"R$ 10.500"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={""}
            style={{
              transition:
                "opacity 500ms ease-out 0.16s, transform 500ms ease-out 0.16s",
              willChange: "opacity, transform",
            }}
          >
            <div
              className={
                "rounded-2xl overflow-hidden border border-primary/20 bg-card"
              }
            >
              <div className={"aspect-[4/5] relative overflow-hidden"}>
                <img
                  src={"/reference/projeto-cozinha-taina-CzA-sDbV.webp"}
                  alt={"Cozinha Compacta"}
                  loading={"lazy"}
                  decoding={"async"}
                  className={
                    "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-100"
                  }
                />
                <div
                  className={
                    "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-end justify-between z-10"
                  }
                >
                  <p className={"text-white font-bold text-lg"}>
                    {"Cozinha Compacta"}
                  </p>
                  <span
                    className={
                      "bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full"
                    }
                  >
                    {"Taina"}
                  </span>
                </div>
              </div>
              <div
                className={
                  "p-4 border-t border-primary/20 grid grid-cols-3 gap-2 text-center"
                }
              >
                <div>
                  <p
                    className={
                      "text-[10px] uppercase tracking-wider text-muted-foreground mb-1"
                    }
                  >
                    {"Orçamento marcenaria"}
                  </p>
                  <p
                    className={
                      "text-sm font-bold text-foreground line-through opacity-70"
                    }
                  >
                    {"R$ 15.000"}
                  </p>
                </div>
                <div>
                  <p
                    className={
                      "text-[10px] uppercase tracking-wider text-muted-foreground mb-1"
                    }
                  >
                    {"Fez por"}
                  </p>
                  <p className={"text-sm font-bold text-foreground"}>
                    {"R$ 6.160"}
                  </p>
                </div>
                <div>
                  <p
                    className={
                      "text-[10px] uppercase tracking-wider text-muted-foreground mb-1"
                    }
                  >
                    {"Economizou"}
                  </p>
                  <p className={"text-sm font-extrabold text-primary"}>
                    {"R$ 8.840"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={""}
            style={{
              transition:
                "opacity 500ms ease-out 0.24s, transform 500ms ease-out 0.24s",
              willChange: "opacity, transform",
            }}
          >
            <div
              className={
                "rounded-2xl overflow-hidden border border-primary/20 bg-card"
              }
            >
              <div className={"aspect-[4/5] relative overflow-hidden"}>
                <img
                  src={"/reference/projeto-mini-cozinha-thais-YcHfDFAQ.webp"}
                  alt={"Mini Cozinha Gourmet"}
                  loading={"lazy"}
                  decoding={"async"}
                  className={
                    "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-100"
                  }
                />
                <div
                  className={
                    "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-end justify-between z-10"
                  }
                >
                  <p className={"text-white font-bold text-lg"}>
                    {"Mini Cozinha Gourmet"}
                  </p>
                  <span
                    className={
                      "bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full"
                    }
                  >
                    {"Thais"}
                  </span>
                </div>
              </div>
              <div
                className={
                  "p-4 border-t border-primary/20 grid grid-cols-3 gap-2 text-center"
                }
              >
                <div>
                  <p
                    className={
                      "text-[10px] uppercase tracking-wider text-muted-foreground mb-1"
                    }
                  >
                    {"Orçamento marcenaria"}
                  </p>
                  <p
                    className={
                      "text-sm font-bold text-foreground line-through opacity-70"
                    }
                  >
                    {"R$ 5.200"}
                  </p>
                </div>
                <div>
                  <p
                    className={
                      "text-[10px] uppercase tracking-wider text-muted-foreground mb-1"
                    }
                  >
                    {"Fez por"}
                  </p>
                  <p className={"text-sm font-bold text-foreground"}>
                    {"R$ 2.500"}
                  </p>
                </div>
                <div>
                  <p
                    className={
                      "text-[10px] uppercase tracking-wider text-muted-foreground mb-1"
                    }
                  >
                    {"Economizou"}
                  </p>
                  <p className={"text-sm font-extrabold text-primary"}>
                    {"R$ 2.700"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProofSection() {
  return <Testimonials />;
}

function TruthSection() {
  return (
    <section className={"section-padding pb-8 bg-card"}>
      <div className={"max-w-4xl mx-auto text-center"}>
        <div
          className={""}
          style={{
            transition: "opacity 500ms ease-out, transform 500ms ease-out",
            willChange: "opacity, transform",
          }}
        >
          <h2 className={"section-title text-foreground mb-6"}>
            {"A verdade é que fazer móveis planejados "}
            <span className={"text-primary"}>{"não é complicado"}</span>
          </h2>
          <p
            className={"text-lg text-muted-foreground mb-10 max-w-2xl mx-auto"}
          >
            {"Hoje existe um processo simples onde você:"}
          </p>
        </div>
        <div className={"flex flex-col sm:flex-row justify-center gap-6"}>
          <div
            className={""}
            style={{
              transition: "opacity 500ms ease-out, transform 500ms ease-out",
              willChange: "opacity, transform",
            }}
          >
            <div
              className={
                "bg-secondary rounded-xl p-6 flex-1 border-2 border-primary/20"
              }
            >
              <div
                className={
                  "w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mx-auto mb-4"
                }
              >
                {"1"}
              </div>
              <p className={"text-foreground font-semibold text-lg"}>
                {"Cria o projeto"}
              </p>
            </div>
          </div>
          <div
            className={""}
            style={{
              transition:
                "opacity 500ms ease-out 0.15s, transform 500ms ease-out 0.15s",
              willChange: "opacity, transform",
            }}
          >
            <div
              className={
                "bg-secondary rounded-xl p-6 flex-1 border-2 border-primary/20"
              }
            >
              <div
                className={
                  "w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mx-auto mb-4"
                }
              >
                {"2"}
              </div>
              <p className={"text-foreground font-semibold text-lg"}>
                {"Envia para uma central de corte"}
              </p>
            </div>
          </div>
          <div
            className={""}
            style={{
              transition:
                "opacity 500ms ease-out 0.3s, transform 500ms ease-out 0.3s",
              willChange: "opacity, transform",
            }}
          >
            <div
              className={
                "bg-secondary rounded-xl p-6 flex-1 border-2 border-primary/20"
              }
            >
              <div
                className={
                  "w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mx-auto mb-4"
                }
              >
                {"3"}
              </div>
              <p className={"text-foreground font-semibold text-lg"}>
                {"Recebe todas as peças prontas"}
              </p>
            </div>
          </div>
          <div
            className={""}
            style={{
              transition:
                "opacity 500ms ease-out 0.45s, transform 500ms ease-out 0.45s",
              willChange: "opacity, transform",
            }}
          >
            <div
              className={
                "bg-secondary rounded-xl p-6 flex-1 border-2 border-primary/20"
              }
            >
              <div
                className={
                  "w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mx-auto mb-4"
                }
              >
                {"4"}
              </div>
              <p className={"text-foreground font-semibold text-lg"}>
                {"Contrata um montador — ou você mesmo monta"}
              </p>
            </div>
          </div>
        </div>
        <div
          className={""}
          style={{
            transition:
              "opacity 500ms ease-out 0.5s, transform 500ms ease-out 0.5s",
            willChange: "opacity, transform",
          }}
        >
          <p className={"mt-10 text-xl font-bold text-primary"}>
            {"Sem precisar ser marceneiro."}
          </p>
        </div>
      </div>
    </section>
  );
}

function CurriculumSection() {
  return (
    <section className={"section-padding pt-0 bg-card"}>
      <div className={"max-w-3xl mx-auto"}>
        <div
          className={""}
          style={{
            transition: "opacity 500ms ease-out, transform 500ms ease-out",
            willChange: "opacity, transform",
          }}
        >
          <div className={"text-center mb-10"}>
            <h2 className={"section-title text-foreground mb-4"}>
              {"Como o "}
              <span className={"text-primary"}>{"Móveis Por Você"}</span>
              {" te guia em cada etapa"}
            </h2>
            <p className={"text-muted-foreground text-lg"}>
              {
                "Você não precisa descobrir nada sozinho — o curso te mostra exatamente o que fazer, do primeiro passo ao móvel instalado."
              }
            </p>
          </div>
        </div>
        <div className={"space-y-4"}>
          <div
            className={""}
            style={{
              transition: "opacity 500ms ease-out, transform 500ms ease-out",
              willChange: "opacity, transform",
            }}
          >
            <div
              className={
                "rounded-xl border border-border bg-secondary/50 p-5 hover:border-primary/30 transition-colors"
              }
            >
              <div className={"flex items-start gap-4"}>
                <div
                  className={
                    "shrink-0 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center"
                  }
                >
                  <svg
                    xmlns={"http://www.w3.org/2000/svg"}
                    width={"24"}
                    height={"24"}
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"2"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    className={"lucide lucide-ruler w-6 h-6 text-primary"}
                  >
                    <path
                      d={
                        "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"
                      }
                    ></path>
                    <path d={"m14.5 12.5 2-2"}></path>
                    <path d={"m11.5 9.5 2-2"}></path>
                    <path d={"m8.5 6.5 2-2"}></path>
                    <path d={"m17.5 15.5 2-2"}></path>
                  </svg>
                </div>
                <div>
                  <h3
                    className={
                      "font-display font-bold text-foreground text-lg mb-1"
                    }
                  >
                    {"Planejamento do zero"}
                  </h3>
                  <p className={"text-muted-foreground leading-relaxed"}>
                    {
                      "Você aprende a tirar as medidas do seu ambiente e criar o projeto completo — mesmo sem nunca ter feito nada parecido."
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={""}
            style={{
              transition:
                "opacity 500ms ease-out 0.07s, transform 500ms ease-out 0.07s",
              willChange: "opacity, transform",
            }}
          >
            <div
              className={
                "rounded-xl border border-border bg-secondary/50 p-5 hover:border-primary/30 transition-colors"
              }
            >
              <div className={"flex items-start gap-4"}>
                <div
                  className={
                    "shrink-0 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center"
                  }
                >
                  <svg
                    xmlns={"http://www.w3.org/2000/svg"}
                    width={"24"}
                    height={"24"}
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"2"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    className={"lucide lucide-eye w-6 h-6 text-primary"}
                  >
                    <path
                      d={
                        "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                      }
                    ></path>
                    <circle cx={"12"} cy={"12"} r={"3"}></circle>
                  </svg>
                </div>
                <div>
                  <h3
                    className={
                      "font-display font-bold text-foreground text-lg mb-1"
                    }
                  >
                    {"Sem margem de erro"}
                  </h3>
                  <p className={"text-muted-foreground leading-relaxed"}>
                    {
                      "Antes de enviar o projeto para o corte, você visualiza o móvel dentro do seu ambiente — com as medidas reais da sua casa. O que você vê na tela é exatamente o que vai ser instalado."
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={""}
            style={{
              transition:
                "opacity 500ms ease-out 0.14s, transform 500ms ease-out 0.14s",
              willChange: "opacity, transform",
            }}
          >
            <div
              className={
                "rounded-xl border border-border bg-secondary/50 p-5 hover:border-primary/30 transition-colors"
              }
            >
              <div className={"flex items-start gap-4"}>
                <div
                  className={
                    "shrink-0 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center"
                  }
                >
                  <svg
                    xmlns={"http://www.w3.org/2000/svg"}
                    width={"24"}
                    height={"24"}
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"2"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    className={"lucide lucide-scissors w-6 h-6 text-primary"}
                  >
                    <circle cx={"6"} cy={"6"} r={"3"}></circle>
                    <path d={"M8.12 8.12 12 12"}></path>
                    <path d={"M20 4 8.12 15.88"}></path>
                    <circle cx={"6"} cy={"18"} r={"3"}></circle>
                    <path d={"M14.8 14.8 20 20"}></path>
                  </svg>
                </div>
                <div>
                  <h3
                    className={
                      "font-display font-bold text-foreground text-lg mb-1"
                    }
                  >
                    {"Corte e peças prontas"}
                  </h3>
                  <p className={"text-muted-foreground leading-relaxed"}>
                    {
                      "Você aprende como enviar seu projeto pra uma central de corte e receber todas as peças prontas, com acabamento profissional — sem precisar de marcenaria."
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={""}
            style={{
              transition:
                "opacity 500ms ease-out 0.21s, transform 500ms ease-out 0.21s",
              willChange: "opacity, transform",
            }}
          >
            <div
              className={
                "rounded-xl border border-border bg-secondary/50 p-5 hover:border-primary/30 transition-colors"
              }
            >
              <div className={"flex items-start gap-4"}>
                <div
                  className={
                    "shrink-0 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center"
                  }
                >
                  <svg
                    xmlns={"http://www.w3.org/2000/svg"}
                    width={"24"}
                    height={"24"}
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"2"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    className={"lucide lucide-wrench w-6 h-6 text-primary"}
                  >
                    <path
                      d={
                        "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
                      }
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3
                    className={
                      "font-display font-bold text-foreground text-lg mb-1"
                    }
                  >
                    {"Montagem sem complicação"}
                  </h3>
                  <p className={"text-muted-foreground leading-relaxed"}>
                    {
                      "Você entende como contratar só a montagem — com segurança, sem ser enganado no preço."
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={""}
            style={{
              transition:
                "opacity 500ms ease-out 0.28s, transform 500ms ease-out 0.28s",
              willChange: "opacity, transform",
            }}
          >
            <div
              className={
                "rounded-xl border border-border bg-secondary/50 p-5 hover:border-primary/30 transition-colors"
              }
            >
              <div className={"flex items-start gap-4"}>
                <div
                  className={
                    "shrink-0 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center"
                  }
                >
                  <svg
                    xmlns={"http://www.w3.org/2000/svg"}
                    width={"24"}
                    height={"24"}
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"2"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    className={
                      "lucide lucide-messages-square w-6 h-6 text-primary"
                    }
                  >
                    <path
                      d={
                        "M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"
                      }
                    ></path>
                    <path
                      d={"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"}
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3
                    className={
                      "font-display font-bold text-foreground text-lg mb-1"
                    }
                  >
                    {"Suporte em cada passo"}
                  </h3>
                  <p className={"text-muted-foreground leading-relaxed"}>
                    {
                      "Durante todo o processo você conta com grupo de suporte, direto comigo — manda seu projeto, tira sua dúvida, avança com segurança."
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={""}
          style={{
            transition:
              "opacity 500ms ease-out 0.4s, transform 500ms ease-out 0.4s",
            willChange: "opacity, transform",
          }}
        >
          <p
            className={
              "text-center text-foreground font-medium text-lg mt-10 max-w-2xl mx-auto"
            }
          >
            {"Tudo o que você precisa pra sair do zero ao móvel pronto — "}
            <span className={"text-primary font-bold"}>
              {"sem depender de marceneiro, sem gastar o que não tem."}
            </span>
          </p>
          <div className={"text-center mt-8"}>
            <LeadCaptureButton
              className={"btn-cta inline-block"}
              origin={"conteudo"}
            >
              {"QUERO APRENDER AGORA"}
            </LeadCaptureButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <section className={"section-padding bg-background"}>
      <div className={"max-w-2xl mx-auto"}>
        <div
          className={""}
          style={{
            transition: "opacity 500ms ease-out, transform 500ms ease-out",
            willChange: "opacity, transform",
          }}
        >
          <h2 className={"section-title text-foreground text-center mb-12"}>
            {"Se você já passou por isso, "}
            <span className={"text-primary"}>{"esse curso é pra você"}</span>
            {":"}
          </h2>
        </div>
        <div
          className={""}
          style={{
            transition:
              "opacity 500ms ease-out 0.1s, transform 500ms ease-out 0.1s",
            willChange: "opacity, transform",
          }}
        >
          <div
            className={"bg-card rounded-xl p-8 border-2 border-green-cta/30"}
          >
            <ul className={"space-y-4"}>
              <li className={"flex items-start gap-3"}>
                <svg
                  xmlns={"http://www.w3.org/2000/svg"}
                  width={"24"}
                  height={"24"}
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  stroke={"currentColor"}
                  strokeWidth={"2"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  className={
                    "lucide lucide-check w-5 h-5 shrink-0 mt-0.5 text-green-cta"
                  }
                >
                  <path d={"M20 6 9 17l-5-5"}></path>
                </svg>
                <span className={"text-lg text-foreground"}>
                  {
                    'Você pediu orçamento, levou um susto — e ficou pensando "tem que ter outro jeito"'
                  }
                </span>
              </li>
              <li className={"flex items-start gap-3"}>
                <svg
                  xmlns={"http://www.w3.org/2000/svg"}
                  width={"24"}
                  height={"24"}
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  stroke={"currentColor"}
                  strokeWidth={"2"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  className={
                    "lucide lucide-check w-5 h-5 shrink-0 mt-0.5 text-green-cta"
                  }
                >
                  <path d={"M20 6 9 17l-5-5"}></path>
                </svg>
                <span className={"text-lg text-foreground"}>
                  {
                    "Você quer uma cozinha planejada de verdade — mas não quer (nem pode) pagar R$ 20, 30 mil por isso"
                  }
                </span>
              </li>
              <li className={"flex items-start gap-3"}>
                <svg
                  xmlns={"http://www.w3.org/2000/svg"}
                  width={"24"}
                  height={"24"}
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  stroke={"currentColor"}
                  strokeWidth={"2"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  className={
                    "lucide lucide-check w-5 h-5 shrink-0 mt-0.5 text-green-cta"
                  }
                >
                  <path d={"M20 6 9 17l-5-5"}></path>
                </svg>
                <span className={"text-lg text-foreground"}>
                  {
                    "Você tá no meio de uma reforma e quer entender o processo antes de tomar uma decisão cara e errada"
                  }
                </span>
              </li>
              <li
                className={
                  "flex items-start gap-3 mt-2 rounded-xl bg-primary/10 border border-primary/40 p-4 shadow-[0_0_25px_hsl(25_100%_50%/0.15)]"
                }
              >
                <svg
                  xmlns={"http://www.w3.org/2000/svg"}
                  width={"24"}
                  height={"24"}
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  stroke={"currentColor"}
                  strokeWidth={"2"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  className={
                    "lucide lucide-check w-5 h-5 shrink-0 mt-0.5 text-primary"
                  }
                >
                  <path d={"M20 6 9 17l-5-5"}></path>
                </svg>
                <span className={"text-lg text-foreground font-bold"}>
                  {
                    "Você quer autonomia — saber que não precisa de ninguém pra ter o ambiente que imaginou"
                  }
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function RecapSection() {
  return (
    <section className={"section-padding bg-card"}>
      <div className={"max-w-4xl mx-auto text-center"}>
        <div
          className={""}
          style={{
            transition: "opacity 500ms ease-out, transform 500ms ease-out",
            willChange: "opacity, transform",
          }}
        >
          <h2 className={"section-title text-foreground mb-10"}>
            {"Com esse método "}
            <span className={"text-primary"}>{"você pode"}</span>
          </h2>
        </div>
        <div className={"grid sm:grid-cols-2 gap-6"}>
          <div
            className={""}
            style={{
              transition: "opacity 500ms ease-out, transform 500ms ease-out",
              willChange: "opacity, transform",
            }}
          >
            <div
              className={
                "flex items-center gap-4 bg-secondary rounded-xl p-6 border border-border hover:border-primary/30 transition-all"
              }
            >
              <svg
                xmlns={"http://www.w3.org/2000/svg"}
                width={"24"}
                height={"24"}
                viewBox={"0 0 24 24"}
                fill={"none"}
                stroke={"currentColor"}
                strokeWidth={"2"}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                className={
                  "lucide lucide-circle-check w-7 h-7 text-primary shrink-0"
                }
              >
                <circle cx={"12"} cy={"12"} r={"10"}></circle>
                <path d={"m9 12 2 2 4-4"}></path>
              </svg>
              <p className={"text-foreground font-semibold text-lg text-left"}>
                {"Economizar até 60% nos seus móveis planejados"}
              </p>
            </div>
          </div>
          <div
            className={""}
            style={{
              transition:
                "opacity 500ms ease-out 0.1s, transform 500ms ease-out 0.1s",
              willChange: "opacity, transform",
            }}
          >
            <div
              className={
                "flex items-center gap-4 bg-secondary rounded-xl p-6 border border-border hover:border-primary/30 transition-all"
              }
            >
              <svg
                xmlns={"http://www.w3.org/2000/svg"}
                width={"24"}
                height={"24"}
                viewBox={"0 0 24 24"}
                fill={"none"}
                stroke={"currentColor"}
                strokeWidth={"2"}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                className={
                  "lucide lucide-circle-check w-7 h-7 text-primary shrink-0"
                }
              >
                <circle cx={"12"} cy={"12"} r={"10"}></circle>
                <path d={"m9 12 2 2 4-4"}></path>
              </svg>
              <p className={"text-foreground font-semibold text-lg text-left"}>
                {
                  "Saber exatamente quando seu móvel ficará pronto (sem depender de promessas)"
                }
              </p>
            </div>
          </div>
          <div
            className={""}
            style={{
              transition:
                "opacity 500ms ease-out 0.2s, transform 500ms ease-out 0.2s",
              willChange: "opacity, transform",
            }}
          >
            <div
              className={
                "flex items-center gap-4 bg-secondary rounded-xl p-6 border border-border hover:border-primary/30 transition-all"
              }
            >
              <svg
                xmlns={"http://www.w3.org/2000/svg"}
                width={"24"}
                height={"24"}
                viewBox={"0 0 24 24"}
                fill={"none"}
                stroke={"currentColor"}
                strokeWidth={"2"}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                className={
                  "lucide lucide-circle-check w-7 h-7 text-primary shrink-0"
                }
              >
                <circle cx={"12"} cy={"12"} r={"10"}></circle>
                <path d={"m9 12 2 2 4-4"}></path>
              </svg>
              <p className={"text-foreground font-semibold text-lg text-left"}>
                {"Receber todas as peças prontas em poucos dias para montagem"}
              </p>
            </div>
          </div>
          <div
            className={""}
            style={{
              transition:
                "opacity 500ms ease-out 0.3s, transform 500ms ease-out 0.3s",
              willChange: "opacity, transform",
            }}
          >
            <div
              className={
                "flex items-center gap-4 bg-secondary rounded-xl p-6 border border-border hover:border-primary/30 transition-all"
              }
            >
              <svg
                xmlns={"http://www.w3.org/2000/svg"}
                width={"24"}
                height={"24"}
                viewBox={"0 0 24 24"}
                fill={"none"}
                stroke={"currentColor"}
                strokeWidth={"2"}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                className={
                  "lucide lucide-circle-check w-7 h-7 text-primary shrink-0"
                }
              >
                <circle cx={"12"} cy={"12"} r={"10"}></circle>
                <path d={"m9 12 2 2 4-4"}></path>
              </svg>
              <p className={"text-foreground font-semibold text-lg text-left"}>
                {"Transformar esse conhecimento em renda extra"}
              </p>
            </div>
          </div>
          <div
            className={""}
            style={{
              transition:
                "opacity 500ms ease-out 0.4s, transform 500ms ease-out 0.4s",
              willChange: "opacity, transform",
            }}
          >
            <div
              className={
                "flex items-center gap-4 bg-secondary rounded-xl p-6 border border-border hover:border-primary/30 transition-all"
              }
            >
              <svg
                xmlns={"http://www.w3.org/2000/svg"}
                width={"24"}
                height={"24"}
                viewBox={"0 0 24 24"}
                fill={"none"}
                stroke={"currentColor"}
                strokeWidth={"2"}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                className={
                  "lucide lucide-circle-check w-7 h-7 text-primary shrink-0"
                }
              >
                <circle cx={"12"} cy={"12"} r={"10"}></circle>
                <path d={"m9 12 2 2 4-4"}></path>
              </svg>
              <p className={"text-foreground font-semibold text-lg text-left"}>
                {"Pagar seus próprios móveis ajudando amigos e familiares"}
              </p>
            </div>
          </div>
        </div>
        <div
          className={""}
          style={{
            transition:
              "opacity 500ms ease-out 0.6s, transform 500ms ease-out 0.6s",
            willChange: "opacity, transform",
          }}
        >
          <p
            className={
              "mt-10 text-xl md:text-2xl font-display font-bold text-primary leading-snug"
            }
          >
            {
              '"Você não só economiza — você ganha controle e ainda pode transformar isso em renda."'
            }
          </p>
        </div>
      </div>
    </section>
  );
}

function OfferSection() {
  return (
    <section
      id={"oferta"}
      className={"section-padding bg-background relative overflow-hidden"}
    >
      <div
        className={
          "absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"
        }
      ></div>
      <div className={"relative z-10 max-w-2xl mx-auto text-center"}>
        <div
          className={""}
          style={{
            transition: "opacity 500ms ease-out, transform 500ms ease-out",
            willChange: "opacity, transform",
          }}
        >
          <div className={"glow-divider mb-8"}></div>
          <h2 className={"section-title text-foreground mb-10"}>
            {"Comece "}
            <span className={"text-primary italic"}>{"hoje"}</span>
          </h2>
          <div
            className={
              "bg-card rounded-2xl p-8 md:p-10 border-2 border-primary/30 shadow-[0_0_40px_hsl(25_100%_50%/0.15)] animate-pulse-glow"
            }
          >
            <p className={"text-muted-foreground line-through text-xl mb-3"}>
              {"De: R$997"}
            </p>
            <div
              className={
                "inline-flex items-center gap-2 bg-primary/20 rounded-full px-3 py-1 mb-3"
              }
            >
              <span className={"text-primary text-xs font-bold"}>
                {"▼ 50% OFF"}
              </span>
            </div>
            <p
              className={
                "text-primary font-display text-6xl md:text-8xl font-extrabold mb-2 leading-none"
              }
            >
              {"R$497"}
            </p>
            <div
              className={
                "flex items-start gap-3 bg-primary/10 border border-primary/30 rounded-xl p-4 mb-8 text-left"
              }
            >
              <svg
                xmlns={"http://www.w3.org/2000/svg"}
                width={"24"}
                height={"24"}
                viewBox={"0 0 24 24"}
                fill={"none"}
                stroke={"currentColor"}
                strokeWidth={"2"}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                className={
                  "lucide lucide-shield w-6 h-6 text-primary mt-0.5 shrink-0"
                }
              >
                <path
                  d={
                    "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                  }
                ></path>
              </svg>
              <p className={"text-foreground text-sm leading-snug"}>
                {
                  "Clique no botão abaixo e garanta a sua vaga. O risco é todo meu: se em 7 dias você não projetar o seu primeiro móvel, eu devolvo o seu dinheiro."
                }
              </p>
            </div>
            <div className={"text-left space-y-3 mb-8 max-w-md mx-auto"}>
              <div className={"flex items-start gap-3"}>
                <svg
                  xmlns={"http://www.w3.org/2000/svg"}
                  width={"24"}
                  height={"24"}
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  stroke={"currentColor"}
                  strokeWidth={"2"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  className={
                    "lucide lucide-play w-5 h-5 text-primary mt-0.5 shrink-0"
                  }
                >
                  <polygon points={"6 3 20 12 6 21 6 3"}></polygon>
                </svg>
                <p className={"text-muted-foreground text-sm"}>
                  {"Aulas em vídeo para assistir no seu ritmo, quando quiser"}
                </p>
              </div>
              <div className={"flex items-start gap-3"}>
                <svg
                  xmlns={"http://www.w3.org/2000/svg"}
                  width={"24"}
                  height={"24"}
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  stroke={"currentColor"}
                  strokeWidth={"2"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  className={
                    "lucide lucide-message-circle w-5 h-5 text-primary mt-0.5 shrink-0"
                  }
                >
                  <path d={"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}></path>
                </svg>
                <p className={"text-muted-foreground text-sm"}>
                  {
                    "Suporte no grupo exclusivo para analisar o seu projeto e tirar dúvidas"
                  }
                </p>
              </div>
              <div className={"flex items-start gap-3"}>
                <svg
                  xmlns={"http://www.w3.org/2000/svg"}
                  width={"24"}
                  height={"24"}
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  stroke={"currentColor"}
                  strokeWidth={"2"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  className={
                    "lucide lucide-calendar w-5 h-5 text-primary mt-0.5 shrink-0"
                  }
                >
                  <path d={"M8 2v4"}></path>
                  <path d={"M16 2v4"}></path>
                  <rect
                    width={"18"}
                    height={"18"}
                    x={"3"}
                    y={"4"}
                    rx={"2"}
                  ></rect>
                  <path d={"M3 10h18"}></path>
                </svg>
                <p className={"text-muted-foreground text-sm"}>
                  {"12 meses de acesso completo ao conteúdo"}
                </p>
              </div>
            </div>
            <LeadCaptureButton
              className={"btn-cta inline-block text-center w-full"}
              origin={"oferta"}
            >
              {"QUERO FAZER MEUS MÓVEIS"}
            </LeadCaptureButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function UrgencySection() {
  return (
    <section className={"section-padding bg-card"}>
      <div className={"max-w-3xl mx-auto text-center"}>
        <div
          className={""}
          style={{
            transition: "opacity 500ms ease-out, transform 500ms ease-out",
            willChange: "opacity, transform",
          }}
        >
          <h2 className={"section-title text-foreground mb-8"}>
            {"O Preço de "}
            <span className={"text-primary"}>{"Ficar Parado"}</span>
          </h2>
          <div
            className={
              "bg-secondary rounded-2xl p-8 md:p-12 border-2 border-primary/20"
            }
          >
            <p
              className={
                "text-xl md:text-2xl text-foreground leading-relaxed font-medium"
              }
            >
              {"Me responda com sinceridade:"}
            </p>
            <p
              className={
                "text-lg md:text-xl text-muted-foreground mt-6 leading-relaxed"
              }
            >
              {
                "Quantas vezes você já desistiu de fazer seus móveis porque o orçamento da marcenaria era caro?"
              }
            </p>
            <p className={"text-lg md:text-xl text-primary font-bold mt-6"}>
              {"Quanto dinheiro você já deixou de economizar?"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AuthoritySection() {
  return (
    <section className={"section-padding bg-background"}>
      <div className={"max-w-4xl mx-auto"}>
        <div
          className={""}
          style={{
            transition: "opacity 500ms ease-out, transform 500ms ease-out",
            willChange: "opacity, transform",
          }}
        >
          <h2 className={"section-title text-foreground text-center mb-12"}>
            {"Quem criou "}
            <span className={"text-primary"}>{"esse método"}</span>
          </h2>
        </div>
        <div
          className={""}
          style={{
            transition:
              "opacity 500ms ease-out 0.2s, transform 500ms ease-out 0.2s",
            willChange: "opacity, transform",
          }}
        >
          <div
            className={
              "flex flex-col md:flex-row items-center gap-8 bg-card rounded-2xl p-8 md:p-12 border border-primary/20"
            }
          >
            <img
              src={"/reference/schaien-photo-8wSjYKVm.webp"}
              alt={"Schaien Vick, criador do método Móveis Por Você"}
              className={
                "w-40 h-40 rounded-full object-cover border-4 border-primary/30 shrink-0"
              }
            />
            <div>
              <h3
                className={
                  "text-2xl font-display font-bold text-foreground mb-4"
                }
              >
                {"Schaien Vick"}
              </h3>
              <div
                className={
                  "text-muted-foreground text-lg leading-relaxed space-y-4"
                }
              >
                <p>
                  {
                    "Meu nome é Schaien, e eu ensino pessoas comuns a terem móveis planejados de alto padrão sem depender de marcenaria e sem gastar uma fortuna."
                  }
                </p>
                <p>
                  {
                    "Quando reformei minha casa, não tinha como pagar os valores absurdos que estavam me cobrando. Foi aí que decidi fazer meus próprios móveis."
                  }
                </p>
                <p>
                  {
                    "O que era pra ser só o básico virou muito mais: acabei mobiliando toda a minha casa e "
                  }
                  <strong className={"text-foreground"}>
                    {"economizei mais de R$50.000"}
                  </strong>
                  {" nesse processo."}
                </p>
                <p>
                  {"Foi aí que eu percebi algo que pouca gente sabe: "}
                  <strong className={"text-foreground"}>
                    {
                      "qualquer pessoa pode ter móveis planejados incríveis, com preço justo, sem depender de ninguém."
                    }
                  </strong>
                </p>
                <p>
                  {
                    "Hoje, ensino esse método passo a passo para quem quer economizar, ter liberdade na própria casa e até transformar isso em uma nova fonte de renda."
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className={"section-padding bg-card"}>
      <div className={"max-w-3xl mx-auto"}>
        <div
          className={""}
          style={{
            transition: "opacity 500ms ease-out, transform 500ms ease-out",
            willChange: "opacity, transform",
          }}
        >
          <h2 className={"section-title text-foreground text-center mb-12"}>
            {"Perguntas "}
            <span className={"text-primary"}>{"Frequentes"}</span>
          </h2>
        </div>
        <div
          className={""}
          style={{
            transition:
              "opacity 500ms ease-out 0.1s, transform 500ms ease-out 0.1s",
            willChange: "opacity, transform",
          }}
        >
          <FAQAccordion />
        </div>
        <div
          className={""}
          style={{
            transition:
              "opacity 500ms ease-out 0.2s, transform 500ms ease-out 0.2s",
            willChange: "opacity, transform",
          }}
        >
          <div className={"text-center mt-10"}>
            <LeadCaptureButton
              className={"btn-cta inline-block"}
              origin={"faq"}
            >
              {"QUERO APRENDER AGORA"}
            </LeadCaptureButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <LeadCaptureProvider>
      <main className="min-h-screen bg-background">
        <HeroSection />
        <ProjectsSection />
        <ProofSection />
        <TruthSection />
        <CurriculumSection />
        <AudienceSection />
        <RecapSection />
        <OfferSection />
        <UrgencySection />
        <AuthoritySection />
        <FAQSection />
        <footer
          className={"bg-background text-center py-8 border-t border-border"}
        >
          <p className={"text-muted-foreground text-sm"}>
            {"© 2026 Móveis Por Você. Todos os direitos reservados."}
          </p>
        </footer>
      </main>
    </LeadCaptureProvider>
  );
}
