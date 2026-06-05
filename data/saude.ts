import { brand } from "@/lib/brand";
import type { Category, FunnelStep, Kpi, Row, SeriesDef } from "./types";

export const client = {
  name: "Clínica Vértice",
  initials: "CV",
  sector: "Clínica odontológica",
  accent: brand.series.sage,
  systems: ["Clinicorp", "iClinic"],
};

export const kpis: Kpi[] = [
  { label: "Taxa de no-show", value: 14.2, format: "pct", delta: -2.1, goodWhenUp: false, hint: "No-show consome 15-30% do faturamento" },
  { label: "Inadimplência", value: 9.1, format: "pct", delta: -1.3, goodWhenUp: false, hint: "Parcelas de tratamento vencidas" },
  { label: "Ticket médio", value: 320, format: "brl", delta: 3.0, goodWhenUp: true, hint: "Por atendimento" },
  { label: "Ocupação de agenda", value: 78, format: "pct", delta: 4.0, goodWhenUp: true, hint: "Horários preenchidos" },
];

/** No-show mensal (%) — banda de referência 15-30% renderizada no gráfico */
export const noShow: Row[] = [
  { month: "Jan", noShow: 22.4 },
  { month: "Fev", noShow: 21.1 },
  { month: "Mar", noShow: 20.3 },
  { month: "Abr", noShow: 19.0 },
  { month: "Mai", noShow: 18.2 },
  { month: "Jun", noShow: 17.5 },
  { month: "Jul", noShow: 17.1 },
  { month: "Ago", noShow: 16.3 },
  { month: "Set", noShow: 15.6 },
  { month: "Out", noShow: 15.0 },
  { month: "Nov", noShow: 14.6 },
  { month: "Dez", noShow: 14.2 },
];

export const noShowSeries: SeriesDef[] = [
  { key: "noShow", name: "No-show", color: brand.series.coral },
];

/** Ocupação de agenda (%) */
export const ocupacao: Row[] = [
  { month: "Jan", ocupacao: 66 },
  { month: "Fev", ocupacao: 68 },
  { month: "Mar", ocupacao: 70 },
  { month: "Abr", ocupacao: 69 },
  { month: "Mai", ocupacao: 72 },
  { month: "Jun", ocupacao: 74 },
  { month: "Jul", ocupacao: 73 },
  { month: "Ago", ocupacao: 76 },
  { month: "Set", ocupacao: 77 },
  { month: "Out", ocupacao: 76 },
  { month: "Nov", ocupacao: 79 },
  { month: "Dez", ocupacao: 78 },
];

export const ocupacaoSeries: SeriesDef[] = [
  { key: "ocupacao", name: "Ocupação", color: brand.series.sage },
];

/** Ticket médio por especialidade (R$) */
export const ticketEspecialidade: Category[] = [
  { name: "Implantes", value: 1180 },
  { name: "Ortodontia", value: 540 },
  { name: "Estética", value: 420 },
  { name: "Clínico geral", value: 180 },
  { name: "Exames", value: 140 },
];

/** Margem por procedimento (top, %) */
export const margemProcedimento: Category[] = [
  { name: "Clareamento", value: 64 },
  { name: "Implante", value: 58 },
  { name: "Ortodontia", value: 47 },
  { name: "Limpeza", value: 39 },
  { name: "Restauração", value: 33 },
];

/** Receita por especialidade (%) */
export const receitaEspecialidade: Category[] = [
  { name: "Ortodontia", value: 34 },
  { name: "Implantes", value: 27 },
  { name: "Clínico geral", value: 16 },
  { name: "Estética", value: 14 },
  { name: "Exames", value: 9 },
];

/** Faixa de referência do no-show no setor (%) */
export const noShowRef = { min: 15, max: 30 };

/* ===== Aprofundamento ===== */

/** Produção por profissional (tabela) */
export const producaoProfissional: Row[] = [
  { profissional: "Dr. Marcos", especialidade: "Implantes", producao: 62400, noshow: 9 },
  { profissional: "Dra. Helena", especialidade: "Ortodontia", producao: 48100, noshow: 11 },
  { profissional: "Dr. Rafael", especialidade: "Estética", producao: 35200, noshow: 14 },
  { profissional: "Dra. Paula", especialidade: "Clínico geral", producao: 27800, noshow: 18 },
];

