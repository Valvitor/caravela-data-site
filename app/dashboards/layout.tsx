import Link from "next/link";
import { brand } from "@/lib/brand";
import { DemoBadge } from "@/components/dashboard/DemoBadge";
import { SectorSwitcher } from "@/components/dashboard/SectorSwitcher";

export default function DashboardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-paper">
      <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="font-display text-lg font-semibold tracking-tight text-ink hover:text-indigo"
            >
              {brand.name}
            </Link>
            <span aria-hidden className="hidden h-4 w-px bg-line-strong md:block" />
            <DemoBadge />
          </div>
          <SectorSwitcher />
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">{children}</main>

      <footer className="border-t border-line">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-muted">
          Painel de demonstração com dados fictícios, gerados apenas para ilustrar o produto. Em um
          projeto real, os dados são do próprio cliente, tratados conforme a LGPD (agregados,
          isolados por conta e com acesso controlado).{" "}
          <Link href="/contato" className="font-medium text-indigo hover:underline">
            Quero um painel assim →
          </Link>
        </div>
      </footer>
    </div>
  );
}
