import type { FunnelStep } from "@/data/types";
import { formatInt, formatPct } from "@/lib/format";
import { brand } from "@/lib/brand";

const shades = ["#3730a3", "#4b44b5", "#6a63c6", "#8b85d4", "#aaa6e0"];

/** Funil de conversão em CSS (largura proporcional + % do topo). */
export function FunnelChart({ data }: { data: FunnelStep[] }) {
  const top = data[0]?.value ?? 1;
  return (
    <div className="flex flex-col gap-2 py-1">
      {data.map((step, i) => {
        const widthPct = Math.max((step.value / top) * 100, 18);
        const share = (step.value / top) * 100;
        return (
          <div key={step.stage} className="flex items-center gap-3">
            <div className="w-20 shrink-0 text-right text-xs font-medium text-muted">
              {step.stage}
            </div>
            <div className="flex-1">
              <div
                className="flex h-9 items-center justify-between rounded-lg px-3 text-xs font-semibold text-white transition-all"
                style={{ width: `${widthPct}%`, backgroundColor: shades[i % shades.length] }}
              >
                <span className="tnum">{formatInt(step.value)}</span>
              </div>
            </div>
            <div className="tnum w-12 shrink-0 text-xs font-semibold" style={{ color: brand.series.indigo }}>
              {formatPct(share, 0)}
            </div>
          </div>
        );
      })}
    </div>
  );
}
