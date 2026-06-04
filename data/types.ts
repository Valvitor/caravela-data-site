import type { ValueFormat } from "@/lib/format";

export interface Kpi {
  label: string;
  value: number;
  format: ValueFormat;
  /** variação % vs período anterior */
  delta?: number;
  hint?: string;
  /** se true, subir é bom (verde); se false, subir é ruim (ex.: inadimplência) */
  goodWhenUp?: boolean;
}

export interface ClientMeta {
  name: string;
  initials: string;
  sector: string;
  accent: string;
  systems: string[];
}

export type Row = Record<string, string | number>;

export interface SeriesDef {
  key: string;
  name: string;
  color: string;
}

export interface Category {
  name: string;
  value: number;
  secondary?: number;
}

export interface FunnelStep {
  stage: string;
  value: number;
}

export interface NicheData {
  client: ClientMeta;
  kpis: Kpi[];
}
