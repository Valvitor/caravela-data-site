import type { Kpi, Category } from "@/data/types";
import {
  type Procedimento,
  type Profissional,
  convenios,
  faturamento,
  inadimplenciaMensal,
  noShow,
  ocupacao,
  procedimentos,
  profissionais,
} from "@/data/saude";
import { avgKey, monthsOf, pctDelta, round1, slicePeriod, sumKey, windows, type Periodo } from "./period";

export { type Periodo, slicePeriod } from "./period";

/* ===== Opções de filtro ===== */
export function opcoesProfissional() {
  return [{ value: "todos", label: "Todos" }, ...profissionais.map((p) => ({ value: p.nome, label: p.nome }))];
}
export function opcoesEspecialidade() {
  const esp = Array.from(new Set(profissionais.map((p) => p.especialidade)));
  return [{ value: "todos", label: "Todas" }, ...esp.map((e) => ({ value: e, label: e }))];
}
export function opcoesConvenio() {
  return [{ value: "todos", label: "Todos" }, ...convenios.map((c) => ({ value: String(c.convenio), label: String(c.convenio) }))];
}

/* ===== Filtros / agregações ===== */
export function filterProfissionais(list: Profissional[], prof: string): Profissional[] {
  return prof === "todos" ? list : list.filter((p) => p.nome === prof);
}
export function filterProcedimentos(list: Procedimento[], esp: string): Procedimento[] {
  return esp === "todos" ? list : list.filter((p) => p.especialidade === esp);
}
export function rankProcedimentos(list: Procedimento[], n = 6): Category[] {
  return list
    .slice()
    .sort((a, b) => b.receita - a.receita)
    .slice(0, n)
    .map((p) => ({ name: p.nome, value: p.receita }));
}
export function receitaPorEspecialidade(list: Procedimento[]): Category[] {
  const map = new Map<string, number>();
  for (const p of list) map.set(p.especialidade, (map.get(p.especialidade) ?? 0) + p.receita);
  return Array.from(map, ([name, value]) => ({ name, value })).sort((a, b) => b.value - a.value);
}

const blendedTicket = () => Math.round(sumKey(convenios, "faturamento") / sumKey(convenios, "atendimentos"));
const fatTotal = (rows: typeof faturamento) => sumKey(rows, "particular") + sumKey(rows, "convenio");
const findConv = (c: string) => convenios.find((r) => String(r.convenio) === c);

/* ===== KPIs por aba ===== */
export function kpisVisaoGeral(p: Periodo): Kpi[] {
  const n = monthsOf(p);
  const w = windows(faturamento, n);
  const fat = fatTotal(w.cur);
  const noShowMed = avgKey(slicePeriod(noShow, p), "noShow");
  const ocupMed = avgKey(slicePeriod(ocupacao, p), "ocupacao");
  return [
    { label: "Faturamento", value: fat, format: "brl", delta: pctDelta(fat, fatTotal(w.prev)), goodWhenUp: true, hint: "No período" },
    { label: "Ticket médio", value: blendedTicket(), format: "brl", goodWhenUp: true, hint: "Por atendimento" },
    { label: "No-show", value: round1(noShowMed), format: "pct", goodWhenUp: false, hint: "Faltas em consultas" },
    { label: "Ocupação", value: round1(ocupMed), format: "pct", goodWhenUp: true, hint: "Agenda preenchida" },
  ];
}

export function kpisAgenda(p: Periodo, prof: string): Kpi[] {
  const n = monthsOf(p);
  const row = prof !== "todos" ? profissionais.find((x) => x.nome === prof) : undefined;
  const ns = row ? row.noShow : avgKey(slicePeriod(noShow, p), "noShow");
  const oc = row ? row.ocupacao : avgKey(slicePeriod(ocupacao, p), "ocupacao");
  const nsPrev = avgKey(noShow.slice(-2 * n, -n), "noShow");
  const ocPrev = avgKey(ocupacao.slice(-2 * n, -n), "ocupacao");
  return [
    { label: "No-show", value: round1(ns), format: "pct", delta: row ? undefined : nsPrev ? round1(ns - nsPrev) : undefined, goodWhenUp: false, hint: prof === "todos" ? "Geral" : prof },
    { label: "Ocupação", value: round1(oc), format: "pct", delta: row ? undefined : ocPrev ? round1(oc - ocPrev) : undefined, goodWhenUp: true, hint: "Agenda preenchida" },
    { label: "Taxa de confirmação", value: round1(100 - ns), format: "pct", goodWhenUp: true, hint: "Comparecimento" },
    { label: "Ociosidade", value: round1(100 - oc), format: "pct", goodWhenUp: false, hint: "Horários livres" },
  ];
}

export function kpisFinanceiro(p: Periodo, _especialidade: string, conv: string): Kpi[] {
  const n = monthsOf(p);
  const w = windows(faturamento, n);
  const c = conv !== "todos" ? findConv(conv) : undefined;
  const fat = c ? Number(c.faturamento) : fatTotal(w.cur);
  const ticket = c ? Number(c.ticket) : blendedTicket();
  const inad = avgKey(slicePeriod(inadimplenciaMensal, p), "inad");
  const inadPrev = avgKey(inadimplenciaMensal.slice(-2 * n, -n), "inad");
  const glosa = c
    ? Number(c.glosa)
    : round1(convenios.reduce((s, r) => s + Number(r.glosa) * Number(r.faturamento), 0) / sumKey(convenios, "faturamento"));
  return [
    { label: "Faturamento", value: fat, format: "brl", delta: c ? undefined : pctDelta(fat, fatTotal(w.prev)), goodWhenUp: true, hint: conv === "todos" ? "No período" : conv },
    { label: "Ticket médio", value: Math.round(ticket), format: "brl", goodWhenUp: true, hint: conv === "todos" ? "Geral" : conv },
    { label: "Inadimplência", value: round1(inad), format: "pct", delta: inadPrev ? round1(inad - inadPrev) : undefined, goodWhenUp: false, hint: "Parcelas vencidas" },
    { label: "Glosa de convênios", value: round1(glosa), format: "pct", goodWhenUp: false, hint: "Faturas negadas" },
  ];
}

export function kpisProfissionais(_p: Periodo, prof: string): Kpi[] {
  const list = filterProfissionais(profissionais, prof);
  const producao = list.reduce((s, x) => s + x.producao, 0);
  const ocup = list.length ? list.reduce((s, x) => s + x.ocupacao, 0) / list.length : 0;
  const conv = list.length ? list.reduce((s, x) => s + x.conversao, 0) / list.length : 0;
  const ns = list.length ? list.reduce((s, x) => s + x.noShow, 0) / list.length : 0;
  return [
    { label: "Produção", value: producao, format: "brl", goodWhenUp: true, hint: prof === "todos" ? "Equipe" : prof },
    { label: "Ocupação", value: round1(ocup), format: "pct", goodWhenUp: true, hint: "Agenda preenchida" },
    { label: "Conversão de orçamentos", value: round1(conv), format: "pct", goodWhenUp: true, hint: "Orçados que fecham" },
    { label: "No-show", value: round1(ns), format: "pct", goodWhenUp: false, hint: "Faltas" },
  ];
}
