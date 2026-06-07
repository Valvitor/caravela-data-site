import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { brand } from "@/lib/brand";
import { cn } from "@/lib/cn";

const tiers = [
  {
    name: "Essencial",
    para: "Quem está começando a enxergar o negócio com clareza.",
    inclui: [
      "Um painel central",
      "Uma fonte conectada",
      "Atualização diária",
      "Acesso para toda a equipe",
      "Suporte em até 48h",
    ],
  },
  {
    name: "Pro",
    featured: true,
    para: "Quem toma decisões toda semana, com várias fontes.",
    inclui: [
      "Múltiplas fontes (ERP, vendas, mídia)",
      "Vários painéis, por área",
      "Atualização várias vezes ao dia",
      "Novas visões recorrentes",
      "Suporte em até 24h",
      "Reunião mensal de leitura",
    ],
  },
  {
    name: "Dedicado",
    para: "Quem tem dados no centro da operação, ou revende.",
    inclui: [
      "Fontes complexas sob medida",
      "Painéis ilimitados",
      "Atualização quase em tempo real",
      "Suporte prioritário (SLA)",
      "Reunião + consultoria",
      "White-label para revenda",
    ],
  },
];

function Check() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="mt-0.5 h-4 w-4 flex-none text-coral"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      aria-hidden
    >
      <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PricingBand() {
  return (
    <Section id="precos" className="bg-surface">
      <div className="max-w-2xl">
        <Eyebrow>Planos</Eyebrow>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Tem um plano pro seu momento.
        </h2>
        <p className="mt-4 text-muted">
          A mensalidade é por painel, <strong className="font-semibold text-ink">nunca por usuário</strong>:
          a equipe inteira acessa sem o custo subir. O investimento é definido num diagnóstico
          rápido, sem compromisso.
        </p>
      </div>

      <div className="mt-12 grid items-start gap-4 lg:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={cn(
              "flex flex-col rounded-2xl border p-7",
              t.featured ? "border-indigo bg-indigo-soft" : "border-line bg-paper",
            )}
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-display text-xl font-semibold text-ink">{t.name}</h3>
              {t.featured && (
                <span className="rounded-full bg-indigo px-2.5 py-0.5 text-xs font-semibold text-white">
                  Mais comum
                </span>
              )}
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-indigo">
              Pra quem é
            </p>
            <p className="mt-1 text-sm text-muted">{t.para}</p>

            <hr className="my-5 border-line" />

            <p className="text-xs font-semibold uppercase tracking-wide text-indigo">O que inclui</p>
            <ul className="mt-3 space-y-2">
              {t.inclui.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-ink">
                  <Check />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <Button href={brand.whatsappLink} external size="lg">
          Pedir proposta
        </Button>
        <span className="text-sm text-muted">Sem compromisso, a gente desenha o seu no diagnóstico.</span>
      </div>
    </Section>
  );
}
