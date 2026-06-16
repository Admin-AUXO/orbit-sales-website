"use client";

import { useEffect, useRef, useState } from "react";

const METRICS = [
  { label: "Focus",     value: "91", unit: "%", accent: "rgba(0,210,175,0.85)"   },
  { label: "Cog. Load", value: "34", unit: "%", accent: "rgba(130,160,255,0.85)" },
  { label: "Recovery",  value: "78", unit: "%", accent: "rgba(200,180,255,0.85)" },
];

// Lightweight 2D noise — no deps
function fbm(x: number, y: number, t: number) {
  return (
    Math.sin(x * 2.1 + t * 0.8) * Math.cos(y * 1.7 + t * 0.55) * 0.5 +
    Math.sin(x * 4.4 + t * 1.5) * Math.cos(y * 3.2 + t * 0.85) * 0.3 +
    Math.sin(x * 0.9 + t * 0.3) * 0.2
  );
}

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  lane: 0 | 1 | 2;
  size: number;
  alpha: number;
  speed: number;
  noiseOff: number;
  trail: { x: number; y: number }[];
}

function spawnParticle(W: number, H: number, startX?: number): Particle {
  return {
    x: startX ?? W * Math.random() * 0.14,
    y: H * (0.18 + Math.random() * 0.64),
    vx: 0.35 + Math.random() * 0.5,
    vy: (Math.random() - 0.5) * 0.3,
    lane: (Math.floor(Math.random() * 3)) as 0 | 1 | 2,
    size: 0.9 + Math.random() * 1.7,
    alpha: 0.45 + Math.random() * 0.55,
    speed: 0.75 + Math.random() * 0.75,
    noiseOff: Math.random() * 100,
    trail: [],
  };
}

