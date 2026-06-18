"use client";

interface ArcGaugeProps {
  label: string;
  score: number;
  color: string;
  size?: number;
}

export function ArcGauge({ label, score, color, size = 100 }: ArcGaugeProps) {
  const strokeWidth = 6;
  const radius = (size - strokeWidth) / 2;
  const cx = size / 2;
  const cy = size / 2 + 8;
  const circumference = Math.PI * radius;
  const progress = (score / 100) * circumference;

  const startX = cx - radius;
  const startY = cy;
  const endX = cx + radius;
  const endY = cy;

  return (
    <div className="flex flex-col items-center">
      <svg
        width={size}
        height={size * 0.7}
        viewBox={`0 0 ${size} ${size * 0.7}`}
        aria-hidden
      >
        <path
          d={`M ${startX} ${startY} A ${radius} ${radius} 0 0 1 ${endX} ${endY}`}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        <path
          d={`M ${startX} ${startY} A ${radius} ${radius} 0 0 1 ${endX} ${endY}`}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={`${progress} ${circumference}`}
          style={{ filter: `drop-shadow(0 0 6px ${color})` }}
        />
        <text
          x={cx}
          y={cy - 4}
          textAnchor="middle"
          className="fill-ns-text text-[18px] font-extrabold"
          style={{ fontSize: size * 0.18 }}
        >
          {score.toFixed(1)}
        </text>
      </svg>
      <p className="mt-1 text-center text-[10px] font-semibold uppercase tracking-wider text-ns-text-muted">
        {label}
      </p>
    </div>
  );
}
