import { KpiGrid } from "@/components/dashboard/KpiCard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { LineMulti } from "@/components/dashboard/charts/LineMulti";
import { AreaTrend } from "@/components/dashboard/charts/AreaTrend";
import { BarComparison } from "@/components/dashboard/charts/BarComparison";
import { agendaSemana, noShow, noShowRef, noShowSeries, ocupacao, ocupacaoSeries, profissionais } from "@/data/saude";
import { kpisAgenda, slicePeriod, type Periodo } from "@/lib/saude";

export function AgendaView({ periodo, profissional }: { periodo: Periodo; profissional: string }) {
  const noShowDia = agendaSemana.map((d) => ({ name: String(d.dia), value: Number(d.noShow) }));
  const noShowProf = profissionais.map((p) => ({ name: p.nome, value: p.noShow }));

  return (
    <div className="space-y-6">
      <KpiGrid kpis={kpisAgenda(periodo, profissional)} />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-6">
        <ChartCard
          title="Taxa de no-show"
          subtitle="Faixa em destaque: 15–30%"
          className="lg:col-span-4"
          legend={noShowSeries}
          summary="Linha do no-show mensal ao longo do período, com a faixa de risco de 15 a 30%."
        >
          <LineMulti data={slicePeriod(noShow, periodo)} series={noShowSeries} format="pct" height={260} refBand={noShowRef} refLabel="Faixa de risco" />
        </ChartCard>

        <ChartCard
          title="No-show por dia"
          subtitle="Dia da semana"
          className="lg:col-span-2"
          summary="Barras do no-show por dia da semana; sábado tem a maior taxa."
        >
          <BarComparison data={noShowDia} format="pct" height={260} highlightTop />
        </ChartCard>

        <ChartCard
          title="Ocupação da agenda"
          subtitle="Horários preenchidos (%)"
          className="lg:col-span-3"
          legend={ocupacaoSeries}
          summary="Área da ocupação da agenda ao longo do período."
        >
          <AreaTrend data={slicePeriod(ocupacao, periodo)} series={ocupacaoSeries} format="pct" height={250} />
        </ChartCard>

        <ChartCard
          title="No-show por profissional"
          subtitle="Faltas por dentista (%)"
          className="lg:col-span-3"
          summary="Barras do no-show por profissional."
        >
          <BarComparison data={noShowProf} format="pct" horizontal height={250} highlightTop />
        </ChartCard>
      </div>
    </div>
  );
}
