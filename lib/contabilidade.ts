import type { Kpi, Category, Row } from "@/data/types";
import {
  type Cliente,
  clientes,
  dre,
  evolucaoReceita,
  inadimplenciaMensal,
  aging,
  operacaoGestores,
  obrigacoesMensal,
} from "@/data/contabilidade";

export type Periodo = "3m" | "6m" | "12m";

export const periodos: { value: Periodo; label: string }[] = [
  { value: "3m", label: "3 meses" },
  { value: "6m", label: "6 meses" },
  { value: "12m", label: "12 meses" },
];

export function monthsOf(p: Periodo): number {
  return p === "3m" ? 3 : p === "6m" ? 6 : 12;
}
export function labelPeriodo(p: Periodo): string {
  return `Últimos ${monthsOf(p)} meses`;
}
export function slicePeriod<T>(rows: T[], p: Periodo): T[] {
  return rows.slice(-monthsOf(p));
}

const round1 = (n: number) => Math.round(n * 10) / 10;
const sumKey = (rows: Row[], key: string) => rows.reduce((s, r) => s + (Number(r[key]) || 0), 0);
const avgKey = (rows: Row[], key: string) => (rows.length ? sumKey(rows, key) / rows.length : 0);

function windows<T>(rows: T[], n: number): { cur: T[]; prev: T[] } {
  return { cur: rows.slice(-n), prev: rows.slice(-2 * n, -n) };
}
function pctDelta(cur: number, prev: number): number | undefined {
  if (!prev) return undefined;
  return round1(((cur - prev) / prev) * 100);
}

/* ===== Filtros de clientes ===== */
export interface Filtro {
  gestor: string;
  regime: string;
  segmento: string;
}
export const FILTRO_PADRAO: Filtro = { gestor: "todos", regime: "todos", segmento: "todos" };

export function filterClientes(list: Cliente[], f: Filtro): Cliente[] {
  return list.filter(
    (c) =>
      (f.gestor === "todos" || c.gestor === f.gestor) &&
      (f.regime === "todos" || c.regime === f.regime) &&
      (f.segmento === "todos" || c.segmento === f.segmento),
  );
}
export const ativos = (list: Cliente[]) => list.filter((c) => c.status !== "cancelado");

export function opcoes<K extends keyof Cliente>(key: K): { value: string; label: string }[] {
  const vals = Array.from(new Set(clientes.map((c) => String(c[key])))).sort();
  return [{ value: "todos", label: "Todos" }, ...vals.map((v) => ({ value: v, label: v }))];
}

/* ===== Distribuições e rankings ===== */
export function groupCategories(
  list: Cliente[],
  key: keyof Cliente,
  measure: "count" | "honorario" = "count",
): Category[] {
  const map = new Map<string, number>();
  for (const c of list) {
    const k = String(c[key]);
    map.set(k, (map.get(k) ?? 0) + (measure === "honorario" ? c.honorario : 1));
  }
  return Array.from(map, ([name, value]) => ({ name, value })).sort((a, b) => b.value - a.value);
}

export function rankClientes(list: Cliente[], n = 6): Category[] {
  return ativos(list)
    .slice()
    .sort((a, b) => b.honorario - a.honorario)
    .slice(0, n)
    .map((c) => ({ name: c.nome, value: c.honorario }));
}

/* ===== KPIs por aba ===== */
export function kpisVisaoGeral(p: Periodo): Kpi[] {
  const n = monthsOf(p);
  const rev = windows(evolucaoReceita, n);
  const dr = windows(dre, n);
  const receita = sumKey(rev.cur, "receita");
  const margem = sumKey(dr.cur, "receita") ? (sumKey(dr.cur, "lucro") / sumKey(dr.cur, "receita")) * 100 : 0;
  const margemPrev = sumKey(dr.prev, "receita") ? (sumKey(dr.prev, "lucro") / sumKey(dr.prev, "receita")) * 100 : 0;
  const mrrCur = Number(rev.cur.at(-1)?.mrr ?? 0);
  const mrrStart = Number(rev.cur[0]?.mrr ?? 0);
  return [
    { label: "Receita no período", value: receita, format: "brl", delta: pctDelta(receita, sumKey(rev.prev, "receita")), goodWhenUp: true, hint: labelPeriodo(p) },
    { label: "Margem líquida", value: round1(margem), format: "pct", delta: margemPrev ? round1(margem - margemPrev) : undefined, goodWhenUp: true, hint: "Lucro / receita" },
    { label: "MRR recorrente", value: mrrCur, format: "brl", delta: pctDelta(mrrCur, mrrStart), goodWhenUp: true, hint: "Honorários recorrentes" },
    { label: "Clientes ativos", value: ativos(clientes).length, format: "int", goodWhenUp: true, hint: "PMEs no portfólio" },
  ];
}

