import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { Accordion } from "@/components/ui/Accordion";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionTypography";
import { CTABand } from "@/components/sections/CTABand";
import { faqCta } from "@/lib/cta-content";
import { JsonLd } from "@/components/seo/JsonLd";
import { getFaq, type FaqItem } from "@/lib/content";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "FAQ",
  "Answers to common questions about Neurostellar Orbit — mental fitness wearable for athletes and executives.",
  "/faq",
);

export default function FaqPage() {
  const faq = getFaq();

  const categories: string[] = [];
  const grouped = new Map<string, FaqItem[]>();
  for (const item of faq) {
    const category = item.category ?? "General";
    if (!grouped.has(category)) {
      grouped.set(category, []);
      categories.push(category);
    }
    grouped.get(category)!.push(item);
  }

  return (
    <PageShell>
      <JsonLd
        data={[
          faqJsonLd(faq),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />
      <PageHeader
        eyebrow="Questions"
        title="Frequently asked questions"
        description="Everything you need to know about Neurostellar Orbit before you get started."
      />

      <Section innerClassName="max-w-3xl">
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category}>
              <Eyebrow className="mb-5">{category}</Eyebrow>
              <Accordion
                defaultOpen={null}
                trackAs="faq"
                items={(grouped.get(category) ?? []).map((item) => ({
                  question: item.question,
                  answer: item.answer,
                }))}
              />
            </div>
          ))}
        </div>
      </Section>
      <CTABand {...faqCta} />
    </PageShell>
  );
}
