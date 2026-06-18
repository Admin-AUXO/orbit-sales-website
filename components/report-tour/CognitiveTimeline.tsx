"use client";

export function CognitiveTimeline() {
  const width = 560;
  const height = 100;
  const padding = { left: 8, right: 8, top: 12, bottom: 24 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;

  const points = [
    0.3, 0.55, 0.75, 0.85, 0.9, 0.88, 0.7, 0.45, 0.35, 0.5, 0.65, 0.55, 0.4,
    0.3, 0.25,
  ];

  const linePath = points
    .map((y, i) => {
      const x = padding.left + (i / (points.length - 1)) * chartW;
      const py = padding.top + (1 - y) * chartH;
      return `${i === 0 ? "M" : "L"} ${x} ${py}`;
    })
    .join(" ");

  const areaPath = `${linePath} L ${padding.left + chartW} ${padding.top + chartH} L ${padding.left} ${padding.top + chartH} Z`;

  const deepWorkEnd = padding.left + (7 / 14) * chartW;

  return (
    <div className="w-full">
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-ns-text-muted">
        Cognitive State Timeline
      </p>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full"
        role="img"
        aria-label="Timeline showing deep work in first eight minutes, then increasing fragmentation"
      >
        <defs>
          <linearGradient id="timelineFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(0,190,225,0.35)" />
            <stop offset="100%" stopColor="rgba(0,190,225,0.02)" />
          </linearGradient>
        </defs>

        <rect
          x={padding.left}
          y={padding.top}
          width={deepWorkEnd - padding.left}
          height={chartH}
          fill="rgba(0,190,225,0.06)"
          rx="2"
        />

        {[0.25, 0.5, 0.75].map((y) => (
          <line
            key={y}
            x1={padding.left}
            y1={padding.top + (1 - y) * chartH}
            x2={padding.left + chartW}
            y2={padding.top + (1 - y) * chartH}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
          />
        ))}

        <path d={areaPath} fill="url(#timelineFill)" />
        <path
          d={linePath}
          fill="none"
          stroke="rgba(0,190,225,0.85)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <line
          x1={deepWorkEnd}
          y1={padding.top}
          x2={deepWorkEnd}
          y2={padding.top + chartH}
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1"
          strokeDasharray="4 3"
        />

        <text
          x={padding.left + (deepWorkEnd - padding.left) / 2}
          y={height - 4}
          textAnchor="middle"
          className="fill-ns-text-muted text-[9px]"
        >
          Deep work
        </text>
        <text
          x={deepWorkEnd + (padding.left + chartW - deepWorkEnd) / 2}
          y={height - 4}
          textAnchor="middle"
          className="fill-ns-text-muted text-[9px]"
        >
          Fragmentation
        </text>
        <text
          x={padding.left}
          y={height - 4}
          className="fill-ns-text-muted text-[9px]"
        >
          0 min
        </text>
        <text
          x={padding.left + chartW}
          y={height - 4}
          textAnchor="end"
          className="fill-ns-text-muted text-[9px]"
        >
          15 min
        </text>
      </svg>
    </div>
  );
}
