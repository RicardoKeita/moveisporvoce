import Image from "next/image";
import { Arrow, Header, ProcessExplorer, SignupForm } from "../components";
import { faqs, site } from "../content";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">
              Sua casa.
              <br />
              Suas ideias.
              <br />
              <span>Seus móveis.</span>
            </h1>
            <p className="hero-description">
              Aprenda a planejar seus próprios móveis, mesmo começando do zero.
            </p>
            <p className="hero-support">
              No curso Móveis Por Você, entenda o caminho do projeto à central
              de corte e à montagem.
            </p>
            <a href="#inscricao" className="button button-primary">
              Quero aprender <Arrow diagonal />
            </a>
            <a href="#como-funciona" className="hero-secondary">
              Entender como funciona <span aria-hidden="true">↓</span>
            </a>
            <div className="hero-footnote">
              <span className="small-check" aria-hidden="true" />
              Para quem quer planejar os móveis da própria casa.
            </div>
          </div>
          <figure className="hero-image">
            <Image
              src="/images/cozinha-schaien.webp"
              alt="Armários brancos, nicho de madeira e ilha no projeto da casa de Schaien"
              fill
              sizes="(max-width: 760px) 100vw, 50vw"
              preload
              className="interior-photo"
            />
            <figcaption>
              <span>Da casa de Schaien</span>
              <span>
                Criador do Móveis Por Você <Arrow diagonal />
              </span>
            </figcaption>
          </figure>
        </section>

        <div className="intro-strip">
          <div className="shell">
            <p>
              Planejar é o primeiro passo.
              <br />
              <strong>Ter uma marcenaria não precisa ser.</strong>
            </p>
            <p>
              Você entende o projeto. A central de corte prepara as peças. A
              montagem pode ser contratada.
            </p>
          </div>
        </div>

        <section
          className="process-section shell section-space"
          id="como-funciona"
          aria-labelledby="process-title"
        >
          <div className="section-intro">
            <h2 id="process-title">
              Do que você imagina
              <br />
              ao que cabe na sua casa.
            </h2>
            <p>
              Conheça o processo para participar das decisões sobre seus móveis,
              do planejamento à execução.
            </p>
          </div>
          <ProcessExplorer />
        </section>

        <section
          className="course-section"
          id="curso"
          aria-labelledby="course-title"
        >
          <div className="course-layout shell">
            <div className="course-copy">
              <h2 id="course-title">
                Seu primeiro projeto
                <br />
                começa com
                <br />
                <span>conhecimento.</span>
              </h2>
              <p>
                O Móveis Por Você é um curso para quem quer começar a planejar
                os próprios móveis e entender as etapas que vêm depois do
                desenho.
              </p>
              <div className="course-topics">
                <div>
                  <h3>Planejar com intenção</h3>
                  <p>
                    Entender o ambiente e as decisões que orientam um projeto.
                  </p>
                </div>
                <div>
                  <h3>Conhecer o caminho do corte</h3>
                  <p>
                    Compreender o papel da central de corte na preparação das
                    peças.
                  </p>
                </div>
                <div>
                  <h3>Organizar a execução</h3>
                  <p>
                    Entender como o projeto se conecta à montagem, inclusive
                    quando contratada.
                  </p>
                </div>
              </div>
              <a href="#inscricao" className="button button-primary">
                Conhecer a inscrição <Arrow diagonal />
              </a>
            </div>
            <div className="course-image-column">
              <figure className="detail-image">
                <Image
                  src="/images/cozinha-detalhe.webp"
                  alt="Outro ângulo da cozinha de Schaien, com armários planejados, gavetas e ilha"
                  width={960}
                  height={1280}
                  sizes="(max-width: 760px) 100vw, 45vw"
                />
                <figcaption>
                  Projeto da casa de Schaien, apresentado no site atual.
                </figcaption>
              </figure>
              <div className="teacher-note">
                <h3>Aprenda com Schaien Vick.</h3>
                <p>
                  Criador do Móveis Por Você e responsável pelo conteúdo técnico
                  do curso.
                </p>
                <a
                  className="text-link"
                  href={site.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Assistir à apresentação no YouTube <Arrow diagonal />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          className="fit-section shell section-space"
          aria-labelledby="fit-title"
        >
          <div className="fit-title">
            <h2 id="fit-title">
              Para a casa
              <br />
              que você tem.
              <br />
              <span>E as ideias que vêm.</span>
            </h2>
          </div>
          <div className="fit-content">
            <p className="fit-lead">
              Você quer aproveitar melhor um ambiente e entender o que precisa
              decidir antes de fazer os móveis?
            </p>
            <p>
              Comece conhecendo o processo. Medidas, materiais, ferragens e
              execução passam a fazer parte da conversa.
            </p>
            <p className="fit-boundary">
              O curso ensina o planejamento. Materiais, serviços da central de
              corte, transporte e montagem são contratados à parte, conforme seu
              projeto.
            </p>
            <a href="#inscricao" className="text-link">
              Quero dar o primeiro passo <Arrow diagonal />
            </a>
          </div>
        </section>

        <section
          className="faq-section shell section-space"
          id="duvidas"
          aria-labelledby="faq-title"
        >
          <div className="faq-heading">
            <h2 id="faq-title">
              Antes de <br />
              começar.
            </h2>
            <p>
              Respostas para você entender a proposta e decidir com mais
              clareza.
            </p>
          </div>
          <div className="faq-list">
            {faqs.map(({ question, answer }) => (
              <details key={question}>
                <summary>
                  {question}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12h14M12 5v14"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section
          className="signup-section"
          id="inscricao"
          aria-labelledby="signup-title"
        >
          <div className="signup-layout shell">
            <div className="signup-copy">
              <h2 id="signup-title">
                O próximo móvel
                <br />
                da sua casa pode
                <br />
                começar <span>com você.</span>
              </h2>
              <p>
                Conheça o curso e dê o primeiro passo para entender o
                planejamento dos seus próprios móveis.
              </p>
              <div className="signup-journey">
                <span>Seus dados</span>
                <Arrow />
                <span>Inscrição na Hotmart</span>
              </div>
              <p className="signup-small">
                Você confere todas as condições antes de decidir pela compra.
              </p>
              <img
                className="signup-symbol"
                src="/brand/Icone-branco.svg"
                alt=""
                width="110"
                height="110"
              />
            </div>
            <SignupForm />
          </div>
        </section>
      </main>
      <footer className="footer shell">
        <a className="brand-frame" href="#topo" aria-label="Voltar ao início">
          <img
            src="/brand/logo-preto.svg"
            alt="Método Móveis Por Você"
            width="156"
            height="156"
          />
        </a>
        <p>Aprender. Planejar. Fazer acontecer.</p>
        <span>© 2026 Móveis Por Você.</span>
        <a className="footer-top" href="#topo">
          Voltar ao topo <Arrow diagonal />
        </a>
      </footer>
    </>
  );
}
