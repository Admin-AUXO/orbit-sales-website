"use client";

import { useEffect } from "react";
import { trackContactClick } from "@/lib/analytics";

export function ContactLinkTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest("a");
      const href = anchor?.getAttribute("href");
      if (!href) return;

      const method = href.startsWith("tel:")
        ? "phone"
        : href.startsWith("mailto:")
          ? "email"
          : null;
      if (!method) return;

      trackContactClick(method, window.location.pathname);
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
