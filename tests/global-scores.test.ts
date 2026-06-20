import { describe, expect, it } from "vitest";
import {
  GLOBAL_ZONE_THRESHOLDS,
  globalScoreZone,
  zoneColor,
  ZONE_COLORS,
} from "@/lib/global-scores";

describe("globalScoreZone", () => {
  it("classifies poor / average / high by threshold", () => {
    expect(globalScoreZone(0)).toBe("poor");
    expect(globalScoreZone(24)).toBe("poor");
    expect(globalScoreZone(25)).toBe("average");
    expect(globalScoreZone(74)).toBe("average");
    expect(globalScoreZone(75)).toBe("high");
    expect(globalScoreZone(100)).toBe("high");
  });

  it("clamps out-of-range values", () => {
    expect(globalScoreZone(-50)).toBe("poor");
    expect(globalScoreZone(200)).toBe("high");
  });

  it("uses boundaries that line up with the threshold table", () => {
    expect(GLOBAL_ZONE_THRESHOLDS.average.min).toBe(25);
    expect(GLOBAL_ZONE_THRESHOLDS.high.min).toBe(75);
  });
});

describe("zoneColor", () => {
  it("returns the color for the score's zone", () => {
    expect(zoneColor(10)).toBe(ZONE_COLORS.poor);
    expect(zoneColor(50)).toBe(ZONE_COLORS.average);
    expect(zoneColor(90)).toBe(ZONE_COLORS.high);
  });
});
