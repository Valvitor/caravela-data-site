import { KpiGrid } from "@/components/dashboard/KpiCard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { BarComparison } from "@/components/dashboard/charts/BarComparison";
import { DonutShare } from "@/components/dashboard/charts/DonutShare";
import { DataTable } from "@/components/dashboard/DataTable";
import { coberturaEstoque, devolucoes, produtos } from "@/data/ecommerce";
import { filterProdutos, groupProdutos, kpisProdutos, margemPorSku, rankProdutos } from "@/lib/ecommerce";

export function ProdutosView({ categoria }: { categoria: string }) {
  const filtrados = filterProdutos(produtos, categoria);
  const cobertura = categoria === "todos" ? coberturaEstoque : coberturaEstoque.filter((c) => c.name === categoria);
  const devol = categoria === "todos" ? devolucoes : devolucoes.filter((c) => c.name === categoria);
  const tabela = filtrados
    .slice()
    .sort((a, b) => b.receita - a.receita)
    .map((p) => ({
      nome: p.nome,
      categoria: p.categoria,
      canal: p.canal,
      receita: p.receita,
      margem: p.margem,
      estoqueDias: p.estoqueDias,
      status: p.status,
    }));

  return (
    <div className="space-y-6">
      <KpiGrid kpis={kpisProdutos(categoria)} />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-6">
        <ChartCard
          title="Top produtos por receita"
          subtitle={categoria === "todos" ? "Catálogo completo" : categoria}
          className="lg:col-span-3"
          summary="Ranking dos produtos do filtro por receita."
        >
          <BarComparison data={rankProdutos(filtrados, 6)} format="brl" horizontal height={250} highlightTop />
        </ChartCard>

        <ChartCard
          title="Margem por SKU"
          subtitle="Maiores margens (%)"
          className="lg:col-span-3"
          summary="Ranking dos produtos do filtro por margem."
        >
          <BarComparison data={margemPorSku(filtrados, 6)} format="pct" horizontal height={250} highlightTop />
        </ChartCard>

        <ChartCard
          title="Cobertura de estoque"
          subtitle="Dias por categoria"
          className="lg:col-span-2"
          summary="Dias de cobertura de estoque por categoria."
        >
          <BarComparison data={cobertura} format="int" horizontal height={230} />
        </ChartCard>

        <ChartCard
          title="Devoluções"
          subtitle="Por categoria (%)"
          className="lg:col-span-2"
          summary="Taxa de devolução por categoria."
        >
          <BarComparison data={devol} format="pct" height={230} highlightTop />
        </ChartCard>

        <ChartCard
          title="Receita por categoria"
          subtitle="Participação"
          className="lg:col-span-2"
          summary="Rosca com a participação de cada categoria na receita."
        >
          <DonutShare data={groupProdutos(filtrados, "categoria", "receita")} format="brl" height={230} />
        </ChartCard>

        <ChartCard
          title="Catálogo"
          subtitle="Produtos do filtro"
          className="lg:col-span-6"
          summary="Tabela de produtos com categoria, canal, receita, margem, estoque e status."
        >
          <DataTable
            columns={[
              { key: "nome", label: "Produto" },
              { key: "categoria", label: "Categoria" },
              { key: "canal", label: "Canal" },
              { key: "receita", label: "Receita", format: "brl", align: "right" },
              { key: "margem", label: "Margem", format: "pct", align: "right" },
              { key: "estoqueDias", label: "Estoque (dias)", format: "int", align: "right" },
              { key: "status", label: "Status" },
            ]}
            rows={tabela}
          />
        </ChartCard>
      </div>
    </div>
  );
}
