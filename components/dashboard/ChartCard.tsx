import { cn } from "@/lib/cn";

export function ChartCard({
  title,
  subtitle,
  children,
  className,
  summary,
  legend,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  /** descrição textual do gráfico para leitores de tela */
  summary?: string;
  legend?: { name: string; color: string }[];
}) {
  return (
    <figure className={cn("rounded-2xl border border-line bg-surface p-4 sm:p-5", className)}>
      <figcaption className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-base font-semibold text-ink">{title}</h3>
          {subtitle && <p className="mt-0.5 text-xs text-muted">{subtitle}</p>}
        </div>
        {legend && (
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-1">
            {legend.map((l) => (
              <li key={l.name} className="flex items-center gap-1.5 text-xs text-muted">
                <span aria-hidden className="h-2 w-2 rounded-full" style={{ backgroundColor: l.color }} />
                {l.name}
              </li>
            ))}
          </ul>
        )}
      </figcaption>
      {summary && <p className="sr-only">{summary}</p>}
      {children}
    </figure>
  );
}
