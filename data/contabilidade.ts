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

/* ===== Base para abas + filtros interativos ===== */

export type Regime = "Simples" | "Presumido" | "Real";
export type Segmento = "Comércio" | "Serviços" | "Indústria" | "Saúde" | "Construção";
export type Porte = "MEI" | "ME" | "EPP";
export type StatusCliente = "ativo" | "novo" | "cancelado";

export interface Cliente {
  nome: string;
  gestor: string;
  regime: Regime;
  segmento: Segmento;
  porte: Porte;
  honorario: number; // mensal, R$
  margem: number; // %
  inadimplencia: number; // %
  status: StatusCliente;
  mesesCliente: number;
}

export const gestoresNomes = ["Ana Souza", "Bruno Lima", "Carla Dias", "Diego Alves"] as const;

/** Carteira de PMEs atendidas pelo escritório (white-label) */
export const clientes: Cliente[] = [
  { nome: "Comércio Ferreira", gestor: "Ana Souza", regime: "Simples", segmento: "Comércio", porte: "EPP", honorario: 2800, margem: 24, inadimplencia: 0, status: "ativo", mesesCliente: 48 },
  { nome: "Padaria Real", gestor: "Ana Souza", regime: "Simples", segmento: "Comércio", porte: "ME", honorario: 1200, margem: 21, inadimplencia: 0, status: "ativo", mesesCliente: 36 },
  { nome: "AutoPeças Sul", gestor: "Bruno Lima", regime: "Presumido", segmento: "Comércio", porte: "EPP", honorario: 3400, margem: 19, inadimplencia: 8, status: "ativo", mesesCliente: 41 },
  { nome: "Studio Vitta", gestor: "Carla Dias", regime: "Simples", segmento: "Saúde", porte: "ME", honorario: 1600, margem: 17, inadimplencia: 0, status: "ativo", mesesCliente: 22 },
  { nome: "TransLog Cargas", gestor: "Diego Alves", regime: "Real", segmento: "Serviços", porte: "EPP", honorario: 4600, margem: 14, inadimplencia: 15, status: "ativo", mesesCliente: 30 },
  { nome: "Mercado Bom Preço", gestor: "Diego Alves", regime: "Presumido", segmento: "Comércio", porte: "EPP", honorario: 3100, margem: 11, inadimplencia: 22, status: "ativo", mesesCliente: 27 },
  { nome: "Café Aurora", gestor: "Ana Souza", regime: "Simples", segmento: "Serviços", porte: "ME", honorario: 980, margem: 26, inadimplencia: 0, status: "ativo", mesesCliente: 19 },
  { nome: "Construtora Horizonte", gestor: "Bruno Lima", regime: "Real", segmento: "Construção", porte: "EPP", honorario: 4800, margem: 13, inadimplencia: 6, status: "ativo", mesesCliente: 33 },
  { nome: "Marcenaria Castro", gestor: "Carla Dias", regime: "Simples", segmento: "Indústria", porte: "ME", honorario: 1450, margem: 18, inadimplencia: 0, status: "ativo", mesesCliente: 15 },
  { nome: "Clínica Bem Viver", gestor: "Carla Dias", regime: "Presumido", segmento: "Saúde", porte: "EPP", honorario: 3600, margem: 20, inadimplencia: 4, status: "ativo", mesesCliente: 25 },
  { nome: "Pet Shop Amigo Fiel", gestor: "Ana Souza", regime: "Simples", segmento: "Comércio", porte: "ME", honorario: 1100, margem: 23, inadimplencia: 0, status: "ativo", mesesCliente: 12 },
  { nome: "Academia Pulse", gestor: "Diego Alves", regime: "Simples", segmento: "Serviços", porte: "ME", honorario: 1350, margem: 16, inadimplencia: 11, status: "ativo", mesesCliente: 18 },
  { nome: "Ótica Visão Clara", gestor: "Bruno Lima", regime: "Simples", segmento: "Comércio", porte: "ME", honorario: 1250, margem: 22, inadimplencia: 0, status: "ativo", mesesCliente: 29 },
  { nome: "Metalúrgica Aço Forte", gestor: "Bruno Lima", regime: "Real", segmento: "Indústria", porte: "EPP", honorario: 4400, margem: 12, inadimplencia: 9, status: "ativo", mesesCliente: 44 },
  { nome: "Restaurante Sabor & Arte", gestor: "Ana Souza", regime: "Presumido", segmento: "Serviços", porte: "ME", honorario: 1700, margem: 15, inadimplencia: 5, status: "ativo", mesesCliente: 21 },
  { nome: "Loja Bella Moda", gestor: "Carla Dias", regime: "Simples", segmento: "Comércio", porte: "ME", honorario: 1150, margem: 25, inadimplencia: 0, status: "ativo", mesesCliente: 17 },
  { nome: "Engenharia Vértice", gestor: "Diego Alves", regime: "Real", segmento: "Construção", porte: "EPP", honorario: 4200, margem: 14, inadimplencia: 7, status: "ativo", mesesCliente: 38 },
  { nome: "Distribuidora Norte", gestor: "Bruno Lima", regime: "Presumido", segmento: "Comércio", porte: "EPP", honorario: 3300, margem: 17, inadimplencia: 13, status: "ativo", mesesCliente: 31 },
  { nome: "Salão Charme", gestor: "Ana Souza", regime: "Simples", segmento: "Serviços", porte: "MEI", honorario: 620, margem: 28, inadimplencia: 0, status: "ativo", mesesCliente: 9 },
  { nome: "Farmácia Saúde Já", gestor: "Carla Dias", regime: "Simples", segmento: "Saúde", porte: "EPP", honorario: 2600, margem: 19, inadimplencia: 0, status: "ativo", mesesCliente: 34 },
  { nome: "Tech Solutions TI", gestor: "Diego Alves", regime: "Presumido", segmento: "Serviços", porte: "ME", honorario: 2200, margem: 30, inadimplencia: 0, status: "ativo", mesesCliente: 23 },
  { nome: "Madeireira Tronco", gestor: "Bruno Lima", regime: "Real", segmento: "Indústria", porte: "EPP", honorario: 3900, margem: 12, inadimplencia: 18, status: "ativo", mesesCliente: 26 },
  { nome: "Buffet Encanto", gestor: "Ana Souza", regime: "Simples", segmento: "Serviços", porte: "ME", honorario: 1300, margem: 16, inadimplencia: 6, status: "ativo", mesesCliente: 14 },
  { nome: "Auto Center Veloz", gestor: "Carla Dias", regime: "Simples", segmento: "Serviços", porte: "ME", honorario: 1400, margem: 18, inadimplencia: 0, status: "ativo", mesesCliente: 20 },
  { nome: "Imobiliária Lar Feliz", gestor: "Diego Alves", regime: "Presumido", segmento: "Serviços", porte: "EPP", honorario: 2900, margem: 21, inadimplencia: 4, status: "ativo", mesesCliente: 28 },
  { nome: "Sorveteria Gelato", gestor: "Ana Souza", regime: "Simples", segmento: "Comércio", porte: "MEI", honorario: 580, margem: 27, inadimplencia: 0, status: "ativo", mesesCliente: 7 },
  { nome: "Confecções Linha Fina", gestor: "Bruno Lima", regime: "Simples", segmento: "Indústria", porte: "ME", honorario: 1550, margem: 17, inadimplencia: 9, status: "ativo", mesesCliente: 24 },
  { nome: "Clínica OdontoArt", gestor: "Carla Dias", regime: "Presumido", segmento: "Saúde", porte: "ME", honorario: 1900, margem: 22, inadimplencia: 0, status: "ativo", mesesCliente: 16 },
  { nome: "Posto Estrada Real", gestor: "Diego Alves", regime: "Real", segmento: "Comércio", porte: "EPP", honorario: 4100, margem: 9, inadimplencia: 14, status: "ativo", mesesCliente: 35 },
  { nome: "Escola Saber Mais", gestor: "Ana Souza", regime: "Presumido", segmento: "Serviços", porte: "EPP", honorario: 2700, margem: 19, inadimplencia: 3, status: "ativo", mesesCliente: 32 },
  { nome: "Floricultura Bela Flor", gestor: "Carla Dias", regime: "Simples", segmento: "Comércio", porte: "MEI", honorario: 640, margem: 26, inadimplencia: 0, status: "novo", mesesCliente: 2 },
  { nome: "Studio Fotografia Luz", gestor: "Ana Souza", regime: "Simples", segmento: "Serviços", porte: "MEI", honorario: 680, margem: 29, inadimplencia: 0, status: "novo", mesesCliente: 1 },
  { nome: "Distribuidora Vale Verde", gestor: "Bruno Lima", regime: "Presumido", segmento: "Comércio", porte: "ME", honorario: 1800, margem: 18, inadimplencia: 0, status: "novo", mesesCliente: 3 },
  { nome: "Climatização Ar Puro", gestor: "Diego Alves", regime: "Simples", segmento: "Serviços", porte: "ME", honorario: 1500, margem: 20, inadimplencia: 0, status: "novo", mesesCliente: 2 },
  { nome: "Mercadinho Esquina", gestor: "Carla Dias", regime: "Simples", segmento: "Comércio", porte: "ME", honorario: 1050, margem: 24, inadimplencia: 0, status: "novo", mesesCliente: 1 },
  { nome: "Construções Pilar", gestor: "Bruno Lima", regime: "Real", segmento: "Construção", porte: "EPP", honorario: 3800, margem: 13, inadimplencia: 0, status: "cancelado", mesesCliente: 11 },
  { nome: "Bar do Zé", gestor: "Diego Alves", regime: "Simples", segmento: "Serviços", porte: "MEI", honorario: 560, margem: 19, inadimplencia: 25, status: "cancelado", mesesCliente: 6 },
  { nome: "Confeitaria Doce Lar", gestor: "Ana Souza", regime: "Simples", segmento: "Comércio", porte: "MEI", honorario: 600, margem: 22, inadimplencia: 0, status: "cancelado", mesesCliente: 8 },
  { nome: "Transportadora Ágil", gestor: "Carla Dias", regime: "Presumido", segmento: "Serviços", porte: "EPP", honorario: 3000, margem: 12, inadimplencia: 20, status: "cancelado", mesesCliente: 13 },
];

