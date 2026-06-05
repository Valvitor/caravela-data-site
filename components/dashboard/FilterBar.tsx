"use client";

import { SegmentedControl } from "@/components/ui/SegmentedControl";
import { Select } from "@/components/ui/Select";
import { periodos, opcoes, type Periodo, type Filtro } from "@/lib/contabilidade";

export function FilterBar({
  periodo,
  onPeriodo,
  filtro,
  onFiltro,
  show,
}: {
  periodo: Periodo;
  onPeriodo: (p: Periodo) => void;
  filtro: Filtro;
  onFiltro: (key: keyof Filtro, value: string) => void;
  show: (keyof Filtro)[];
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
      <div className="flex items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-faint">Período</span>
        <SegmentedControl options={periodos} value={periodo} onChange={onPeriodo} ariaLabel="Período" />
      </div>
      {show.includes("gestor") && (
        <Select id="f-gestor" label="Gestor" value={filtro.gestor} onChange={(v) => onFiltro("gestor", v)} options={opcoes("gestor")} />
      )}
      {show.includes("regime") && (
        <Select id="f-regime" label="Regime" value={filtro.regime} onChange={(v) => onFiltro("regime", v)} options={opcoes("regime")} />
      )}
      {show.includes("segmento") && (
        <Select id="f-segmento" label="Segmento" value={filtro.segmento} onChange={(v) => onFiltro("segmento", v)} options={opcoes("segmento")} />
      )}
    </div>
  );
}
