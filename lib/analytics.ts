import { track } from "@vercel/analytics";

export function trackCTA(action: "buy" | "demo" | "report", location: string) {
  track("cta_click", { action, location });
}
