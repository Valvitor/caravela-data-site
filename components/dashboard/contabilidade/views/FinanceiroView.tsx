import { KpiGrid } from "@/components/dashboard/KpiCard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { AreaTrend } from "@/components/dashboard/charts/AreaTrend";
import { LineMulti } from "@/components/dashboard/charts/LineMulti";
import { BarComparison } from "@/components/dashboard/charts/BarComparison";
import { DonutShare } from "@/components/dashboard/charts/DonutShare";
import { DataTable } from "@/components/dashboard/DataTable";
import {
  aging,
  centroCusto,
  contasPagar,
  despesas,
  dre,
  fluxoCaixa,
  fluxoSeries,
  inadimplenciaMensal,
  inadSeries,
} from "@/data/contabilidade";
import { kpisFinanceiro, slicePeriod, type Periodo } from "@/lib/contabilidade";

export function FinanceiroView({ periodo }: { periodo: Periodo }) {
  const dreRows = slicePeriod(dre, periodo).map((r) => ({
    ...r,
    margem: Math.round((Number(r.lucro) / Number(r.receita)) * 1000) / 10,
  }));

  return (
    <div className="space-y-6">
      <KpiGrid kpis={kpisFinanceiro(periodo)} />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-6">
        <ChartCard
          title="DRE detalhada"
          subtitle="Mês a mês"
          className="lg:col-span-3"
          summary="Tabela de receita, custo, lucro e margem por mês no período."
        >
          <DataTable
            columns={[
              { key: "month", label: "Mês" },
              { key: "receita", label: "Receita", format: "brl", align: "right" },
              { key: "custo", label: "Custo", format: "brl", align: "right" },
              { key: "lucro", label: "Lucro", format: "brl", align: "right" },
              { key: "margem", label: "Margem", format: "pct", align: "right" },
            ]}
            rows={dreRows}
          />
        </ChartCard>

        <ChartCard
          title="Fluxo de caixa"
          subtitle="Entradas vs. saídas"
          className="lg:col-span-3"
          legend={fluxoSeries}
          summary="Áreas de entradas e saídas de caixa por mês."
        >
          <AreaTrend data={slicePeriod(fluxoCaixa, periodo)} series={fluxoSeries} format="brl" height={240} />
        </ChartCard>

        <ChartCard
          title="Inadimplência mensal"
          subtitle="Recebíveis vencidos (%)"
          className="lg:col-span-3"
          legend={inadSeries}
          summary="Linha da taxa de inadimplência ao longo do período."
        >
          <LineMulti data={slicePeriod(inadimplenciaMensal, periodo)} series={inadSeries} format="pct" height={240} />
        </ChartCard>

        <ChartCard
          title="Composição de despesas"
          subtitle="Onde o custo é alocado"
          className="lg:col-span-3"
          summary="Rosca com a composição das despesas do escritório."
        >
          <DonutShare data={despesas} height={240} />
        </ChartCard>

        <ChartCard
          title="Contas a receber"
          subtitle="Aging (R$)"
          className="lg:col-span-2"
          summary="Recebíveis por faixa de vencimento."
        >
          <BarComparison data={aging} format="brl" height={220} />
        </ChartCard>

        <ChartCard
          title="Contas a pagar"
          subtitle="Aging (R$)"
          className="lg:col-span-2"
          summary="Contas a pagar por faixa de vencimento."
        >
          <BarComparison data={contasPagar} format="brl" color="#fb7185" height={220} />
        </ChartCard>

        <ChartCard
          title="Margem por centro de custo"
          subtitle="Receita e margem"
          className="lg:col-span-2"
          summary="Tabela de receita e margem por centro de custo."
        >
          <DataTable
            columns={[
              { key: "centro", label: "Centro" },
              { key: "receita", label: "Receita", format: "brl", align: "right" },
              { key: "margem", label: "Margem", format: "pct", align: "right" },
            ]}
            rows={centroCusto}
          />
        </ChartCard>
      </div>
    </div>
  );
}
