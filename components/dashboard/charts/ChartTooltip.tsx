"use client";

import { formatValue, type ValueFormat } from "@/lib/format";

interface TooltipPayloadItem {
  name?: string;
  value?: number;
  color?: string;
  payload?: Record<string, unknown>;
}

export function ChartTooltip({
  active,
  payload,
  label,
  format = "int",
}: {
  active?: boolean;
  payload?: TooltipPayloadItem[];
  label?: string | number;
  format?: ValueFormat;
}) {
  if (!active || !payload || payload.length === 0) return null;
  return (
    <div className="rounded-xl border border-line bg-surface/95 px-3 py-2 text-xs shadow-lg backdrop-blur">
      {label !== undefined && (
        <p className="mb-1 font-semibold text-ink">{label}</p>
      )}
      <ul className="space-y-0.5">
        {payload.map((item, i) => (
          <li key={i} className="flex items-center gap-2 text-muted">
            <span
              aria-hidden
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="mr-2">{item.name}</span>
            <span className="tnum ml-auto font-semibold text-ink">
              {typeof item.value === "number" ? formatValue(item.value, format) : item.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
