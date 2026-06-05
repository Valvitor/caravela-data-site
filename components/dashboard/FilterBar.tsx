"use client";

import { SegmentedControl } from "@/components/ui/SegmentedControl";
import { Select } from "@/components/ui/Select";
import { periodos, type Periodo } from "@/lib/period";

export interface SelectConfig {
  key: string;
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (v: string) => void;
}

export function FilterBar({
  periodo,
  onPeriodo,
  selects = [],
}: {
  periodo: Periodo;
  onPeriodo: (p: Periodo) => void;
  selects?: SelectConfig[];
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
      <div className="flex items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-faint">Período</span>
        <SegmentedControl options={periodos} value={periodo} onChange={onPeriodo} ariaLabel="Período" />
      </div>
      {selects.map((s) => (
        <Select
          key={s.key}
          id={`f-${s.key}`}
          label={s.label}
          value={s.value}
          options={s.options}
          onChange={s.onChange}
        />
      ))}
    </div>
  );
}
