"use client";

import { useEffect } from "react";
import {
  CONSENT_CHANGED_EVENT,
  type ConsentChoice,
  readStoredConsent,
} from "@/lib/consent";

const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

function loadClarity(id: string) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { clarity?: unknown };
  if (w.clarity) return;

  (function (c: typeof window, l: Document, a: string, r: string, i: string) {
    (c as unknown as Record<string, unknown>)[a] =
      (c as unknown as Record<string, unknown>)[a] ||
      function (...args: unknown[]) {
        (
          ((c as unknown as Record<string, { q?: unknown[] }>)[a].q =
            (c as unknown as Record<string, { q?: unknown[] }>)[a].q || [])
        ).push(args);
      };
    const t = l.createElement(r) as HTMLScriptElement;
    t.async = true;
    t.src = "https://www.clarity.ms/tag/" + i;
    const y = l.getElementsByTagName(r)[0];
    y.parentNode?.insertBefore(t, y);
  })(window, document, "clarity", "script", id);
}

export function ClarityAnalytics() {
  useEffect(() => {
    if (!CLARITY_ID) return;

    const maybeLoad = (choice: ConsentChoice | null) => {
      if (choice === "granted") loadClarity(CLARITY_ID);
    };

    maybeLoad(readStoredConsent());

    const onConsentChange = (event: Event) => {
      maybeLoad((event as CustomEvent<ConsentChoice>).detail);
    };

    window.addEventListener(CONSENT_CHANGED_EVENT, onConsentChange);
    return () =>
      window.removeEventListener(CONSENT_CHANGED_EVENT, onConsentChange);
  }, []);

  return null;
}
