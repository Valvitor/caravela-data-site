import Link from "next/link";
import { brand } from "@/lib/brand";
import { mainNav, sectors } from "@/lib/nav";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted">{brand.description}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-faint">Navegação</p>
          <ul className="mt-4 space-y-2 text-sm">
            {mainNav.map((i) => (
              <li key={i.href}>
                <Link href={i.href} className="text-muted hover:text-ink">
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-faint">Dashboards</p>
          <ul className="mt-4 space-y-2 text-sm">
            {sectors.map((s) => (
              <li key={s.slug}>
                <Link href={s.href} className="text-muted hover:text-ink">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-5 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {brand.name}. Dashboards de exemplo com dados fictícios.</p>
          <a href={brand.whatsappLink} target="_blank" rel="noopener noreferrer" className="font-medium text-indigo hover:underline">
            Falar no WhatsApp · {brand.whatsappDisplay}
          </a>
        </div>
      </div>
    </footer>
  );
}
