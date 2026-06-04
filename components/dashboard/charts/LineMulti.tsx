"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceArea,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { formatAxis, type ValueFormat } from "@/lib/format";
import type { Row, SeriesDef } from "@/data/types";
import { AXIS_LINE, GRID, TICK } from "./theme";
import { ChartTooltip } from "./ChartTooltip";

export function LineMulti({
  data,
  series,
  format = "brl",
  height = 240,
  xKey = "month",
  refBand,
  refLabel,
}: {
  data: Row[];
  series: SeriesDef[];
  format?: ValueFormat;
  height?: number;
  xKey?: string;
  refBand?: { min: number; max: number };
  refLabel?: string;
}) {
  return (
    <div style={{ height }} className="w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
          <CartesianGrid stroke={GRID} vertical={false} />
          <XAxis dataKey={xKey} tick={TICK} axisLine={AXIS_LINE} tickLine={false} />
          <YAxis
            tick={TICK}
            axisLine={false}
            tickLine={false}
            width={48}
            tickFormatter={(v: number) => formatAxis(v, format)}
          />
          {refBand && (
            <ReferenceArea
              y1={refBand.min}
              y2={refBand.max}
              fill="#fb7185"
              fillOpacity={0.08}
              label={{
                value: refLabel ?? "",
                position: "insideTopRight",
                fill: "#fb7185",
                fontSize: 11,
              }}
            />
          )}
          <Tooltip content={<ChartTooltip format={format} />} cursor={{ stroke: GRID }} />
          {series.map((s) => (
            <Line
              key={s.key}
              type="monotone"
              dataKey={s.key}
              name={s.name}
              stroke={s.color}
              strokeWidth={2.5}
              dot={{ r: 2.5, fill: s.color }}
              activeDot={{ r: 5 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
