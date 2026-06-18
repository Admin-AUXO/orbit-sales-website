"use client";

import { useState } from "react";
import type { WeeklyTrendPoint } from "@/lib/report-tour-data";

const SERIES = [
  { key: "speed" as const, label: "Speed", color: "rgba(0,190,225,0.9)" },
  { key: "agility" as const, label: "Agility", color: "rgb(188,198,235)" },
  { key: "endurance" as const, label: "Endurance", color: "rgba(200,180,255,0.9)" },
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
      className={`rounded-xl border border-[#333333] bg-[#121212] p-4 sm:p-6 md:p-8 ${className}`}
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c9d1d9]">
          Weekly Trend
        </p>
        <div className="flex flex-wrap gap-4">
          {SERIES.map((s) => (
            <div key={s.key} className="flex items-center gap-2">
              <span
                className="h-0.5 w-4 rounded-full"
                style={{ backgroundColor: s.color }}
              />
              <span className="text-[10px] text-[#b0b3b8]">{s.label}</span>
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
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
            />
            <text
              x={padding.left - 6}
              y={scaleY(v) + 3}
              textAnchor="end"
              className="fill-[#b0b3b8] text-[9px]"
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
              className="fill-[#b0b3b8] text-[10px]"
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
              fill="#232323"
              stroke="#333333"
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
                className="fill-[#c9d1d9] text-[9px]"
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
