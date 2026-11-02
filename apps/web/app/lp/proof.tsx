"use client";

import { useRef, useState } from "react";

const conversations = {
  adriely: { name: "Adriely Marconato Marum", image: "adriely-conversa", text: "Ainda faltam alguns detalhes para finalizar, mas já estamos muito felizes com o resultado! Também quero deixar meu agradecimento especial ao Schaien Vick pela assessoria durante todo o desenvolvimento do nosso projeto. Ele foi extremamente atencioso, tirou todas as minhas dúvidas, conferiu o projeto e sugeriu melhorias que fizeram toda a diferença. Indico o curso de olhos fechados!" },
  ale: { name: "Ale Rio", image: "ale-conversa", text: "Todo aprendizado e suporte do Schaein foi essencial pra completar esse sonho. Uma super paciência, cada detalhe dos vídeos e do suporte aqui incluindo a experiência dos outros alunos foi essencial. Ele criou um monstrinho que agora quer fazer projeto o tempo todo. Na mensagem completa, Ale também relata orçamentos entre R$ 85 mil e R$ 120 mil, R$ 28.500 de material e R$ 6.000 de montagem. São valores relatados para seu projeto; não representam economia garantida ou comparação auditada." },
  thais: { name: "Thais Moraes", image: "thais-conversa", text: "Prontinho! Projeto executado e instalado. Quero agradecer todo apoio e orientações, Schaien Vick. Eu amei." },
  taina: { name: "Taina", image: "taina-conversa", text: "Schaien, ficou pronta minha cozinha! Conseguimos economizar R$ 6.600 na reforma, muito grata pela ajuda, muito obrigada mesmo. Estamos muito felizes! Valeu mesmo por compartilhar todo esse conhecimento com a gente, Schaien! O valor é um relato individual, sem garantia de economia para outros projetos." },
  maicon: { name: "Maicon", image: "maicon-conversa", text: "Tudo pronto! Projeto executado. Schaien, muito obrigado pela ajuda! Consegui economizar mais de R$ 10.000 na cozinha. Isso vai me ajudar muito para conseguir mobiliar o restante da casa! Economia relatada pelo participante, sem comparação auditada." },
  mirella: { name: "Mirella", image: "mirella-processo", text: "Tá acontecendo! Mirella compartilha fotos do armário em montagem em 14 de outubro de 2026. Registro de processo em andamento." },
  carol: { name: "Carol Kuhn", image: "carol-conversa", text: "Eu tbm!!! Investi no curso com a esperança de tirar meus sonhos do papel... e estão!!! Em breve, trago as novidades do meu projeto por aqui tbm. Registro de expectativa e andamento; a citação acima da mensagem é de Juliana, outra participante." },
};


type Person = keyof typeof conversations;
const columns: Person[][] = [["thais", "mirella"], ["adriely", "carol"], ["maicon"], ["ale", "taina"]];

export function ResultsProof() {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState<Person | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const item = selected ? conversations[selected] : null;
  function open(person: Person) {
    trigger.current = document.activeElement as HTMLElement;
    setSelected(person);
    dialog.current?.showModal();
  }
  function close() {
    dialog.current?.close();
    setSelected(null);
    trigger.current?.focus();
  }
  return <section className="lp-testimonials" aria-labelledby="lp-testimonials-title">
    <div className="lp-testimonials-inner">
      <div className="glow-divider mb-8" /><h2 id="lp-testimonials-title">Pessoas comuns já estão economizando <span>mais da metade do valor</span> fazendo seus próprios móveis</h2>
      <div className={`lp-wall-viewport${expanded ? " is-expanded" : ""}`} id="lp-testimonial-wall">
        <div className="lp-wall">
          {columns.map((column, index) => <div className="lp-wall-column" key={index}>
            {column.map(person => {
              const entry = conversations[person];
              return <figure className="lp-wall-item" key={person}>
                <button type="button" onClick={() => open(person)} aria-label={`Ampliar depoimento de ${entry.name}`}><img src={`/lp/${entry.image}.webp`} alt={`Print da conversa de ${entry.name}: ${entry.text}`} loading="lazy" /></button>
                <figcaption>{entry.name}{person === "mirella" || person === "carol" ? " · Projeto em andamento" : ""}</figcaption>
              </figure>;
            })}
          </div>)}
        </div>
      </div>
      <div className="lp-wall-controls"><button type="button" aria-expanded={expanded} aria-controls="lp-testimonial-wall" onClick={() => setExpanded(v => !v)}>{expanded ? "Recolher relatos" : "Ver todos os relatos"}<svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true" className={expanded ? "is-up" : ""}><path d="M12 4v16m-6-6 6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></button></div>
      <p className="lp-wall-note">Toque em um print para ampliar. Telefones e fotos de perfil protegidos.<br />Experiências individuais; custos e resultados variam conforme cada projeto.</p>
    </div>
    <dialog ref={dialog} className="lp-wall-dialog" aria-labelledby="lp-wall-dialog-title" onCancel={e => { e.preventDefault(); close(); }} onClick={e => { if (e.target === e.currentTarget) { const rect = e.currentTarget.getBoundingClientRect(); if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) close(); } }}>
      <header><h2 id="lp-wall-dialog-title">{item?.name ?? "Depoimento"}</h2><button type="button" onClick={close} autoFocus aria-label="Fechar depoimento">Fechar ×</button></header>
      {item && <><img src={`/lp/${item.image}.webp`} alt={`Conversa de ${item.name} com dados de contato protegidos`} /><details><summary>Ler em texto</summary><p>{item.text}</p><p>Texto de apoio à leitura. O print preserva a mensagem original.</p></details></>}
    </dialog>
  </section>;
}