/** Conversão de orçamentos */
export const conversaoOrcamentos: FunnelStep[] = [
  { stage: "Orçados", value: 320 },
  { stage: "Aprovados", value: 196 },
  { stage: "Iniciados", value: 168 },
  { stage: "Concluídos", value: 142 },
];

/** Origem dos pacientes (%) */
export const origemPacientes: Category[] = [
  { name: "Indicação", value: 42 },
  { name: "Google", value: 24 },
  { name: "Convênio", value: 18 },
  { name: "Instagram", value: 16 },
];

/** Inadimplência mensal (%) */
export const inadimplenciaMensal: Row[] = [
  { month: "Jan", inad: 16.4 },
  { month: "Fev", inad: 15.8 },
  { month: "Mar", inad: 15.1 },
  { month: "Abr", inad: 14.7 },
  { month: "Mai", inad: 14.2 },
  { month: "Jun", inad: 14.0 },
  { month: "Jul", inad: 13.8 },
  { month: "Ago", inad: 12.9 },
  { month: "Set", inad: 11.7 },
  { month: "Out", inad: 10.8 },
  { month: "Nov", inad: 9.8 },
  { month: "Dez", inad: 9.1 },
];

export const inadimplenciaSeries: SeriesDef[] = [
  { key: "inad", name: "Inadimplência", color: brand.series.amber },
];

/* ===== Base para abas + filtros interativos ===== */

export type EspecialidadeOdonto =
  | "Ortodontia"
  | "Implantes"
  | "Estética"
  | "Clínico geral"
  | "Endodontia"
  | "Periodontia";
export type Convenio =
  | "Particular"
  | "Odontoprev"
  | "Amil Dental"
  | "Bradesco Dental"
  | "Unimed Odonto"
  | "SulAmérica";

export interface Profissional {
  nome: string;
  especialidade: EspecialidadeOdonto;
  producao: number; // mensal, R$
  noShow: number; // %
  ocupacao: number; // %
  ticket: number; // R$
  conversao: number; // % de orçamentos
  status: "ativo" | "novo";
}

export interface Procedimento {
  nome: string;
  especialidade: EspecialidadeOdonto;
  receita: number; // mensal, R$
  margem: number; // %
  volume: number; // atendimentos/mês
  ticket: number; // R$
}

/** Corpo clínico */
export const profissionais: Profissional[] = [
  { nome: "Dr. Marcos", especialidade: "Implantes", producao: 62400, noShow: 9, ocupacao: 84, ticket: 1180, conversao: 58, status: "ativo" },
  { nome: "Dr. Gustavo", especialidade: "Implantes", producao: 41200, noShow: 8, ocupacao: 82, ticket: 1120, conversao: 55, status: "ativo" },
  { nome: "Dra. Helena", especialidade: "Ortodontia", producao: 48100, noShow: 11, ocupacao: 81, ticket: 540, conversao: 52, status: "ativo" },
  { nome: "Dra. Lívia", especialidade: "Ortodontia", producao: 29800, noShow: 13, ocupacao: 78, ticket: 520, conversao: 50, status: "ativo" },
  { nome: "Dr. Rafael", especialidade: "Estética", producao: 35200, noShow: 14, ocupacao: 77, ticket: 420, conversao: 49, status: "ativo" },
  { nome: "Dr. Tiago", especialidade: "Endodontia", producao: 31600, noShow: 12, ocupacao: 79, ticket: 380, conversao: 47, status: "ativo" },
  { nome: "Dra. Bianca", especialidade: "Periodontia", producao: 24900, noShow: 10, ocupacao: 76, ticket: 320, conversao: 44, status: "ativo" },
  { nome: "Dra. Paula", especialidade: "Clínico geral", producao: 27800, noShow: 18, ocupacao: 74, ticket: 180, conversao: 41, status: "novo" },
];

