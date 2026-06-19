import { PageShell } from "@/components/layout/PageShell";
import { CaseStudyHighlights } from "@/components/sections/CaseStudyHighlights";
import { CredibilityStrip } from "@/components/sections/CredibilityStrip";
import { CTABand } from "@/components/sections/CTABand";
import { FeatureDeepDives } from "@/components/sections/FeatureDeepDives";
import { Hero } from "@/components/sections/Hero";
import { ProblemStatement } from "@/components/sections/ProblemStatement";
import { HomeFAQ } from "@/components/sections/HomeFAQ";
import { ProductDemo } from "@/components/sections/ProductDemo";
import { TeamSignal } from "@/components/sections/TeamSignal";
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

      {/* 1. Value — why Orbit matters */}
      <Hero />

      {/* 2. Need — the gap we exist to fill */}
      <ProblemStatement />

      {/* 3. Origin — how and where we started */}
      <CredibilityStrip />

      {/* 4. Product — what Orbit is */}
      <WhatIsOrbit />

      {/* 5. Benefits — what you get from the metrics */}
      <FeatureDeepDives />

      {/* 6. Output — what a session looks like */}
      <ProductDemo />

      {/* 7. Proof — early cohort results */}
      <CaseStudyHighlights />

      {/* 8. Science — brief credibility + deep-dive link */}
      <TeamSignal />

      {/* 9. FAQ — remove remaining blockers */}
      <HomeFAQ items={faq} />

      {/* 10. Close — return to hero value prop */}
      <CTABand />
    </PageShell>
  );
}
