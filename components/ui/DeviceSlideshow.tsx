"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { deviceSlideshow } from "@/lib/brand";

type DeviceSlideshowProps = {
  variant?: "default" | "hero";
  className?: string;
};

export function DeviceSlideshow({
  variant = "default",
  className = "",
}: DeviceSlideshowProps) {
  const isHero = variant === "hero";
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
    <div className={`space-y-4 ${className}`}>
      <div
        className={`relative overflow-hidden rounded-2xl bg-ns-bg premium-border ${
          isHero ? "aspect-[16/10] md:aspect-[16/9]" : "aspect-[4/3]"
        }`}
      >
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
              className={`object-contain ${isHero ? "p-8 md:p-12" : "p-6"}`}
              sizes={isHero ? "(max-width: 1024px) 100vw, 960px" : "(max-width: 1024px) 100vw, 50vw"}
              priority={index === 0}
            />
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          onClick={prev}
          className={`absolute left-3 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full border border-ns-border bg-ns-bg/70 text-ns-text backdrop-blur transition hover:border-ns-text/40 ${
            isHero ? "h-11 w-11 text-lg" : "h-9 w-9"
          }`}
          aria-label="Previous image"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={next}
          className={`absolute right-3 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full border border-ns-border bg-ns-bg/70 text-ns-text backdrop-blur transition hover:border-ns-text/40 ${
            isHero ? "h-11 w-11 text-lg" : "h-9 w-9"
          }`}
          aria-label="Next image"
        >
          ›
        </button>

        <div
          className={`absolute bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-full border border-ns-border bg-ns-bg/70 font-medium text-ns-silver backdrop-blur ${
            isHero ? "px-4 py-1.5 text-sm" : "px-3 py-1 text-xs"
          }`}
        >
          {current.label}
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
        {deviceSlideshow.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => goTo(i)}
            className={`relative shrink-0 overflow-hidden rounded-lg border transition ${
              isHero ? "h-16 w-16 md:h-[4.5rem] md:w-[4.5rem]" : "h-14 w-14"
            } ${
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
