import type { Kpi, Category, Row, SeriesDef } from "@/data/types";
import { brand } from "@/lib/brand";
import {
  type CanalVenda,
  type Produto,
  canais,
  canaisDetalhe,
  canalKey,
  dispositivos,
  evolucaoVendas,
  produtos,
} from "@/data/ecommerce";
import { avgKey, monthsOf, pctDelta, round1, sumKey, windows, type Periodo } from "./period";

export { type Periodo, slicePeriod } from "./period";

export const CANAIS: CanalVenda[] = ["Loja própria", "Mercado Livre", "Shopee", "Amazon"];

export function opcoesCanal() {
  return [{ value: "todos", label: "Todos" }, ...CANAIS.map((c) => ({ value: c, label: c }))];
}
export function opcoesCategoria() {
  const cats = Array.from(new Set(produtos.map((p) => p.categoria)));
  return [{ value: "todos", label: "Todas" }, ...cats.map((c) => ({ value: c, label: c }))];
}
export function opcoesDispositivo() {
  return [
    { value: "todos", label: "Todos" },
    ...dispositivos.map((d) => ({ value: String(d.dispositivo), label: String(d.dispositivo) })),
  ];
}

/* ===== Produtos ===== */
export function filterProdutos(list: Produto[], categoria: string): Produto[] {
  return categoria === "todos" ? list : list.filter((p) => p.categoria === categoria);
}
export function rankProdutos(list: Produto[], n = 6): Category[] {
  return list
    .slice()
    .sort((a, b) => b.receita - a.receita)
    .slice(0, n)
    .map((p) => ({ name: p.nome, value: p.receita }));
}
export function margemPorSku(list: Produto[], n = 6): Category[] {
  return list
    .slice()
    .sort((a, b) => b.margem - a.margem)
    .slice(0, n)
    .map((p) => ({ name: p.nome, value: p.margem }));
}
export function groupProdutos(
  list: Produto[],
  key: keyof Produto,
  measure: "count" | "receita" = "receita",
): Category[] {
  const map = new Map<string, number>();
  for (const p of list) {
    const k = String(p[key]);
    map.set(k, (map.get(k) ?? 0) + (measure === "receita" ? p.receita : 1));
  }
  return Array.from(map, ([name, value]) => ({ name, value })).sort((a, b) => b.value - a.value);
}

/* ===== Série de vendas por canal ===== */
export function serieCanal(canal: string): Row[] {
  if (canal === "todos") {
    return canais.map((r) => ({
      month: String(r.month),
      valor: CANAIS.reduce((s, c) => s + Number(r[canalKey[c]] || 0), 0),
    }));
  }
  const key = canalKey[canal as CanalVenda];
  return canais.map((r) => ({ month: String(r.month), valor: Number(r[key] || 0) }));
}
export const serieCanalSeries: SeriesDef[] = [
  { key: "valor", name: "Receita", color: brand.series.indigo },
];

function detalhe(canal: string): Row | undefined {
  return canaisDetalhe.find((r) => r.canal === canal);
}

/* ===== KPIs por aba ===== */
export function kpisVisaoGeral(p: Periodo): Kpi[] {
  const n = monthsOf(p);
  const w = windows(evolucaoVendas, n);
  const receita = sumKey(w.cur, "receita");
  const pedidos = sumKey(w.cur, "pedidos");
  const ticket = pedidos ? receita / pedidos : 0;
  const ticketPrev = sumKey(w.prev, "pedidos") ? sumKey(w.prev, "receita") / sumKey(w.prev, "pedidos") : 0;
  const conv = (sumKey(dispositivos, "pedidos") / sumKey(dispositivos, "sessoes")) * 100;
  return [
    { label: "Receita (GMV)", value: receita, format: "brl", delta: pctDelta(receita, sumKey(w.prev, "receita")), goodWhenUp: true, hint: "No período" },
    { label: "Pedidos", value: pedidos, format: "int", delta: pctDelta(pedidos, sumKey(w.prev, "pedidos")), goodWhenUp: true, hint: "No período" },
    { label: "Ticket médio", value: Math.round(ticket), format: "brl", delta: pctDelta(ticket, ticketPrev), goodWhenUp: true, hint: "Receita / pedidos" },
    { label: "Conversão", value: round1(conv), format: "pct", goodWhenUp: true, hint: "Sessões que viram pedido" },
  ];
}

