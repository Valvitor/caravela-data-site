# Caravela Data — site + dashboards de exemplo

Site institucional (marketing) de uma consultoria de dashboards para PMEs, com **três dashboards de exemplo** (Contabilidade, E-commerce, Saúde) usando dados fictícios. Construído para ser publicado de graça no Vercel.

## Stack
- **Next.js 16** (App Router, TypeScript) — páginas estáticas (SSG)
- **Tailwind CSS v4** — identidade "Editorial Boutique"
- **Recharts** — gráficos dos dashboards
- Sem backend e **sem variáveis de ambiente** (dados fictícios locais)

## Rodar localmente
```bash
pnpm install      # ou npm install
pnpm dev          # http://localhost:3000
```
Build de produção: `pnpm build && pnpm start`.

## Estrutura
```
app/(marketing)/     landing, como-funciona, setores, contato
app/dashboards/      contabilidade, ecommerce, saude
components/marketing seções do site
components/dashboard cards, KPIs e gráficos (charts/)
components/ui        primitivos (Button, Section, Eyebrow, Logo...)
data/                dados fictícios dos 3 nichos
lib/brand.ts         nome, WhatsApp, cores  <- edite aqui para trocar a marca
lib/format.ts        formatação pt-BR (R$, %, etc.)
```

## Onde editar
- **Marca, WhatsApp, cores de gráfico:** `lib/brand.ts`
- **Tema/cores do site:** `app/globals.css` (bloco `@theme`)
- **Dados dos dashboards:** `data/contabilidade.ts`, `data/ecommerce.ts`, `data/saude.ts`
- **Textos das seções:** `components/marketing/*`

## Publicar no Vercel
1. Crie um repositório vazio no GitHub (sem README).
2. Neste diretório:
   ```bash
   git remote add origin https://github.com/<usuario>/<repo>.git
   git push -u origin main
   ```
3. Em [vercel.com/new](https://vercel.com/new), importe o repositório. O Next.js é detectado automaticamente, **sem variáveis de ambiente**. Deploy -> URL `*.vercel.app`.

> Os dashboards usam **dados fictícios**, apenas para demonstrar o produto. Em projetos reais, os dados são do cliente, tratados conforme a LGPD.
