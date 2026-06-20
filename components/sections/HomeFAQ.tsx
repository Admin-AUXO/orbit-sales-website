import { Accordion } from "@/components/ui/Accordion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/SectionTypography";

type FaqItem = { question: string; answer: string };

export function HomeFAQ({ items }: { items: FaqItem[] }) {
  return (
    <Section id="faq" ariaLabelledby="faq-heading" innerClassName="max-w-3xl">
      <SectionHeading
        id="faq-heading"
        eyebrow="FAQ"
        title="Common questions"
        description="Quick answers before you book a demo."
      />

      <Accordion
        variant="divided"
        icon="chevron"
        defaultOpen={null}
        trackAs="faq"
        items={items.map((item) => ({ question: item.question, answer: item.answer }))}
      />

      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        <TextLink href="/faq">See all questions →</TextLink>
        <TextLink href="/contact">Still have questions? Talk to us →</TextLink>
      </div>
    </Section>
  );
}
