"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

const SPLINE_URL =
  "https://my.spline.design/particleaibrain-9259c8d97a78536d6c9232b4e5a3830c/";

export function BrainVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "300px 0px" });

  return (
    <div ref={ref} className="relative mx-auto aspect-square w-full max-w-md">
      <div className="pointer-events-none absolute inset-[8%] rounded-full bg-ns-gradient-brand opacity-20 blur-3xl" />
      <svg
        viewBox="0 0 400 400"
        className="pointer-events-none absolute inset-0 h-full w-full"
        role="img"
        aria-label="Neural activity visualization"
      >
        <defs>
          <radialGradient id="brain-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--ns-teal)" stopOpacity="0.3" />
            <stop offset="55%" stopColor="var(--ns-sky)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="var(--ns-sky)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="200" r="150" fill="url(#brain-core)" />
        <circle
          cx="200"
          cy="200"
          r="120"
          fill="none"
          stroke="var(--ns-teal)"
          strokeOpacity="0.2"
          strokeWidth="1"
          strokeDasharray="2 8"
        />
        <circle
          cx="200"
          cy="200"
          r="92"
          fill="none"
          stroke="var(--ns-sky)"
          strokeOpacity="0.18"
          strokeWidth="1"
          strokeDasharray="2 10"
        />
      </svg>
      {inView && (
        <iframe
          src={SPLINE_URL}
          title="Interactive neural brain visualization — drag to explore"
          loading="lazy"
          allow="autoplay; fullscreen"
          className="pointer-events-auto absolute inset-0 z-10 h-full w-full border-0 touch-pan-y"
        />
      )}
    </div>
  );
}
