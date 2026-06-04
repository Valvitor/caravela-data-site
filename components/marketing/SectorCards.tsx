import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { sectors } from "@/lib/nav";

const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden className="transition-transform group-hover:translate-x-1">
    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function SectorCards() {
  const featured = sectors.find((s) => s.featured)!;
  const others = sectors.filter((s) => !s.featured);

  return (
    <Section id="setores">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <Eyebrow>Dashboards de exemplo</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Veja o produto funcionando no seu setor.
          </h2>
        </div>
        <Link href="/setores" className="group inline-flex items-center gap-1.5 text-sm font-semibold text-indigo">
          Ver os três <Arrow />
        </Link>
      </div>

      {/* Featured: Contabilidade */}
      <Link
        href={featured.href}
        className="group mt-10 grid items-center gap-8 overflow-hidden rounded-3xl border border-indigo/25 bg-indigo-soft/60 p-8 md:grid-cols-[1.4fr_1fr] md:p-10"
      >
        <div>
          <div className="flex items-center gap-2">
            <Badge tone="indigo">Setor #1 · score {featured.score}</Badge>
            <Badge tone="coral">Maior potencial</Badge>
          </div>
          <h3 className="mt-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
            {featured.name}: {featured.headline}
          </h3>
          <p className="mt-3 max-w-lg text-muted">{featured.angle}</p>
          <p className="mt-4 text-sm font-medium text-indigo">{featured.proof}</p>
          <span className="mt-6 inline-flex items-center gap-1.5 font-semibold text-indigo">
            Abrir dashboard de contabilidade <Arrow />
          </span>
        </div>
        <div className="rounded-2xl border border-line bg-surface p-5">
          <p className="text-xs uppercase tracking-wide text-faint">Fontes integráveis</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {featured.systems.map((s) => (
              <span key={s} className="rounded-md border border-line bg-paper px-2 py-0.5 text-xs text-muted">
                {s}
              </span>
            ))}
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-paper p-3">
              <p className="tnum font-display text-2xl font-semibold text-ink">98 mil</p>
              <p className="text-xs text-muted">escritórios no Brasil</p>
            </div>
            <div className="rounded-xl bg-paper p-3">
              <p className="tnum font-display text-2xl font-semibold text-sage">~2%</p>
              <p className="text-xs text-muted">churn mensal</p>
            </div>
          </div>
        </div>
      </Link>

      {/* Outros dois */}
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {others.map((s) => (
          <Link
            key={s.slug}
            href={s.href}
            className="group flex flex-col rounded-2xl border border-line bg-surface p-7 transition-colors hover:border-indigo/40"
          >
            <div className="flex items-center justify-between">
              <Badge tone="neutral">Setor #{s.rank} · score {s.score}</Badge>
              <span className="text-indigo">
                <Arrow />
              </span>
            </div>
            <h3 className="mt-4 font-display text-xl font-semibold text-ink">{s.name}</h3>
            <p className="mt-2 text-sm text-muted">{s.angle}</p>
            <p className="mt-4 text-sm font-medium text-indigo">{s.proof}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
