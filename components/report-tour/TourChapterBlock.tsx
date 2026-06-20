"use client";

import { type ReactNode } from "react";
import { NarrativePanel } from "@/components/report-tour/NarrativePanel";
import { ReportChapter } from "@/components/report-tour/ReportChapter";
import type { TourChapter } from "@/lib/report-tour-data";

interface TourChapterBlockProps {
  chapter: TourChapter;
  isActive: boolean;
  showScrollCue?: boolean;
  children: ReactNode;
}

export function TourChapterBlock({
  chapter,
  isActive,
  showScrollCue,
  children,
}: TourChapterBlockProps) {
  return (
    <ReportChapter
      id={`chapter-${chapter.id}`}
      className="!min-h-0 py-12 md:py-20"
    >
      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.45fr)] lg:items-start lg:gap-10 xl:gap-14">
        <div className="lg:sticky lg:top-28 lg:pr-4">
          <NarrativePanel
            chapter={chapter}
            isActive={isActive}
            showScrollCue={showScrollCue}
          />
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </ReportChapter>
  );
}
