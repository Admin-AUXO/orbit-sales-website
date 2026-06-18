"use client";

import { useEffect, useState } from "react";

/** True after mount — use before browser-only APIs or client-only animation state. */
export function useIsClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}
