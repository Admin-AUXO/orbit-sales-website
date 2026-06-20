"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import type { TourChapter } from "@/lib/report-tour-data";
import { useIsClient } from "@/lib/use-is-client";

interface NarrativePanelProps {
  chapter: TourChapter;
  isActive?: boolean;
  showScrollCue?: boolean;
}

const ease = [0.22, 1, 0.36, 1] as const;

function StaticNarrative({
  chapter,
  showScrollCue,
}: {
  chapter: TourChapter;
  showScrollCue?: boolean;
}) {
  return (
    <div className="relative">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ns-text-muted">
        {chapter.eyebrow}
      </p>
      <h2 className="mt-3 text-xl font-bold tracking-tight text-white sm:mt-4 sm:text-2xl lg:text-[1.65rem] lg:leading-snug">
        {chapter.title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-white sm:mt-4 sm:text-base">
        {chapter.description}
      </p>
      {showScrollCue && (
        <p className="mt-6 flex items-center gap-2 text-sm text-white/80">
          <span className="inline-block animate-bounce">↓</span>
          Scroll to explore your report
        </p>
      )}
    </div>
  );
}

function FadeLine({
  children,
  className,
  play,
  delay,
  reduceMotion,
}: {
  children: React.ReactNode;
  className: string;
  play: boolean;
  delay: number;
  reduceMotion: boolean;
}) {
  return (
    <motion.div
      key={play ? "play" : "idle"}
      initial={play && !reduceMotion ? { opacity: 0, y: 12 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={
        play && !reduceMotion
          ? { duration: 0.48, ease, delay }
          : { duration: 0 }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function NarrativePanel({
  chapter,
  isActive = false,
  showScrollCue,
}: NarrativePanelProps) {
  const isClient = useIsClient();
  const reduceMotion = useReducedMotion() ?? false;
  const [hasPlayed, setHasPlayed] = useState(false);

  if (isActive && !hasPlayed) {
    setHasPlayed(true);
  }

  if (!isClient) {
    return <StaticNarrative chapter={chapter} showScrollCue={showScrollCue} />;
  }

  return (
    <div className="relative">
      <FadeLine
        play={hasPlayed}
        delay={0.04}
        reduceMotion={reduceMotion}
        className="text-xs font-semibold uppercase tracking-[0.2em] text-white"
      >
        {chapter.eyebrow}
      </FadeLine>

      <FadeLine
        play={hasPlayed}
        delay={0.1}
        reduceMotion={reduceMotion}
        className="mt-3 text-xl font-bold tracking-tight text-white sm:mt-4 sm:text-2xl lg:text-[1.65rem] lg:leading-snug"
      >
        {chapter.title}
      </FadeLine>

      <FadeLine
        play={hasPlayed}
        delay={0.16}
        reduceMotion={reduceMotion}
        className="mt-3 text-sm leading-relaxed text-white sm:mt-4 sm:text-base"
      >
        {chapter.description}
      </FadeLine>

      {showScrollCue && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease, delay: 0.22 }}
          className="mt-6 flex items-center gap-2 text-sm text-white/80"
        >
          <span className="inline-block animate-bounce">↓</span>
          Scroll to explore your report
        </motion.p>
      )}
    </div>
  );
}
