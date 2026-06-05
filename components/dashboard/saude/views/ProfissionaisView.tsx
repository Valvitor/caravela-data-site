import { KpiGrid } from "@/components/dashboard/KpiCard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { BarComparison } from "@/components/dashboard/charts/BarComparison";
import { FunnelChart } from "@/components/dashboard/charts/FunnelChart";
import { DataTable } from "@/components/dashboard/DataTable";
import { conversaoOrcamentos, profissionais } from "@/data/saude";
import { filterProfissionais, kpisProfissionais, type Periodo } from "@/lib/saude";

export function ProfissionaisView({ periodo, profissional }: { periodo: Periodo; profissional: string }) {
  const list = filterProfissionais(profissionais, profissional);
  const producao = list.map((p) => ({ name: p.nome, value: p.producao }));
  const tabela = list.map((p) => ({
    nome: p.nome,
    especialidade: p.especialidade,
    producao: p.producao,
    ocupacao: p.ocupacao,
    conversao: p.conversao,
    noShow: p.noShow,
  }));

  return (
    <div className="space-y-6">
      <KpiGrid kpis={kpisProfissionais(periodo, profissional)} />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-6">
        <ChartCard
          title="Produção por profissional"
          subtitle="Receita gerada"
          className="lg:col-span-3"
          summary="Barras da produção (receita) por profissional."
        >
          <BarComparison data={producao} format="brl" horizontal height={260} highlightTop />
        </ChartCard>

        <ChartCard
          title="Conversão de orçamentos"
          subtitle="Do orçamento ao tratamento concluído"
          className="lg:col-span-3"
          summary="Funil de orçamentos: orçados, aprovados, iniciados e concluídos."
        >
          <FunnelChart data={conversaoOrcamentos} />
        </ChartCard>

        <ChartCard
          title="Equipe"
          subtitle="Produção, ocupação, conversão e no-show"
          className="lg:col-span-6"
          summary="Tabela por profissional com produção, ocupação, conversão de orçamentos e no-show."
        >
          <DataTable
            columns={[
              { key: "nome", label: "Profissional" },
              { key: "especialidade", label: "Especialidade" },
              { key: "producao", label: "Produção", format: "brl", align: "right" },
              { key: "ocupacao", label: "Ocupação", format: "pct", align: "right" },
              { key: "conversao", label: "Conversão", format: "pct", align: "right" },
              { key: "noShow", label: "No-show", format: "pct", align: "right" },
            ]}
            rows={tabela}
          />
        </ChartCard>
      </div>
    </div>
  );
}
