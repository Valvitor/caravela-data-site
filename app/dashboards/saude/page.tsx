import type { Metadata } from "next";
import { Suspense } from "react";
import { SaudeApp } from "@/components/dashboard/saude/SaudeApp";

export const metadata: Metadata = {
  title: "Dashboard de Saúde / Clínica (exemplo)",
  description:
    "Painel de exemplo para clínicas: visão geral, agenda & no-show, financeiro & convênios e profissionais, com filtros de período, profissional, especialidade e convênio.",
};

export default function SaudeDashboard() {
  return (
    <Suspense fallback={<div className="py-24 text-center text-muted">Carregando painel…</div>}>
      <SaudeApp />
    </Suspense>
  );
}
