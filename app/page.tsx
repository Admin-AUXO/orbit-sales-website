import { PageShell } from "@/components/layout/PageShell";
import { CaseStudyHighlights } from "@/components/sections/CaseStudyHighlights";
import { CTABand } from "@/components/sections/CTABand";
import { FeatureDeepDives } from "@/components/sections/FeatureDeepDives";
import { Hero } from "@/components/sections/Hero";
import { HomeFAQ } from "@/components/sections/HomeFAQ";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ProductDemo } from "@/components/sections/ProductDemo";
import { TeamSignal } from "@/components/sections/TeamSignal";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { UseCases } from "@/components/sections/UseCases";
import { WhatIsOrbit } from "@/components/sections/WhatIsOrbit";
import { JsonLd } from "@/components/seo/JsonLd";
import { getFaq } from "@/lib/content";
import { faqJsonLd, organizationJsonLd, productJsonLd } from "@/lib/seo";

export default function HomePage() {
  const faq = getFaq().slice(0, 5);

  return (
    <PageShell>
      <JsonLd
        data={[organizationJsonLd(), productJsonLd(), faqJsonLd(faq)]}
      />

      {/* 1. Hook */}
      <Hero />

      {/* 2. Validation anchor */}
      <TrustStrip />

      {/* 3. What is Orbit — outcome-first product intro */}
      <WhatIsOrbit />

      {/* 4. Why Orbit — Feature deep-dives: Focus / Resilience / Recovery */}
      <FeatureDeepDives />

      {/* 5. Data hook — show a real session report before explaining how it works */}
      <ProductDemo />

      {/* 6. How it works — Wear → Report → Coach */}
      <HowItWorks />

      {/* 7. Real use cases — Executives, Athletes, Knowledge Workers */}
      <UseCases />

      {/* 8. Proof — real results from real performers */}
      <CaseStudyHighlights />

      {/* 9. Science credibility anchor */}
      <TeamSignal />

      {/* 10. FAQ — remove purchase blockers */}
      <HomeFAQ items={faq} />

      {/* 11. Close */}
      <CTABand />
    </PageShell>
  );
}
