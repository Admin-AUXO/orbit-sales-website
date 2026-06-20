"use client";

import { useEffect, useRef } from "react";

interface InfoHotspotProps {
  id: string;
  label: string;
  tooltipTitle: string;
  tooltipBody: string;
  isActive: boolean;
  onToggle: (id: string) => void;
  inline?: boolean;
  tooltipPlacement?: "top" | "bottom";
}

export function InfoHotspot({
  id,
  label,
  tooltipTitle,
  tooltipBody,
  isActive,
  onToggle,
  inline = true,
  tooltipPlacement = "top",
}: InfoHotspotProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) return;

    function handleClickOutside(e: MouseEvent) {
      if (
        buttonRef.current?.contains(e.target as Node) ||
        tooltipRef.current?.contains(e.target as Node)
      ) {
        return;
      }
      onToggle(id);
    }

    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") onToggle(id);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isActive, id, onToggle]);

  return (
    <div className={`relative shrink-0 ${inline ? "" : "absolute z-10"}`}>
      <button
        ref={buttonRef}
        type="button"
        aria-label={label}
        aria-expanded={isActive}
        onClick={() => onToggle(id)}
        className="group relative flex h-8 w-8 items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ns-accent"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-white/15 opacity-60" />
        <span className="relative flex h-[18px] w-[18px] items-center justify-center rounded-full border border-white/50 bg-white/90 text-[9px] font-bold text-ns-bg-elevated shadow-sm transition-transform group-hover:scale-110">
          i
        </span>
      </button>

      {isActive && (
        <div
          ref={tooltipRef}
          role="tooltip"
          className={`absolute left-1/2 z-30 w-[min(280px,calc(100vw-3rem))] -translate-x-1/2 rounded-xl border border-ns-border bg-ns-bg-card p-4 shadow-xl ${
            tooltipPlacement === "bottom"
              ? "top-full mt-2"
              : "bottom-full mb-2"
          }`}
        >
          <p className="text-sm font-semibold text-white">{tooltipTitle}</p>
          <p className="mt-2 text-xs leading-relaxed text-ns-text-muted">
            {tooltipBody}
          </p>
          <div
            className={`absolute left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-ns-border bg-ns-bg-card ${
              tooltipPlacement === "bottom"
                ? "-top-1.5 border-l border-t"
                : "-bottom-1.5 border-b border-r"
            }`}
          />
        </div>
      )}
    </div>
  );
}

export function SectionTitleWithInfo({
  title,
  hotspot,
  isActive,
  onToggle,
  tooltipPlacement = "top",
}: {
  title: string;
  hotspot: {
    id: string;
    label: string;
    tooltipTitle: string;
    tooltipBody: string;
  };
  isActive: boolean;
  onToggle: (id: string) => void;
  tooltipPlacement?: "top" | "bottom";
}) {
  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <InfoHotspot
        {...hotspot}
        isActive={isActive}
        onToggle={onToggle}
        inline
        tooltipPlacement={tooltipPlacement}
      />
    </div>
  );
}
