import { cn } from "@/lib/cn";

type Tone = "indigo" | "coral" | "sage" | "neutral";

const tones: Record<Tone, string> = {
  indigo: "bg-indigo-soft text-indigo",
  coral: "bg-coral-soft text-rose",
  sage: "bg-[#eaf3f0] text-sage",
  neutral: "bg-[#f1efe9] text-muted",
};

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
