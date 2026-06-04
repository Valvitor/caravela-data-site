import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { brand } from "@/lib/brand";

const tiers = [
  {
    name: "Essencial",
    setup: "R$ 3.000 – 6.000",
    monthly: "R$ 300 – 600/mês",
    desc: "Um painel central com as fontes principais. Ideal para começar a ler o negócio.",
  },
  {
    name: "Pro",
    setup: "R$ 8.000 – 18.000",
    monthly: "R$ 700 – 1.500/mês",
    desc: "Múltiplas fontes, mais visões e automações. O ponto doce da maioria dos clientes.",
    featured: true,
  },
  {
    name: "Dedicado",
    setup: "A partir de R$ 30.000",
    monthly: "R$ 2.000 – 4.000+/mês",
    desc: "Operação white-label para quem revende (ex.: escritórios) ou redes multi-unidade.",
  },
];

export function PricingBand() {
  return (
    <Section id="precos" className="bg-surface">
      <div className="max-w-2xl">
        <Eyebrow>Investimento</Eyebrow>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Setup uma vez, mensalidade por painel — nunca por usuário.
        </h2>
        <p className="mt-4 text-muted">
          Você dá acesso a toda a equipe sem o custo subir. Faixas de referência; a proposta final
          sai do diagnóstico.
        </p>
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={
              "rounded-2xl border bg-paper p-7 " +
              (t.featured ? "border-indigo ring-1 ring-indigo/30" : "border-line")
            }
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl font-semibold text-ink">{t.name}</h3>
              {t.featured && (
                <span className="rounded-full bg-indigo px-2.5 py-0.5 text-xs font-semibold text-white">
                  Mais comum
                </span>
              )}
            </div>
            <p className="mt-4 text-sm text-faint">Setup</p>
            <p className="tnum font-display text-lg font-semibold text-ink">{t.setup}</p>
            <p className="mt-2 text-sm text-faint">Mensalidade</p>
            <p className="tnum font-display text-lg font-semibold text-indigo">{t.monthly}</p>
            <p className="mt-4 text-sm text-muted">{t.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Button href={brand.whatsappLink} external size="lg">
          Pedir uma proposta
        </Button>
      </div>
    </Section>
  );
}
