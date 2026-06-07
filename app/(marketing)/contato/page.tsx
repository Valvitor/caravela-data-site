import type { Metadata } from "next";
import { PageHeader } from "@/components/marketing/PageHeader";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Contato",
  description: `Fale com a ${brand.name} no WhatsApp e descubra qual painel faz sentido para o seu negócio.`,
};

const pontos = [
  "Qual é o seu setor e o tamanho da operação",
  "Onde os dados moram hoje (ERP, plataforma, planilhas)",
  "A decisão que você gostaria de tomar com mais clareza",
];

export default function ContatoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contato"
        title="Uma conversa rápida já desenha o seu painel."
        lead="Sem formulário longo nem compromisso. Chame no WhatsApp e a gente entende o seu caso na hora."
      />
      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl border border-indigo/25 bg-indigo-soft/60 p-8 md:p-10">
            <h2 className="font-display text-2xl font-semibold text-ink">Falar agora</h2>
            <p className="mt-2 text-muted">
              Resposta direta com quem constrói os painéis — atendimento 1:1.
            </p>
            <div className="mt-6">
              <Button href={brand.whatsappLink} external size="lg">
                WhatsApp · {brand.whatsappDisplay}
              </Button>
            </div>
            <p className="mt-4 text-sm text-faint">Atendimento direto, de segunda a sexta.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">O que adianta contar</h2>
            <ul className="mt-5 space-y-3">
              {pontos.map((p) => (
                <li key={p} className="flex gap-3 text-muted">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted">
              Com isso já conseguimos sugerir o painel ideal, as fontes a conectar e uma faixa de
              investimento.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
