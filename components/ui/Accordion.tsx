"use client";

import { useState, type ReactNode } from "react";

type Item = { question: string; answer: ReactNode };

export function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ns-border rounded-2xl border border-ns-border">
      {items.map((item, i) => (
        <div key={item.question}>
          <button
            type="button"
            className="flex w-full items-center justify-between px-6 py-5 text-left"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="pr-4 font-medium text-ns-text">{item.question}</span>
            <span className="text-ns-accent text-xl leading-none">
              {open === i ? "−" : "+"}
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-ns-text-muted leading-relaxed">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
