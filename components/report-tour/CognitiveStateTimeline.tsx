const N = 64;
const PLOT = { x0: 64, x1: 784, y0: 28, y1: 300 };
const W = PLOT.x1 - PLOT.x0;
const H = PLOT.y1 - PLOT.y0;

function seeded(seed: number) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
}

function series(seed: number, base: number, swing: number) {
  const rng = seeded(seed);
  const points: number[] = [];
  let v = base;
  for (let i = 0; i < N; i++) {
    v += (rng() - 0.5) * swing;
    v = Math.max(8, Math.min(58, v * 0.82 + base * 0.18));
    points.push(v);
  }
  return points;
}

const STATES = [
  { key: "engaged", label: "Engaged", token: "var(--ns-chart-2)" },
  { key: "flow", label: "Flow", token: "var(--ns-chart-1)" },
  { key: "fragmented", label: "Fragmented", token: "var(--ns-silver)" },
  { key: "idle", label: "Idle", token: "var(--ns-chart-grid)" },
  { key: "transition", label: "Transition", token: "var(--ns-border)" },
  { key: "signal", label: "Poor signal", token: "var(--ns-text-muted)" },
] as const;

function bands() {
  const rng = seeded(91);
  const out: { from: number; to: number; state: number }[] = [];
  let i = 0;
  let prev = -1;
  while (i < N) {
    const span = 2 + Math.floor(rng() * 5);
    let state = Math.floor(rng() * STATES.length);
    if (state === prev) state = (state + 1) % STATES.length;
    prev = state;
    out.push({ from: i, to: Math.min(i + span, N - 1), state });
    i += span;
  }
  return out;
}

const intensity = series(7, 36, 22);
const efficiency = series(23, 26, 18);
const segments = bands();

const xAt = (i: number) => PLOT.x0 + (i / (N - 1)) * W;
const yAt = (v: number) => PLOT.y1 - (v / 100) * H;
const avg = (a: number[]) => a.reduce((s, n) => s + n, 0) / a.length;

function path(values: number[]) {
  return values.map((v, i) => `${i === 0 ? "M" : "L"}${xAt(i).toFixed(1)} ${yAt(v).toFixed(1)}`).join(" ");
}

export function CognitiveStateTimeline() {
  const intensityAvg = avg(intensity);
  const efficiencyAvg = avg(efficiency);

  return (
    <figure className="overflow-hidden rounded-xl border border-ns-border bg-ns-bg-elevated p-4 sm:p-5">
      <div className="mb-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ns-text-muted">
        <span className="inline-flex items-center gap-2">
          <span className="h-0.5 w-5 rounded-full" style={{ background: "var(--ns-chart-1)" }} />
          Intensity
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-0.5 w-5 rounded-full" style={{ background: "var(--ns-chart-2)" }} />
          Efficiency
        </span>
        {STATES.map((s) => (
          <span key={s.key} className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-[3px]" style={{ background: s.token, opacity: 0.55 }} />
            {s.label}
          </span>
        ))}
      </div>

      <svg
        viewBox="0 0 800 332"
        className="h-auto w-full"
        role="img"
        aria-label="Cognitive state timeline: Intensity and Efficiency scores over a 15-minute session, segmented by detected cognitive state (Engaged, Flow, Fragmented, Idle, Transition, Poor signal)."
      >
        {segments.map((seg, i) => (
          <rect
            key={i}
            x={xAt(seg.from)}
            y={PLOT.y0}
            width={Math.max(1, xAt(seg.to) - xAt(seg.from))}
            height={H}
            fill={STATES[seg.state].token}
            opacity={0.14}
          />
        ))}

        {[0, 25, 50, 75, 100].map((g) => (
          <g key={g}>
            <line
              x1={PLOT.x0}
              x2={PLOT.x1}
              y1={yAt(g)}
              y2={yAt(g)}
              stroke="var(--ns-chart-grid)"
              strokeWidth={1}
              strokeDasharray="3 4"
              opacity={0.5}
            />
            <text x={PLOT.x0 - 12} y={yAt(g) + 4} textAnchor="end" fontSize={12} fill="var(--ns-text-muted)">
              {g}
            </text>
          </g>
        ))}

        <line
          x1={PLOT.x0}
          x2={PLOT.x1}
          y1={yAt(intensityAvg)}
          y2={yAt(intensityAvg)}
          stroke="var(--ns-chart-1)"
          strokeWidth={1}
          strokeDasharray="2 5"
          opacity={0.6}
        />
        <line
          x1={PLOT.x0}
          x2={PLOT.x1}
          y1={yAt(efficiencyAvg)}
          y2={yAt(efficiencyAvg)}
          stroke="var(--ns-chart-2)"
          strokeWidth={1}
          strokeDasharray="2 5"
          opacity={0.6}
        />

        <path d={path(intensity)} fill="none" stroke="var(--ns-chart-1)" strokeWidth={2.2} strokeLinejoin="round" />
        <path d={path(efficiency)} fill="none" stroke="var(--ns-chart-2)" strokeWidth={2.2} strokeLinejoin="round" />

        {["0", "5", "10", "15"].map((label, i) => (
          <text
            key={label}
            x={PLOT.x0 + (i / 3) * W}
            y={PLOT.y1 + 22}
            textAnchor={i === 0 ? "start" : i === 3 ? "end" : "middle"}
            fontSize={12}
            fill="var(--ns-text-muted)"
          >
            {label} min
          </text>
        ))}
      </svg>
    </figure>
  );
}
