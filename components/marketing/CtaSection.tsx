import { Button } from "@/components/ui/Button";
import { GridBackground } from "@/components/ui/GridBackground";
import { brand } from "@/lib/brand";

export function CtaSection() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-indigo px-8 py-16 text-center text-white md:px-16">
        <GridBackground variant="indigo" className="opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Vamos transformar seus dados no seu próximo painel?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/75">
            Conte rapidamente sobre o seu negócio. Em uma conversa a gente já desenha qual painel faz
            sentido e o que ele resolveria primeiro.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={brand.whatsappLink} external size="lg" variant="white">
              Falar no WhatsApp · {brand.whatsappDisplay}
            </Button>
            <Button href="/dashboards/contabilidade" size="lg" variant="ghostLight">
              Ver os dashboards antes →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
