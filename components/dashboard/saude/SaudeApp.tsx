"use client";

import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardTabs } from "@/components/dashboard/DashboardTabs";
import { FilterBar, type SelectConfig } from "@/components/dashboard/FilterBar";
import { client } from "@/data/saude";
import { opcoesConvenio, opcoesEspecialidade, opcoesProfissional, type Periodo } from "@/lib/saude";
import { VisaoGeralView } from "./views/VisaoGeralView";
import { AgendaView } from "./views/AgendaView";
import { FinanceiroView } from "./views/FinanceiroView";
import { ProfissionaisView } from "./views/ProfissionaisView";

type Aba = "visao-geral" | "agenda" | "financeiro" | "profissionais";

const tabs: { value: Aba; label: string }[] = [
  { value: "visao-geral", label: "Visão geral" },
  { value: "agenda", label: "Agenda & no-show" },
  { value: "financeiro", label: "Financeiro & convênios" },
  { value: "profissionais", label: "Profissionais & produção" },
];

const isAba = (v: string | null): v is Aba => !!v && tabs.some((t) => t.value === v);
const isPeriodo = (v: string | null): v is Periodo => v === "3m" || v === "6m" || v === "12m";

export function SaudeApp() {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();

  const aba: Aba = isAba(sp.get("aba")) ? (sp.get("aba") as Aba) : "visao-geral";
  const periodo: Periodo = isPeriodo(sp.get("periodo")) ? (sp.get("periodo") as Periodo) : "12m";
  const profissional = sp.get("profissional") ?? "todos";
  const especialidade = sp.get("especialidade") ?? "todos";
  const convenio = sp.get("convenio") ?? "todos";

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
  if (aba === "agenda" || aba === "profissionais") {
    selects.push({ key: "profissional", label: "Profissional", value: profissional, options: opcoesProfissional(), onChange: (v) => setParams({ profissional: v }) });
  }
  if (aba === "financeiro") {
    selects.push({ key: "especialidade", label: "Especialidade", value: especialidade, options: opcoesEspecialidade(), onChange: (v) => setParams({ especialidade: v }) });
    selects.push({ key: "convenio", label: "Convênio", value: convenio, options: opcoesConvenio(), onChange: (v) => setParams({ convenio: v }) });
  }

  return (
    <div className="space-y-6">
      <DashboardHeader client={client} />

      <div className="space-y-4">
        <DashboardTabs tabs={tabs} value={aba} onChange={(v) => setParams({ aba: v })} />
        <FilterBar periodo={periodo} onPeriodo={(p) => setParams({ periodo: p })} selects={selects} />
      </div>

      {aba === "visao-geral" && <VisaoGeralView periodo={periodo} />}
      {aba === "agenda" && <AgendaView periodo={periodo} profissional={profissional} />}
      {aba === "financeiro" && <FinanceiroView periodo={periodo} especialidade={especialidade} convenio={convenio} />}
      {aba === "profissionais" && <ProfissionaisView periodo={periodo} profissional={profissional} />}
    </div>
  );
}
