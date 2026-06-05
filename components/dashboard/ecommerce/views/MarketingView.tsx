import { KpiGrid } from "@/components/dashboard/KpiCard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { LineMulti } from "@/components/dashboard/charts/LineMulti";
import { BarComparison } from "@/components/dashboard/charts/BarComparison";
import { DonutShare } from "@/components/dashboard/charts/DonutShare";
import { FunnelChart } from "@/components/dashboard/charts/FunnelChart";
import { cacLtv, cacLtvSeries, canaisDetalhe, dispositivos, funil, roasCanal } from "@/data/ecommerce";
import { kpisMarketing, slicePeriod, type Periodo } from "@/lib/ecommerce";

export function MarketingView({
  periodo,
  canal,
  dispositivo,
}: {
  periodo: Periodo;
  canal: string;
  dispositivo: string;
}) {
  const roasPorCanal = canaisDetalhe.map((r) => ({ name: String(r.canal), value: Number(r.roas) }));
  const convPorDispositivo = dispositivos.map((d) => ({ name: String(d.dispositivo), value: Number(d.conversao) }));

  return (
    <div className="space-y-6">
      <KpiGrid kpis={kpisMarketing(periodo, canal, dispositivo)} />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-6">
        <ChartCard
          title="CAC × LTV"
          subtitle="Custo de aquisição vs. valor do cliente"
          className="lg:col-span-4"
          legend={cacLtvSeries}
          summary="Linhas de CAC e LTV ao longo do período."
        >
          <LineMulti data={slicePeriod(cacLtv, periodo)} series={cacLtvSeries} format="brl" height={260} />
        </ChartCard>

        <ChartCard
          title="Investimento de mídia"
          subtitle="Distribuição por canal"
          className="lg:col-span-2"
          summary="Rosca com a divisão do investimento de mídia entre os canais."
        >
          <DonutShare data={roasCanal} height={260} />
        </ChartCard>

        <ChartCard
          title="ROAS por canal"
          subtitle="Retorno sobre investimento"
          className="lg:col-span-2"
          summary="Barras do ROAS por canal de venda."
        >
          <BarComparison data={roasPorCanal} format="ratio" horizontal height={240} highlightTop />
        </ChartCard>

        <ChartCard
          title="Conversão por dispositivo"
          subtitle="Mobile, desktop e tablet"
          className="lg:col-span-2"
          summary="Barras da taxa de conversão por dispositivo."
        >
          <BarComparison data={convPorDispositivo} format="pct" height={240} highlightTop />
        </ChartCard>

        <ChartCard
          title="Funil de conversão"
          subtitle="Da visita à compra"
          className="lg:col-span-2"
          summary="Funil de etapas de visitas até a compra."
        >
          <FunnelChart data={funil} />
        </ChartCard>
      </div>
    </div>
  );
}
