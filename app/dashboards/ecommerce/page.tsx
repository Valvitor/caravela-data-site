import type { Metadata } from "next";
import { Suspense } from "react";
import { EcommerceApp } from "@/components/dashboard/ecommerce/EcommerceApp";

export const metadata: Metadata = {
  title: "Dashboard de E-commerce (exemplo)",
  description:
    "Painel de exemplo para e-commerce: visão geral, vendas & canais, marketing & aquisição e produtos & estoque, com filtros de período, canal, categoria e dispositivo.",
};

export default function EcommerceDashboard() {
  return (
    <Suspense fallback={<div className="py-24 text-center text-muted">Carregando painel…</div>}>
      <EcommerceApp />
    </Suspense>
  );
}
