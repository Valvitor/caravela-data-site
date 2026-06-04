import { Hero } from "@/components/marketing/Hero";
import { PillarsSection } from "@/components/marketing/PillarsSection";
import { DeliveryFlow } from "@/components/marketing/DeliveryFlow";
import { SectorCards } from "@/components/marketing/SectorCards";
import { MarketStats } from "@/components/marketing/MarketStats";
import { CaseStudies } from "@/components/marketing/CaseStudies";
import { PricingBand } from "@/components/marketing/PricingBand";
import { CtaSection } from "@/components/marketing/CtaSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PillarsSection />
      <SectorCards />
      <DeliveryFlow />
      <MarketStats />
      <CaseStudies />
      <PricingBand />
      <CtaSection />
    </>
  );
}
