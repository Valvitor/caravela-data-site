import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GridBackground } from "@/components/ui/GridBackground";
import { brand } from "@/lib/brand";
import { HeroDashboardMock } from "./HeroDashboardMock";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <GridBackground className="opacity-70" />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 md:py-28 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="anim-fade-up">
          <Eyebrow>Dashboards sob medida · em código</Eyebrow>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Painéis que se atualizam sozinhos.{" "}
            <span className="text-indigo">Decisões que não esperam o fim do mês.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            A {brand.name} constrói o painel de gestão do seu negócio, conectado às suas fontes e
            atualizado automaticamente. Com a sua marca, sem licença por usuário e feito por quem
            entende do seu setor.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/dashboards/contabilidade" size="lg">
              Ver dashboards de exemplo
            </Button>
            <Button href={brand.whatsappLink} external variant="outline" size="lg">
              Falar no WhatsApp
            </Button>
          </div>
          <p className="mt-5 text-sm text-faint">
            Sem instalação, sem planilha manual. Você lê o negócio em tempo real.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <HeroDashboardMock />
        </div>
      </div>
    </section>
  );
}
