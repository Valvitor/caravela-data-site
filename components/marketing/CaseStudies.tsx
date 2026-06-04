import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";

const cases = [
  {
    metric: "-22%",
    label: "de inadimplência em 3 meses",
    quote:
      "Passamos a ver as contas a receber por faixa de atraso e agir antes do vencimento. Mudou a rotina financeira.",
    author: "Escritório contábil · 140+ clientes",
  },
  {
    metric: "+31%",
    label: "de ROAS após consolidar canais",
    quote:
      "Ver CAC, LTV e margem por canal na mesma tela acabou com o achismo na hora de distribuir a verba de mídia.",
    author: "E-commerce de lifestyle",
  },
  {
    metric: "-8 p.p.",
    label: "na taxa de no-show",
    quote:
      "O painel deixou claro quanto o no-show custava. Ajustamos a confirmação e recuperamos faturamento real.",
    author: "Clínica odontológica",
  },
];

export function CaseStudies() {
  return (
    <Section id="resultados">
      <div className="max-w-2xl">
        <Eyebrow>Resultados</Eyebrow>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          O que muda quando o dado vira decisão.
        </h2>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {cases.map((c) => (
          <figure key={c.label} className="flex flex-col rounded-2xl border border-line bg-surface p-7">
            <p className="tnum font-display text-4xl font-semibold text-indigo">{c.metric}</p>
            <p className="mt-1 text-sm font-medium text-ink">{c.label}</p>
            <blockquote className="mt-4 flex-1 text-muted">"{c.quote}"</blockquote>
            <figcaption className="mt-4 text-sm font-medium text-faint">{c.author}</figcaption>
          </figure>
        ))}
      </div>

      <p className="mt-6 text-xs text-faint">
        * Exemplos ilustrativos, para demonstrar o tipo de resultado que um painel bem construído
        habilita. Não representam clientes reais.
      </p>
    </Section>
  );
}
