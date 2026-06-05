import type { Row } from "@/data/types";

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

export const round1 = (n: number) => Math.round(n * 10) / 10;
export const sumKey = (rows: Row[], key: string) =>
  rows.reduce((s, r) => s + (Number(r[key]) || 0), 0);
export const avgKey = (rows: Row[], key: string) => (rows.length ? sumKey(rows, key) / rows.length : 0);

/** Janela atual (últimos n) e janela anterior comparável (n antes), para deltas. */
export function windows<T>(rows: T[], n: number): { cur: T[]; prev: T[] } {
  return { cur: rows.slice(-n), prev: rows.slice(-2 * n, -n) };
}
export function pctDelta(cur: number, prev: number): number | undefined {
  if (!prev) return undefined;
  return round1(((cur - prev) / prev) * 100);
}
