"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { deviceSlideshow } from "@/lib/brand";

export function DeviceSlideshow() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex(next);
  }, [index]);

  const next = useCallback(() => {
    goTo((index + 1) % deviceSlideshow.length);
  }, [index, goTo]);

  const prev = useCallback(() => {
    goTo((index - 1 + deviceSlideshow.length) % deviceSlideshow.length);
  }, [index, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [next]);

  const current = deviceSlideshow[index];

  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ns-bg premium-border">
        <div className="absolute inset-0 aurora-bg opacity-60" />
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current.src}
            custom={direction}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={current.src}
              alt={`Neurostellar Orbit — ${current.label} view`}
              fill
              className="object-contain p-6"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={index === 0}
            />
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          onClick={prev}
          className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-ns-border bg-ns-bg/70 text-ns-text backdrop-blur transition hover:border-ns-text/40"
          aria-label="Previous image"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-ns-border bg-ns-bg/70 text-ns-text backdrop-blur transition hover:border-ns-text/40"
          aria-label="Next image"
        >
          ›
        </button>

        <div className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-full border border-ns-border bg-ns-bg/70 px-3 py-1 text-xs font-medium text-ns-silver backdrop-blur">
          {current.label}
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
        {deviceSlideshow.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => goTo(i)}
            className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border transition ${
              i === index
                ? "border-ns-text/50 ring-1 ring-ns-glow"
                : "border-ns-border opacity-60 hover:opacity-100"
            }`}
            aria-label={`View ${item.label}`}
            aria-current={i === index}
          >
            <Image
              src={item.src}
              alt=""
              fill
              className="object-cover"
              sizes="56px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
