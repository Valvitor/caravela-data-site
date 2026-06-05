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
  { month: "Jan", site: 78000, mercadoLivre: 47000, shopee: 24000, amazon: 16000 },
  { month: "Fev", site: 82000, mercadoLivre: 49000, shopee: 26000, amazon: 17000 },
  { month: "Mar", site: 88000, mercadoLivre: 52000, shopee: 28000, amazon: 18000 },
  { month: "Abr", site: 91000, mercadoLivre: 54000, shopee: 29000, amazon: 19000 },
  { month: "Mai", site: 96000, mercadoLivre: 56000, shopee: 31000, amazon: 20000 },
  { month: "Jun", site: 99000, mercadoLivre: 57000, shopee: 33000, amazon: 21000 },
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

/* ===== Aprofundamento ===== */

/** Receita realizada vs meta */
export const receitaMeta: Row[] = [
  { month: "Jan", realizado: 165000, meta: 160000 },
  { month: "Fev", realizado: 174000, meta: 170000 },
  { month: "Mar", realizado: 186000, meta: 180000 },
  { month: "Abr", realizado: 193000, meta: 195000 },
  { month: "Mai", realizado: 203000, meta: 200000 },
  { month: "Jun", realizado: 210000, meta: 205000 },
  { month: "Jul", realizado: 207000, meta: 210000 },
  { month: "Ago", realizado: 219000, meta: 215000 },
  { month: "Set", realizado: 229000, meta: 230000 },
  { month: "Out", realizado: 239000, meta: 240000 },
  { month: "Nov", realizado: 292000, meta: 270000 },
  { month: "Dez", realizado: 312000, meta: 300000 },
];

export const receitaMetaSeries: SeriesDef[] = [
  { key: "realizado", name: "Realizado", color: brand.series.indigo },
  { key: "meta", name: "Meta", color: brand.series.slate },
];

/** Receita: clientes novos vs recorrentes (R$) */
export const novosRecorrentes: Row[] = [
  { month: "Jan", novos: 97000, recorrentes: 68000 },
  { month: "Fev", novos: 102000, recorrentes: 72000 },
  { month: "Mar", novos: 109000, recorrentes: 77000 },
  { month: "Abr", novos: 113000, recorrentes: 80000 },
  { month: "Mai", novos: 119000, recorrentes: 84000 },
  { month: "Jun", novos: 123000, recorrentes: 87000 },
  { month: "Jul", novos: 121000, recorrentes: 86000 },
  { month: "Ago", novos: 128000, recorrentes: 91000 },
  { month: "Set", novos: 132000, recorrentes: 97000 },
  { month: "Out", novos: 136000, recorrentes: 103000 },
  { month: "Nov", novos: 168000, recorrentes: 124000 },
  { month: "Dez", novos: 174000, recorrentes: 138000 },
];

export const novosRecorrentesSeries: SeriesDef[] = [
  { key: "recorrentes", name: "Recorrentes", color: brand.series.sage },
  { key: "novos", name: "Novos", color: brand.series.indigo },
];

/** Cobertura de estoque por categoria (dias) */
export const coberturaEstoque: Category[] = [
  { name: "Eletrônicos", value: 64 },
  { name: "Calçados", value: 51 },
  { name: "Skincare", value: 38 },
  { name: "Vestuário", value: 22 },
  { name: "Acessórios", value: 18 },
];

/** Taxa de devolução por categoria (%) */
export const devolucoes: Category[] = [
  { name: "Vestuário", value: 12 },
  { name: "Calçados", value: 9 },
  { name: "Eletrônicos", value: 6 },
  { name: "Acessórios", value: 4 },
  { name: "Skincare", value: 3 },
];

/* ===== Base para abas + filtros interativos ===== */

export type CategoriaProduto = "Skincare" | "Vestuário" | "Calçados" | "Acessórios" | "Eletrônicos";
export type CanalVenda = "Loja própria" | "Mercado Livre" | "Shopee" | "Amazon";
export type Dispositivo = "Mobile" | "Desktop" | "Tablet";
export type StatusProduto = "ativo" | "novo" | "ruptura";

export interface Produto {
  nome: string;
  categoria: CategoriaProduto;
  canal: CanalVenda;
  receita: number; // mensal, R$
  unidades: number;
  margem: number; // %
  estoqueDias: number;
  devolucao: number; // %
  status: StatusProduto;
}

