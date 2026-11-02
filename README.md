---
type: project-documentation
status: draft
updated: 2026-11-01
source: "Estrutura e comandos do repositorio moveisporvoce"
sensitivity: public
ai_generated: true
generated_by: "codex@2026-11-01"
---

> [!ai-derived] Documentação técnica organizada a partir do código do projeto.
# Móveis Por Você

Website em Next.js, React e TypeScript, organizado em um monorepo com Turborepo e pnpm Workspaces.

## Estrutura

```text
apps/
  web/                       # Website Next.js e API de inscrição
    app/                     # App Router e componentes
    lib/                     # Validação e integração do cadastro
    public/                  # Logos, fotografias e fontes locais
    reference/               # Conteúdo de referência da interface
    tests/                   # Testes da integração com upstream simulado
packages/
  typescript-config/         # Configurações TypeScript compartilhadas
.github/workflows/ci.yml     # Testes, build e tipos no GitHub Actions
pnpm-workspace.yaml
turbo.json
```

## Requisitos

- Node.js 24.
- pnpm 11.25.0, fixado em `packageManager`.

## Desenvolvimento

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Abra [http://127.0.0.1:3000](http://127.0.0.1:3000). O servidor local se vincula apenas ao loopback.

## Comandos

| Comando | Resultado |
|---|---|
| `pnpm dev` | Inicia a aplicação em desenvolvimento |
| `pnpm build` | Gera o build de produção |
| `pnpm start` | Compila se necessário e inicia o servidor de produção local |
| `pnpm test` | Executa os testes sem enviar cadastros reais |
| `pnpm typecheck` | Compila e verifica os tipos, incluindo os arquivos gerados pelo Next.js |
| `pnpm check` | Executa testes, build e verificação de tipos |

O Turborepo gerencia dependências entre tarefas e cache local. `dev` e `start` são processos persistentes sem cache; a verificação de tipos aguarda o build para usar os tipos de rotas atualizados.

Para executar um comando apenas no website:

```sh
pnpm --filter @moveisporvoce/web test
```

## Configuração da inscrição

Crie `apps/web/.env.local` a partir de `apps/web/.env.example` e configure no ambiente do servidor:

```dotenv
SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_PUBLISHABLE_KEY=sua-chave-publica
```

O formulário valida nome, e-mail e WhatsApp, envia os dados à tabela `leads` existente e aguarda a confirmação antes de abrir a inscrição na Hotmart. Sem as variáveis, a rota responde indisponibilidade e não afirma que o cadastro foi enviado. Os testes usam respostas simuladas.

As chaves permitidas são publishable ou a chave pública legada de papel `anon`; credenciais privilegiadas não são aceitas nessa integração. Variáveis reais ficam fora do versionamento.

## Rotas e interface

- `/`: reprodução da página de Móveis Por Você, com logo SVG atualizada, vídeo, projetos, depoimentos, oferta, FAQ e modal de inscrição.
- `/proposta`: proposta editorial alternativa preservada.
- `/api/inscricao`: recebimento e validação do cadastro.
- `/review.html`: quadro local para conferência responsiva.

Os ativos ficam no próprio projeto, com licenças das fontes junto aos arquivos. A interface mantém `noindex` enquanto está em revisão. O workflow de CI valida o código; não executa publicação do website.
