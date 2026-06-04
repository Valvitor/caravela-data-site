import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/cn";

const pillars = [
  {
    title: "White-label, sem licença por usuário",
    body: "O painel leva a sua marca (ou a do seu cliente). A mensalidade é por painel, não por assento — toda a equipe acessa sem o custo escalar.",
    big: true,
  },
  {
    title: "Atualização automática",
    body: "Conectores e rotinas de ETL coletam os dados das suas fontes sozinhos. Acabou a exportação manual e a planilha montada à mão.",
  },
  {
    title: "Velocidade com Claude Code",
    body: "IA aplicada acelera conectores, modelagem e interface — setup em dias, não semanas.",
  },
  {
    title: "Especialização por setor",
    body: "Templates e KPIs prontos do seu nicho. A gente fala a linguagem das suas métricas.",
  },
  {
    title: "Relação direta + prova de setor",
    body: "Atendimento 1:1 e casos reais do seu segmento, não um suporte genérico de software.",
    big: true,
  },
];

export function PillarsSection() {
  return (
    <Section id="diferenciais">
      <div className="max-w-2xl">
        <Eyebrow>Por que a Caravela</Eyebrow>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Não é mais uma ferramenta de BI. É o seu painel, pronto e cuidado.
        </h2>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {pillars.map((p, i) => (
          <div
            key={p.title}
            className={cn(
              "rounded-2xl border border-line bg-surface p-7 transition-colors hover:border-indigo/40",
              p.big && "lg:col-span-2",
            )}
          >
            <span className="tnum font-display text-sm font-semibold text-coral">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 font-display text-xl font-semibold text-ink">{p.title}</h3>
            <p className="mt-2 text-muted">{p.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
