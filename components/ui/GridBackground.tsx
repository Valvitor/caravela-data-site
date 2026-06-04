import { cn } from "@/lib/cn";

/** Textura decorativa de pontos com fade nas bordas. Apenas visual. */
export function GridBackground({
  className,
  variant = "ink",
}: {
  className?: string;
  variant?: "ink" | "indigo";
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10",
        variant === "indigo" ? "bg-dotgrid-indigo" : "bg-dotgrid",
        "[mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]",
        className,
      )}
    />
  );
}
