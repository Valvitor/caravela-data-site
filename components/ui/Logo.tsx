import { cn } from "@/lib/cn";
import { brand } from "@/lib/brand";

/** Marca da Caravela Data: rosa-dos-ventos estilizada (compasso de dados). */
export function Logo({
  className,
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden>
        <circle cx="16" cy="16" r="15" stroke="currentColor" strokeOpacity="0.18" />
        <path d="M16 3 L19 16 L16 29 L13 16 Z" fill="var(--color-indigo)" />
        <path d="M3 16 L16 13 L29 16 L16 19 Z" fill="var(--color-coral)" />
        <circle cx="16" cy="16" r="2" fill="var(--color-ink)" />
      </svg>
      {showWordmark && (
        <span className="font-display text-lg font-semibold tracking-tight text-ink">
          {brand.name}
        </span>
      )}
    </span>
  );
}
