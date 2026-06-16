import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { getFaq } from "@/lib/content";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "FAQ",
  "Answers to common questions about Neurostellar Orbit — mental fitness wearable for athletes and executives.",
  "/faq",
);

export default function FaqPage() {
  const faq = getFaq();

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
        description="Everything you need to know about Neurostellar Orbit before you buy."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Accordion items={faq.map((item) => ({ question: item.question, answer: item.answer }))} />
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button href="/buy">Buy Orbit</Button>
            <Button href="/demo" variant="secondary">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
