import { KpiGrid } from "@/components/dashboard/KpiCard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { StackedBar } from "@/components/dashboard/charts/StackedBar";
import { LineMulti } from "@/components/dashboard/charts/LineMulti";
import { BarComparison } from "@/components/dashboard/charts/BarComparison";
import { DonutShare } from "@/components/dashboard/charts/DonutShare";
import { DataTable } from "@/components/dashboard/DataTable";
import {
  convenios,
  faturamento,
  faturamentoSeries,
  inadimplenciaMensal,
  inadimplenciaSeries,
  procedimentos,
} from "@/data/saude";
import {
  filterProcedimentos,
  kpisFinanceiro,
  receitaPorEspecialidade,
  slicePeriod,
  type Periodo,
} from "@/lib/saude";

export function FinanceiroView({
  periodo,
  especialidade,
  convenio,
}: {
  periodo: Periodo;
  especialidade: string;
  convenio: string;
}) {
  const procFiltrados = filterProcedimentos(procedimentos, especialidade);
  const fatConvenio = convenios.map((c) => ({ name: String(c.convenio), value: Number(c.faturamento) }));
  const margemProc = procFiltrados
    .slice()
    .sort((a, b) => b.margem - a.margem)
    .slice(0, 7)
    .map((p) => ({ name: p.nome, value: p.margem }));

  return (
    <div className="space-y-6">
      <KpiGrid kpis={kpisFinanceiro(periodo, especialidade, convenio)} />

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
          title="Faturamento por convênio"
          subtitle="Participação"
          className="lg:col-span-2"
          summary="Rosca com a participação de cada convênio no faturamento."
        >
          <DonutShare data={fatConvenio} format="brl" height={260} />
        </ChartCard>

        <ChartCard
          title="Receita por especialidade"
          subtitle={especialidade === "todos" ? "Todas" : especialidade}
          className="lg:col-span-3"
          summary="Barras da receita por especialidade no filtro."
        >
          <BarComparison data={receitaPorEspecialidade(procFiltrados)} format="brl" horizontal height={250} highlightTop />
        </ChartCard>

        <ChartCard
          title="Margem por procedimento"
          subtitle="Maiores margens (%)"
          className="lg:col-span-3"
          summary="Barras da margem por procedimento no filtro."
        >
          <BarComparison data={margemProc} format="pct" horizontal height={250} highlightTop />
        </ChartCard>

        <ChartCard
          title="Inadimplência mensal"
          subtitle="Parcelas de tratamento vencidas (%)"
          className="lg:col-span-3"
          legend={inadimplenciaSeries}
          summary="Linha da inadimplência ao longo do período, em queda."
        >
          <LineMulti data={slicePeriod(inadimplenciaMensal, periodo)} series={inadimplenciaSeries} format="pct" height={250} />
        </ChartCard>

        <ChartCard
          title="Convênios"
          subtitle="Faturamento, ticket, glosa e no-show"
          className="lg:col-span-3"
          summary="Tabela por convênio com faturamento, atendimentos, ticket, glosa e no-show."
        >
          <DataTable
            columns={[
              { key: "convenio", label: "Convênio" },
              { key: "faturamento", label: "Faturamento", format: "brl", align: "right" },
              { key: "ticket", label: "Ticket", format: "brl", align: "right" },
              { key: "glosa", label: "Glosa", format: "pct", align: "right" },
              { key: "noShow", label: "No-show", format: "pct", align: "right" },
            ]}
            rows={convenios}
          />
        </ChartCard>
      </div>
    </div>
  );
}
