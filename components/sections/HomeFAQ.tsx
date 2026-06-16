"use client";

import { useState } from "react";
import Link from "next/link";

type FaqItem = { question: string; answer: string };

function AccordionItem({ item, isOpen, onToggle }: { item: FaqItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-ns-border/50 last:border-0">
      <button
        className="flex w-full items-start justify-between gap-6 py-5 text-left"
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
            <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[400px] pb-5" : "max-h-0"
        }`}
      >
        <p className="leading-relaxed text-ns-text-muted">{item.answer}</p>
      </div>
    </div>
  );
}

export function HomeFAQ({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-24 md:py-32"
    >
      <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-ns-text-muted">
              FAQ
            </p>
            <h2
              id="faq-heading"
              className="text-3xl font-extrabold tracking-tight text-ns-text md:text-4xl"
            >
              Common questions
            </h2>
          </div>

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

          <div className="mt-10 text-center">
            <Link href="/faq" className="text-sm font-semibold text-ns-accent hover:underline">
              See all questions →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
