"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

type CountUpProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  thousands?: boolean;
  duration?: number;
  className?: string;
};

function format(n: number, decimals: number, thousands: boolean) {
  const rounded = decimals > 0 ? Number(n.toFixed(decimals)) : Math.round(n);
  if (thousands) return rounded.toLocaleString("en-US");
  return decimals > 0 ? rounded.toFixed(decimals) : String(rounded);
}

export function CountUp({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  thousands = false,
  duration = 1.6,
  className,
}: CountUpProps) {
  const wrapRef = useRef<HTMLSpanElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(wrapRef, { once: true, margin: "-12% 0px" });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;
    if (reduceMotion || !inView) {
      if (reduceMotion) el.textContent = format(value, decimals, thousands);
      return;
    }
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        el.textContent = format(v, decimals, thousands);
      },
    });
    return () => controls.stop();
  }, [inView, reduceMotion, value, decimals, thousands, duration]);

  return (
    <span ref={wrapRef} className={className}>
      {prefix}
      <span ref={numRef}>{format(0, decimals, thousands)}</span>
      {suffix}
    </span>
  );
}
