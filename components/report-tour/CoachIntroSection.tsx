"use client";

import { coachIntro } from "@/lib/report-tour-data";

export function CoachIntroSection() {
  return (
    <div className="rounded-xl border border-ns-border bg-ns-bg-elevated p-5 sm:p-7">
      <h3 className="font-display text-xl text-white sm:text-2xl">
        {coachIntro.title}
      </h3>
      <ul className="mt-5 space-y-4">
        {coachIntro.points.map((point, i) => (
          <li key={i} className="flex gap-3 sm:gap-4">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ns-border bg-ns-bg-card text-xs font-bold text-ns-text-muted">
              {i + 1}
            </span>
            <p className="text-sm leading-relaxed text-ns-text-muted sm:text-base">
              {point}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
