"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { brandAssets } from "@/lib/brand";

export function OrbitExplodeVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(containerRef, { amount: 0.35 });

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
    <div ref={containerRef} className="relative w-full">
      <video
        ref={videoRef}
        className="block w-full"
        muted
        playsInline
        loop
        preload="metadata"
        aria-label="Neurostellar Orbit exploded product view"
      >
        <source src={brandAssets.video.explodeLoop} type="video/mp4" />
      </video>
    </div>
  );
}
