import type { Metadata } from "next";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { KpiGrid } from "@/components/dashboard/KpiCard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { LineMulti } from "@/components/dashboard/charts/LineMulti";
import { AreaTrend } from "@/components/dashboard/charts/AreaTrend";
import { BarComparison } from "@/components/dashboard/charts/BarComparison";
import { DonutShare } from "@/components/dashboard/charts/DonutShare";
import * as data from "@/data/saude";

export const metadata: Metadata = {
  title: "Dashboard de Saúde / Clínicas (exemplo)",
  description:
    "Painel de exemplo para clínicas: no-show, ocupação de agenda, ticket por especialidade e margem por procedimento.",
};

export default function SaudeDashboard() {
  return (
    <div className="space-y-6">
      <DashboardHeader client={data.client} />

      <div className="flex flex-wrap items-end justify-between gap-2">
        <p className="max-w-2xl text-sm text-muted">
          O painel que ataca a maior perda da clínica: o no-show. Mais ocupação de agenda, menos
          inadimplência e margem por especialidade.
        </p>
        <span className="text-xs uppercase tracking-wide text-faint">Período: Jan–Dez 2025</span>
      </div>

      <KpiGrid kpis={data.kpis} />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-6">
        <ChartCard
          title="Taxa de no-show"
          subtitle="Faixa em destaque: 15–30% (faixa típica do setor)"
          className="lg:col-span-4"
          legend={data.noShowSeries}
          summary="Linha do no-show mensal caindo de 22% para 14% ao longo do ano, saindo da faixa de risco de 15 a 30%."
        >
          <LineMulti
            data={data.noShow}
            series={data.noShowSeries}
            format="pct"
            height={260}
            refBand={data.noShowRef}
            refLabel="Faixa de risco"
          />
        </ChartCard>

        <ChartCard
          title="Receita por especialidade"
          subtitle="Participação no faturamento"
          className="lg:col-span-2"
          summary="Rosca com a participação de cada especialidade na receita; ortodontia e implantes lideram."
        >
          <DonutShare data={data.receitaEspecialidade} height={260} />
        </ChartCard>

        <ChartCard
          title="Ticket médio por especialidade"
          subtitle="Valor médio por atendimento (R$)"
          className="lg:col-span-2"
          summary="Barras horizontais do ticket médio por especialidade; implantes têm o maior ticket."
        >
          <BarComparison data={data.ticketEspecialidade} format="brl" horizontal height={240} highlightTop />
        </ChartCard>

        <ChartCard
          title="Ocupação de agenda"
          subtitle="Horários preenchidos (%)"
          className="lg:col-span-2"
          summary="Área da taxa de ocupação da agenda subindo de 66% para 78% ao longo do ano."
        >
          <AreaTrend data={data.ocupacao} series={data.ocupacaoSeries} format="pct" height={240} />
        </ChartCard>

        <ChartCard
          title="Margem por procedimento"
          subtitle="Top procedimentos (%)"
          className="lg:col-span-2"
          summary="Barras horizontais com a margem percentual por procedimento; clareamento e implante no topo."
        >
          <BarComparison data={data.margemProcedimento} format="pct" horizontal height={240} highlightTop />
        </ChartCard>
      </div>
    </div>
  );
}
