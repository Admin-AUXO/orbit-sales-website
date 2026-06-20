"use client";

import type { GaugeScore } from "@/lib/report-tour-data";
import {
  GAUGE_ARC_SEGMENTS,
  ZONE_COLORS,
  zoneColor,
} from "@/lib/global-scores";

interface ReportGaugeDialProps {
  gauge: GaugeScore;
}

function svgNum(value: number) {
  return Number(value.toFixed(4));
}

export function ReportGaugeDial({ gauge }: ReportGaugeDialProps) {
  const cx = 100;
  const cy = 98;
  const r = 68;
  const strokeW = 13;
  const score = gauge.score;
  const needleAngle = Math.PI - (score / 100) * Math.PI;
  const needleLen = r - 4;
  const needleX = svgNum(cx + Math.cos(needleAngle) * needleLen);
  const needleY = svgNum(cy - Math.sin(needleAngle) * needleLen);

  const arcPath = (startPct: number, endPct: number) => {
    const a1 = Math.PI - (startPct / 100) * Math.PI;
    const a2 = Math.PI - (endPct / 100) * Math.PI;
    const x1 = svgNum(cx + Math.cos(a1) * r);
    const y1 = svgNum(cy - Math.sin(a1) * r);
    const x2 = svgNum(cx + Math.cos(a2) * r);
    const y2 = svgNum(cy - Math.sin(a2) * r);
    return `M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`;
  };

  const labelAngle = (pct: number, radiusOffset = 20) => {
    const a = Math.PI - (pct / 100) * Math.PI;
    return {
      x: svgNum(cx + Math.cos(a) * (r + radiusOffset)),
      y: svgNum(cy - Math.sin(a) * (r + radiusOffset)),
    };
  };

  const poorLbl = labelAngle(12);
  const avgLbl = labelAngle(50, 15);
  const highLbl = labelAngle(88);

  return (
    <div className="rounded-lg border border-ns-border bg-ns-bg-card px-3 py-3 min-[500px]:px-3 min-[500px]:py-4">
      <div className="flex w-full flex-row items-center gap-2 min-[500px]:flex-col min-[500px]:items-center min-[500px]:gap-0">
        <svg
          viewBox="0 -10 200 116"
          className="h-[88px] w-[120px] shrink-0 overflow-visible min-[500px]:h-auto min-[500px]:w-full min-[500px]:max-w-[200px] sm:max-w-[220px]"
          aria-hidden
        >
          {GAUGE_ARC_SEGMENTS.map((seg) => (
            <path
              key={seg.zone}
              d={arcPath(seg.start, seg.end)}
              fill="none"
              stroke={ZONE_COLORS[seg.zone]}
              strokeWidth={strokeW}
              strokeLinecap="butt"
              opacity={0.9}
            />
          ))}

          <line
            x1={cx}
            y1={cy}
            x2={needleX}
            y2={needleY}
            stroke={zoneColor(score)}
            strokeWidth={2}
          />
          <circle
            cx={cx}
            cy={cy}
            r={5}
            fill="var(--ns-text)"
            stroke={zoneColor(score)}
            strokeWidth={1.5}
          />

          <text
            x={poorLbl.x}
            y={poorLbl.y}
            textAnchor="middle"
            fill={ZONE_COLORS.poor}
            fontSize="7"
            fontWeight="600"
          >
            Poor
          </text>
          <text
            x={avgLbl.x}
            y={avgLbl.y + 1}
            textAnchor="middle"
            fill={ZONE_COLORS.average}
            fontSize="6.5"
            fontWeight="600"
          >
            Average
          </text>
          <text
            x={highLbl.x}
            y={highLbl.y}
            textAnchor="middle"
            fill={ZONE_COLORS.high}
            fontSize="7"
            fontWeight="600"
          >
            High
          </text>

          <text
            x={cx}
            y={cy - 10}
            textAnchor="middle"
            fill="var(--ns-text)"
            fontSize="22"
            fontWeight="700"
          >
            {score.toFixed(1)}
          </text>
        </svg>

        <div className="min-w-0 flex-1 min-[500px]:mt-2 min-[500px]:flex-none min-[500px]:text-center">
          <p className="text-left text-xs font-medium text-white min-[500px]:text-center">
            {gauge.label}
          </p>
          <p className="mt-1 text-left text-[10px] leading-snug text-ns-text-muted min-[500px]:text-center sm:text-[11px]">
            {gauge.description}
          </p>
        </div>
      </div>
    </div>
  );
}
