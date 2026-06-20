"use client";

import Link from "next/link";
import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import {
  CONSENT_STORAGE_KEY,
  OPEN_CONSENT_EVENT,
  readStoredConsent,
  updateConsent,
  type ConsentChoice,
} from "@/lib/consent";

function subscribe(onChange: () => void) {
  if (typeof window === "undefined") return () => {};
  const handler = (event: StorageEvent) => {
    if (event.key === CONSENT_STORAGE_KEY) onChange();
  };
  window.addEventListener("storage", handler);
  return () => window.removeEventListener("storage", handler);
}

export function CookieConsent() {
  const storedConsent = useSyncExternalStore<ConsentChoice | null>(
    subscribe,
    readStoredConsent,
    () => null,
  );
  const [dismissed, setDismissed] = useState(false);
  const [forceOpen, setForceOpen] = useState(false);

  const choose = useCallback((choice: ConsentChoice) => {
    updateConsent(choice);
    setForceOpen(false);
    setDismissed(true);
  }, []);

  useEffect(() => {
    const open = () => {
      setDismissed(false);
      setForceOpen(true);
    };
    window.addEventListener(OPEN_CONSENT_EVENT, open);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, open);
  }, []);

  if (!forceOpen && (storedConsent !== null || dismissed)) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 p-4 sm:inset-x-auto sm:bottom-6 sm:right-6 sm:max-w-sm"
    >
      <div className="rounded-2xl border border-ns-border bg-ns-bg-card p-5 shadow-2xl">
        <p className="text-sm leading-relaxed text-ns-text-muted">
          We use cookies to understand how the site is used and improve it. You
          can accept or decline analytics. See our{" "}
          <Link
            href="/privacy-policy"
            className="font-semibold text-ns-text underline-offset-4 hover:text-ns-accent hover:underline"
          >
            privacy policy
          </Link>
          .
        </p>
        <div className="mt-4 flex gap-3">
          <button
            type="button"
            onClick={() => choose("granted")}
            className="inline-flex flex-1 cursor-pointer items-center justify-center rounded-full border border-ns-accent bg-ns-accent px-5 py-2.5 text-sm font-semibold tracking-wide text-ns-on-accent transition-colors hover:bg-ns-accent-hover"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={() => choose("denied")}
            className="inline-flex flex-1 cursor-pointer items-center justify-center rounded-full border border-transparent bg-transparent px-5 py-2.5 text-sm font-semibold tracking-wide text-ns-text-muted transition-colors hover:text-ns-text"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
