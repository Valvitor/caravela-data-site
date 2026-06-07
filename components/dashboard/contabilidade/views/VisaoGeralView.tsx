import { KpiGrid } from "@/components/dashboard/KpiCard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { StackedBar } from "@/components/dashboard/charts/StackedBar";
import { AreaTrend } from "@/components/dashboard/charts/AreaTrend";
import { BarComparison } from "@/components/dashboard/charts/BarComparison";
import { DonutShare } from "@/components/dashboard/charts/DonutShare";
import {
  clientes,
  dre,
  dreSeries,
  evolucaoReceita,
  evolucaoSeries,
  mixHonorarios,
} from "@/data/contabilidade";
import { kpisVisaoGeral, rankClientes, slicePeriod, type Periodo } from "@/lib/contabilidade";

export function VisaoGeralView({ periodo }: { periodo: Periodo }) {
  return (
    <div className="space-y-6">
      <KpiGrid kpis={kpisVisaoGeral(periodo)} />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-6">
        <ChartCard
          title="DRE e resultado"
          subtitle="Receita, custo e lucro por mês"
          className="lg:col-span-4"
          legend={dreSeries}
          summary="Barras de receita, custo e lucro por mês no período selecionado."
        >
          <StackedBar data={slicePeriod(dre, periodo)} series={dreSeries} format="brl" stacked={false} height={260} />
        </ChartCard>

        <ChartCard
          title="Mix de honorários"
          subtitle="Receita por tipo de serviço"
          className="lg:col-span-2"
          summary="Rosca com a participação de cada serviço na receita."
        >
          <DonutShare data={mixHonorarios} height={260} />
        </ChartCard>

        <ChartCard
          title="Evolução de receita e MRR"
          subtitle="Receita total vs. recorrente"
          className="lg:col-span-4"
          legend={evolucaoSeries}
          summary="Áreas de receita total e MRR recorrente ao longo do período."
        >
          <AreaTrend data={slicePeriod(evolucaoReceita, periodo)} series={evolucaoSeries} format="brl" height={260} />
        </ChartCard>

        <ChartCard
          title="Top clientes"
          subtitle="Maiores honorários"
          className="lg:col-span-2"
          summary="Ranking dos clientes com maior honorário mensal."
        >
          <BarComparison data={rankClientes(clientes, 6)} format="brl" horizontal height={260} highlightTop />
        </ChartCard>
      </div>
    </div>
  );
}
