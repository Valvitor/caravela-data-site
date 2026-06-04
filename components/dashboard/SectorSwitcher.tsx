"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sectors } from "@/lib/nav";
import { cn } from "@/lib/cn";

export function SectorSwitcher() {
  const pathname = usePathname();
  return (
    <nav aria-label="Trocar de setor" className="flex flex-wrap gap-1.5">
      {sectors.map((s) => {
        const active = pathname === s.href;
        return (
          <Link
            key={s.slug}
            href={s.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
              active
                ? "bg-indigo text-white"
                : "border border-line bg-surface text-muted hover:border-indigo hover:text-indigo",
            )}
          >
            {s.name}
          </Link>
        );
      })}
    </nav>
  );
}
