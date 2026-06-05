import { cn } from "@/lib/cn";
import { formatValue, type ValueFormat } from "@/lib/format";
import type { Row } from "@/data/types";

export interface Column {
  key: string;
  label: string;
  format?: ValueFormat;
  align?: "left" | "right";
}

export function DataTable({ columns, rows }: { columns: Column[]; rows: Row[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-line text-left">
            {columns.map((c) => (
              <th
                key={c.key}
                className={cn(
                  "pb-2 text-xs font-semibold uppercase tracking-wide text-faint",
                  c.align === "right" && "text-right",
                )}
              >
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-line/60 last:border-0">
              {columns.map((c) => {
                const raw = row[c.key];
                const isNum = typeof raw === "number";
                const display = isNum && c.format ? formatValue(raw, c.format) : String(raw);
                return (
                  <td
                    key={c.key}
                    className={cn(
                      "py-2.5",
                      c.align === "right" ? "text-right" : "text-left",
                      isNum ? "tnum text-ink" : "text-muted",
                      c.key === columns[0].key && "font-medium text-ink",
                    )}
                  >
                    {display}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