/** Catálogo de SKUs (amostra) */
export const produtos: Produto[] = [
  { nome: "Kit Skincare", categoria: "Skincare", canal: "Loja própria", receita: 31200, unidades: 248, margem: 62, estoqueDias: 41, devolucao: 2, status: "ativo" },
  { nome: "Sérum Vitamina C", categoria: "Skincare", canal: "Loja própria", receita: 24800, unidades: 320, margem: 58, estoqueDias: 36, devolucao: 3, status: "ativo" },
  { nome: "Protetor Solar FPS70", categoria: "Skincare", canal: "Mercado Livre", receita: 21600, unidades: 410, margem: 49, estoqueDias: 29, devolucao: 2, status: "ativo" },
  { nome: "Hidratante Facial", categoria: "Skincare", canal: "Loja própria", receita: 18900, unidades: 372, margem: 54, estoqueDias: 33, devolucao: 3, status: "ativo" },
  { nome: "Máscara de Argila", categoria: "Skincare", canal: "Shopee", receita: 9800, unidades: 280, margem: 51, estoqueDias: 24, devolucao: 4, status: "ativo" },
  { nome: "Sérum Noturno", categoria: "Skincare", canal: "Loja própria", receita: 7200, unidades: 96, margem: 60, estoqueDias: 12, devolucao: 1, status: "novo" },
  { nome: "Camiseta Premium", categoria: "Vestuário", canal: "Loja própria", receita: 22400, unidades: 392, margem: 48, estoqueDias: 22, devolucao: 11, status: "ativo" },
  { nome: "Moletom Oversized", categoria: "Vestuário", canal: "Loja própria", receita: 27600, unidades: 276, margem: 45, estoqueDias: 28, devolucao: 13, status: "ativo" },
  { nome: "Calça Jeans Slim", categoria: "Vestuário", canal: "Mercado Livre", receita: 19800, unidades: 198, margem: 41, estoqueDias: 31, devolucao: 14, status: "ativo" },
  { nome: "Vestido Floral", categoria: "Vestuário", canal: "Shopee", receita: 12300, unidades: 164, margem: 47, estoqueDias: 19, devolucao: 16, status: "ativo" },
  { nome: "Jaqueta Corta-Vento", categoria: "Vestuário", canal: "Amazon", receita: 14700, unidades: 122, margem: 43, estoqueDias: 44, devolucao: 9, status: "ativo" },
  { nome: "Camisa de Linho", categoria: "Vestuário", canal: "Loja própria", receita: 8100, unidades: 92, margem: 50, estoqueDias: 17, devolucao: 8, status: "novo" },
  { nome: "Tênis Urban", categoria: "Calçados", canal: "Mercado Livre", receita: 28900, unidades: 214, margem: 35, estoqueDias: 51, devolucao: 9, status: "ativo" },
  { nome: "Bota de Couro", categoria: "Calçados", canal: "Loja própria", receita: 17600, unidades: 88, margem: 44, estoqueDias: 63, devolucao: 7, status: "ativo" },
  { nome: "Sandália Conforto", categoria: "Calçados", canal: "Shopee", receita: 11200, unidades: 224, margem: 38, estoqueDias: 26, devolucao: 6, status: "ativo" },
  { nome: "Tênis de Corrida", categoria: "Calçados", canal: "Amazon", receita: 23100, unidades: 168, margem: 33, estoqueDias: 58, devolucao: 8, status: "ativo" },
  { nome: "Sapatênis Casual", categoria: "Calçados", canal: "Mercado Livre", receita: 9400, unidades: 104, margem: 40, estoqueDias: 35, devolucao: 10, status: "ruptura" },
  { nome: "Mochila Trek 30L", categoria: "Acessórios", canal: "Loja própria", receita: 16800, unidades: 168, margem: 41, estoqueDias: 38, devolucao: 4, status: "ativo" },
  { nome: "Garrafa Térmica", categoria: "Acessórios", canal: "Shopee", receita: 13400, unidades: 446, margem: 55, estoqueDias: 21, devolucao: 3, status: "ativo" },
  { nome: "Boné Trucker", categoria: "Acessórios", canal: "Mercado Livre", receita: 6800, unidades: 272, margem: 52, estoqueDias: 18, devolucao: 3, status: "ativo" },
  { nome: "Óculos de Sol", categoria: "Acessórios", canal: "Loja própria", receita: 15200, unidades: 152, margem: 58, estoqueDias: 27, devolucao: 5, status: "ativo" },
  { nome: "Carteira de Couro", categoria: "Acessórios", canal: "Amazon", receita: 7900, unidades: 132, margem: 49, estoqueDias: 33, devolucao: 4, status: "ativo" },
  { nome: "Relógio Minimal", categoria: "Acessórios", canal: "Loja própria", receita: 19600, unidades: 98, margem: 46, estoqueDias: 41, devolucao: 5, status: "ativo" },
  { nome: "Fone Bluetooth", categoria: "Eletrônicos", canal: "Mercado Livre", receita: 26400, unidades: 264, margem: 28, estoqueDias: 47, devolucao: 6, status: "ativo" },
  { nome: "Smartwatch Fit", categoria: "Eletrônicos", canal: "Amazon", receita: 31800, unidades: 159, margem: 24, estoqueDias: 62, devolucao: 7, status: "ativo" },
  { nome: "Caixa de Som BT", categoria: "Eletrônicos", canal: "Mercado Livre", receita: 18200, unidades: 142, margem: 26, estoqueDias: 54, devolucao: 5, status: "ativo" },
  { nome: "Carregador Turbo", categoria: "Eletrônicos", canal: "Shopee", receita: 8600, unidades: 344, margem: 30, estoqueDias: 39, devolucao: 4, status: "ativo" },
  { nome: "Webcam HD", categoria: "Eletrônicos", canal: "Amazon", receita: 10400, unidades: 104, margem: 22, estoqueDias: 71, devolucao: 6, status: "ruptura" },
  { nome: "Power Bank 20k", categoria: "Eletrônicos", canal: "Mercado Livre", receita: 12900, unidades: 215, margem: 27, estoqueDias: 44, devolucao: 5, status: "ativo" },
  { nome: "Mouse Gamer", categoria: "Eletrônicos", canal: "Loja própria", receita: 6300, unidades: 84, margem: 31, estoqueDias: 15, devolucao: 4, status: "novo" },
  { nome: "Smart Lâmpada", categoria: "Eletrônicos", canal: "Shopee", receita: 5400, unidades: 180, margem: 29, estoqueDias: 22, devolucao: 5, status: "ativo" },
  { nome: "Suporte Notebook", categoria: "Acessórios", canal: "Mercado Livre", receita: 4900, unidades: 140, margem: 44, estoqueDias: 19, devolucao: 3, status: "ativo" },
];

