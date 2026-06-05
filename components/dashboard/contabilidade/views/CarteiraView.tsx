import { KpiGrid } from "@/components/dashboard/KpiCard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { StackedBar } from "@/components/dashboard/charts/StackedBar";
import { BarComparison } from "@/components/dashboard/charts/BarComparison";
import { DonutShare } from "@/components/dashboard/charts/DonutShare";
import { DataTable } from "@/components/dashboard/DataTable";
import { carteira, carteiraSeries, clientes } from "@/data/contabilidade";
import {
  ativos,
  filterClientes,
  groupCategories,
  kpisCarteira,
  rankClientes,
  slicePeriod,
  type Filtro,
  type Periodo,
} from "@/lib/contabilidade";

export function CarteiraView({ filtro, periodo }: { filtro: Filtro; periodo: Periodo }) {
  const filtrados = filterClientes(clientes, filtro);
  const at = ativos(filtrados);

  const inadTable = at
    .filter((c) => c.inadimplencia > 0)
    .sort((a, b) => b.inadimplencia - a.inadimplencia)
    .slice(0, 8)
    .map((c) => ({ nome: c.nome, gestor: c.gestor, honorario: c.honorario, inad: c.inadimplencia }));

  return (
    <div className="space-y-6">
      <KpiGrid kpis={kpisCarteira(filtrados)} />

      {at.length === 0 ? (
        <div className="rounded-2xl border border-line bg-surface p-10 text-center text-muted">
          Nenhum cliente ativo para este filtro. Ajuste gestor, regime ou segmento.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-6">
          <ChartCard
            title="Movimentação da carteira"
            subtitle="Novos vs. cancelados (escritório)"
            className="lg:col-span-3"
            legend={carteiraSeries}
            summary="Barras de clientes novos e cancelados por mês."
          >
            <StackedBar data={slicePeriod(carteira, periodo)} series={carteiraSeries} format="int" stacked={false} height={240} />
          </ChartCard>

          <ChartCard
            title="Ranking por honorário"
            subtitle="Maiores clientes do filtro"
            className="lg:col-span-3"
            summary="Ranking dos clientes do filtro por honorário mensal."
          >
            <BarComparison data={rankClientes(filtrados, 6)} format="brl" horizontal height={240} highlightTop />
          </ChartCard>

          <ChartCard
            title="Por regime tributário"
            subtitle="Participação na receita"
            className="lg:col-span-2"
            summary="Rosca com a receita por regime tributário."
          >
            <DonutShare data={groupCategories(at, "regime", "honorario")} height={230} />
          </ChartCard>

          <ChartCard
            title="Por segmento"
            subtitle="Nº de clientes"
            className="lg:col-span-2"
            summary="Barras com o número de clientes por segmento."
          >
            <BarComparison data={groupCategories(at, "segmento", "count")} format="int" horizontal height={230} />
          </ChartCard>

          <ChartCard
            title="Por porte"
            subtitle="Nº de clientes"
            className="lg:col-span-2"
            summary="Rosca com o número de clientes por porte."
          >
            <DonutShare data={groupCategories(at, "porte", "count")} height={230} />
          </ChartCard>

          <ChartCard
            title="Maiores inadimplências"
            subtitle="Clientes ativos com recebíveis vencidos"
            className="lg:col-span-6"
            summary="Tabela dos clientes ativos com maior inadimplência."
          >
            {inadTable.length > 0 ? (
              <DataTable
                columns={[
                  { key: "nome", label: "Cliente" },
                  { key: "gestor", label: "Gestor" },
                  { key: "honorario", label: "Honorário", format: "brl", align: "right" },
                  { key: "inad", label: "Inadimplência", format: "pct", align: "right" },
                ]}
                rows={inadTable}
              />
            ) : (
              <p className="py-6 text-center text-sm text-muted">Nenhum cliente inadimplente neste filtro. 🎉</p>
            )}
          </ChartCard>
        </div>
      )}
    </div>
  );
}
