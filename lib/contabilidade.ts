import type { Kpi, Category } from "@/data/types";
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
import {
  avgKey,
  labelPeriodo,
  monthsOf,
  pctDelta,
  periodos,
  round1,
  slicePeriod,
  sumKey,
  windows,
  type Periodo,
} from "./period";

// Reexporta utilidades de período usadas por views/app/FilterBar de contabilidade.
export { periodos, monthsOf, labelPeriodo, slicePeriod, type Periodo };

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
