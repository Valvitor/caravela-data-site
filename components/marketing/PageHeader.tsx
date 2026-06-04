import { Eyebrow } from "@/components/ui/Eyebrow";
import { GridBackground } from "@/components/ui/GridBackground";

export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <GridBackground className="opacity-60" />
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        {lead && <p className="mt-5 max-w-2xl text-lg text-muted">{lead}</p>}
      </div>
    </section>
  );
}
