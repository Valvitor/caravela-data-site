"use client";

import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardTabs } from "@/components/dashboard/DashboardTabs";
import { FilterBar } from "@/components/dashboard/FilterBar";
import { client } from "@/data/contabilidade";
import type { Filtro, Periodo } from "@/lib/contabilidade";
import { VisaoGeralView } from "./views/VisaoGeralView";
import { FinanceiroView } from "./views/FinanceiroView";
import { CarteiraView } from "./views/CarteiraView";
import { OperacaoView } from "./views/OperacaoView";

type Aba = "visao-geral" | "financeiro" | "carteira" | "operacao";

const tabs: { value: Aba; label: string }[] = [
  { value: "visao-geral", label: "Visão geral" },
  { value: "financeiro", label: "Financeiro" },
  { value: "carteira", label: "Carteira de clientes" },
  { value: "operacao", label: "Operação & prazos" },
];

const isAba = (v: string | null): v is Aba => !!v && tabs.some((t) => t.value === v);
const isPeriodo = (v: string | null): v is Periodo => v === "3m" || v === "6m" || v === "12m";

export function ContabilidadeApp() {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();

  const abaParam = sp.get("aba");
  const periodoParam = sp.get("periodo");
  const aba: Aba = isAba(abaParam) ? abaParam : "visao-geral";
  const periodo: Periodo = isPeriodo(periodoParam) ? periodoParam : "12m";
  const filtro: Filtro = {
    gestor: sp.get("gestor") ?? "todos",
    regime: sp.get("regime") ?? "todos",
    segmento: sp.get("segmento") ?? "todos",
  };

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

  const show: (keyof Filtro)[] =
    aba === "carteira" ? ["gestor", "regime", "segmento"] : aba === "operacao" ? ["gestor"] : [];

  return (
    <div className="space-y-6">
      <DashboardHeader client={client} />

      <div className="space-y-4">
        <DashboardTabs tabs={tabs} value={aba} onChange={(v) => setParams({ aba: v })} />
        <FilterBar
          periodo={periodo}
          onPeriodo={(p) => setParams({ periodo: p })}
          filtro={filtro}
          onFiltro={(k, v) => setParams({ [k]: v })}
          show={show}
        />
      </div>

      {aba === "visao-geral" && <VisaoGeralView periodo={periodo} />}
      {aba === "financeiro" && <FinanceiroView periodo={periodo} />}
      {aba === "carteira" && <CarteiraView filtro={filtro} periodo={periodo} />}
      {aba === "operacao" && <OperacaoView filtro={filtro} periodo={periodo} />}
    </div>
  );
}
