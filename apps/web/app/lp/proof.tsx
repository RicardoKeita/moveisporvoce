"use client";

import { useRef, useState } from "react";
import { LeadCaptureButton } from "../replica-components";

const conversations = {
  adriely: { name: "Adriely Marconato Marum", image: "adriely-conversa", text: "Ainda faltam alguns detalhes para finalizar, mas já estamos muito felizes com o resultado! Também quero deixar meu agradecimento especial ao Schaien Vick pela assessoria durante todo o desenvolvimento do nosso projeto. Ele foi extremamente atencioso, tirou todas as minhas dúvidas, conferiu o projeto e sugeriu melhorias que fizeram toda a diferença. Indico o curso de olhos fechados!" },
  ale: { name: "Ale Rio", image: "ale-conversa", text: "Todo aprendizado e suporte do Schaein foi essencial pra completar esse sonho. Uma super paciência, cada detalhe dos vídeos e do suporte aqui incluindo a experiência dos outros alunos foi essencial. Ele criou um monstrinho que agora quer fazer projeto o tempo todo. Na mensagem completa, Ale também relata orçamentos entre R$ 85 mil e R$ 120 mil, R$ 28.500 de material e R$ 6.000 de montagem. São valores relatados para seu projeto; não representam economia garantida ou comparação auditada." },
  thais: { name: "Thais Moraes", image: "thais-conversa", text: "Prontinho! Projeto executado e instalado. Quero agradecer todo apoio e orientações, Schaien Vick. Eu amei." },
  taina: { name: "Taina", image: "taina-conversa", text: "Schaien, ficou pronta minha cozinha! Conseguimos economizar R$ 6.600 na reforma, muito grata pela ajuda, muito obrigada mesmo. Estamos muito felizes! Valeu mesmo por compartilhar todo esse conhecimento com a gente, Schaien! O valor é um relato individual, sem garantia de economia para outros projetos." },
};