export function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const mouse        = useRef({ x: 0.5, y: 0.5 });
  const lerped       = useRef({ x: 0.5, y: 0.5 });
  const rafId        = useRef(0);
  const [labelsIn, setLabelsIn] = useState(false);

  useEffect(() => {
    const canvas    = canvasRef.current!;
    const container = containerRef.current!;
    const ctx       = canvas.getContext("2d")!;
    const dpr       = Math.min(window.devicePixelRatio || 1, 2);

    let W = 0, H = 0;

    function resize() {
      const r = container.getBoundingClientRect();
      W = r.width; H = r.height;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      canvas.width  = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width  = W + "px";
      canvas.style.height = H + "px";
      ctx.scale(dpr, dpr);
    }
    resize();
    window.addEventListener("resize", resize);

    // Load product image
    const img = new Image();
    img.src = "/brand/device/Headmodel_Orbit.webp";

    // Particle pool — scatter on init so the scene feels alive from frame 1
    const POOL = 210;
    const particles: Particle[] = Array.from({ length: POOL }, () =>
      spawnParticle(W, H, W * Math.random() * 0.82),
    );

    let t         = 0;
    let labelsFired = false;

    function frame() {
      t += 0.014;

      // Smooth mouse
      const lx = lerped.current;
      lx.x += (mouse.current.x - lx.x) * 0.055;
      lx.y += (mouse.current.y - lx.y) * 0.055;
      const mx = lx.x, my = lx.y;

      // Parallax magnitudes
      const IP = { x: (mx - 0.5) * 22, y: (my - 0.5) * 12 }; // image layer
      const PP = { x: (mx - 0.5) * -8, y: (my - 0.5) * -5  }; // particle layer (opposite)

      // Layout — derived each frame so resize is seamless
      const IMG_H  = H * 0.94;
      const IMG_W  = IMG_H * 0.88;
      const IMG_CX = W * 0.47;
      const IMG_CY = H * 0.50;
      const IX     = IMG_CX - IMG_W * 0.46 + IP.x;
      const IY     = IMG_CY - IMG_H * 0.50 + IP.y;

      // Zone boundaries
      const Z_CHAOS  = W * 0.26;   // end of chaos
      const Z_DEVEND = W * 0.60;   // end of device / start of stream
      const Z_LABEL  = W * 0.86;   // where labels sit

      // Lane centres (fractions of H)
      const LANE_Y = [H * 0.285, H * 0.500, H * 0.715] as const;

      // LED world position (on the headband, roughly 40% down image)
      const LED_X = IX + IMG_W * 0.41;
      const LED_Y = IY + IMG_H * 0.41;

      // ── BACKGROUND ────────────────────────────────────────────────────
      ctx.fillStyle = "#00000c";
      ctx.fillRect(0, 0, W, H);

      // Soft atmospheric glow centred on device
      const atm = ctx.createRadialGradient(IMG_CX + IP.x * 0.2, IMG_CY, 0, IMG_CX + IP.x * 0.2, IMG_CY, H * 0.65);
      atm.addColorStop(0, "rgba(14,18,38,0.85)");
      atm.addColorStop(1, "transparent");
      ctx.fillStyle = atm;
      ctx.fillRect(0, 0, W, H);

      // ── PRODUCT IMAGE ─────────────────────────────────────────────────
      if (img.complete && img.naturalWidth) {
        ctx.save();
        ctx.globalAlpha = 0.96;
        ctx.drawImage(img, IX, IY, IMG_W, IMG_H);
        ctx.globalAlpha = 1;

        // Fade left edge → chaos particles merge in
        const lf = ctx.createLinearGradient(IX, 0, IX + IMG_W * 0.42, 0);
        lf.addColorStop(0,   "rgba(0,0,12,1)");
        lf.addColorStop(0.55, "rgba(0,0,12,0.15)");
        lf.addColorStop(1,   "transparent");
        ctx.fillStyle = lf;
        ctx.fillRect(0, 0, W, H);

        // Fade right edge → data streams emerge cleanly
        const rf = ctx.createLinearGradient(W * 0.64, 0, W * 0.80, 0);
        rf.addColorStop(0, "transparent");
        rf.addColorStop(1, "rgba(0,0,12,0.96)");
        ctx.fillStyle = rf;
        ctx.fillRect(W * 0.64, 0, W * 0.36, H);

        ctx.restore();

        // Cyan LED pulse — matches the physical LED on the headband
        const pulse = 0.5 + 0.5 * Math.sin(t * 2.15);
        const ledG  = ctx.createRadialGradient(LED_X, LED_Y, 0, LED_X, LED_Y, 55 + pulse * 22);
        ledG.addColorStop(0,   `rgba(0,190,225,${0.28 + pulse * 0.14})`);
        ledG.addColorStop(0.45,`rgba(0,155,205,${0.07 + pulse * 0.05})`);
        ledG.addColorStop(1,   "transparent");
        ctx.fillStyle = ledG;
        ctx.fillRect(0, 0, W, H);
      }

      // ── LANE GUIDE LINES (very subtle, right half only) ───────────────
      ctx.save();
      ctx.globalCompositeOperation = "screen";
      LANE_Y.forEach((ly) => {
        const lg = ctx.createLinearGradient(Z_DEVEND, 0, Z_LABEL, 0);
        lg.addColorStop(0,   "transparent");
        lg.addColorStop(0.3, "rgba(200,215,255,0.035)");
        lg.addColorStop(0.8, "rgba(200,215,255,0.055)");
        lg.addColorStop(1,   "transparent");
        ctx.strokeStyle = lg;
        ctx.lineWidth   = 1;
        ctx.beginPath();
        ctx.moveTo(Z_DEVEND, ly);
        ctx.lineTo(Z_LABEL,  ly);
        ctx.stroke();
      });
      ctx.restore();

      // ── PARTICLES ─────────────────────────────────────────────────────
      ctx.save();
      ctx.globalCompositeOperation = "screen";

      for (const p of particles) {
        const xf = p.x / W;

        if (p.x < Z_CHAOS) {
          // CHAOS — fbm noise drift, gentle rightward bias
          const n = fbm(p.x * 0.007 + p.noiseOff, p.y * 0.007, t);
          p.vx += (0.32 - p.vx) * 0.045 + n * 0.011;
          p.vy += n * 0.024;
          p.vy *= 0.95;
        } else if (p.x < Z_DEVEND) {
          // CONVERGE — pull toward LED sensor point
          const prog = (p.x - Z_CHAOS) / (Z_DEVEND - Z_CHAOS);
          p.vx += (0.72 - p.vx) * 0.05;
          p.vy += (LED_Y - p.y) * 0.052 * prog;
          p.vy *= 0.91;
        } else {
          // STREAM — snap into lane
          const targetY = LANE_Y[p.lane];
          p.vx += (0.88 - p.vx) * 0.05;
          p.vy += (targetY - p.y) * 0.10;
          p.vy *= 0.87;
        }

        p.x += p.vx * p.speed + PP.x * 0.008;
        p.y += p.vy;

        // Respawn off right edge
        if (p.x > W + 6) {
          Object.assign(p, spawnParticle(W, H));
          continue;
        }

        // Trail storage
        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > 13) p.trail.shift();

        // Colour — white-blue → cyan burst at sensor → clean white out
        let r = 188, g = 198, b = 235;
        if (p.x >= Z_CHAOS && p.x < Z_DEVEND) {
          const bl = (p.x - Z_CHAOS) / (Z_DEVEND - Z_CHAOS);
          // Peak cyan when passing through device sensor zone (bl ≈ 0.5)
          const cyanAmt = Math.max(0, 1 - Math.abs(bl - 0.5) * 3.2);
          r = Math.round(r * (1 - cyanAmt) + 0   * cyanAmt);
          g = Math.round(g * (1 - cyanAmt) + 190 * cyanAmt);
          b = Math.round(b * (1 - cyanAmt) + 220 * cyanAmt);
        } else if (p.x >= Z_DEVEND) {
          r = 218; g = 226; b = 252;
        }

        // Fade-in from left, fade-out near label
        const fadeIn  = Math.min(xf / 0.055, 1);
        const fadeOut = xf > 0.80 ? Math.max(0, (0.88 - xf) / 0.08) : 1;
        const a = p.alpha * fadeIn * fadeOut;
        if (a <= 0.01) continue;

        // Trail — thins out and dims toward head
        if (p.trail.length > 2) {
          for (let i = 1; i < p.trail.length; i++) {
            const tf = i / p.trail.length;
            ctx.globalAlpha = a * tf * 0.32;
            ctx.strokeStyle = `rgb(${r},${g},${b})`;
            ctx.lineWidth   = p.size * tf * 0.65;
            ctx.lineCap     = "round";
            ctx.beginPath();
            ctx.moveTo(p.trail[i - 1].x, p.trail[i - 1].y);
            ctx.lineTo(p.trail[i].x,     p.trail[i].y);
            ctx.stroke();
          }
        }

        // Soft glow halo (additive — overlapping particles bloom together)
        const gR = p.size * (p.x >= Z_CHAOS && p.x < Z_DEVEND ? 3.2 : 2.2);
        const pg = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, gR * 3.5);
        pg.addColorStop(0, `rgba(${r},${g},${b},${a * 0.45})`);
        pg.addColorStop(1, "transparent");
        ctx.globalAlpha = 1;
        ctx.fillStyle   = pg;
        ctx.beginPath();
        ctx.arc(p.x, p.y, gR * 3.5, 0, Math.PI * 2);
        ctx.fill();

        // Hard core
        ctx.globalAlpha = a;
        ctx.fillStyle   = `rgb(${r},${g},${b})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();

      // ── EDGE VIGNETTES ────────────────────────────────────────────────
      const lv = ctx.createLinearGradient(0, 0, W * 0.055, 0);
      lv.addColorStop(0, "rgba(0,0,12,1)");
      lv.addColorStop(1, "transparent");
      ctx.fillStyle = lv;
      ctx.fillRect(0, 0, W * 0.055, H);

      // ── TRIGGER LABELS ────────────────────────────────────────────────
      if (!labelsFired && t > 1.4) {
        labelsFired = true;
        setLabelsIn(true);
      }

      rafId.current = requestAnimationFrame(frame);
    }

    rafId.current = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-[340px] w-full overflow-hidden rounded-3xl premium-border sm:h-[400px] lg:h-[480px]"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mouse.current.x = (e.clientX - r.left) / r.width;
        mouse.current.y = (e.clientY - r.top) / r.height;
      }}
      onMouseLeave={() => { mouse.current = { x: 0.5, y: 0.5 }; }}
    >
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Metric labels — HTML so Manrope renders crisp */}
      <div className="pointer-events-none absolute right-4 top-1/2 flex -translate-y-1/2 flex-col gap-5 sm:right-5 sm:gap-6">
        {METRICS.map((m, i) => (
          <div
            key={m.label}
            className="flex flex-col items-end"
            style={{
              opacity:   labelsIn ? 1 : 0,
              transform: labelsIn ? "translateX(0)" : "translateX(10px)",
              transition: `opacity 0.7s ease ${i * 0.2}s, transform 0.7s ease ${i * 0.2}s`,
            }}
          >
            <span className="mb-0.5 text-[8px] font-bold uppercase tracking-[0.22em] text-white/40">
              {m.label}
            </span>
            <div className="flex items-baseline gap-0.5">
              <span
                className="font-extrabold tabular-nums leading-none text-white"
                style={{ fontSize: "clamp(17px, 2.2vw, 24px)" }}
              >
                {m.value}
              </span>
              <span className="text-[9px] font-semibold text-white/28">{m.unit}</span>
            </div>
            {/* Thin accent line connecting stream to label */}
            <div
              className="mt-1.5 h-px w-9"
              style={{ background: `linear-gradient(to right, transparent, ${m.accent})` }}
            />
          </div>
        ))}
      </div>

      {/* Bottom zone annotation */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-5 pb-4 pt-10">
        <div className="flex justify-between text-[8px] font-bold uppercase tracking-[0.2em] text-white/22">
          <span>Raw Signal</span>
          <span className="text-white/40">Orbit</span>
          <span>Your Data</span>
        </div>
      </div>
    </div>
  );
}
