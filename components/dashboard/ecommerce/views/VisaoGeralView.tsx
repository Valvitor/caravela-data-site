import { KpiGrid } from "@/components/dashboard/KpiCard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { StackedBar } from "@/components/dashboard/charts/StackedBar";
import { BarComparison } from "@/components/dashboard/charts/BarComparison";
import { FunnelChart } from "@/components/dashboard/charts/FunnelChart";
import {
  canais,
  canaisSeries,
  funil,
  produtos,
  receitaMeta,
  receitaMetaSeries,
} from "@/data/ecommerce";
import { kpisVisaoGeral, rankProdutos, slicePeriod, type Periodo } from "@/lib/ecommerce";

export function VisaoGeralView({ periodo }: { periodo: Periodo }) {
  return (
    <div className="space-y-6">
      <KpiGrid kpis={kpisVisaoGeral(periodo)} />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-6">
        <ChartCard
          title="Receita vs. meta"
          subtitle="Realizado contra o planejado"
          className="lg:col-span-4"
          legend={receitaMetaSeries}
          summary="Barras de receita realizada versus meta por mês no período."
        >
          <StackedBar data={slicePeriod(receitaMeta, periodo)} series={receitaMetaSeries} format="brl" stacked={false} height={260} />
        </ChartCard>

        <ChartCard
          title="Funil de conversão"
          subtitle="Da visita à compra"
          className="lg:col-span-2"
          summary="Funil de etapas de visitas até a compra."
        >
          <FunnelChart data={funil} />
        </ChartCard>

        <ChartCard
          title="Vendas por canal"
          subtitle="Loja própria e marketplaces"
          className="lg:col-span-4"
          legend={canaisSeries}
          summary="Barras empilhadas das vendas por canal ao longo do período."
        >
          <StackedBar data={slicePeriod(canais, periodo)} series={canaisSeries} format="brl" height={260} />
        </ChartCard>

        <ChartCard
          title="Top produtos"
          subtitle="Maior receita"
          className="lg:col-span-2"
          summary="Ranking dos produtos com maior receita."
        >
          <BarComparison data={rankProdutos(produtos, 6)} format="brl" horizontal height={260} highlightTop />
        </ChartCard>
      </div>
    </div>
  );
}
