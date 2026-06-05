"use client";

import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardTabs } from "@/components/dashboard/DashboardTabs";
import { FilterBar, type SelectConfig } from "@/components/dashboard/FilterBar";
import { client } from "@/data/ecommerce";
import { opcoesCanal, opcoesCategoria, opcoesDispositivo, type Periodo } from "@/lib/ecommerce";
import { VisaoGeralView } from "./views/VisaoGeralView";
import { VendasView } from "./views/VendasView";
import { MarketingView } from "./views/MarketingView";
import { ProdutosView } from "./views/ProdutosView";

type Aba = "visao-geral" | "vendas" | "marketing" | "produtos";

const tabs: { value: Aba; label: string }[] = [
  { value: "visao-geral", label: "Visão geral" },
  { value: "vendas", label: "Vendas & canais" },
  { value: "marketing", label: "Marketing & aquisição" },
  { value: "produtos", label: "Produtos & estoque" },
];

const isAba = (v: string | null): v is Aba => !!v && tabs.some((t) => t.value === v);
const isPeriodo = (v: string | null): v is Periodo => v === "3m" || v === "6m" || v === "12m";

export function EcommerceApp() {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();

  const aba: Aba = isAba(sp.get("aba")) ? (sp.get("aba") as Aba) : "visao-geral";
  const periodo: Periodo = isPeriodo(sp.get("periodo")) ? (sp.get("periodo") as Periodo) : "12m";
  const canal = sp.get("canal") ?? "todos";
  const categoria = sp.get("categoria") ?? "todos";
  const dispositivo = sp.get("dispositivo") ?? "todos";

  const setParams = useCallback(
    (updates: Record<string, string>) => {
      const params = new URLSearchParams(sp.toString());
      for (const [k, v] of Object.entries(updates)) {
        const isDefault =
          !v || v === "todos" || (k === "periodo" && v === "12m") || (k === "aba" && v === "visao-geral");
        if (isDefault) params.delete(k);
        else params.set(k, v);
      }
      const qs = params.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [router, pathname, sp],
  );

  const selects: SelectConfig[] = [];
  if (aba === "vendas" || aba === "marketing") {
    selects.push({ key: "canal", label: "Canal", value: canal, options: opcoesCanal(), onChange: (v) => setParams({ canal: v }) });
  }
  if (aba === "marketing") {
    selects.push({ key: "dispositivo", label: "Dispositivo", value: dispositivo, options: opcoesDispositivo(), onChange: (v) => setParams({ dispositivo: v }) });
  }
  if (aba === "produtos") {
    selects.push({ key: "categoria", label: "Categoria", value: categoria, options: opcoesCategoria(), onChange: (v) => setParams({ categoria: v }) });
  }

  return (
    <div className="space-y-6">
      <DashboardHeader client={client} />

      <div className="space-y-4">
        <DashboardTabs tabs={tabs} value={aba} onChange={(v) => setParams({ aba: v })} />
        <FilterBar periodo={periodo} onPeriodo={(p) => setParams({ periodo: p })} selects={selects} />
      </div>

      {aba === "visao-geral" && <VisaoGeralView periodo={periodo} />}
      {aba === "vendas" && <VendasView periodo={periodo} canal={canal} />}
      {aba === "marketing" && <MarketingView periodo={periodo} canal={canal} dispositivo={dispositivo} />}
      {aba === "produtos" && <ProdutosView categoria={categoria} />}
    </div>
  );
}
