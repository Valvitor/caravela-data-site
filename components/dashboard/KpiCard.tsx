import { cn } from "@/lib/cn";
import { formatValue } from "@/lib/format";
import type { Kpi } from "@/data/types";

export function KpiCard({ kpi }: { kpi: Kpi }) {
  const hasDelta = typeof kpi.delta === "number";
  const up = (kpi.delta ?? 0) >= 0;
  // bom = (subiu e subir é bom) OU (caiu e subir é ruim)
  const good = kpi.goodWhenUp ? up : !up;
  return (
    <div className="rounded-2xl border border-line bg-surface p-4 sm:p-5">
      <p className="text-[11px] font-medium uppercase tracking-wide text-faint sm:text-xs">{kpi.label}</p>
      <p className="tnum mt-2 font-display text-xl font-semibold leading-tight text-ink sm:text-2xl lg:text-3xl">
        {formatValue(kpi.value, kpi.format)}
      </p>
      <div className="mt-2 flex items-center gap-2">
        {hasDelta && (
          <span
            className={cn(
              "tnum inline-flex items-center gap-0.5 rounded-md px-1.5 py-0.5 text-xs font-semibold",
              good ? "bg-[#eaf3f0] text-sage" : "bg-coral-soft text-rose",
            )}
          >
            <span aria-hidden>{up ? "▲" : "▼"}</span>
            {Math.abs(kpi.delta as number).toLocaleString("pt-BR", { maximumFractionDigits: 1 })}%
          </span>
        )}
        {kpi.hint && <span className="text-xs text-muted">{kpi.hint}</span>}
      </div>
    </div>
  );
}

export function KpiGrid({ kpis }: { kpis: Kpi[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {kpis.map((k) => (
        <KpiCard key={k.label} kpi={k} />
      ))}
    </div>
  );
}