export function kpisVendas(p: Periodo, canal: string): Kpi[] {
  const n = monthsOf(p);
  const serie = serieCanal(canal);
  const w = windows(serie, n);
  const receita = sumKey(w.cur, "valor");
  const totalSerie = serieCanal("todos");
  const totalReceita = sumKey(totalSerie.slice(-n), "valor");
  const d = canal !== "todos" ? detalhe(canal) : undefined;
  const ticket = d ? Number(d.ticket) : (() => {
    const wv = windows(evolucaoVendas, n);
    const ped = sumKey(wv.cur, "pedidos");
    return ped ? sumKey(wv.cur, "receita") / ped : 0;
  })();
  const pedidos = canal !== "todos" ? Math.round(receita / (ticket || 1)) : sumKey(windows(evolucaoVendas, n).cur, "pedidos");
  const participacao = totalReceita ? (receita / totalReceita) * 100 : 0;
  return [
    { label: "Receita no período", value: receita, format: "brl", delta: pctDelta(receita, sumKey(w.prev, "valor")), goodWhenUp: true, hint: canal === "todos" ? "Todos os canais" : canal },
    { label: "Pedidos", value: pedidos, format: "int", goodWhenUp: true, hint: "No período" },
    { label: "Ticket médio", value: Math.round(ticket), format: "brl", goodWhenUp: true, hint: canal === "todos" ? "Geral" : canal },
    { label: "Participação", value: round1(participacao), format: "pct", goodWhenUp: true, hint: canal === "todos" ? "Do total" : `${canal} no total` },
  ];
}

export function kpisMarketing(p: Periodo, canal: string, dispositivo: string): Kpi[] {
  const n = monthsOf(p);
  const d = canal !== "todos" ? detalhe(canal) : undefined;
  // CAC/LTV: do canal (snapshot) ou média do período (cacLtv via evolucao? usamos canaisDetalhe agregado)
  const cac = d
    ? Number(d.cac)
    : Math.round(sumKey(canaisDetalhe, "investimento") / canaisDetalhe.reduce((s, r) => s + Number(r.pedidos), 0));
  const ltv = d ? Number(d.ltv) : Math.round(avgKey(canaisDetalhe, "ltv"));
  const roas = d
    ? Number(d.roas)
    : round1(
        canaisDetalhe.reduce((s, r) => s + Number(r.roas) * Number(r.investimento), 0) /
          sumKey(canaisDetalhe, "investimento"),
      );
  const disp = dispositivo !== "todos" ? dispositivos.find((x) => x.dispositivo === dispositivo) : undefined;
  const conv = disp
    ? Number(disp.conversao)
    : round1((sumKey(dispositivos, "pedidos") / sumKey(dispositivos, "sessoes")) * 100);
  const ltvCac = cac ? round1(ltv / cac) : 0;
  return [
    { label: "CAC", value: cac, format: "brl", goodWhenUp: false, hint: canal === "todos" ? "Geral" : canal },
    { label: "LTV", value: ltv, format: "brl", goodWhenUp: true, hint: "Valor do cliente" },
    { label: "LTV / CAC", value: ltvCac, format: "ratio", goodWhenUp: true, hint: "Saudável acima de 3:1" },
    { label: "ROAS", value: roas, format: "ratio", goodWhenUp: true, hint: dispositivo !== "todos" ? `Conversão ${conv}% (${dispositivo})` : `Conversão ${conv}%` },
  ];
}

export function kpisProdutos(categoria: string): Kpi[] {
  const list = filterProdutos(produtos, categoria);
  const ativos = list.filter((p) => p.status === "ativo");
  const ruptura = list.filter((p) => p.status === "ruptura");
  const margem = list.length ? list.reduce((s, p) => s + p.margem, 0) / list.length : 0;
  const dev = list.length ? list.reduce((s, p) => s + p.devolucao, 0) / list.length : 0;
  return [
    { label: "SKUs ativos", value: ativos.length, format: "int", goodWhenUp: true, hint: categoria === "todos" ? "No catálogo" : categoria },
    { label: "Margem média", value: round1(margem), format: "pct", goodWhenUp: true, hint: "Dos produtos do filtro" },
    { label: "Devolução média", value: round1(dev), format: "pct", goodWhenUp: false, hint: "Dos produtos do filtro" },
    { label: "Em ruptura", value: ruptura.length, format: "int", goodWhenUp: false, hint: "Sem estoque" },
  ];
}
