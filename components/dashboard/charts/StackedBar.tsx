"use client";

import {
  Bar,
  BarChart,
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

export function StackedBar({
  data,
  series,
  format = "brl",
  height = 240,
  xKey = "month",
  stacked = true,
}: {
  data: Row[];
  series: SeriesDef[];
  format?: ValueFormat;
  height?: number;
  xKey?: string;
  stacked?: boolean;
}) {
  return (
    <div style={{ height }} className="w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 14, right: 8, bottom: 0, left: 0 }} barCategoryGap="22%">
          <CartesianGrid stroke={GRID} vertical={false} />
          <XAxis dataKey={xKey} tick={TICK} axisLine={AXIS_LINE} tickLine={false} />
          <YAxis
            tick={TICK}
            axisLine={false}
            tickLine={false}
            width={56}
            tickFormatter={(v: number) => formatAxis(v, format)}
          />
          <Tooltip content={<ChartTooltip format={format} />} cursor={{ fill: "rgba(28,27,25,0.04)" }} />
          {series.map((s) => (
            <Bar
              key={s.key}
              dataKey={s.key}
              name={s.name}
              stackId={stacked ? "a" : undefined}
              fill={s.color}
              radius={stacked ? [0, 0, 0, 0] : [4, 4, 0, 0]}
              maxBarSize={stacked ? 38 : 18}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
