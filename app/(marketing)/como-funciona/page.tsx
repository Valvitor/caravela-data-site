import type { Metadata } from "next";
import { PageHeader } from "@/components/marketing/PageHeader";
import { DeliveryFlow } from "@/components/marketing/DeliveryFlow";
import { CtaSection } from "@/components/marketing/CtaSection";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Como funciona",
  description:
    "Do diagnóstico à sustentação: como a Caravela Data constrói e mantém o painel de gestão do seu negócio.",
};

const entregaveis = [
  { t: "Painel com a sua marca", d: "Hospedado, acessível por link e responsivo no celular. White-label de verdade." },
  { t: "Conexão automática das fontes", d: "ERP, plataforma de vendas, planilhas e mídia — coletados e atualizados sozinhos." },
  { t: "KPIs do seu setor", d: "As métricas que importam para a sua decisão, não um modelo genérico." },
  { t: "Acesso para toda a equipe", d: "Sem custo por usuário. Quem precisar olhar, olha." },
  { t: "Suporte e novas visões", d: "Ajustes e novos gráficos conforme o negócio evolui." },
  { t: "Reunião mensal de dados", d: "Uma leitura guiada do que os números estão dizendo." },
];

export default function ComoFuncionaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Como funciona"
        title="Você não opera nada. A gente cuida do dado de ponta a ponta."
        lead="Da primeira conversa ao painel rodando sozinho, em poucos passos — e com acompanhamento mensal depois."
      />
      <DeliveryFlow />
      <Section>
        <Eyebrow>O que você recebe</Eyebrow>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Um ativo de dados, não só um relatório.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {entregaveis.map((e) => (
            <div key={e.t} className="rounded-2xl border border-line bg-surface p-6">
              <h3 className="font-display text-lg font-semibold text-ink">{e.t}</h3>
              <p className="mt-2 text-sm text-muted">{e.d}</p>
            </div>
          ))}
        </div>
      </Section>
      <CtaSection />
    </>
  );
}
