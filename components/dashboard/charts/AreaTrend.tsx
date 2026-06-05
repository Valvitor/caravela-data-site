"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { formatAxis, type ValueFormat } from "@/lib/format";
import type { Row, SeriesDef } from "@/data/types";
import { AXIS_LINE, GRID, TICK } from "./theme";
import { ChartTooltip } from "./ChartTooltip";

export function AreaTrend({
  data,
  series,
  format = "brl",
  height = 240,
  xKey = "month",
}: {
  data: Row[];
  series: SeriesDef[];
  format?: ValueFormat;
  height?: number;
  xKey?: string;
}) {
  return (
    <div style={{ height }} className="w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 14, right: 8, bottom: 0, left: 0 }}>
          <defs>
            {series.map((s) => (
              <linearGradient key={s.key} id={`grad-${s.key}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={s.color} stopOpacity={0.28} />
                <stop offset="100%" stopColor={s.color} stopOpacity={0.02} />
              </linearGradient>
            ))}
          </defs>
          <CartesianGrid stroke={GRID} vertical={false} />
          <XAxis dataKey={xKey} tick={TICK} axisLine={AXIS_LINE} tickLine={false} />
          <YAxis
            tick={TICK}
            axisLine={false}
            tickLine={false}
            width={56}
            tickFormatter={(v: number) => formatAxis(v, format)}
          />
          <Tooltip content={<ChartTooltip format={format} />} cursor={{ stroke: GRID }} />
          {series.map((s) => (
            <Area
              key={s.key}
              type="monotone"
              dataKey={s.key}
              name={s.name}
              stroke={s.color}
              strokeWidth={2}
              fill={`url(#grad-${s.key})`}
              dot={false}
              activeDot={{ r: 4 }}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
