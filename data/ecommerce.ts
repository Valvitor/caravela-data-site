import { brand } from "@/lib/brand";
import type { Category, FunnelStep, Kpi, Row, SeriesDef } from "./types";

export const client = {
  name: "Lumora Store",
  initials: "LS",
  sector: "E-commerce de lifestyle",
  accent: brand.series.coral,
  systems: ["Nuvemshop", "VTEX", "Shopify", "Bling", "Tiny"],
};

export const kpis: Kpi[] = [
  { label: "Receita do mês", value: 412300, format: "brl", delta: 12.4, goodWhenUp: true, hint: "GMV líquido · Dez/2025" },
  { label: "Ticket médio", value: 539, format: "brl", delta: 4.1, goodWhenUp: true, hint: "Benchmark do setor: ~R$ 539" },
  { label: "Conversão", value: 2.4, format: "pct", delta: 0.3, goodWhenUp: true, hint: "Sessões que viram pedido" },
  { label: "ROAS", value: 4.2, format: "ratio", delta: 0.6, goodWhenUp: true, hint: "Retorno sobre investimento em mídia" },
];

/** CAC x LTV ao longo do ano */
export const cacLtv: Row[] = [
  { month: "Jan", cac: 94, ltv: 388 },
  { month: "Fev", cac: 91, ltv: 401 },
  { month: "Mar", cac: 88, ltv: 412 },
  { month: "Abr", cac: 86, ltv: 430 },
  { month: "Mai", cac: 83, ltv: 447 },
  { month: "Jun", cac: 85, ltv: 459 },
  { month: "Jul", cac: 80, ltv: 468 },
  { month: "Ago", cac: 78, ltv: 482 },
  { month: "Set", cac: 79, ltv: 495 },
  { month: "Out", cac: 76, ltv: 503 },
  { month: "Nov", cac: 74, ltv: 518 },
  { month: "Dez", cac: 72, ltv: 531 },
];

export const cacLtvSeries: SeriesDef[] = [
  { key: "ltv", name: "LTV", color: brand.series.indigo },
  { key: "cac", name: "CAC", color: brand.series.coral },
];

/** Vendas por canal / marketplace (R$) */
export const canais: Row[] = [
  { month: "Jul", site: 96000, mercadoLivre: 58000, shopee: 31000, amazon: 22000 },
  { month: "Ago", site: 101000, mercadoLivre: 61000, shopee: 33000, amazon: 24000 },
  { month: "Set", site: 108000, mercadoLivre: 59000, shopee: 36000, amazon: 26000 },
  { month: "Out", site: 112000, mercadoLivre: 64000, shopee: 38000, amazon: 25000 },
  { month: "Nov", site: 134000, mercadoLivre: 78000, shopee: 47000, amazon: 33000 },
  { month: "Dez", site: 141000, mercadoLivre: 82000, shopee: 51000, amazon: 38000 },
];

export const canaisSeries: SeriesDef[] = [
  { key: "site", name: "Loja própria", color: brand.series.indigo },
  { key: "mercadoLivre", name: "Mercado Livre", color: brand.series.amber },
  { key: "shopee", name: "Shopee", color: brand.series.coral },
  { key: "amazon", name: "Amazon", color: brand.series.sage },
];

/** Funil de conversão */
export const funil: FunnelStep[] = [
  { stage: "Visitas", value: 86000 },
  { stage: "Produto", value: 31200 },
  { stage: "Carrinho", value: 18200 },
  { stage: "Checkout", value: 7400 },
  { stage: "Compra", value: 4100 },
];

/** Margem por SKU (top, %) */
export const margemSku: Category[] = [
  { name: "Kit Skincare", value: 62 },
  { name: "Garrafa Térmica", value: 55 },
  { name: "Camiseta Premium", value: 48 },
  { name: "Mochila Trek", value: 41 },
  { name: "Tênis Urban", value: 35 },
  { name: "Fone Bluetooth", value: 28 },
];

/** Investimento de mídia por canal (%) */
export const roasCanal: Category[] = [
  { name: "Google Ads", value: 38 },
  { name: "Meta Ads", value: 33 },
  { name: "TikTok Ads", value: 16 },
  { name: "Orgânico", value: 13 },
];
