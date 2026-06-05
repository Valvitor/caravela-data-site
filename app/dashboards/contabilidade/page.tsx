import type { Metadata } from "next";
import { Suspense } from "react";
import { ContabilidadeApp } from "@/components/dashboard/contabilidade/ContabilidadeApp";

export const metadata: Metadata = {
  title: "Dashboard de Contabilidade (exemplo)",
  description:
    "Painel de exemplo para escritórios de contabilidade: visão geral, financeiro, carteira de clientes e operação, com filtros de período, gestor, regime e segmento.",
};

export default function ContabilidadeDashboard() {
  return (
    <Suspense fallback={<div className="py-24 text-center text-muted">Carregando painel…</div>}>
      <ContabilidadeApp />
    </Suspense>
  );
}
