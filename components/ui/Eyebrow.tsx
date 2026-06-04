import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  className,
  as: Tag = "p",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "span" | "div";
}) {
  return (
    <Tag
      className={cn(
        "inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-indigo",
        className,
      )}
    >
      <span aria-hidden className="h-px w-6 bg-coral" />
      {children}
    </Tag>
  );
}
