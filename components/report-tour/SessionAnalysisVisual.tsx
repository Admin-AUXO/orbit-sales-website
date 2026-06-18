"use client";

import { useState } from "react";
import { SectionTitleWithInfo } from "@/components/report-tour/InfoHotspot";
import {
  reportHotspots,
  sessionAnalysis,
  sessionMeta,
  sessionRecommendations,
} from "@/lib/report-tour-data";

function ReportFooter({ page }: { page: number }) {
  return (
    <div className="mt-8 flex items-center justify-between border-t border-[#333333]/60 pt-4 text-[9px] text-[#b0b3b8]">
      <span>{sessionMeta.generatedAt}</span>
      <span>{page}</span>
    </div>
  );
}

export function SessionAnalysisVisual() {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  function handleToggle(id: string) {
    setActiveHotspot((prev) => (prev === id ? null : id));
  }

  return (
    <div className="overflow-hidden rounded-xl border border-[#333333] bg-[#121212] p-4 sm:p-5 md:p-7">
      <div className="space-y-6 sm:space-y-8">
        <section>
          <SectionTitleWithInfo
            title={sessionAnalysis.title}
            hotspot={reportHotspots.analysis}
            isActive={activeHotspot === "analysis"}
            onToggle={handleToggle}
            tooltipPlacement="bottom"
          />
          <div className="mt-3 rounded-lg border border-[#333333] bg-[#232323] px-4 py-4 sm:px-5 sm:py-5">
            <p className="text-[12px] leading-relaxed text-[#c9d1d9] sm:text-[13px]">
              {sessionAnalysis.body}
            </p>
          </div>
        </section>

        <section>
          <SectionTitleWithInfo
            title={sessionRecommendations.title}
            hotspot={reportHotspots.recommendations}
            isActive={activeHotspot === "recommendations"}
            onToggle={handleToggle}
            tooltipPlacement="bottom"
          />
          <div className="mt-3 space-y-4 rounded-lg border border-[#333333] bg-[#232323] px-4 py-4 sm:px-5 sm:py-5">
            {sessionRecommendations.items.map((item) => (
              <p
                key={item.label}
                className="text-[12px] leading-relaxed text-[#c9d1d9] sm:text-[13px]"
              >
                <span className="font-semibold text-white underline decoration-[#c9d1d9]/40 underline-offset-2">
                  {item.label}
                </span>{" "}
                {item.body}
              </p>
            ))}
          </div>
        </section>
      </div>

      <ReportFooter page={2} />
    </div>
  );
}
