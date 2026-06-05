import { KpiGrid } from "@/components/dashboard/KpiCard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { AreaTrend } from "@/components/dashboard/charts/AreaTrend";
import { StackedBar } from "@/components/dashboard/charts/StackedBar";
import { BarComparison } from "@/components/dashboard/charts/BarComparison";
import { DonutShare } from "@/components/dashboard/charts/DonutShare";
import { DataTable } from "@/components/dashboard/DataTable";
import { canaisDetalhe, novosRecorrentes, novosRecorrentesSeries } from "@/data/ecommerce";
import { kpisVendas, serieCanal, serieCanalSeries, slicePeriod, type Periodo } from "@/lib/ecommerce";

export function VendasView({ periodo, canal }: { periodo: Periodo; canal: string }) {
  const participacao = canaisDetalhe.map((r) => ({ name: String(r.canal), value: Number(r.receita) }));
  const ticketCanal = canaisDetalhe.map((r) => ({ name: String(r.canal), value: Number(r.ticket) }));
  const tituloSerie = canal === "todos" ? "Receita por mês (todos os canais)" : `Receita — ${canal}`;

  return (
    <div className="space-y-6">
      <KpiGrid kpis={kpisVendas(periodo, canal)} />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-6">
        <ChartCard
          title={tituloSerie}
          subtitle="Evolução no período"
          className="lg:col-span-4"
          legend={serieCanalSeries}
          summary="Área da receita do canal selecionado ao longo do período."
        >
          <AreaTrend data={slicePeriod(serieCanal(canal), periodo)} series={serieCanalSeries} format="brl" height={260} />
        </ChartCard>

        <ChartCard
          title="Participação por canal"
          subtitle="Share de receita"
          className="lg:col-span-2"
          summary="Rosca com a participação de cada canal na receita."
        >
          <DonutShare data={participacao} format="brl" height={260} />
        </ChartCard>

        <ChartCard
          title="Novos vs. recorrentes"
          subtitle="Origem da receita"
          className="lg:col-span-4"
          legend={novosRecorrentesSeries}
          summary="Barras empilhadas da receita de clientes novos e recorrentes por mês."
        >
          <StackedBar data={slicePeriod(novosRecorrentes, periodo)} series={novosRecorrentesSeries} format="brl" height={260} />
        </ChartCard>

        <ChartCard
          title="Ticket por canal"
          subtitle="Valor médio do pedido"
          className="lg:col-span-2"
          summary="Barras do ticket médio por canal."
        >
          <BarComparison data={ticketCanal} format="brl" horizontal height={260} highlightTop />
        </ChartCard>

        <ChartCard
          title="Desempenho por canal"
          subtitle="Receita, pedidos, ticket e conversão"
          className="lg:col-span-6"
          summary="Tabela por canal com receita, pedidos, ticket e taxa de conversão."
        >
          <DataTable
            columns={[
              { key: "canal", label: "Canal" },
              { key: "receita", label: "Receita", format: "brl", align: "right" },
              { key: "pedidos", label: "Pedidos", format: "int", align: "right" },
              { key: "ticket", label: "Ticket", format: "brl", align: "right" },
              { key: "conversao", label: "Conversão", format: "pct", align: "right" },
            ]}
            rows={canaisDetalhe}
          />
        </ChartCard>
      </div>
    </div>
  );
}
