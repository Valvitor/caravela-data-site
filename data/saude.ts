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
