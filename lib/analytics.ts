import { track } from "@vercel/analytics";

export function trackCTA(action: "buy" | "demo", location: string) {
  track("cta_click", { action, location });
}
