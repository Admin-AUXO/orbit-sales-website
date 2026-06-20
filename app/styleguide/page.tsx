import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { BulletList } from "@/components/ui/BulletList";
import { CountUp } from "@/components/ui/CountUp";

export const metadata: Metadata = {
  title: "Style Guide (internal)",
  description: "Neurostellar Orbit design-system reference. Team use only.",
  robots: { index: false, follow: false },
};

const colorTokens = [
  { name: "--ns-bg", usage: "Page background" },
  { name: "--ns-bg-elevated", usage: "Elevated sections, footer" },
  { name: "--ns-bg-card", usage: "Cards, panels" },
  { name: "--ns-border", usage: "Borders, dividers" },
  { name: "--ns-text", usage: "Primary text" },
  { name: "--ns-text-muted", usage: "Secondary text" },
  { name: "--ns-accent", usage: "Primary CTA fill" },
  { name: "--ns-accent-hover", usage: "CTA hover" },
  { name: "--ns-on-accent", usage: "Text on accent" },
  { name: "--ns-silver", usage: "Eyebrows, metrics" },
];

const gradientTokens = [
  { name: "--ns-gradient-hero", className: "aurora-bg" },
  { name: "--ns-gradient-card", className: "premium-surface" },
];

const typeScale = [
  { label: "Display / H1", className: "text-5xl font-bold tracking-tight" },
  { label: "H2", className: "text-3xl font-bold tracking-tight" },
  { label: "H3", className: "text-xl font-semibold" },
  { label: "Lead", className: "text-lg text-ns-text-muted" },
  { label: "Body", className: "text-base text-ns-text-muted" },
  {
    label: "Eyebrow",
    className:
      "text-xs font-semibold uppercase tracking-[0.2em] text-ns-silver",
  },
];

const animations = [
  {
    name: "aurora-bg",
    type: "CSS",
    note: "Layered radial + linear gradient background. Hero, CTA band.",
  },
  {
    name: "mesh-overlay",
    type: "CSS",
    note: "Faint grid overlay over the hero aurora.",
  },
  {
    name: "premium-border",
    type: "CSS",
    note: "Gradient 1px border via mask. Featured cards.",
  },
  {
    name: "animate-marquee / -hero / -vertical",
    type: "CSS",
    note: "Infinite scroll strips; pause on hover; off under reduced-motion.",
  },
  {
    name: "hero-tiles-mask-x / -y",
    type: "CSS",
    note: "Fades scroll edges of the hero image tiles.",
  },
  {
    name: "FadeIn",
    type: "Framer Motion",
    note: "Scroll-reveal wrapper (opacity + y). Used across sections.",
  },
  {
    name: "ProblemStatement",
    type: "Framer Motion",
    note: "Scroll-pinned: one centered sentence at a time, scroll-linked opacity.",
  },
  {
    name: "ExecutiveReportTour",
    type: "IntersectionObserver",
    note: "Scroll-spy that highlights the active report chapter.",
  },
  {
    name: "CountUp",
    type: "Framer Motion",
    note: "Stat numbers count up from 0 when scrolled into view; updates textContent (no re-renders).",
  },
  {
    name: "hover-lift",
    type: "CSS",
    note: "Subtle -3px translate on hover for cards. Transform-only.",
  },
  {
    name: "sheen",
    type: "CSS",
    note: "Light sweep across a surface on hover. Use sparingly on featured cards.",
  },
];

const layouts = [
  {
    name: "Two-column split",
    note: "Copy on one side, visual on the other. lg:grid-cols-2 with gap-12–14. Used by WhatIsOrbit, ProductDemo.",
  },
  {
    name: "Card grid",
    note: "md:grid-cols-2 / lg:grid-cols-3 of Cards with FadeIn stagger (delay = i * 0.06–0.08).",
  },
  {
    name: "Pinned scroll narrative",
    note: "Tall track (h-[260–400vh]) + sticky panel; one element at a time, scroll-linked. ProblemStatement.",
  },
  {
    name: "Stat grid",
    note: "2×2 or 1×N grid of CountUp metrics with divider lines. CaseStudyHighlights.",
  },
  {
    name: "Logo wall",
    note: "Centered, wrapped, muted grayscale logos (partners/press). Equal-height, opacity-70 hover-100.",
  },
  {
    name: "Section header",
    note: "Eyebrow (ALL-CAPS) → SectionTitle → SectionDescription, max-w-2xl/3xl. SectionTypography helpers.",
  },
];

const motionPrinciples = [
  "Animate only transform and opacity. Never width/height/top/left.",
  "Everything respects prefers-reduced-motion (marquees stop, scroll sections go static, hover-lift disables).",
  "Reveal once (viewport once:true) — no replay on scroll-back.",
  "Spring-smooth scroll-linked values; ease-out for entrances (cubic-bezier 0.22,1,0.36,1).",
  "Subtle by default: ≤3px lifts, ≤300ms, low-opacity glows. Motion should amplify, not distract.",
];

