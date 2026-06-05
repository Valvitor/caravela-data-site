import { KpiGrid } from "@/components/dashboard/KpiCard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { StackedBar } from "@/components/dashboard/charts/StackedBar";
import { LineMulti } from "@/components/dashboard/charts/LineMulti";
import { BarComparison } from "@/components/dashboard/charts/BarComparison";
import { DonutShare } from "@/components/dashboard/charts/DonutShare";
import {
  faturamento,
  faturamentoSeries,
  noShow,
  noShowRef,
  noShowSeries,
  procedimentos,
  receitaEspecialidade,
} from "@/data/saude";
import { kpisVisaoGeral, rankProcedimentos, slicePeriod, type Periodo } from "@/lib/saude";

export function VisaoGeralView({ periodo }: { periodo: Periodo }) {
  return (
    <div className="space-y-6">
      <KpiGrid kpis={kpisVisaoGeral(periodo)} />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-6">
        <ChartCard
          title="Faturamento"
          subtitle="Particular vs. convênio"
          className="lg:col-span-4"
          legend={faturamentoSeries}
          summary="Barras empilhadas do faturamento particular e por convênio ao longo do período."
        >
          <StackedBar data={slicePeriod(faturamento, periodo)} series={faturamentoSeries} format="brl" height={260} />
        </ChartCard>

        <ChartCard
          title="Receita por especialidade"
          subtitle="Participação"
          className="lg:col-span-2"
          summary="Rosca com a participação de cada especialidade na receita."
        >
          <DonutShare data={receitaEspecialidade} height={260} />
        </ChartCard>

        <ChartCard
          title="Taxa de no-show"
          subtitle="Faixa em destaque: 15–30% (típica do setor)"
          className="lg:col-span-4"
          legend={noShowSeries}
          summary="Linha do no-show mensal, em queda, saindo da faixa de risco de 15 a 30%."
        >
          <LineMulti data={slicePeriod(noShow, periodo)} series={noShowSeries} format="pct" height={260} refBand={noShowRef} refLabel="Faixa de risco" />
        </ChartCard>

        <ChartCard
          title="Top procedimentos"
          subtitle="Maior receita"
          className="lg:col-span-2"
          summary="Ranking dos procedimentos com maior receita."
        >
          <BarComparison data={rankProcedimentos(procedimentos, 6)} format="brl" horizontal height={260} highlightTop />
        </ChartCard>
      </div>
    </div>
  );
}
