"use client";

import { useState } from "react";
import type { WeeklyTrendPoint } from "@/lib/report-tour-data";

const SERIES = [
  { key: "speed" as const, label: "Speed", color: "var(--ns-chart-1)" },
  { key: "agility" as const, label: "Agility", color: "var(--ns-chart-2)" },
  { key: "endurance" as const, label: "Endurance", color: "var(--ns-silver)" },
];

interface WeeklyTrendChartProps {
  data: WeeklyTrendPoint[];
  className?: string;
}

export function WeeklyTrendChart({ data, className = "" }: WeeklyTrendChartProps) {
  const [activeDay, setActiveDay] = useState<number | null>(null);

  const width = 560;
  const height = 220;
  const padding = { left: 36, right: 16, top: 16, bottom: 36 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;

  const minY = 20;
  const maxY = 70;

  function scaleY(value: number) {
    return padding.top + chartH - ((value - minY) / (maxY - minY)) * chartH;
  }

  function scaleX(i: number) {
    return padding.left + (i / (data.length - 1)) * chartW;
  }

  function makePath(key: keyof Omit<WeeklyTrendPoint, "day">) {
    return data
      .map((d, i) => `${i === 0 ? "M" : "L"} ${scaleX(i)} ${scaleY(d[key])}`)
      .join(" ");
  }

  const summary =
    "Speed and Agility trend upward through the week; Endurance dips Thursday and Friday.";

  return (
    <div
      className={`rounded-xl border border-ns-border bg-ns-bg-elevated p-4 sm:p-6 md:p-8 ${className}`}
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ns-text-muted">
          Weekly Trend
        </p>
        <div className="flex flex-wrap gap-4">
          {SERIES.map((s) => (
            <div key={s.key} className="flex items-center gap-2">
              <span
                className="h-0.5 w-4 rounded-full"
                style={{ backgroundColor: s.color }}
              />
              <span className="text-[10px] text-ns-text-muted">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full"
        role="img"
        aria-label={summary}
      >
        {[30, 40, 50, 60].map((v) => (
          <g key={v}>
            <line
              x1={padding.left}
              y1={scaleY(v)}
              x2={padding.left + chartW}
              y2={scaleY(v)}
              stroke="var(--ns-chart-grid)"
              strokeWidth="1"
            />
            <text
              x={padding.left - 6}
              y={scaleY(v) + 3}
              textAnchor="end"
              className="fill-ns-text-muted text-[9px]"
            >
              {v}
            </text>
          </g>
        ))}

        {SERIES.map((s) => (
          <path
            key={s.key}
            d={makePath(s.key)}
            fill="none"
            stroke={s.color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}

        {data.map((d, i) => (
          <g key={d.day}>
            {SERIES.map((s) => (
              <circle
                key={s.key}
                cx={scaleX(i)}
                cy={scaleY(d[s.key])}
                r={activeDay === i ? 5 : 3}
                fill={s.color}
                className="cursor-pointer"
                onMouseEnter={() => setActiveDay(i)}
                onMouseLeave={() => setActiveDay(null)}
                onClick={() => setActiveDay(activeDay === i ? null : i)}
              />
            ))}
            <text
              x={scaleX(i)}
              y={height - 10}
              textAnchor="middle"
              className="fill-ns-text-muted text-[10px]"
            >
              {d.day}
            </text>
          </g>
        ))}

        {activeDay !== null && (
          <g>
            <rect
              x={scaleX(activeDay) - 52}
              y={padding.top}
              width={104}
              height={52}
              rx="6"
              fill="var(--ns-bg-card)"
              stroke="var(--ns-border)"
            />
            <text
              x={scaleX(activeDay)}
              y={padding.top + 16}
              textAnchor="middle"
              className="fill-white text-[10px] font-semibold"
            >
              {data[activeDay].day}
            </text>
            {SERIES.map((s, si) => (
              <text
                key={s.key}
                x={scaleX(activeDay)}
                y={padding.top + 30 + si * 12}
                textAnchor="middle"
                className="fill-ns-text-muted text-[9px]"
              >
                {s.label}: {data[activeDay][s.key].toFixed(1)}
              </text>
            ))}
          </g>
        )}
      </svg>
    </div>
  );
}
