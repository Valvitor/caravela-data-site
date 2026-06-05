import type { Metadata } from "next";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { KpiGrid } from "@/components/dashboard/KpiCard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { LineMulti } from "@/components/dashboard/charts/LineMulti";
import { StackedBar } from "@/components/dashboard/charts/StackedBar";
import { BarComparison } from "@/components/dashboard/charts/BarComparison";
import { DonutShare } from "@/components/dashboard/charts/DonutShare";
import { FunnelChart } from "@/components/dashboard/charts/FunnelChart";
import { SectionDivider } from "@/components/dashboard/SectionDivider";
import * as data from "@/data/ecommerce";

export const metadata: Metadata = {
  title: "Dashboard de E-commerce (exemplo)",
  description:
    "Painel de exemplo para e-commerce: CAC, LTV, ROAS, ticket médio, vendas por canal e margem por SKU.",
};

export default function EcommerceDashboard() {
  return (
    <div className="space-y-6">
      <DashboardHeader client={data.client} />

      <div className="flex flex-wrap items-end justify-between gap-2">
        <p className="max-w-2xl text-sm text-muted">
          Aquisição, rentabilidade e canais consolidados de marketplaces, loja própria e mídia paga
          em uma visão só.
        </p>
        <span className="text-xs uppercase tracking-wide text-faint">Período: Jan–Dez 2025</span>
      </div>

      <KpiGrid kpis={data.kpis} />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-6">
        <ChartCard
          title="CAC × LTV"
          subtitle="Custo de aquisição vs. valor do cliente"
          className="lg:col-span-3"
          legend={data.cacLtvSeries}
          summary="Linhas de CAC e LTV ao longo de 2025: LTV crescente e CAC em queda, ampliando a margem."
        >
          <LineMulti data={data.cacLtv} series={data.cacLtvSeries} format="brl" height={260} />
        </ChartCard>

        <ChartCard
          title="Vendas por canal"
          subtitle="Loja própria e marketplaces (R$)"
          className="lg:col-span-3"
          legend={data.canaisSeries}
          summary="Barras empilhadas das vendas por canal nos últimos meses, com pico em dezembro."
        >
          <StackedBar data={data.canais} series={data.canaisSeries} format="brl" height={260} />
        </ChartCard>

        <ChartCard
          title="Funil de conversão"
          subtitle="Da visita à compra"
          className="lg:col-span-2"
          summary="Funil de etapas de visitas até compra, com a taxa de conversão final em torno de 4,8%."
        >
          <FunnelChart data={data.funil} />
        </ChartCard>

        <ChartCard
          title="Margem por SKU"
          subtitle="Top produtos (%)"
          className="lg:col-span-2"
          summary="Barras horizontais com a margem percentual dos principais produtos."
        >
          <BarComparison data={data.margemSku} format="pct" horizontal height={240} highlightTop />
        </ChartCard>

        <ChartCard
          title="Investimento em mídia"
          subtitle="Distribuição por canal"
          className="lg:col-span-2"
          summary="Rosca com a divisão do investimento de mídia entre Google, Meta, TikTok e orgânico."
        >
          <DonutShare data={data.roasCanal} height={240} />
        </ChartCard>
      </div>

      <SectionDivider eyebrow="Aprofundamento" title="Meta, retenção e operação" />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-6">
        <ChartCard
          title="Receita vs. meta"
          subtitle="Realizado contra o planejado"
          className="lg:col-span-3"
          legend={data.receitaMetaSeries}
          summary="Barras de receita realizada versus meta por mês; o realizado supera a meta na maioria dos meses."
        >
          <StackedBar data={data.receitaMeta} series={data.receitaMetaSeries} format="brl" stacked={false} height={240} />
        </ChartCard>

        <ChartCard
          title="Novos vs. recorrentes"
          subtitle="Origem da receita"
          className="lg:col-span-3"
          legend={data.novosRecorrentesSeries}
          summary="Barras empilhadas da receita vinda de clientes novos e recorrentes por mês."
        >
          <StackedBar data={data.novosRecorrentes} series={data.novosRecorrentesSeries} format="brl" height={240} />
        </ChartCard>

        <ChartCard
          title="Cobertura de estoque"
          subtitle="Dias de estoque por categoria"
          className="lg:col-span-3"
          summary="Barras horizontais com os dias de cobertura de estoque por categoria; eletrônicos têm a maior cobertura."
        >
          <BarComparison data={data.coberturaEstoque} format="int" horizontal height={240} />
        </ChartCard>

        <ChartCard
          title="Taxa de devolução"
          subtitle="Por categoria (%)"
          className="lg:col-span-3"
          summary="Barras da taxa de devolução por categoria; vestuário e calçados concentram as devoluções."
        >
          <BarComparison data={data.devolucoes} format="pct" height={240} highlightTop />
        </ChartCard>
      </div>
    </div>
  );
}