/** Evolução de receita total vs MRR recorrente (12m) */
export const evolucaoReceita: Row[] = [
  { month: "Jan", receita: 152400, mrr: 96000 },
  { month: "Fev", receita: 148900, mrr: 97500 },
  { month: "Mar", receita: 161200, mrr: 99800 },
  { month: "Abr", receita: 158700, mrr: 101200 },
  { month: "Mai", receita: 167500, mrr: 103900 },
  { month: "Jun", receita: 172100, mrr: 106400 },
  { month: "Jul", receita: 169300, mrr: 107800 },
  { month: "Ago", receita: 178200, mrr: 110100 },
  { month: "Set", receita: 181000, mrr: 112000 },
  { month: "Out", receita: 175600, mrr: 113200 },
  { month: "Nov", receita: 184300, mrr: 115400 },
  { month: "Dez", receita: 187400, mrr: 117600 },
];

export const evolucaoSeries: SeriesDef[] = [
  { key: "receita", name: "Receita total", color: brand.series.indigo },
  { key: "mrr", name: "MRR (recorrente)", color: brand.series.sage },
];

/** Inadimplência mensal (%) (12m) */
export const inadimplenciaMensal: Row[] = [
  { month: "Jan", inad: 8.1 },
  { month: "Fev", inad: 7.9 },
  { month: "Mar", inad: 7.6 },
  { month: "Abr", inad: 7.7 },
  { month: "Mai", inad: 7.4 },
  { month: "Jun", inad: 7.2 },
  { month: "Jul", inad: 7.3 },
  { month: "Ago", inad: 7.0 },
  { month: "Set", inad: 6.9 },
  { month: "Out", inad: 7.1 },
  { month: "Nov", inad: 6.7 },
  { month: "Dez", inad: 6.8 },
];

