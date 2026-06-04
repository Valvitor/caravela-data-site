import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";

const stats = [
  { value: "20 mi+", label: "PMEs no Brasil", note: "~30% do PIB" },
  { value: "US$ 765 mi", label: "Mercado de BI em 2025", note: "CAGR de ~10,2% ao ano" },
  { value: "R$ 234,9 bi", label: "E-commerce em 2025", note: "+15,3% sobre 2024" },
  { value: "37/80", label: "Maturidade digital média", note: "o gargalo é adoção, não tecnologia" },
];

export function MarketStats() {
  return (
    <Section className="bg-indigo-ink text-white">
      <div className="max-w-2xl">
        <Eyebrow className="text-coral [&_span]:bg-coral">O momento</Eyebrow>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          A maioria das PMEs ainda decide no escuro.
        </h2>
        <p className="mt-4 text-white/70">
          Não falta dado — falta organização e leitura. É exatamente essa lacuna que a Caravela
          resolve.
        </p>
      </div>

      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-indigo-ink p-7">
            <p className="tnum font-display text-4xl font-semibold text-white">{s.value}</p>
            <p className="mt-2 font-medium text-white">{s.label}</p>
            <p className="mt-1 text-sm text-white/60">{s.note}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
