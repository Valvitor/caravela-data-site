import { Eyebrow } from "@/components/ui/Eyebrow";

export function SectionDivider({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="pt-4">
      <div className="rule-editorial mb-6" />
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 font-display text-xl font-semibold text-ink">{title}</h2>
    </div>
  );
}
