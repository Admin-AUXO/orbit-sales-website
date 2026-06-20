"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";

const lines: { text: string; bold?: boolean }[] = [
  {
    text:
      "Understanding your body has become easy. Understanding your brain hasn't.",
    bold: true,
  },
  {
    text:
      "We can measure sleep, recovery, activity and physical performance with increasing precision.",
  },
  {
    text:
      "But most of us still rely on intuition to understand how our brain is functioning.",
  },
  { text: "Orbit helps make cognitive performance measurable." },
];

function Line({
  text,
  bold,
  index,
  total,
  progress,
}: {
  text: string;
  bold?: boolean;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const seg = 1 / total;
  const opacity = useTransform(
    progress,
    [seg * index, seg * (index + 0.6)],
    [0.22, 1],
  );

  return (
    <span className="mb-[0.45em] block last:mb-0">
      <motion.span
        style={{ opacity, willChange: "opacity" }}
        className={`block ${bold ? "font-bold" : "font-light"}`}
      >
        {text}
      </motion.span>
    </span>
  );
}

export function ProblemStatement() {
  const containerRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.4,
  });

  return (
    <section
      ref={containerRef}
      id="problem-statement"
      aria-label="The need for cognitive measurement"
      className="relative bg-ns-bg h-[170vh] min-[451px]:h-[175vh] md:h-[140vh] xl:h-[195vh]"
    >
      <div className="sticky top-16 flex overflow-hidden py-8 max-xl:min-h-0 max-xl:items-start max-md:pt-10 md:py-10 max-[450px]:overflow-y-auto max-[450px]:pt-12 max-[450px]:pb-6 xl:top-20 xl:min-h-[calc(100dvh-5rem)] xl:items-center xl:py-14">
        <div className="mx-auto w-full max-w-[var(--ns-max-width)] px-6 lg:px-8">
          <p className="max-w-5xl text-[36px] font-light leading-[1.25] tracking-[-0.02em] text-ns-text max-[450px]:text-[28px] max-[450px]:leading-[1.3]">
            {lines.map((line, index) =>
              reduceMotion ? (
                <span key={line.text} className="mb-[0.45em] block last:mb-0">
                  <span
                    className={`block ${line.bold ? "font-bold" : "font-light"}`}
                  >
                    {line.text}
                  </span>
                </span>
              ) : (
                <Line
                  key={line.text}
                  text={line.text}
                  bold={line.bold}
                  index={index}
                  total={lines.length}
                  progress={smooth}
                />
              ),
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
