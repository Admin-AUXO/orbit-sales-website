export type ScoreZone = "poor" | "average" | "high";

/** Global population benchmarks — no personal baseline (v1). */
export const GLOBAL_ZONE_THRESHOLDS = {
  poor: { min: 0, max: 25 },
  average: { min: 25, max: 75 },
  high: { min: 75, max: 100 },
} as const;

export const ZONE_COLORS: Record<ScoreZone, string> = {
  poor: "#ef4444",
  average: "#f59e0b",
  high: "#10b981",
};

export const ZONE_LABELS: Record<ScoreZone, string> = {
  poor: "Poor",
  average: "Average",
  high: "High",
};

/** Arc segment boundaries on 0–100 scale (semicircle gauge). */
export const GAUGE_ARC_SEGMENTS = [
  { zone: "poor" as const, start: 0, end: 25 },
  { zone: "average" as const, start: 25, end: 75 },
  { zone: "high" as const, start: 75, end: 100 },
];

export function globalScoreZone(score: number): ScoreZone {
  const clamped = Math.max(0, Math.min(100, score));
  if (clamped < GLOBAL_ZONE_THRESHOLDS.average.min) return "poor";
  if (clamped < GLOBAL_ZONE_THRESHOLDS.high.min) return "average";
  return "high";
}

export function zoneColor(score: number): string {
  return ZONE_COLORS[globalScoreZone(score)];
}
