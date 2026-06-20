"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import type { Recommendation } from "@/lib/report-tour-data";

const SCORE_ACCENTS: Record<Recommendation["score"], string> = {
  "Cognitive Speed": "var(--ns-chart-1)",
  "Cognitive Agility": "var(--ns-chart-2)",
  "Cognitive Endurance": "var(--ns-silver)",
};

interface RecommendationCardsProps {
  items: Recommendation[];
}

export function RecommendationCards({ items }: RecommendationCardsProps) {
  return (
    <div className="flex flex-col gap-3 p-4 sm:p-5">
      {items.map((rec, i) => (
        <FadeIn key={rec.score} delay={i * 0.1}>
          <div className="flex flex-col gap-4 rounded-lg border border-ns-border bg-ns-bg-card p-4 sm:flex-row sm:items-stretch sm:gap-6 sm:p-5">
            <div className="flex shrink-0 flex-row items-center gap-3 sm:w-44 sm:flex-col sm:items-start sm:justify-center sm:border-r sm:border-ns-border sm:pr-5">
              <span
                className="h-1 w-8 rounded-full sm:h-8 sm:w-1"
                style={{ backgroundColor: SCORE_ACCENTS[rec.score] }}
              />
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-ns-text-muted">
                  Target score
                </p>
                <p className="mt-0.5 font-display text-base text-white sm:text-lg">
                  {rec.score}
                </p>
                <span className="mt-2 inline-flex rounded-full border border-ns-border bg-ns-bg-elevated px-2 py-0.5 text-[10px] font-semibold text-ns-text-muted">
                  {rec.metric}
                </span>
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-center">
              <h3 className="font-display text-base text-white sm:text-lg">
                {rec.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ns-text-muted">
                {rec.rationale}
              </p>
              <div className="mt-4 rounded-lg border border-ns-border bg-ns-bg-elevated px-4 py-3">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-ns-text-muted">
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
