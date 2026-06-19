"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Eyebrow,
  SectionDescription,
  SectionTitle,
  sectionPadding,
} from "@/components/ui/SectionTypography";
import {
  cognitiveMetrics,
  type CognitiveMetric,
} from "@/lib/cognitive-metrics-content";

function MetricPanel({ metric }: { metric: CognitiveMetric }) {
  return (
    <div>
      <Eyebrow>{metric.eyebrow}</Eyebrow>
      <SectionTitle className="mt-3 text-2xl md:text-3xl">{metric.title}</SectionTitle>
      <SectionDescription className="mt-4">{metric.context}</SectionDescription>
      <p className="mt-4 text-sm leading-relaxed text-ns-text-muted md:text-base">
        {metric.measure}
      </p>

      <div className="mt-6 rounded-xl border border-ns-border bg-ns-bg-elevated/40 p-5 md:p-6">
        <Eyebrow className="tracking-[0.15em] text-ns-text-muted">
          Questions it can help answer
        </Eyebrow>
        <ul className="mt-4 space-y-3">
          {metric.questions.map((question) => (
            <li
              key={question}
              className="flex items-start gap-3 text-sm leading-relaxed text-ns-text md:text-base"
            >
              <span
                aria-hidden
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ns-silver"
              />
              {question}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function FeatureDeepDives() {
  const [activeId, setActiveId] = useState<CognitiveMetric["id"]>("speed");
  const activeMetric =
    cognitiveMetrics.find((metric) => metric.id === activeId) ?? cognitiveMetrics[0];

  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className={`bg-ns-bg-elevated ${sectionPadding}`}
    >
      <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
        <SectionHeading
          id="features-heading"
          eyebrow="What you get"
          title="Three scores. Practical answers."
          description="Speed, Agility, and Endurance translate every session into insight — when you perform best, how you adapt, and how long you can sustain focus."
        />

        <FadeIn>
          <div className="mx-auto max-w-3xl">
            <div
              role="tablist"
              aria-label="Cognitive metrics"
              className="grid grid-cols-3 gap-2 rounded-2xl border border-ns-border bg-ns-bg-card p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] md:gap-2.5 md:p-2.5"
            >
              {cognitiveMetrics.map((metric) => {
                const isActive = metric.id === activeId;

                return (
                  <button
                    key={metric.id}
                    type="button"
                    role="tab"
                    id={`metric-tab-${metric.id}`}
                    aria-selected={isActive}
                    aria-controls={`metric-panel-${metric.id}`}
                    onClick={() => setActiveId(metric.id)}
                    className={`cursor-pointer rounded-xl px-3 py-3 text-sm font-bold transition md:px-5 md:py-3.5 md:text-base ${
                      isActive
                        ? "bg-ns-accent text-ns-on-accent shadow-md shadow-black/30"
                        : "bg-transparent text-ns-text-muted hover:bg-ns-accent-muted hover:text-ns-text"
                    } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ns-accent`}
                  >
                    {metric.tabLabel}
                  </button>
                );
              })}
            </div>

            <div
              role="tabpanel"
              id={`metric-panel-${activeMetric.id}`}
              aria-labelledby={`metric-tab-${activeMetric.id}`}
              className="mt-8"
            >
              <MetricPanel metric={activeMetric} />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
