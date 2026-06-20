"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { trackEvent, trackScheduleDemo } from "@/lib/analytics";
import { brandedCalendlyUrl, OPEN_CALENDLY_EVENT } from "@/lib/calendly";

type CalendlyMessage = { event?: string };

type CalendlyApi = {
  initInlineWidget: (opts: {
    url: string;
    parentElement: HTMLElement;
    resize?: boolean;
  }) => void;
};

export function CalendlyModal() {
  const [open, setOpen] = useState(false);
  const [scriptReady, setScriptReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(OPEN_CALENDLY_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_CALENDLY_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onMessage = (e: MessageEvent) => {
      const data = e.data as CalendlyMessage;
      if (typeof data !== "object" || !data?.event?.startsWith?.("calendly.")) {
        return;
      }
      if (data.event === "calendly.date_and_time_selected") {
        trackEvent("schedule_demo_start", { method: "calendly" });
      }
      if (data.event === "calendly.event_scheduled") {
        trackScheduleDemo();
      }
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("message", onMessage);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("message", onMessage);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open || !scriptReady) return;
    const calendly = (window as unknown as { Calendly?: CalendlyApi }).Calendly;
    const parent = containerRef.current;
    if (!calendly || !parent) return;

    parent.innerHTML = "";
    calendly.initInlineWidget({
      url: brandedCalendlyUrl(),
      parentElement: parent,
      resize: true,
    });
  }, [open, scriptReady]);

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => setScriptReady(true)}
      />

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Book a demo"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(false)}
            className="absolute inset-0 cursor-default bg-black/70 backdrop-blur-sm"
          />
          <div className="relative z-10 flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-ns-border bg-ns-bg-card shadow-2xl sm:max-w-4xl">
            <div className="flex items-center justify-between border-b border-ns-border px-5 py-3">
              <p className="text-sm font-semibold tracking-wide text-ns-text">
                Book a demo
              </p>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-ns-text-muted transition-colors hover:bg-white/5 hover:text-ns-text"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path
                    d="M4 4l8 8M12 4l-8 8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <div
                ref={containerRef}
                className="calendly-inline-widget"
                style={{ minWidth: 320, minHeight: 640 }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