/** Procedimentos (mensal) */
export const procedimentos: Procedimento[] = [
  { nome: "Implante unitário", especialidade: "Implantes", receita: 38000, margem: 58, volume: 32, ticket: 1187 },
  { nome: "Enxerto ósseo", especialidade: "Implantes", receita: 14000, margem: 49, volume: 11, ticket: 1272 },
  { nome: "Aparelho fixo", especialidade: "Ortodontia", receita: 31000, margem: 47, volume: 86, ticket: 360 },
  { nome: "Manutenção ortodôntica", especialidade: "Ortodontia", receita: 18000, margem: 52, volume: 150, ticket: 120 },
  { nome: "Clareamento", especialidade: "Estética", receita: 16000, margem: 64, volume: 40, ticket: 400 },
  { nome: "Faceta de porcelana", especialidade: "Estética", receita: 22000, margem: 51, volume: 14, ticket: 1571 },
  { nome: "Restauração", especialidade: "Clínico geral", receita: 12000, margem: 33, volume: 120, ticket: 100 },
  { nome: "Limpeza / profilaxia", especialidade: "Clínico geral", receita: 9000, margem: 39, volume: 180, ticket: 50 },
  { nome: "Extração", especialidade: "Clínico geral", receita: 7000, margem: 35, volume: 70, ticket: 100 },
  { nome: "Tratamento de canal", especialidade: "Endodontia", receita: 19000, margem: 44, volume: 38, ticket: 500 },
  { nome: "Retratamento de canal", especialidade: "Endodontia", receita: 8000, margem: 40, volume: 12, ticket: 667 },
  { nome: "Raspagem periodontal", especialidade: "Periodontia", receita: 11000, margem: 46, volume: 44, ticket: 250 },
  { nome: "Gengivoplastia", especialidade: "Periodontia", receita: 6000, margem: 42, volume: 10, ticket: 600 },
  { nome: "Radiografia / exames", especialidade: "Clínico geral", receita: 5000, margem: 30, volume: 200, ticket: 25 },
];

/** Faturamento e atendimentos por convênio (snapshot mensal) */
export const convenios: Row[] = [
  { convenio: "Particular", faturamento: 168000, atendimentos: 360, ticket: 467, glosa: 0, noShow: 12 },
  { convenio: "Odontoprev", faturamento: 64000, atendimentos: 300, ticket: 213, glosa: 6.2, noShow: 16 },
  { convenio: "Amil Dental", faturamento: 41000, atendimentos: 190, ticket: 216, glosa: 7.8, noShow: 18 },
  { convenio: "Bradesco Dental", faturamento: 33000, atendimentos: 150, ticket: 220, glosa: 5.4, noShow: 15 },
  { convenio: "Unimed Odonto", faturamento: 28000, atendimentos: 120, ticket: 233, glosa: 6.9, noShow: 17 },
  { convenio: "SulAmérica", faturamento: 19000, atendimentos: 80, ticket: 238, glosa: 8.1, noShow: 19 },
];

/** Faturamento mensal: particular vs convênio (12m) */
export const faturamento: Row[] = [
  { month: "Jan", particular: 132000, convenio: 150000 },
  { month: "Fev", particular: 136000, convenio: 154000 },
  { month: "Mar", particular: 141000, convenio: 158000 },
  { month: "Abr", particular: 144000, convenio: 161000 },
  { month: "Mai", particular: 149000, convenio: 165000 },
  { month: "Jun", particular: 152000, convenio: 168000 },
  { month: "Jul", particular: 150000, convenio: 166000 },
  { month: "Ago", particular: 156000, convenio: 172000 },
  { month: "Set", particular: 159000, convenio: 176000 },
  { month: "Out", particular: 158000, convenio: 174000 },
  { month: "Nov", particular: 164000, convenio: 181000 },
  { month: "Dez", particular: 168000, convenio: 185000 },
];

export const faturamentoSeries: SeriesDef[] = [
  { key: "particular", name: "Particular", color: brand.series.indigo },
  { key: "convenio", name: "Convênio", color: brand.series.amber },
];

/** Agenda por dia da semana (snapshot) */
export const agendaSemana: Row[] = [
  { dia: "Seg", ocupacao: 82, noShow: 12 },
  { dia: "Ter", ocupacao: 86, noShow: 11 },
  { dia: "Qua", ocupacao: 88, noShow: 10 },
  { dia: "Qui", ocupacao: 84, noShow: 13 },
  { dia: "Sex", ocupacao: 79, noShow: 16 },
  { dia: "Sáb", ocupacao: 68, noShow: 21 },
];

export const noShowDiaSeries: SeriesDef[] = [
  { key: "noShow", name: "No-show", color: brand.series.coral },
];
