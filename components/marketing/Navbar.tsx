"use client";

import { useState } from "react";
import Link from "next/link";
import { mainNav } from "@/lib/nav";
import { brand } from "@/lib/brand";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" aria-label={brand.name} onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/dashboards/contabilidade" size="md">
            Ver dashboards
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-5">
            <span className={cn("absolute left-0 h-0.5 w-5 bg-ink transition-all", open ? "top-1.5 rotate-45" : "top-0")} />
            <span className={cn("absolute left-0 top-1.5 h-0.5 w-5 bg-ink transition-all", open && "opacity-0")} />
            <span className={cn("absolute left-0 h-0.5 w-5 bg-ink transition-all", open ? "top-1.5 -rotate-45" : "top-3")} />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-paper md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-base font-medium text-ink hover:bg-indigo-soft"
              >
                {item.label}
              </Link>
            ))}
            <Button href="/dashboards/contabilidade" className="mt-2 w-full" onClick={() => setOpen(false)}>
              Ver dashboards
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
