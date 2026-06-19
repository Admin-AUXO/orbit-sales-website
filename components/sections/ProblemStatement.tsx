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

/** Scroll distance while the statement stays pinned (vh). Kept tight to avoid dead space after reveal. */
const scrollTrackClassName =
  "h-[170vh] min-[451px]:h-[175vh] md:h-[140vh] xl:h-[195vh]";

const stickyPanelClassName =
  "sticky top-16 flex overflow-hidden py-8 max-xl:min-h-0 max-xl:items-start max-md:pt-10 md:py-10 max-[450px]:overflow-y-auto max-[450px]:pt-12 max-[450px]:pb-6 xl:top-20 xl:min-h-[calc(100dvh-5rem)] xl:items-center xl:py-14";

/** Dead zone at top/bottom of scroll before color reveal runs (0–1). */
const SCROLL_BUFFER = 0.08;

const DIM_COLOR = "#2e2e34";
const REVEAL_COLOR = "#ffffff";

const problemTextClassName =
  "max-w-5xl text-[36px] font-light leading-[1.25] tracking-[-0.02em] max-[450px]:text-[28px] max-[450px]:leading-[1.3]";

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
          <p className={`${problemTextClassName} text-[#2e2e34]`}>
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
      className={`relative bg-ns-bg ${scrollTrackClassName}`}
    >
      <div className={stickyPanelClassName}>
        <div className="mx-auto w-full max-w-[var(--ns-max-width)] px-6 lg:px-8">
          <p className={problemTextClassName}>
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
