"use client";

import { coachIntro } from "@/lib/report-tour-data";

export function CoachIntroSection() {
  return (
    <div className="rounded-xl border border-[#333333] bg-[#121212] p-5 sm:p-7">
      <h3 className="font-display text-xl text-white sm:text-2xl">
        {coachIntro.title}
      </h3>
      <ul className="mt-5 space-y-4">
        {coachIntro.points.map((point, i) => (
          <li key={i} className="flex gap-3 sm:gap-4">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#333333] bg-[#232323] text-xs font-bold text-[#c9d1d9]">
              {i + 1}
            </span>
            <p className="text-sm leading-relaxed text-[#c9d1d9] sm:text-base">
              {point}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