const i18nNotes = [
  "html lang and og:locale set; add hreflang alternates per locale when localized routes exist.",
  "Prices via Intl.NumberFormat(currency) — never hardcode the $ symbol.",
  "Dates/numbers via Intl APIs; CountUp already uses en-US grouping (swap per locale).",
  "Keep copy in content/ + lib/*-content modules so it is translation-ready.",
  "next/font subsets fonts; add scripts (e.g. Latin + Tamil) when a locale needs them.",
  "Test RTL by flipping dir=rtl; prefer logical CSS (ps/pe, ms/me) for new layout work.",
];

function Swatch({ name, usage }: { name: string; usage: string }) {
  return (
    <div className="rounded-xl border border-ns-border bg-ns-bg-card p-3">
      <div
        className="h-14 w-full rounded-lg border border-ns-border"
        style={{ background: `var(${name})` }}
      />
      <p className="mt-2 font-mono text-xs text-ns-text">{name}</p>
      <p className="text-xs text-ns-text-muted">{usage}</p>
    </div>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-ns-border pt-10">
      <h2 className="text-xl font-semibold tracking-tight text-ns-text">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export default function StyleGuidePage() {
  return (
    <main className="min-h-screen bg-ns-bg px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-[var(--ns-max-width)] space-y-12">
        <header>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ns-silver">
            Internal reference — not indexed
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-ns-text md:text-5xl">
            Orbit Style Guide
          </h1>
          <p className="mt-3 max-w-2xl text-ns-text-muted">
            The live design system: colors, type, animations, and components.
            Tokens are defined in <code className="font-mono">styles/tokens.css</code>{" "}
            as oklch variables. Change colors there only.
          </p>
        </header>

        <Block title="Color tokens">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {colorTokens.map((t) => (
              <Swatch key={t.name} name={t.name} usage={t.usage} />
            ))}
          </div>
        </Block>

        <Block title="Gradients & surfaces">
          <div className="grid gap-4 sm:grid-cols-2">
            {gradientTokens.map((g) => (
              <div
                key={g.name}
                className={`flex h-28 items-end rounded-xl border border-ns-border p-3 ${g.className}`}
              >
                <span className="font-mono text-xs text-ns-text">{g.name}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-ns-border bg-ns-bg-card p-6">
            <p className="text-3xl font-bold tracking-tight text-ns-text">
              Track your <span className="text-gradient-brand">Self</span> like
              never before
            </p>
            <p className="mt-2 text-sm text-ns-text-muted">
              <code className="font-mono">.text-gradient-brand</code> /{" "}
              <code className="font-mono">&lt;GradientText&gt;</code> — teal→sky
              brand gradient on emphasis words. Use on one key word per heading,
              not whole sentences.
            </p>
          </div>
        </Block>

        <Block title="Typography">
          <div className="space-y-5">
            {typeScale.map((t) => (
              <div
                key={t.label}
                className="flex flex-col gap-1 border-b border-ns-border/50 pb-4 sm:flex-row sm:items-baseline sm:gap-6"
              >
                <span className="w-28 shrink-0 font-mono text-xs text-ns-text-muted">
                  {t.label}
                </span>
                <span className={`${t.className} text-ns-text`}>
                  Train your brain like you train your body.
                </span>
              </div>
            ))}
          </div>
        </Block>

        <Block title="Buttons">
          <div className="flex flex-wrap gap-4">
            <span className="inline-flex items-center justify-center rounded-full border border-ns-accent bg-ns-accent px-6 py-3 text-sm font-medium text-ns-on-accent">
              Primary
            </span>
            <span className="inline-flex items-center justify-center rounded-full border border-ns-border px-6 py-3 text-sm font-medium text-ns-text">
              Secondary
            </span>
            <span className="inline-flex items-center justify-center rounded-full border border-transparent px-6 py-3 text-sm font-medium text-ns-text-muted">
              Ghost
            </span>
          </div>
        </Block>

        <Block title="Animations & motion">
          <div className="overflow-hidden rounded-xl border border-ns-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-ns-bg-card text-ns-text">
                <tr>
                  <th className="px-4 py-3 font-semibold">Name</th>
                  <th className="px-4 py-3 font-semibold">Type</th>
                  <th className="px-4 py-3 font-semibold">Use</th>
                </tr>
              </thead>
              <tbody className="text-ns-text-muted">
                {animations.map((a) => (
                  <tr key={a.name} className="border-t border-ns-border">
                    <td className="px-4 py-3 font-mono text-xs text-ns-text">
                      {a.name}
                    </td>
                    <td className="px-4 py-3">{a.type}</td>
                    <td className="px-4 py-3">{a.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-ns-text-muted">
            All motion respects <code className="font-mono">prefers-reduced-motion</code>:
            marquees stop and scroll-linked sections fall back to static layouts.
          </p>
        </Block>

        <Block title="Engagement effects (live)">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-ns-border bg-ns-bg-card p-6 text-center">
              <CountUp
                value={20000}
                thousands
                suffix="+"
                className="text-3xl font-bold tabular-nums text-ns-text"
              />
              <p className="mt-2 text-xs text-ns-text-muted">CountUp on view</p>
            </div>
            <div className="hover-lift rounded-xl border border-ns-border bg-ns-bg-card p-6 text-center">
              <p className="text-sm text-ns-text">Hover me</p>
              <p className="mt-2 text-xs text-ns-text-muted">.hover-lift</p>
            </div>
            <div className="sheen rounded-xl border border-ns-border bg-ns-bg-card p-6 text-center">
              <p className="text-sm text-ns-text">Hover me</p>
              <p className="mt-2 text-xs text-ns-text-muted">.sheen</p>
            </div>
          </div>
          <ul className="mt-6 space-y-2 text-sm text-ns-text-muted">
            {motionPrinciples.map((p) => (
              <li key={p} className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ns-silver" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </Block>

        <Block title="Layout & UI primitives">
          <div className="space-y-6">
            <div className="rounded-xl border border-ns-border bg-ns-bg-card p-6">
              <p className="text-sm font-semibold text-ns-text">
                Section / Container / SectionGrid
              </p>
              <p className="mt-1.5 text-sm text-ns-text-muted">
                <code className="font-mono">&lt;Section&gt;</code> wraps page blocks
                with the standard <code className="font-mono">py-20 lg:py-24</code>{" "}
                rhythm and a max-width <code className="font-mono">&lt;Container&gt;</code>.
                Pass <code className="font-mono">bg</code> /{" "}
                <code className="font-mono">className</code> for surface color,{" "}
                <code className="font-mono">ariaLabelledby</code> for the heading
                id. <code className="font-mono">&lt;SectionGrid&gt;</code> standardizes
                the responsive card grids. Don&apos;t hand-roll{" "}
                <code className="font-mono">&lt;section className=&quot;py-...&quot;&gt;</code>.
              </p>
            </div>
            <div className="rounded-xl border border-ns-border bg-ns-bg-card p-6">
              <p className="text-sm font-semibold text-ns-text">
                SectionHeading
              </p>
              <p className="mt-1.5 text-sm text-ns-text-muted">
                The canonical eyebrow → title → description block. Use it instead
                of assembling <code className="font-mono">Eyebrow</code> /{" "}
                <code className="font-mono">SectionTitle</code> by hand. Headings
                with a <code className="font-mono">&lt;GradientText&gt;</code> word
                stay hand-assembled (string-only title).
              </p>
            </div>
            <div className="rounded-xl border border-ns-border bg-ns-bg-card p-6">
              <p className="mb-3 text-sm font-semibold text-ns-text">Badge</p>
              <div className="flex flex-wrap gap-3">
                <Badge>Default</Badge>
                <Badge variant="accent">Accent</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="tag">Tag</Badge>
              </div>
            </div>
            <div className="rounded-xl border border-ns-border bg-ns-bg-card p-6">
              <p className="mb-3 text-sm font-semibold text-ns-text">
                BulletList
              </p>
              <BulletList
                color="teal"
                items={[
                  "One shared dot-list primitive for proof points and feature lists.",
                  "Pass color: silver | accent | teal.",
                ]}
              />
            </div>
            <div className="rounded-xl border border-ns-border bg-ns-bg-card p-6">
              <p className="text-sm font-semibold text-ns-text">
                Buttons share one variant map
              </p>
              <p className="mt-1.5 text-sm text-ns-text-muted">
                <code className="font-mono">Button</code> (links) and{" "}
                <code className="font-mono">BookDemoButton</code> (Calendly) both
                read <code className="font-mono">lib/button-variants.ts</code> —
                primary / secondary / ghost stay in sync.
              </p>
            </div>
          </div>
        </Block>

        <Block title="Common layouts">
          <div className="grid gap-4 sm:grid-cols-2">
            {layouts.map((l) => (
              <div
                key={l.name}
                className="rounded-xl border border-ns-border bg-ns-bg-card p-5"
              >
                <p className="font-semibold text-ns-text">{l.name}</p>
                <p className="mt-1.5 text-sm text-ns-text-muted">{l.note}</p>
              </div>
            ))}
          </div>
        </Block>

        <Block title="Internationalization">
          <ul className="space-y-2 text-sm text-ns-text-muted">
            {i18nNotes.map((n) => (
              <li key={n} className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ns-silver" />
                <span>{n}</span>
              </li>
            ))}
          </ul>
        </Block>
      </div>
    </main>
  );
}
