import type { FunnelStep } from "@/data/types";
import { formatInt, formatPct } from "@/lib/format";

const shades = ["#3730a3", "#4b44b5", "#6a63c6", "#8b85d4", "#aaa6e0"];

/** Funil de conversão em CSS. Barra proporcional; valor e % sempre fora da barra (legíveis). */
export function FunnelChart({ data }: { data: FunnelStep[] }) {
  const top = data[0]?.value ?? 1;
  return (
    <div className="flex flex-col gap-2.5 py-1">
      {data.map((step, i) => {
        const barPct = Math.max((step.value / top) * 100, 6);
        const share = (step.value / top) * 100;
        return (
          <div key={step.stage} className="flex items-center gap-3">
            <div className="w-24 shrink-0 text-right text-xs font-medium text-muted">
              {step.stage}
            </div>
            <div className="flex-1">
              <div
                className="h-9 rounded-lg"
                style={{ width: `${barPct}%`, backgroundColor: shades[i % shades.length] }}
              />
            </div>
            <div className="flex w-24 shrink-0 items-baseline justify-end gap-2">
              <span className="tnum text-sm font-semibold text-ink">{formatInt(step.value)}</span>
              <span className="tnum text-xs font-semibold text-indigo">{formatPct(share, 0)}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
