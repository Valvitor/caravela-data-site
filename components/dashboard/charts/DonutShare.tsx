"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import type { Category } from "@/data/types";
import { formatPct, formatValue, type ValueFormat } from "@/lib/format";
import { donutPalette } from "./theme";
import { ChartTooltip } from "./ChartTooltip";

export function DonutShare({
  data,
  height = 240,
  colors = donutPalette,
  format = "pct",
}: {
  data: Category[];
  height?: number;
  colors?: string[];
  /** formato do valor bruto (total no centro e tooltip). A legenda sempre mostra a participação %. */
  format?: ValueFormat;
}) {
  const total = data.reduce((s, d) => s + d.value, 0);
  const share = (v: number) => (total ? (v / total) * 100 : 0);
  return (
    <div style={{ height }} className="flex w-full items-center gap-4">
      <div className="relative h-full flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius="62%"
              outerRadius="92%"
              paddingAngle={2}
              stroke="none"
            >
              {data.map((_, i) => (
                <Cell key={i} fill={colors[i % colors.length]} />
              ))}
            </Pie>
            <Tooltip content={<ChartTooltip format={format} />} />
          </PieChart>
        </ResponsiveContainer>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[11px] uppercase tracking-wide text-faint">Total</span>
          <span className="tnum text-lg font-semibold text-ink">{formatValue(total, format)}</span>
        </div>
      </div>
      <ul className="flex-1 space-y-2 text-sm">
        {data.map((d, i) => (
          <li key={d.name} className="flex items-center gap-2">
            <span
              aria-hidden
              className="h-2.5 w-2.5 shrink-0 rounded-full"
              style={{ backgroundColor: colors[i % colors.length] }}
            />
            <span className="text-muted">{d.name}</span>
            <span className="tnum ml-auto font-semibold text-ink">{formatPct(share(d.value), 0)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
