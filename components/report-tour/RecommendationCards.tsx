"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import type { Recommendation } from "@/lib/report-tour-data";

const SCORE_ACCENTS: Record<Recommendation["score"], string> = {
  "Cognitive Speed": "rgba(0,190,225,0.9)",
  "Cognitive Agility": "rgb(188,198,235)",
  "Cognitive Endurance": "rgba(200,180,255,0.9)",
};

interface RecommendationCardsProps {
  items: Recommendation[];
}

export function RecommendationCards({ items }: RecommendationCardsProps) {
  return (
    <div className="flex flex-col gap-3 p-4 sm:p-5">
      {items.map((rec, i) => (
        <FadeIn key={rec.score} delay={i * 0.1}>
          <div className="flex flex-col gap-4 rounded-lg border border-[#333333] bg-[#232323] p-4 sm:flex-row sm:items-stretch sm:gap-6 sm:p-5">
            <div className="flex shrink-0 flex-row items-center gap-3 sm:w-44 sm:flex-col sm:items-start sm:justify-center sm:border-r sm:border-[#333333] sm:pr-5">
              <span
                className="h-1 w-8 rounded-full sm:h-8 sm:w-1"
                style={{ backgroundColor: SCORE_ACCENTS[rec.score] }}
              />
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[#b0b3b8]">
                  Target score
                </p>
                <p className="mt-0.5 font-display text-base text-white sm:text-lg">
                  {rec.score}
                </p>
                <span className="mt-2 inline-flex rounded-full border border-[#333333] bg-[#121212] px-2 py-0.5 text-[10px] font-semibold text-[#c9d1d9]">
                  {rec.metric}
                </span>
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-center">
              <h3 className="font-display text-base text-white sm:text-lg">
                {rec.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#c9d1d9]">
                {rec.rationale}
              </p>
              <div className="mt-4 rounded-lg border border-[#333333] bg-[#121212] px-4 py-3">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[#b0b3b8]">
                  Protocol
                </p>
                <p className="mt-1 text-sm text-white">{rec.protocol}</p>
              </div>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