/** Detalhe por canal / marketplace (snapshot mensal) */
export const canaisDetalhe: Row[] = [
  { canal: "Loja própria", receita: 141000, pedidos: 262, ticket: 538, cac: 58, ltv: 590, roas: 5.4, conversao: 3.2, investimento: 16000 },
  { canal: "Mercado Livre", receita: 82000, pedidos: 168, ticket: 488, cac: 79, ltv: 470, roas: 4.0, conversao: 2.1, investimento: 14000 },
  { canal: "Shopee", receita: 51000, pedidos: 119, ticket: 429, cac: 88, ltv: 360, roas: 3.3, conversao: 1.8, investimento: 9000 },
  { canal: "Amazon", receita: 38000, pedidos: 71, ticket: 535, cac: 84, ltv: 430, roas: 3.6, conversao: 2.0, investimento: 7000 },
];

/** Sessões e conversão por dispositivo (snapshot mensal) */
export const dispositivos: Row[] = [
  { dispositivo: "Mobile", sessoes: 56000, pedidos: 952, conversao: 1.7, ticket: 498, receita: 474000 },
  { dispositivo: "Desktop", sessoes: 24000, pedidos: 864, conversao: 3.6, ticket: 612, receita: 529000 },
  { dispositivo: "Tablet", sessoes: 6000, pedidos: 144, conversao: 2.4, ticket: 540, receita: 78000 },
];

/** Evolução de vendas: receita e pedidos (12m) */
export const evolucaoVendas: Row[] = [
  { month: "Jan", receita: 165000, pedidos: 306 },
  { month: "Fev", receita: 174000, pedidos: 323 },
  { month: "Mar", receita: 186000, pedidos: 345 },
  { month: "Abr", receita: 193000, pedidos: 358 },
  { month: "Mai", receita: 203000, pedidos: 377 },
  { month: "Jun", receita: 210000, pedidos: 390 },
  { month: "Jul", receita: 207000, pedidos: 384 },
  { month: "Ago", receita: 219000, pedidos: 406 },
  { month: "Set", receita: 229000, pedidos: 425 },
  { month: "Out", receita: 239000, pedidos: 443 },
  { month: "Nov", receita: 292000, pedidos: 542 },
  { month: "Dez", receita: 312000, pedidos: 579 },
];

export const evolucaoVendasSeries: SeriesDef[] = [
  { key: "receita", name: "Receita", color: brand.series.indigo },
];

/** Mapa canal -> chave da série mensal em `canais` */
export const canalKey: Record<CanalVenda, string> = {
  "Loja própria": "site",
  "Mercado Livre": "mercadoLivre",
  Shopee: "shopee",
  Amazon: "amazon",
};
