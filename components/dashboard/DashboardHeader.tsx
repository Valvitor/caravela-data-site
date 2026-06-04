import type { ClientMeta } from "@/data/types";

export function DashboardHeader({ client }: { client: ClientMeta }) {
  return (
    <div className="flex flex-col gap-5 border-b border-line pb-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <div
          className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl font-display text-lg font-semibold text-white"
          style={{ backgroundColor: client.accent }}
          aria-hidden
        >
          {client.initials}
        </div>
        <div>
          <h1 className="font-display text-xl font-semibold text-ink">{client.name}</h1>
          <p className="text-sm text-muted">{client.sector}</p>
        </div>
      </div>
      <div className="sm:text-right">
        <p className="text-xs uppercase tracking-wide text-faint">Fontes conectadas</p>
        <div className="mt-1 flex flex-wrap gap-1.5 sm:justify-end">
          {client.systems.map((s) => (
            <span
              key={s}
              className="rounded-md border border-line bg-paper px-2 py-0.5 text-xs text-muted"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