export function kpisFinanceiro(p: Periodo): Kpi[] {
  const n = monthsOf(p);
  const dr = windows(dre, n);
  const inadCur = avgKey(slicePeriod(inadimplenciaMensal, p), "inad");
  const inadPrev = avgKey(inadimplenciaMensal.slice(-2 * n, -n), "inad");
  const receita = sumKey(dr.cur, "receita");
  const margem = receita ? (sumKey(dr.cur, "lucro") / receita) * 100 : 0;
  const aReceber = aging.reduce((s, a) => s + a.value, 0);
  return [
    { label: "Receita no período", value: receita, format: "brl", delta: pctDelta(receita, sumKey(dr.prev, "receita")), goodWhenUp: true, hint: labelPeriodo(p) },
    { label: "Margem líquida", value: round1(margem), format: "pct", goodWhenUp: true, hint: "Lucro / receita" },
    { label: "Inadimplência média", value: round1(inadCur), format: "pct", delta: inadPrev ? round1(inadCur - inadPrev) : undefined, goodWhenUp: false, hint: "Recebíveis vencidos" },
    { label: "Contas a receber", value: aReceber, format: "brl", goodWhenUp: true, hint: "Saldo em aberto" },
  ];
}

export function kpisCarteira(list: Cliente[]): Kpi[] {
  const at = ativos(list);
  const canc = list.filter((c) => c.status === "cancelado");
  const ticket = at.length ? at.reduce((s, c) => s + c.honorario, 0) / at.length : 0;
  const baseChurn = at.length + canc.length;
  const churn = baseChurn ? (canc.length / baseChurn) * 100 : 0;
  const inadMedia = at.length ? at.reduce((s, c) => s + c.inadimplencia, 0) / at.length : 0;
  return [
    { label: "Clientes ativos", value: at.length, format: "int", goodWhenUp: true, hint: "No filtro atual" },
    { label: "Ticket médio", value: Math.round(ticket), format: "brl", goodWhenUp: true, hint: "Honorário mensal médio" },
    { label: "Churn", value: round1(churn), format: "pct", goodWhenUp: false, hint: "Cancelados na base" },
    { label: "Inadimplência média", value: round1(inadMedia), format: "pct", goodWhenUp: false, hint: "Clientes ativos" },
  ];
}

export function kpisOperacao(p: Periodo, gestor: string): Kpi[] {
  const n = monthsOf(p);
  const ob = windows(obrigacoesMensal, n);
  const noPrazo = sumKey(ob.cur, "noPrazo");
  const atraso = sumKey(ob.cur, "atraso");
  const total = noPrazo + atraso;
  const pctPrazo = total ? (noPrazo / total) * 100 : 0;
  const pPrazoPrev = sumKey(ob.prev, "noPrazo");
  const pTotalPrev = pPrazoPrev + sumKey(ob.prev, "atraso");
  const pctPrazoPrev = pTotalPrev ? (pPrazoPrev / pTotalPrev) * 100 : 0;
  const gest = gestor === "todos" ? operacaoGestores : operacaoGestores.filter((g) => g.gestor === gestor);
  const slaAvg = gest.length ? avgKey(gest, "sla") : 0;
  const clientesGest = sumKey(gest, "clientes");
  return [
    { label: "Obrigações no prazo", value: round1(pctPrazo), format: "pct", delta: pctPrazoPrev ? round1(pctPrazo - pctPrazoPrev) : undefined, goodWhenUp: true, hint: labelPeriodo(p) },
    { label: "SLA médio", value: round1(slaAvg), format: "int", goodWhenUp: false, hint: "Horas p/ resposta" },
    { label: "Obrigações entregues", value: total, format: "int", goodWhenUp: true, hint: labelPeriodo(p) },
    { label: "Clientes atendidos", value: clientesGest, format: "int", goodWhenUp: true, hint: gestor === "todos" ? "Todos os gestores" : gestor },
  ];
}
