"use client";

import { useState } from "react";
import type { DayEvent } from "@/lib/report-tour-data";

const METRICS = [
  { key: "speed" as const, label: "Speed", color: "var(--ns-chart-1)" },
  { key: "agility" as const, label: "Agility", color: "var(--ns-chart-2)" },
  { key: "endurance" as const, label: "Endurance", color: "var(--ns-silver)" },
];

function activityAverage(event: DayEvent) {
  return (event.speed + event.agility + event.endurance) / 3;
}

function findTopActivityIndex(events: DayEvent[]) {
  let topIndex = 0;
  let topScore = activityAverage(events[0]);

  events.forEach((event, index) => {
    const avg = activityAverage(event);
    if (avg > topScore) {
      topScore = avg;
      topIndex = index;
    }
  });

  return { topIndex, topScore };
}

const TROPHY_VIEW_OFFSET = 24;

function TrophyMark({ cx, y }: { cx: number; y: number }) {
  return (
    <g transform={`translate(${cx - 8}, ${y})`} aria-hidden>
      <path
        d="M4 3h8v2.5c0 2.6-1.7 4.1-4 4.9-2.3-.8-4-2.3-4-4.9V3z"
        fill="var(--ns-teal)"
      />
      <path d="M2.5 3H3.5V5H2.5V3zm10 0h1v2h-1V3z" fill="var(--ns-sky)" />
      <rect x="6" y="10" width="4" height="1.6" rx="0.4" fill="var(--ns-teal)" />
      <rect x="5" y="11.6" width="6" height="1.2" rx="0.4" fill="var(--ns-teal)" />
    </g>
  );
}

interface ActivityHistoryChartProps {
  events: DayEvent[];
}

