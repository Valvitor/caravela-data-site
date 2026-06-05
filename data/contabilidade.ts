import { brand } from "@/lib/brand";
import type { Category, Kpi, Row, SeriesDef } from "./types";

export const client = {
  name: "Contábil Marília & Associados",
  initials: "CM",
  sector: "Escritório de contabilidade",
  accent: brand.series.indigo,
  systems: ["Conta Azul", "Bling", "Omie", "Nibo"],
};

export const kpis: Kpi[] = [
  { label: "Receita do mês", value: 187400, format: "brl", delta: 1.6, goodWhenUp: true, hint: "Honorários + serviços · Dez/2025" },
  { label: "Margem líquida", value: 18.7, format: "pct", delta: 0.9, goodWhenUp: true, hint: "Lucro sobre receita" },
  { label: "Inadimplência", value: 6.8, format: "pct", delta: -0.9, goodWhenUp: false, hint: "Contas a receber vencidas" },
  { label: "PMEs atendidas", value: 142, format: "int", delta: 3.6, goodWhenUp: true, hint: "Clientes no portfólio (white-label)" },
];

/** DRE mensal — receita, custo e lucro */
export const dre: Row[] = [
  { month: "Jan", receita: 152400, custo: 124100, lucro: 28300 },
  { month: "Fev", receita: 148900, custo: 122600, lucro: 26300 },
  { month: "Mar", receita: 161200, custo: 129400, lucro: 31800 },
  { month: "Abr", receita: 158700, custo: 128300, lucro: 30400 },
  { month: "Mai", receita: 167500, custo: 133200, lucro: 34300 },
  { month: "Jun", receita: 172100, custo: 137000, lucro: 35100 },
  { month: "Jul", receita: 169300, custo: 135400, lucro: 33900 },
  { month: "Ago", receita: 178200, custo: 140100, lucro: 38100 },
  { month: "Set", receita: 181000, custo: 144200, lucro: 36800 },
  { month: "Out", receita: 175600, custo: 141300, lucro: 34300 },
  { month: "Nov", receita: 184300, custo: 146500, lucro: 37800 },
  { month: "Dez", receita: 187400, custo: 152300, lucro: 35100 },
];

export const dreSeries: SeriesDef[] = [
  { key: "receita", name: "Receita", color: brand.series.indigo },
  { key: "custo", name: "Custo", color: brand.series.slate },
  { key: "lucro", name: "Lucro", color: brand.series.sage },
];

/** Fluxo de caixa — entradas vs saídas */
export const fluxoCaixa: Row[] = [
  { month: "Jan", entradas: 149000, saidas: 131000 },
  { month: "Fev", entradas: 151000, saidas: 128000 },
  { month: "Mar", entradas: 158000, saidas: 134000 },
  { month: "Abr", entradas: 162000, saidas: 139000 },
  { month: "Mai", entradas: 165000, saidas: 141000 },
  { month: "Jun", entradas: 170000, saidas: 144000 },
  { month: "Jul", entradas: 168000, saidas: 147000 },
  { month: "Ago", entradas: 176000, saidas: 149000 },
  { month: "Set", entradas: 179000, saidas: 152000 },
  { month: "Out", entradas: 174000, saidas: 150000 },
  { month: "Nov", entradas: 182000, saidas: 153000 },
  { month: "Dez", entradas: 188000, saidas: 159000 },
];

export const fluxoSeries: SeriesDef[] = [
  { key: "entradas", name: "Entradas", color: brand.series.sage },
  { key: "saidas", name: "Saídas", color: brand.series.coral },
];

/** Aging de contas a receber */
export const aging: Category[] = [
  { name: "A vencer", value: 96400 },
  { name: "1-30 dias", value: 38200 },
  { name: "31-60 dias", value: 14100 },
  { name: "60+ dias", value: 8900 },
];

/** Margem por cliente / centro de custo (top 6) */
export const margemCliente: Category[] = [
  { name: "Comércio Ferreira", value: 24 },
  { name: "Padaria Real", value: 21 },
  { name: "AutoPeças Sul", value: 19 },
  { name: "Studio Vitta", value: 17 },
  { name: "TransLog Cargas", value: 14 },
  { name: "Mercado Bom Preço", value: 11 },
];

/** Composição de despesas (%) */
export const despesas: Category[] = [
  { name: "Pessoal", value: 52 },
  { name: "Impostos", value: 18 },
  { name: "Software", value: 12 },
  { name: "Estrutura", value: 10 },
  { name: "Marketing", value: 5 },
  { name: "Outros", value: 3 },
];

/* ===== Aprofundamento ===== */

/** Resultado por centro de custo (tabela) */
export const centroCusto: Row[] = [
  { centro: "Fiscal", receita: 64200, margem: 22 },
  { centro: "Contábil", receita: 58100, margem: 19 },
  { centro: "Dep. Pessoal", receita: 40800, margem: 15 },
  { centro: "Consultoria", receita: 24300, margem: 31 },
];

/** Desempenho por gestor (tabela) */
export const gestores: Row[] = [
  { gestor: "Ana Souza", clientes: 41, receita: 56200, inad: 4.2 },
  { gestor: "Bruno Lima", clientes: 36, receita: 48800, inad: 6.1 },
  { gestor: "Carla Dias", clientes: 34, receita: 45100, inad: 5.0 },
  { gestor: "Diego Alves", clientes: 31, receita: 37300, inad: 9.3 },
];

/** Carteira de clientes: novos vs cancelados */
export const carteira: Row[] = [
  { month: "Jul", novos: 6, cancelados: 2 },
  { month: "Ago", novos: 8, cancelados: 3 },
  { month: "Set", novos: 5, cancelados: 2 },
  { month: "Out", novos: 7, cancelados: 4 },
  { month: "Nov", novos: 9, cancelados: 2 },
  { month: "Dez", novos: 6, cancelados: 3 },
];

export const carteiraSeries: SeriesDef[] = [
  { key: "novos", name: "Novos", color: brand.series.sage },
  { key: "cancelados", name: "Cancelados", color: brand.series.coral },
];

/** Mix de honorários por tipo de serviço (%) */
export const mixHonorarios: Category[] = [
  { name: "Contábil", value: 38 },
  { name: "Fiscal", value: 30 },
  { name: "Dep. Pessoal", value: 20 },
  { name: "Consultoria", value: 12 },
];
