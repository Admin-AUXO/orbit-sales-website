"use client";

import { useEffect, useRef, useState } from "react";
import { ActivityHistoryChart } from "@/components/report-tour/ActivityHistoryChart";
import { CoachChatUI } from "@/components/report-tour/CoachChatUI";
import { CoachIntroSection } from "@/components/report-tour/CoachIntroSection";
import { RecommendationCards } from "@/components/report-tour/RecommendationCards";
import { ReportReadyVisual } from "@/components/report-tour/ReportReadyVisual";
import { SessionAnalysisVisual } from "@/components/report-tour/SessionAnalysisVisual";
import { SessionReportVisual } from "@/components/report-tour/SessionReportVisual";
import { TourChapterBlock } from "@/components/report-tour/TourChapterBlock";
import { WeeklyTrendChart } from "@/components/report-tour/WeeklyTrendChart";
import { FadeIn } from "@/components/ui/FadeIn";
import { trackReportTourChapter } from "@/lib/analytics";
import {
  coachScript,
  dailyEvents,
  recommendations,
  tourChapters,
  weeklyTrend,
} from "@/lib/report-tour-data";

export function ExecutiveReportTour() {
  const [activeChapter, setActiveChapter] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const chapters = Array.from(
      root.querySelectorAll<HTMLElement>("[data-chapter]"),
    );
    const ratios = new Map<number, number>();

    const pickActiveChapter = () => {
      let bestRatio = 0;
      let bestIndex = 0;

      ratios.forEach((ratio, index) => {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestIndex = index;
        }
      });

      if (bestRatio > 0) {
        setActiveChapter(bestIndex);
      }
    };

    const observers = chapters.map((el, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          ratios.set(index, entry.intersectionRatio);
          pickActiveChapter();
        },
        {
          threshold: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
          rootMargin: "-12% 0px -38% 0px",
        },
      );
      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    const chapter = tourChapters[activeChapter];
    if (chapter) trackReportTourChapter(chapter.id, activeChapter);
  }, [activeChapter]);

  function scrollToChapter(index: number) {
    const chapters =
      rootRef.current?.querySelectorAll<HTMLElement>("[data-chapter]");
    chapters?.[index]?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div ref={rootRef} className="relative pb-16">
      <nav
        aria-label="Report tour chapters"
        className="fixed right-3 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-2.5 sm:flex md:right-6 lg:right-8"
      >
        {tourChapters.map((ch, i) => (
          <button
            key={ch.id}
            type="button"
            aria-label={`Go to ${ch.eyebrow}`}
            aria-current={activeChapter === i ? "step" : undefined}
            onClick={() => scrollToChapter(i)}
            className={`h-2 w-2 rounded-full transition-all sm:h-2.5 sm:w-2.5 ${
              activeChapter === i
                ? "scale-125 bg-white"
                : "bg-white/25 hover:bg-white/45"
            }`}
          />
        ))}
      </nav>

      <div className="mx-auto max-w-[var(--ns-max-width)] px-4 sm:px-6 lg:px-8">
        <TourChapterBlock
          chapter={tourChapters[0]}
          isActive={activeChapter === 0}
          showScrollCue
        >
          <FadeIn>
            <ReportReadyVisual />
          </FadeIn>
        </TourChapterBlock>

        <TourChapterBlock
          chapter={tourChapters[1]}
          isActive={activeChapter === 1}
        >
          <SessionReportVisual />
        </TourChapterBlock>

        <TourChapterBlock
          chapter={tourChapters[2]}
          isActive={activeChapter === 2}
        >
          <SessionAnalysisVisual />
        </TourChapterBlock>

        <TourChapterBlock
          chapter={tourChapters[3]}
          isActive={activeChapter === 3}
        >
          <ActivityHistoryChart events={dailyEvents} />
        </TourChapterBlock>

        <TourChapterBlock
          chapter={tourChapters[4]}
          isActive={activeChapter === 4}
        >
          <WeeklyTrendChart data={weeklyTrend} />
        </TourChapterBlock>

        <TourChapterBlock
          chapter={tourChapters[5]}
          isActive={activeChapter === 5}
        >
          <RecommendationCards items={recommendations} />
        </TourChapterBlock>

        <TourChapterBlock
          chapter={tourChapters[6]}
          isActive={activeChapter === 6}
        >
          <CoachIntroSection />
        </TourChapterBlock>

        <TourChapterBlock
          chapter={tourChapters[7]}
          isActive={activeChapter === 7}
        >
          <CoachChatUI messages={coachScript} />
        </TourChapterBlock>
      </div>
    </div>
  );
}