export function ActivityHistoryChart({ events }: ActivityHistoryChartProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { topIndex } = findTopActivityIndex(events);
  const topActivity = events[topIndex];

  const width = 560;
  const height = 320;
  const padding = { top: 42, right: 16, bottom: 80, left: 44 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;

  const groupWidth = chartW / events.length;
  const barWidth = 14;
  const barGap = 4;
  const clusterWidth = METRICS.length * barWidth + (METRICS.length - 1) * barGap;

  const yTicks = [0, 20, 40, 60, 80, 100];

  function yForScore(score: number) {
    return padding.top + chartH - (score / 100) * chartH;
  }

  function barHeight(score: number) {
    return (score / 100) * chartH;
  }

  function groupCenterX(index: number) {
    return padding.left + groupWidth * index + groupWidth / 2;
  }

  return (
    <div className="rounded-xl border border-ns-border bg-ns-bg-elevated p-4 sm:p-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ns-text-muted">
          Your day · morning to evening
        </p>
        <div className="flex flex-wrap gap-3 text-[10px] text-ns-text-muted">
          {METRICS.map((m) => (
            <span key={m.key} className="flex items-center gap-1.5">
              <span
                className="h-2.5 w-2.5 rounded-sm"
                style={{ background: m.color }}
              />
              {m.label}
            </span>
          ))}
        </div>
      </div>

      <svg
        viewBox={`0 -${TROPHY_VIEW_OFFSET} ${width} ${height + TROPHY_VIEW_OFFSET}`}
        className="w-full overflow-visible"
        role="img"
        aria-label={`Daily activity scores. Highest overall: ${topActivity.activity}`}
      >
        {yTicks.map((tick) => (
          <g key={tick}>
            <line
              x1={padding.left}
              y1={yForScore(tick)}
              x2={padding.left + chartW}
              y2={yForScore(tick)}
              stroke="var(--ns-chart-grid)"
              strokeWidth={1}
            />
            <text
              x={padding.left - 8}
              y={yForScore(tick) + 3}
              textAnchor="end"
              className="fill-ns-text-muted text-[9px]"
            >
              {tick}
            </text>
          </g>
        ))}

        <text
          x={14}
          y={padding.top + chartH / 2}
          textAnchor="middle"
          transform={`rotate(-90 14 ${padding.top + chartH / 2})`}
          className="fill-ns-text-muted text-[9px]"
        >
          Score (0–100)
        </text>

        {events.map((_, i) => (
          <line
            key={`grid-${i}`}
            x1={padding.left + groupWidth * i}
            y1={padding.top}
            x2={padding.left + groupWidth * i}
            y2={padding.top + chartH}
            stroke="var(--ns-chart-grid)"
            strokeWidth={1}
          />
        ))}

        {events.map((event, index) => {
          const cx = groupCenterX(index);
          const clusterLeft = cx - clusterWidth / 2;
          const baseline = padding.top + chartH;
          const isActive = activeIndex === index;
          const isTop = index === topIndex;

          return (
            <g
              key={event.activity}
              className="cursor-pointer"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              {isTop && (
                <>
                  <rect
                    x={clusterLeft - 6}
                    y={padding.top - 4}
                    width={clusterWidth + 12}
                    height={chartH + 4}
                    rx={6}
                    fill="oklch(0.7367 0.15 167.2 / 0.06)"
                    stroke="oklch(0.7367 0.15 167.2 / 0.35)"
                    strokeWidth={1}
                  />
                  <TrophyMark cx={cx} y={4} />
                </>
              )}

              {METRICS.map((metric, mi) => {
                const score = event[metric.key];
                const h = barHeight(score);
                const x = clusterLeft + mi * (barWidth + barGap);

                return (
                  <rect
                    key={metric.key}
                    x={x}
                    y={baseline - h}
                    width={barWidth}
                    height={Math.max(h, 1)}
                    fill={metric.color}
                    opacity={isActive ? 1 : 0.9}
                    rx={2}
                  />
                );
              })}

              <text
                x={cx}
                y={baseline + 18}
                textAnchor="middle"
                className="fill-white text-[8px] font-medium sm:text-[9px]"
              >
                {event.time}
              </text>
              <text
                x={cx}
                y={baseline + 34}
                textAnchor="middle"
                className="fill-ns-text-muted text-[7px] sm:text-[8px]"
              >
                {event.activity.length > 16
                  ? `${event.activity.slice(0, 14)}…`
                  : event.activity}
              </text>

              {isActive && (
                <g>
                  <rect
                    x={cx - 78}
                    y={padding.top + 2}
                    width={156}
                    height={78}
                    rx={6}
                    fill="var(--ns-bg-card)"
                    stroke="var(--ns-border)"
                  />
                  <text
                    x={cx}
                    y={padding.top + 18}
                    textAnchor="middle"
                    className="fill-white text-[9px] font-semibold"
                  >
                    {event.activity}
                  </text>
                  <text
                    x={cx}
                    y={padding.top + 34}
                    textAnchor="middle"
                    className="fill-ns-text-muted text-[8px]"
                  >
                    Speed: {event.speed.toFixed(1)}
                  </text>
                  <text
                    x={cx}
                    y={padding.top + 48}
                    textAnchor="middle"
                    className="fill-ns-text-muted text-[8px]"
                  >
                    Agility: {event.agility.toFixed(1)}
                  </text>
                  <text
                    x={cx}
                    y={padding.top + 62}
                    textAnchor="middle"
                    className="fill-ns-text-muted text-[8px]"
                  >
                    Endurance: {event.endurance.toFixed(1)}
                  </text>
                </g>
              )}
            </g>
          );
        })}
      </svg>

      <div className="mt-1.5 flex items-center justify-center gap-2 rounded-lg border border-ns-border bg-ns-bg-card px-4 py-2.5">
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          className="shrink-0"
          aria-hidden
        >
          <path
            d="M4 3h8v2.5c0 2.6-1.7 4.1-4 4.9-2.3-.8-4-2.3-4-4.9V3z"
            fill="var(--ns-teal)"
          />
          <path d="M2.5 3H3.5V5H2.5V3zm10 0h1v2h-1V3z" fill="var(--ns-sky)" />
          <rect x="6" y="10" width="4" height="1.6" rx="0.4" fill="var(--ns-teal)" />
          <rect x="5" y="11.6" width="6" height="1.2" rx="0.4" fill="var(--ns-teal)" />
        </svg>
        <p className="text-center text-[11px] leading-snug text-ns-text-muted sm:text-xs">
          <span className="font-semibold text-ns-teal">Strongest activity</span>
          <span className="text-ns-text"> · {topActivity.activity}</span>
          <span className="text-ns-text-muted">
            {" "}
            ({topActivity.time})
          </span>
        </p>
      </div>
    </div>
  );
}
