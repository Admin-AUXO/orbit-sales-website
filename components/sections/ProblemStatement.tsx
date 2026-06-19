"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";

const lines = [
  "Understanding your body has become easy. Understanding your brain hasn't.",
  "We can measure sleep, recovery, activity and physical performance with increasing precision.",
  "But most of us still rely on intuition to understand how our brain is functioning.",
  "Orbit helps make cognitive performance measurable.",
] as const;

/** Scroll distance while the statement stays pinned (vh). */
const SCROLL_HEIGHT_VH = 280;

/** Dead zone at top/bottom of scroll before color reveal runs (0–1). */
const SCROLL_BUFFER = 0.08;

const DIM_COLOR = "#2e2e34";
const REVEAL_COLOR = "#ffffff";

function RevealLine({
  text,
  index,
  total,
  progress,
}: {
  text: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const segment = 1 / total;
  const start = Math.max(0, index * segment - segment * 0.15);
  const end = Math.min(1, (index + 1) * segment + segment * 0.05);
  const color = useTransform(
    progress,
    [start, end],
    [DIM_COLOR, REVEAL_COLOR],
  );

  return (
    <motion.span style={{ color }} className="block">
      {text}
    </motion.span>
  );
}

export function ProblemStatement() {
  const containerRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const revealProgress = useTransform(
    scrollYProgress,
    [SCROLL_BUFFER, 1 - SCROLL_BUFFER],
    [0, 1],
  );

  if (reduceMotion) {
    return (
      <section
        aria-label="The need for cognitive measurement"
        id="problem-statement"
        className="border-y border-ns-border/40 bg-ns-bg py-16 md:py-20"
      >
        <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
          <p className="max-w-5xl text-[36px] font-light leading-[1.25] tracking-[-0.02em] text-[#2e2e34]">
            {lines.map((line) => (
              <span key={line} className="mb-4 block last:mb-0">
                {line}
              </span>
            ))}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      id="problem-statement"
      aria-label="The need for cognitive measurement"
      className="relative bg-ns-bg"
      style={{ height: `${SCROLL_HEIGHT_VH}vh` }}
    >
      <div className="sticky top-16 flex h-[calc(100dvh-4rem)] items-center overflow-hidden py-12 lg:top-20 lg:h-[calc(100dvh-5rem)] lg:py-16">
        <div className="mx-auto w-full max-w-[var(--ns-max-width)] px-6 lg:px-8">
          <p className="max-w-5xl text-[36px] font-light leading-[1.25] tracking-[-0.02em]">
            {lines.map((line, index) => (
              <span key={line} className="mb-[0.45em] block last:mb-0">
                <RevealLine
                  text={line}
                  index={index}
                  total={lines.length}
                  progress={revealProgress}
                />
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
