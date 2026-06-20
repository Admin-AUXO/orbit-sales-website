import { PageShell } from "@/components/layout/PageShell";
import { CaseStudyHighlights } from "@/components/sections/CaseStudyHighlights";
import { CTABand } from "@/components/sections/CTABand";
import { FeatureDeepDives } from "@/components/sections/FeatureDeepDives";
import { Hero } from "@/components/sections/Hero";
import { LaunchBand } from "@/components/sections/LaunchBand";
import { ProblemStatement } from "@/components/sections/ProblemStatement";
import { HomeFAQ } from "@/components/sections/HomeFAQ";
import { ProductDemo } from "@/components/sections/ProductDemo";
import { TeamSignal } from "@/components/sections/TeamSignal";
import { WhatIsOrbit } from "@/components/sections/WhatIsOrbit";
import { JsonLd } from "@/components/seo/JsonLd";
import { getFaq } from "@/lib/content";
import { homeCta } from "@/lib/cta-content";
import {
  faqJsonLd,
  organizationJsonLd,
  productJsonLd,
  websiteJsonLd,
} from "@/lib/seo";

export default function HomePage() {
  const faq = getFaq().slice(0, 5);

  return (
    <PageShell>
      <JsonLd
        data={[
          websiteJsonLd(),
          organizationJsonLd(),
          productJsonLd(),
          faqJsonLd(faq),
        ]}
      />

      <Hero />

      <ProblemStatement />

      <LaunchBand />

      <WhatIsOrbit />

      <FeatureDeepDives />

      <ProductDemo />

      <CaseStudyHighlights />

      <TeamSignal />

      <HomeFAQ items={faq} />

      <CTABand {...homeCta} />
    </PageShell>
  );
}
