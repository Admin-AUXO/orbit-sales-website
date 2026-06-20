"use client";

import { useState, type ReactNode } from "react";
import { trackFaqOpen } from "@/lib/analytics";

type Item = { question: string; answer: ReactNode };

export function Accordion({
  items,
  icon = "plus-minus",
  variant = "bordered",
  defaultOpen = 0,
  trackAs,
}: {
  items: Item[];
  icon?: "plus-minus" | "chevron";
  variant?: "bordered" | "divided";
  defaultOpen?: number | null;
  trackAs?: "faq";
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  const handleToggle = (i: number, item: Item, isOpen: boolean) => {
    setOpen(isOpen ? null : i);
    if (!isOpen && trackAs === "faq") trackFaqOpen(item.question);
  };

  const containerClass =
    variant === "bordered"
      ? "divide-y divide-ns-border rounded-2xl border border-ns-border"
      : "";
  const rowClass = variant === "divided" ? "border-b border-ns-border/50 last:border-0" : "";
  const buttonClass =
    variant === "bordered"
      ? "flex w-full cursor-pointer items-center justify-between px-6 py-5 text-left"
      : "flex w-full cursor-pointer items-start justify-between gap-6 py-5 text-left";
  const bodyPadding = variant === "bordered" ? "px-6" : "";

  return (
    <div className={containerClass}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question} className={rowClass}>
            <button
              type="button"
              className={buttonClass}
              onClick={() => handleToggle(i, item, isOpen)}
              aria-expanded={isOpen}
            >
              <span className="pr-4 font-medium text-ns-text">{item.question}</span>
              {icon === "chevron" ? (
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
              ) : (
                <span className="text-ns-accent text-xl leading-none">
                  {isOpen ? "−" : "+"}
                </span>
              )}
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0">
                <div className={`${bodyPadding} pb-5 text-ns-text-muted leading-relaxed`}>
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
