"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink, sectionPadding } from "@/components/ui/SectionTypography";

type FaqItem = { question: string; answer: string };

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-ns-border/50 last:border-0">
      <button
        type="button"
        className="flex w-full cursor-pointer items-start justify-between gap-6 py-5 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-ns-text">{item.question}</span>
        <span
          className={`mt-0.5 shrink-0 text-ns-text-muted transition-transform duration-200 ${
            isOpen ? "rotate-45" : ""
          }`}
          aria-hidden
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 1v12M1 7h12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[400px] pb-5" : "max-h-0"
        }`}
      >
        <p className="text-base leading-relaxed text-ns-text-muted">{item.answer}</p>
      </div>
    </div>
  );
}

export function HomeFAQ({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" aria-labelledby="faq-heading" className={sectionPadding}>
      <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            id="faq-heading"
            eyebrow="FAQ"
            title="Common questions"
            description="Quick answers before you book a demo."
          />

          <div>
            {items.map((item, i) => (
              <AccordionItem
                key={item.question}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>

          <div className="mt-8 text-center">
            <TextLink href="/faq">See all questions →</TextLink>
          </div>
        </div>
      </div>
    </section>
  );
}
