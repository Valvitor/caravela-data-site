import type { Metadata } from "next";
import { PageHeader } from "@/components/marketing/PageHeader";
import { SectorCards } from "@/components/marketing/SectorCards";
import { CtaSection } from "@/components/marketing/CtaSection";

export const metadata: Metadata = {
  title: "Setores",
  description:
    "Contabilidade, e-commerce e saúde: veja os dashboards de exemplo por setor, com KPIs reais de cada nicho.",
};

export default function SetoresPage() {
  return (
    <>
      <PageHeader
        eyebrow="Setores"
        title="Especialização por nicho, do KPI ao conector."
        lead="Cada setor tem suas métricas e seus sistemas. Comece pelo dashboard de exemplo do seu — todos com dados fictícios, só para mostrar o produto."
      />
      <SectorCards />
      <CtaSection />
    </>
  );
}
