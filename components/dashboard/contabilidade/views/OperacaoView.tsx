import { KpiGrid } from "@/components/dashboard/KpiCard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { StackedBar } from "@/components/dashboard/charts/StackedBar";
import { BarComparison } from "@/components/dashboard/charts/BarComparison";
import { DataTable } from "@/components/dashboard/DataTable";
import { obrigacoesMensal, obrigacoesSeries, obrigacoesTipo, operacaoGestores } from "@/data/contabilidade";
import { kpisOperacao, slicePeriod, type Filtro, type Periodo } from "@/lib/contabilidade";

export function OperacaoView({ filtro, periodo }: { filtro: Filtro; periodo: Periodo }) {
  const gestRows =
    filtro.gestor === "todos" ? operacaoGestores : operacaoGestores.filter((g) => g.gestor === filtro.gestor);
  const carga = gestRows.map((g) => ({ name: String(g.gestor), value: Number(g.clientes) }));

  return (
    <div className="space-y-6">
      <KpiGrid kpis={kpisOperacao(periodo, filtro.gestor)} />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-6">
        <ChartCard
          title="Obrigações entregues"
          subtitle="No prazo vs. em atraso"
          className="lg:col-span-4"
          legend={obrigacoesSeries}
          summary="Barras empilhadas de obrigações entregues no prazo e em atraso por mês."
        >
          <StackedBar data={slicePeriod(obrigacoesMensal, periodo)} series={obrigacoesSeries} format="int" height={260} />
        </ChartCard>

        <ChartCard
          title="Por tipo de obrigação"
          subtitle="Volume e % no prazo"
          className="lg:col-span-2"
          summary="Tabela por tipo de obrigação com volume entregue e percentual no prazo."
        >
          <DataTable
            columns={[
              { key: "tipo", label: "Tipo" },
              { key: "entregues", label: "Entregues", format: "int", align: "right" },
              { key: "noPrazo", label: "No prazo", format: "pct", align: "right" },
            ]}
            rows={obrigacoesTipo}
          />
        </ChartCard>

        <ChartCard
          title="Operação por gestor"
          subtitle="Carteira, entregas, SLA"
          className="lg:col-span-3"
          summary="Tabela por gestor com clientes, obrigações, percentual no prazo e SLA."
        >
          <DataTable
            columns={[
              { key: "gestor", label: "Gestor" },
              { key: "clientes", label: "Clientes", format: "int", align: "right" },
              { key: "obrigacoes", label: "Obrigações", format: "int", align: "right" },
              { key: "noPrazo", label: "No prazo", format: "pct", align: "right" },
              { key: "sla", label: "SLA (h)", format: "int", align: "right" },
            ]}
            rows={gestRows}
          />
        </ChartCard>

        <ChartCard
          title="Carga por gestor"
          subtitle="Clientes atendidos"
          className="lg:col-span-3"
          summary="Barras com o número de clientes atendidos por gestor."
        >
          <BarComparison data={carga} format="int" height={240} highlightTop />
        </ChartCard>
      </div>
    </div>
  );
}
