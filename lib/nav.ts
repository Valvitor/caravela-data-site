export const mainNav = [
  { label: "Como funciona", href: "/como-funciona" },
  { label: "Setores", href: "/setores" },
  { label: "Contato", href: "/contato" },
] as const;

export const sectors = [
  {
    slug: "contabilidade",
    name: "Contabilidade",
    href: "/dashboards/contabilidade",
    featured: true,
    rank: 1,
    score: "4,30",
    headline: "Vire o BI que o escritório revende a dezenas de clientes",
    angle:
      "O escritório contábil é um canal de distribuição: uma integração, dezenas de PMEs atendidas em modelo white-label.",
    proof: "98 mil escritórios no Brasil · churn ~2%",
    systems: ["Conta Azul", "Bling", "Omie", "Nibo"],
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    href: "/dashboards/ecommerce",
    featured: false,
    rank: 2,
    score: "4,05",
    headline: "Margem, canais e aquisição numa visão só",
    angle:
      "CAC, LTV, ROAS e margem por SKU consolidados de marketplaces, loja e mídia paga.",
    proof: "Mercado de R$ 234,9 bi em 2025 (+15,3%)",
    systems: ["Nuvemshop", "VTEX", "Shopify", "Bling", "Tiny"],
  },
  {
    slug: "saude",
    name: "Saúde / Clínicas",
    href: "/dashboards/saude",
    featured: false,
    rank: 3,
    score: "3,95",
    headline: "Recupere o faturamento que o no-show leva embora",
    angle:
      "No-show, ocupação de agenda e margem por especialidade — o ROI mais fácil de provar.",
    proof: "No-show consome 15-30% do faturamento",
    systems: ["iClinic", "Clinicorp"],
  },
] as const;

export type Sector = (typeof sectors)[number];
