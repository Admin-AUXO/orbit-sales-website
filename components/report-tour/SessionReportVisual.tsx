"use client";

import Image from "next/image";
import { useState } from "react";
import { ReportCognitiveTimeline } from "@/components/report-tour/ReportCognitiveTimeline";
import { ReportGaugeDial } from "@/components/report-tour/ReportGaugeDial";
import { ReportMetricCard } from "@/components/report-tour/ReportMetricCard";
import { SectionTitleWithInfo } from "@/components/report-tour/InfoHotspot";
import {
  behavioralMetrics,
  reportHotspots,
  sessionMeta,
  sessionScores,
} from "@/lib/report-tour-data";

function ReportFooter({ page }: { page: number }) {
  return (
    <div className="mt-8 flex items-center justify-between border-t border-ns-border/60 pt-4 text-[9px] text-ns-text-muted">
      <span>{sessionMeta.generatedAt}</span>
      <span>{page}</span>
    </div>
  );
}

export function SessionReportVisual() {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  function handleToggle(id: string) {
    setActiveHotspot((prev) => (prev === id ? null : id));
  }

  return (
    <div className="overflow-hidden rounded-xl border border-ns-border bg-ns-bg-elevated p-4 sm:p-5 md:p-7">
      <div className="mb-5 sm:mb-6">
        <Image
          src="/brand/logos/neurostellar-logo-horizontal-light.svg"
          alt="Neurostellar"
          width={140}
          height={28}
          className="h-5 w-auto opacity-90 sm:h-6"
        />
      </div>

      <h2 className="text-2xl font-bold leading-tight text-white sm:text-[28px] md:text-[32px]">
        {sessionMeta.title}
      </h2>
      <p className="mt-3 text-[12px] leading-relaxed text-ns-text-muted sm:text-[13px]">
        {sessionMeta.summary}
      </p>

      <div className="mt-6 space-y-6 sm:mt-8 sm:space-y-8">
        <section>
          <SectionTitleWithInfo
            title="Cognitive Performance Scores"
            hotspot={reportHotspots.scores}
            isActive={activeHotspot === "scores"}
            onToggle={handleToggle}
          />
          <div className="mt-4 grid grid-cols-1 gap-3 min-[500px]:grid-cols-3">
            {sessionScores.map((gauge) => (
              <ReportGaugeDial key={gauge.label} gauge={gauge} />
            ))}
          </div>
        </section>

        <section>
          <SectionTitleWithInfo
            title="Cognitive State Timeline"
            hotspot={reportHotspots.timeline}
            isActive={activeHotspot === "timeline"}
            onToggle={handleToggle}
          />
          <div className="mt-3">
            <ReportCognitiveTimeline />
          </div>
        </section>

        <section>
          <SectionTitleWithInfo
            title="Behavioral Metrics"
            hotspot={reportHotspots.metrics}
            isActive={activeHotspot === "metrics"}
            onToggle={handleToggle}
          />
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {behavioralMetrics.map((metric) => (
              <ReportMetricCard key={metric.label} metric={metric} />
            ))}
          </div>
        </section>
      </div>

      <ReportFooter page={1} />
    </div>
  );
}
