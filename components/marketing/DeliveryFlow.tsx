import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";

const steps = [
  { n: "01", title: "Diagnóstico", body: "Mapeamos suas fontes, dores e a métrica que mais importa para a decisão." },
  { n: "02", title: "Proposta", body: "Escopo claro: o ganho esperado, o setup e a mensalidade, em 1 página." },
  { n: "03", title: "Construção", body: "Conectamos os dados e montamos o painel com a sua marca — em dias." },
  { n: "04", title: "Produção", body: "O painel vai ao ar e passa a se atualizar sozinho, todos os dias." },
  { n: "05", title: "Sustentação", body: "Suporte, novas visões e uma reunião mensal de leitura dos seus dados." },
];

export function DeliveryFlow() {
  return (
    <Section id="como-funciona" className="bg-surface">
      <div className="max-w-2xl">
        <Eyebrow>Como funciona</Eyebrow>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Do diagnóstico à decisão mensal, sem você operar nada.
        </h2>
      </div>

      <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-5">
        {steps.map((s) => (
          <li key={s.n} className="flex flex-col bg-surface p-6">
            <span className="tnum font-display text-2xl font-semibold text-indigo">{s.n}</span>
            <span aria-hidden className="mt-3 h-px w-8 bg-coral" />
            <h3 className="mt-3 font-display text-lg font-semibold text-ink">{s.title}</h3>
            <p className="mt-1.5 text-sm text-muted">{s.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