export const inadSeries: SeriesDef[] = [
  { key: "inad", name: "Inadimplência", color: brand.series.amber },
];

/** Contas a pagar — aging (R$) */
export const contasPagar: Category[] = [
  { name: "A vencer", value: 71200 },
  { name: "1-30 dias", value: 24800 },
  { name: "31-60 dias", value: 9100 },
  { name: "60+ dias", value: 3400 },
];

/** Obrigações entregues: no prazo vs em atraso (contagem, 12m) */
export const obrigacoesMensal: Row[] = [
  { month: "Jan", noPrazo: 286, atraso: 22 },
  { month: "Fev", noPrazo: 291, atraso: 19 },
  { month: "Mar", noPrazo: 304, atraso: 24 },
  { month: "Abr", noPrazo: 298, atraso: 16 },
  { month: "Mai", noPrazo: 312, atraso: 14 },
  { month: "Jun", noPrazo: 319, atraso: 12 },
  { month: "Jul", noPrazo: 308, atraso: 18 },
  { month: "Ago", noPrazo: 324, atraso: 11 },
  { month: "Set", noPrazo: 331, atraso: 13 },
  { month: "Out", noPrazo: 327, atraso: 15 },
  { month: "Nov", noPrazo: 338, atraso: 9 },
  { month: "Dez", noPrazo: 342, atraso: 10 },
];

export const obrigacoesSeries: SeriesDef[] = [
  { key: "noPrazo", name: "No prazo", color: brand.series.sage },
  { key: "atraso", name: "Em atraso", color: brand.series.coral },
];

/** Obrigações por tipo (tabela) */
export const obrigacoesTipo: Row[] = [
  { tipo: "Guias (DAS/DARF)", entregues: 148, noPrazo: 97 },
  { tipo: "SPED Fiscal/Contribuições", entregues: 86, noPrazo: 95 },
  { tipo: "Folha e eSocial", entregues: 64, noPrazo: 98 },
  { tipo: "Declarações acessórias", entregues: 44, noPrazo: 91 },
];

/** Operação por gestor (tabela) */
export const operacaoGestores: Row[] = [
  { gestor: "Ana Souza", clientes: 41, obrigacoes: 118, noPrazo: 98, sla: 4 },
  { gestor: "Bruno Lima", clientes: 36, obrigacoes: 104, noPrazo: 95, sla: 6 },
  { gestor: "Carla Dias", clientes: 34, obrigacoes: 96, noPrazo: 97, sla: 5 },
  { gestor: "Diego Alves", clientes: 31, obrigacoes: 88, noPrazo: 92, sla: 9 },
];
