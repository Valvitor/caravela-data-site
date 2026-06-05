"use client";

import { cn } from "@/lib/cn";

export function DashboardTabs<T extends string>({
  tabs,
  value,
  onChange,
}: {
  tabs: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className="border-b border-line">
      <nav className="-mb-px flex gap-1 overflow-x-auto" aria-label="Seções do painel">
        {tabs.map((t) => {
          const active = t.value === value;
          return (
            <button
              key={t.value}
              type="button"
              aria-current={active ? "page" : undefined}
              onClick={() => onChange(t.value)}
              className={cn(
                "whitespace-nowrap border-b-2 px-4 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "border-indigo text-indigo"
                  : "border-transparent text-muted hover:text-ink",
              )}
            >
              {t.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
