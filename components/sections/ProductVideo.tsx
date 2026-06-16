"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { brandAssets } from "@/lib/brand";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProductVideo() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.25 });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isInView) {
      video.currentTime = 0;
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      id="product-video"
      aria-labelledby="product-video-heading"
      className="bg-black py-24 md:py-32"
    >
      <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
        <SectionHeading
          id="product-video-heading"
          eyebrow="See Orbit"
          title="Precision, revealed"
          description="Every detail engineered for intentional mental fitness — from sensors to silhouette."
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="w-full"
      >
        <video
          ref={videoRef}
          className="w-full"
          muted
          playsInline
          loop
          preload="metadata"
          aria-label="Neurostellar Orbit exploded product view"
        >
          <source src={brandAssets.video.explodeLoop} type="video/mp4" />
        </video>
      </motion.div>
    </section>
  );
}
