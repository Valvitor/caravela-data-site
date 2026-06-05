import type { Metadata } from "next";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { KpiGrid } from "@/components/dashboard/KpiCard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { StackedBar } from "@/components/dashboard/charts/StackedBar";
import { AreaTrend } from "@/components/dashboard/charts/AreaTrend";
import { BarComparison } from "@/components/dashboard/charts/BarComparison";
import { DonutShare } from "@/components/dashboard/charts/DonutShare";
import { DataTable } from "@/components/dashboard/DataTable";
import { SectionDivider } from "@/components/dashboard/SectionDivider";
import * as data from "@/data/contabilidade";

export const metadata: Metadata = {
  title: "Dashboard de Contabilidade (exemplo)",
  description:
    "Painel de exemplo para escritórios de contabilidade: DRE, fluxo de caixa, inadimplência e margem por cliente.",
};

const legend = (defs: { name: string; color: string }[]) => defs;

export default function ContabilidadeDashboard() {
  return (
    <div className="space-y-6">
      <DashboardHeader client={data.client} />

      <div className="flex flex-wrap items-end justify-between gap-2">
        <p className="max-w-2xl text-sm text-muted">
          Visão gerencial que o escritório entrega (white-label) a cada PME atendida — e usa para
          ler o próprio negócio.
        </p>
        <span className="text-xs uppercase tracking-wide text-faint">Período: Jan–Dez 2025</span>
      </div>

      <KpiGrid kpis={data.kpis} />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-6">
        <ChartCard
          title="DRE — Demonstração de Resultado"
          subtitle="Receita, custo e lucro por mês"
          className="lg:col-span-4"
          legend={legend(data.dreSeries)}
          summary="Gráfico de barras com receita, custo e lucro mensais ao longo de 2025, mostrando lucro positivo e crescente."
        >
          <StackedBar data={data.dre} series={data.dreSeries} format="brl" stacked={false} height={260} />
        </ChartCard>

        <ChartCard
          title="Fluxo de caixa"
          subtitle="Entradas vs. saídas"
          className="lg:col-span-2"
          legend={legend(data.fluxoSeries)}
          summary="Áreas comparando entradas e saídas de caixa por mês; entradas acima das saídas o ano todo."
        >
          <AreaTrend data={data.fluxoCaixa} series={data.fluxoSeries} format="brl" height={260} />
        </ChartCard>

        <ChartCard
          title="Contas a receber — aging"
          subtitle="Valores por faixa de vencimento"
          className="lg:col-span-2"
          summary="Barras por faixa de atraso: maior parte a vencer e pequena cauda acima de 60 dias."
        >
          <BarComparison data={data.aging} format="brl" height={240} />
        </ChartCard>

        <ChartCard
          title="Margem por cliente"
          subtitle="Top 6 clientes do portfólio (%)"
          className="lg:col-span-2"
          summary="Barras horizontais com a margem percentual dos seis principais clientes atendidos."
        >
          <BarComparison data={data.margemCliente} format="pct" horizontal height={240} highlightTop />
        </ChartCard>

        <ChartCard
          title="Composição de despesas"
          subtitle="Onde o custo é alocado"
          className="lg:col-span-2"
          summary="Rosca com a composição das despesas; pessoal é a maior fatia, seguido de impostos."
        >
          <DonutShare data={data.despesas} height={240} />
        </ChartCard>
      </div>

      <SectionDivider eyebrow="Aprofundamento" title="Centros de custo, gestores e carteira" />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-6">
        <ChartCard
          title="Resultado por centro de custo"
          subtitle="Receita e margem por área"
          className="lg:col-span-3"
          summary="Tabela com receita e margem por centro de custo: Fiscal, Contábil, Departamento Pessoal e Consultoria."
        >
          <DataTable
            columns={[
              { key: "centro", label: "Centro de custo" },
              { key: "receita", label: "Receita", format: "brl", align: "right" },
              { key: "margem", label: "Margem", format: "pct", align: "right" },
            ]}
            rows={data.centroCusto}
          />
        </ChartCard>

        <ChartCard
          title="Desempenho por gestor"
          subtitle="Carteira, receita e inadimplência"
          className="lg:col-span-3"
          summary="Tabela por gestor com número de clientes, receita gerada e taxa de inadimplência da carteira."
        >
          <DataTable
            columns={[
              { key: "gestor", label: "Gestor" },
              { key: "clientes", label: "Clientes", format: "int", align: "right" },
              { key: "receita", label: "Receita", format: "brl", align: "right" },
              { key: "inad", label: "Inadimpl.", format: "pct", align: "right" },
            ]}
            rows={data.gestores}
          />
        </ChartCard>

        <ChartCard
          title="Carteira de clientes"
          subtitle="Novos vs. cancelados por mês"
          className="lg:col-span-3"
          legend={data.carteiraSeries}
          summary="Barras de clientes novos versus cancelados nos últimos meses; entradas superam as saídas."
        >
          <StackedBar data={data.carteira} series={data.carteiraSeries} format="int" stacked={false} height={240} />
        </ChartCard>

        <ChartCard
          title="Mix de honorários"
          subtitle="Receita por tipo de serviço"
          className="lg:col-span-3"
          summary="Rosca com a participação de cada serviço na receita: contábil, fiscal, departamento pessoal e consultoria."
        >
          <DonutShare data={data.mixHonorarios} height={240} />
        </ChartCard>
      </div>
    </div>
  );
}
