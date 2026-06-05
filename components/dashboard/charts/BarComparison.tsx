"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { formatAxis, type ValueFormat } from "@/lib/format";
import type { Category } from "@/data/types";
import { brand } from "@/lib/brand";
import { AXIS_LINE, GRID, TICK } from "./theme";
import { ChartTooltip } from "./ChartTooltip";

export function BarComparison({
  data,
  format = "pct",
  color = brand.series.indigo,
  height = 240,
  horizontal = false,
  highlightTop = false,
}: {
  data: Category[];
  format?: ValueFormat;
  color?: string;
  height?: number;
  horizontal?: boolean;
  highlightTop?: boolean;
}) {
  const max = data.length ? Math.max(...data.map((d) => d.value)) : 0;
  return (
    <div style={{ height }} className="w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout={horizontal ? "vertical" : "horizontal"}
          margin={{ top: 8, right: 12, bottom: 0, left: horizontal ? 8 : 0 }}
          barCategoryGap="28%"
        >
          <CartesianGrid stroke={GRID} horizontal={!horizontal} vertical={horizontal} />
          {horizontal ? (
            <>
              <XAxis
                type="number"
                tick={TICK}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v: number) => formatAxis(v, format)}
              />
              <YAxis
                type="category"
                dataKey="name"
                tick={TICK}
                axisLine={AXIS_LINE}
                tickLine={false}
                width={132}
              />
            </>
          ) : (
            <>
              <XAxis dataKey="name" tick={TICK} axisLine={AXIS_LINE} tickLine={false} interval={0} />
              <YAxis
                tick={TICK}
                axisLine={false}
                tickLine={false}
                width={48}
                tickFormatter={(v: number) => formatAxis(v, format)}
              />
            </>
          )}
          <Tooltip content={<ChartTooltip format={format} />} cursor={{ fill: "rgba(28,27,25,0.04)" }} />
          <Bar dataKey="value" radius={horizontal ? [0, 5, 5, 0] : [5, 5, 0, 0]} maxBarSize={36}>
            {data.map((d, i) => (
              <Cell
                key={i}
                fill={highlightTop && d.value === max ? brand.series.coral : color}
                fillOpacity={highlightTop ? (d.value === max ? 1 : 0.55) : 1}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