function Conversation({ person, children = "Ampliar conversa" }: { person: keyof typeof conversations; children?: React.ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const item = conversations[person];
  function close() { dialog.current?.close(); setOpen(false); trigger.current?.focus(); }
  return <>
    <button type="button" className="lp-conversation-link" ref={trigger} onClick={() => { setOpen(true); dialog.current?.showModal(); }}>{children}<span aria-hidden="true"> ↗</span></button>
    <dialog ref={dialog} className="lp-proof-dialog" aria-labelledby={`conversation-${person}`} onCancel={e => { e.preventDefault(); close(); }} onClick={e => { if (e.target === e.currentTarget) { const b = e.currentTarget.getBoundingClientRect(); if (e.clientX < b.left || e.clientX > b.right || e.clientY < b.top || e.clientY > b.bottom) close(); } }}>
      <header><h2 id={`conversation-${person}`}>{item.name}</h2><button type="button" onClick={close} autoFocus aria-label="Fechar conversa">Fechar <span aria-hidden="true">×</span></button></header>
      {open && <><img src={`/lp/${item.image}.webp`} alt={`Conversa de ${item.name} no WhatsApp, com dados de contato protegidos`} /><details><summary>Ler em texto</summary><p>{item.text}</p><p>Texto de apoio à leitura, com emojis omitidos e pontuação ajustada. O print preserva a mensagem original.</p></details></>}
    </dialog>
  </>;
}

export function ResultsProof() {
  return <section className="lp-proof lp-results" aria-labelledby="lp-results-title">
    <div className="lp-proof-inner">
      <h2 id="lp-results-title">O projeto ganha forma.<br /><span>E passa a fazer parte da casa.</span></h2>
      <p className="lp-intro">Veja os móveis de Adriely e o que ela compartilhou sobre a experiência com o curso.</p>
      <div className="lp-case-layout">
        <figure className="lp-case-photo"><img src="/lp/adriely-cozinha.webp" alt="Cozinha de Adriely: armários sob a pia, ilha com bancada e geladeira" width="1600" height="1200" loading="lazy" /><figcaption>Cozinha do projeto compartilhado por Adriely.</figcaption></figure>
        <div className="lp-case-story"><h3>Adriely Marconato Marum</h3><p>Um projeto que reúne móveis para cozinha, lavanderia, banheiros, sala e quarto.</p><img className="lp-chat" src="/lp/adriely-suporte.webp" alt="Adriely agradece a assessoria, as dúvidas respondidas e a revisão do projeto, e indica o curso" width="538" height="434" loading="lazy" /><Conversation person="adriely" /><p className="lp-context">No relato, Adriely também informa que ainda faltavam instalar o espelho da penteadeira e uma prateleira.</p></div>
      </div>
      <p className="lp-privacy">Mensagens compartilhadas na comunidade. Telefones e fotos de perfil ocultados para preservar a privacidade.</p>
    </div>
  </section>;
}

export function SupportProof() {
  return <section className="lp-proof lp-support" aria-labelledby="lp-support-title"><div className="lp-proof-inner">
    <div className="lp-support-layout"><div><h2 id="lp-support-title">Aprender também é poder<br /><span>tirar as dúvidas pelo caminho.</span></h2><p className="lp-intro">Ale conta como os vídeos, o suporte de Schaien e a experiência dos outros alunos participaram do seu projeto.</p><p className="lp-person">Ale Rio</p><img className="lp-chat" src="/lp/ale-suporte.webp" alt="Ale relata que o aprendizado e o suporte foram essenciais, destacando a paciência, os vídeos e a experiência de outros alunos" width="547" height="848" loading="lazy" /><Conversation person="ale" /><p className="lp-context">Mensagem original de Ale, com os custos relatados para seu projeto. Os valores dependem do escopo e não representam economia garantida.</p></div><div className="lp-process"><h3>Da chegada das peças à montagem</h3><p>Mirella compartilhou uma etapa do armário em montagem. É um registro do processo, ainda em andamento.</p><details><summary>Ver o registro de montagem de Mirella</summary><img src="/lp/mirella-processo.webp" alt="Mirella mostra o armário em montagem e escreve: Tá acontecendo" width="547" height="729" loading="lazy" /></details><details><summary>Ver o primeiro dia da cozinha de Ale</summary><img src="/lp/ale-processo.webp" alt="Ale mostra a cozinha em montagem e relata um imprevisto com o interruptor atrás da geladeira" width="547" height="746" loading="lazy" /></details></div></div>
  </div></section>;
}

export function StudentProof() {
  return <section className="lp-proof lp-students" aria-labelledby="lp-students-title"><div className="lp-proof-inner"><h2 id="lp-students-title">Outras cozinhas.<br /><span>Outras histórias para conhecer.</span></h2><div className="lp-student-grid">
    <article><img className="lp-student-photo" src="/lp/thais-projeto.webp" alt="Cozinha compartilhada por Thais, com móveis amadeirados e bancada escura" width="558" height="558" loading="lazy" /><h3>Thais Moraes</h3><blockquote>“Prontinho! Projeto executado e instalado”</blockquote><p>Thais também agradeceu o apoio e as orientações de Schaien.</p><Conversation person="thais" /></article>
    <article><img className="lp-student-photo" src="/lp/taina-projeto.webp" alt="Cozinha compartilhada por Taina, com aéreos verdes e armários inferiores amadeirados" width="528" height="392" loading="lazy" /><h3>Taina</h3><blockquote>“Estamos muito felizes!”</blockquote><p>Na conversa, Taina agradece o conhecimento compartilhado e a ajuda no projeto.</p><Conversation person="taina" /></article>
  </div><p className="lp-privacy">Fotos e relatos de projetos individuais. Cada execução tem seu próprio escopo, materiais e custos.</p><div className="lp-proof-action"><LeadCaptureButton className="btn-cta" origin="lp-depoimentos">QUERO CONHECER O CURSO</LeadCaptureButton></div></div></section>;
}
