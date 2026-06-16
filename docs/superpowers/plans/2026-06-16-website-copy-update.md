# Website Copy Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite all homepage sections and key supporting pages to lead with sales value first, with updated metrics, a new ProductDemo section, marquee trust strip, price shown at $250, and no competitor names.

**Architecture:** Pure copy/content update — no new routes or data models. One new component (`ProductDemo`). One CSS animation added to globals.css. Content JSON files updated in place. All image slots use `PlaceholderVisual` (design team will swap with SVGs).

**Tech Stack:** Next.js 16, React 19, Tailwind CSS v4, TypeScript, Framer Motion (already in use via `FadeIn`)

> **Before writing any code:** Read `node_modules/next/dist/docs/` for any API you're unfamiliar with — this Next.js version has breaking changes from earlier releases.

---

## File Map

| Action | File | What changes |
|---|---|---|
| Modify | `app/globals.css` | Add `@keyframes marquee` and `.animate-marquee` utility |
| Modify | `components/sections/TrustStrip.tsx` | Replace partner names with validation stats; add marquee scroll |
| Modify | `components/sections/Hero.tsx` | New headline, subhead, price in CTA, micro-copy |
| Modify | `components/sections/WhatIsOrbit.tsx` | New headline, subhead, reframed 4 differentiators |
| Create | `components/sections/ProductDemo.tsx` | New section: real session report placeholder |
| Modify | `app/page.tsx` | Import and insert `ProductDemo` between `WhatIsOrbit` and `HowItWorks` |
| Modify | `components/sections/HowItWorks.tsx` | Reframe step labels + descriptions |
| Modify | `components/sections/UseCases.tsx` | Pain-first copy, add third persona (Knowledge Workers) |
| Modify | `components/sections/TeamSignal.tsx` | Reframe as science credibility anchor with proof points |
| Modify | `components/sections/CTABand.tsx` | New headline, price in CTA, WhatsApp secondary, micro-copy |
| Modify | `content/faq.json` | Full reorder + rewrite — objection-first |
| Modify | `content/case-studies/finance-director.json` | Data-first quote + updated metric label |
| Modify | `content/case-studies/tech-founder.json` | Data-first quote |
| Modify | `content/trials/athlete-focus-trial-2025.json` | Updated headlineResult wording |
| Modify | `content/trials/executive-cognitive-load-2025.json` | Updated headlineResult wording |
| Modify | `app/buy/page.tsx` | Replace "Launch pricing soon" with $250, add what's included list |

---

## Task 1: Update FAQ content — objection-first reorder

**Files:**
- Modify: `content/faq.json`

- [ ] **Step 1: Replace the full file contents**

```json
[
  {
    "question": "Do I need to wear Orbit all day?",
    "answer": "No. Orbit is designed for intentional 10–15 minute sessions — during deep work, a training block, or recovery. That's what makes the data meaningful: you know exactly what you were doing when the scores were captured."
  },
  {
    "question": "How is this different from physical trackers or step counters?",
    "answer": "Physical trackers measure your body — steps, heart rate, sleep stages. Orbit measures your brain's cognitive state during active sessions using EEG, giving you metrics no physical tracker can: focus depth, mental agility, and cognitive endurance. Think of it as the layer that explains why your body metrics look the way they do."
  },
  {
    "question": "Will Orbit send signals to or stimulate my brain?",
    "answer": "No. Orbit is completely passive — it only reads signals from your brain and body. No stimulation, no emissions. It listens. That's it."
  },
  {
    "question": "How long before I see results?",
    "answer": "Most users see meaningful trend data within 3–4 weeks of consistent sessions. Your performance coach will flag the first patterns within the first two weeks."
  },
  {
    "question": "What does Orbit cost and what's included?",
    "answer": "Orbit is $250. This includes the headband device, access to the Orbit app, and your performance coaching program — with weekly reviews from a certified coach backed by the Neurostellar neuroscience team."
  },
  {
    "question": "What is Neurostellar Orbit?",
    "answer": "Neurostellar Orbit is a smart headband that measures your brain and body signals during intentional 10–15 minute sessions. After each session you receive an instant cognitive report covering focus depth, mental agility, and cognitive endurance. Over time, trend reports reveal your performance patterns — and a dedicated performance coach builds a personalised improvement plan backed by our in-house neuroscience team."
  },
  {
    "question": "Who is Orbit designed for?",
    "answer": "Orbit is built for high performers — competitive athletes who need a mental edge under pressure, executives who need sustained clarity through demanding work, and anyone who already tracks their physical performance and wants the same rigour applied to their mind."
  },
  {
    "question": "What does the report include?",
    "answer": "After each session you get scores for cognitive speed, agility, and endurance — plus behavioural metrics like deep work duration, intrusion rate, and recovery percentage. As you build a session history, trend reports surface when you're at your cognitive best and what's costing you."
  },
  {
    "question": "Is Neurostellar Orbit safe?",
    "answer": "Yes. Orbit is non-invasive and passively reads your brain and body signals without emitting any stimulation. It is tested for everyday use with encrypted data storage and full privacy protection. Your cognitive data belongs to you — it is never sold or shared with third parties."
  },
  {
    "question": "How do I get support?",
    "answer": "Reach us at support@neuro-stellar.com or call +91 78452 16763. Our team is happy to answer product, trial, and purchase questions."
  }
]
```

- [ ] **Step 2: Verify JSON is valid**

Run:
```bash
node -e "require('./content/faq.json'); console.log('FAQ JSON valid')"
```
Expected: `FAQ JSON valid`

---

## Task 2: Update case study quotes to data-first format

**Files:**
- Modify: `content/case-studies/finance-director.json`
- Modify: `content/case-studies/tech-founder.json`

- [ ] **Step 1: Update finance-director.json**

```json
{
  "persona": "executive",
  "name": "James, Finance Director",
  "headline": "Protected cognitive endurance during quarter-end",
  "challenge": "Quarter-end reporting demanded sustained analytical focus under time pressure. James frequently hit cognitive overload in late afternoons, when accuracy mattered most.",
  "intervention": "Used Orbit during analytical work sessions for 6 weeks. Identified personal low-focus windows and scheduled complex modelling in morning blocks.",
  "results": [
    {
      "metric": "Afternoon focus consistency",
      "before": "54%",
      "after": "78%",
      "change": "+44%"
    }
  ],
  "quote": "After 6 weeks, my afternoon focus consistency went from 54% to 78%. I stopped scheduling complex modelling for late afternoons — that was when Orbit showed my brain consistently dropped off.",
  "photo": "/brand/images/case-study-finance.jpg",
  "featured": false
}
```

- [ ] **Step 2: Update tech-founder.json**

```json
{
  "persona": "executive",
  "name": "Sarah, Tech Founder & CEO",
  "headline": "Clearer decisions through back-to-back leadership days",
  "challenge": "Running a high-growth startup meant constant context-switching between investor calls, product reviews, and team leadership. Sarah struggled to protect deep work time and recognise early burnout signals.",
  "intervention": "Wore Orbit during morning strategy blocks and back-to-back meeting days. Used cognitive load patterns to restructure her calendar around peak focus windows.",
  "results": [
    {
      "metric": "Deep work block consistency",
      "before": "3 days/week",
      "after": "5 days/week",
      "change": "+67%"
    },
    {
      "metric": "Self-reported decision clarity",
      "before": "6.2/10",
      "after": "8.4/10",
      "change": "+35%"
    }
  ],
  "quote": "My deep work blocks went from 3 days a week to 5. The data showed my brain was sharpest between 9–11 AM — so I ring-fenced that time and stopped taking calls before noon.",
  "photo": "/brand/images/case-study-executive.jpg",
  "trialRef": "executive-cognitive-load-2025",
  "featured": true
}
```

- [ ] **Step 3: Verify JSON is valid**

Run:
```bash
node -e "require('./content/case-studies/finance-director.json'); require('./content/case-studies/tech-founder.json'); console.log('Case study JSON valid')"
```
Expected: `Case study JSON valid`

---

## Task 3: Update trial headline results

**Files:**
- Modify: `content/trials/athlete-focus-trial-2025.json`
- Modify: `content/trials/executive-cognitive-load-2025.json`

- [ ] **Step 1: Update athlete trial**

```json
{
  "slug": "athlete-focus-trial-2025",
  "title": "Athlete Focus & Recovery Trial",
  "partner": "Elite Sports Performance Lab",
  "duration": "8 weeks",
  "cohort": "24 competitive athletes across endurance and skill sports",
  "method": "Participants used Orbit during training and competition prep while tracking focus duration and recovery patterns.",
  "headlineResult": "76% improved sustained focus duration over 8 weeks",
  "status": "completed"
}
```

- [ ] **Step 2: Update executive trial**

```json
{
  "slug": "executive-cognitive-load-2025",
  "title": "Executive Cognitive Load Study",
  "partner": "Internal + Executive Wellness Partners",
  "duration": "6 weeks",
  "cohort": "18 C-suite and senior leaders across tech and finance",
  "method": "Leaders wore Orbit during high-stakes work sessions to measure cognitive load patterns and schedule optimisation.",
  "headlineResult": "87% of participants reported clearer awareness of their peak cognitive focus window",
  "status": "completed"
}
```

- [ ] **Step 3: Verify JSON is valid**

Run:
```bash
node -e "require('./content/trials/athlete-focus-trial-2025.json'); require('./content/trials/executive-cognitive-load-2025.json'); console.log('Trial JSON valid')"
```
Expected: `Trial JSON valid`

---

## Task 4: Add marquee animation to globals.css

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Append keyframe + utility class to globals.css**

Add the following at the bottom of `app/globals.css`:

```css
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  animation: marquee 28s linear infinite;
  will-change: transform;
}

.animate-marquee:hover {
  animation-play-state: paused;
}
```

---

## Task 5: Update TrustStrip — real stats + marquee

**Files:**
- Modify: `components/sections/TrustStrip.tsx`

- [ ] **Step 1: Replace the full component**

```tsx
import { FadeIn } from "@/components/ui/FadeIn";

const stats = [
  "400+ hours of validated cognitive data",
  "500+ beta users tracked",
  "3+ years of R&D at IIT Madras",
  "Peer-reviewed research published 2025",
  "EEG + PPG validated against research-grade lab equipment",
  "29 subjects · 600+ recordings · p < 0.001",
];

export function TrustStrip() {
  return (
    <section
      id="trust"
      aria-labelledby="trust-heading"
      className="border-y border-ns-border bg-ns-bg-elevated py-10 overflow-hidden"
    >
      <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
        <FadeIn>
          <h2 id="trust-heading" className="sr-only">
            Research validation
          </h2>
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.22em] text-ns-text-muted">
            Built on evidence, not wellness claims.
          </p>
        </FadeIn>
      </div>

      {/* Marquee — full-bleed, overflows max-width container */}
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee gap-0">
          {/* Render items twice for seamless loop */}
          {[...stats, ...stats].map((stat, i) => (
            <span
              key={i}
              className="inline-flex items-center whitespace-nowrap px-8 text-sm text-ns-text-muted/70"
            >
              {stat}
              <span className="ml-8 text-ns-border" aria-hidden>·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Run dev server and visually verify**

Run: `npm run dev`

Open http://localhost:3000 and confirm:
- Label "Built on evidence, not wellness claims." appears above the strip
- Six stats scroll continuously left in a loop
- Scrolling pauses on hover
- No partner names visible

---

## Task 6: Update Hero — new copy and price CTA

**Files:**
- Modify: `components/sections/Hero.tsx`

- [ ] **Step 1: Replace the full component**

```tsx
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[92vh] items-center overflow-hidden -mt-16 lg:-mt-20"
    >
      <div className="absolute inset-0 aurora-bg" />
      <div className="absolute inset-0 mesh-overlay opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,var(--ns-glow-strong),transparent_50%)]" />

      <div className="relative mx-auto w-full max-w-[var(--ns-max-width)] px-6 py-20 lg:px-8 lg:py-28">
        <FadeIn>
          <p className="mb-4 inline-block rounded-full border border-ns-border bg-ns-accent-muted px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-ns-silver">
            Neurostellar Orbit™
          </p>
          <h1
            id="hero-heading"
            className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-ns-text md:text-6xl lg:text-[4.25rem]"
          >
            Train your brain like you train your body.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ns-text-muted md:text-xl">
            Orbit gives your brain its first real metrics — cognitive speed,
            agility, and endurance. Ten minutes of data. A lifetime of better
            decisions.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/buy">Buy Orbit — $250</Button>
            <Button href="/demo" variant="secondary">
              Book a Demo
            </Button>
          </div>
          <p className="mt-5 text-xs text-ns-text-muted/60">
            Free shipping&nbsp;·&nbsp;400+ hours of validated cognitive data&nbsp;·&nbsp;IIT Madras R&amp;D
          </p>
        </FadeIn>

        {/* IMAGE PLACEHOLDER — Orbit headband on a real person during a work session */}
        {/* Replace this comment with <Image> once SVG asset is ready */}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Visually verify**

Confirm at http://localhost:3000:
- Headline reads "Train your brain like you train your body."
- Subhead mentions cognitive speed, agility, endurance
- Primary button reads "Buy Orbit — $250"
- Micro-copy line is visible below buttons
- No rupee symbol anywhere on the page

---

## Task 7: Update WhatIsOrbit — outcome-first copy

**Files:**
- Modify: `components/sections/WhatIsOrbit.tsx`

- [ ] **Step 1: Replace the full component**

```tsx
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { brandAssets } from "@/lib/brand";

const differentiators = [
  {
    label: "You control when it captures",
    body: "You choose the session — so every score has context. This isn't a physical tracker running in the background.",
  },
  {
    label: "In 10 minutes, you know",
    body: "Cognitive speed, agility, endurance, and deep work patterns — ready before your next meeting.",
  },
  {
    label: "Weeks of sessions reveal your peak window",
    body: "When is your brain sharpest? Orbit tells you — so you can protect that time and use it for what matters.",
  },
  {
    label: "A coach turns data into a plan",
    body: "Your performance coach reviews your sessions weekly and builds a protocol — backed by the Neurostellar neuroscience team.",
  },
];

export function WhatIsOrbit() {
  return (
    <section
      id="what-is-orbit"
      aria-labelledby="what-is-orbit-heading"
      className="py-24 md:py-32"
    >
      <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* IMAGE PLACEHOLDER — Orbit device front-view, clean and premium */}
          {/* Replace the div below with <Image> once SVG asset is ready */}
          <FadeIn>
            <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-3xl premium-border">
              <div className="absolute inset-0 aurora-bg opacity-60" />
              <Image
                src={brandAssets.device.front}
                alt="Neurostellar Orbit — front view"
                fill
                className="object-contain p-8"
                sizes="(max-width: 1024px) 80vw, 40vw"
              />
            </div>
          </FadeIn>

          {/* Text */}
          <FadeIn delay={0.1}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-ns-accent">
              What is Orbit?
            </p>
            <h2
              id="what-is-orbit-heading"
              className="text-3xl font-extrabold tracking-tight text-ns-text md:text-4xl"
            >
              Your brain has been performing blind. Orbit changes that.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ns-text-muted">
              Orbit is a smart headband that measures your brain and body
              signals during intentional 10–15 minute sessions. After each
              session you get an instant cognitive report. Over weeks, you see
              exactly when you peak — and what's costing you.
            </p>

            <ul className="mt-10 space-y-6">
              {differentiators.map((d) => (
                <li key={d.label} className="flex gap-4">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-ns-accent" />
                  <div>
                    <p className="text-sm font-semibold text-ns-text">{d.label}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-ns-text-muted">{d.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
```

---

## Task 8: Create ProductDemo component

**Files:**
- Create: `components/sections/ProductDemo.tsx`

- [ ] **Step 1: Create the file**

```tsx
import { FadeIn } from "@/components/ui/FadeIn";
import { PlaceholderVisual } from "@/components/ui/PlaceholderVisual";

const behavioralMetrics = [
  { label: "Avg Deep Work Duration", value: "28 s" },
  { label: "Deep Work %", value: "40.9%" },
  { label: "Intrusion Rate", value: "1.2 /min" },
  { label: "Recovery %", value: "12.0%" },
];

export function ProductDemo() {
  return (
    <section
      id="product-demo"
      aria-labelledby="product-demo-heading"
      className="bg-ns-bg-elevated py-24 md:py-32"
    >
      <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
        <FadeIn>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-ns-accent">
            What your first session looks like
          </p>
          <h2
            id="product-demo-heading"
            className="max-w-2xl text-3xl font-extrabold tracking-tight text-ns-text md:text-4xl"
          >
            This is what 15 minutes of Orbit data looks like.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ns-text-muted">
            Three scores. Twelve behavioural metrics. An analysis of exactly
            where your focus held and where it broke. You get this after every
            session — not a generic wellness summary. Your data, compared only
            to yourself.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-12 grid gap-8 lg:grid-cols-[2fr_1fr]">
            {/* Session report image placeholder */}
            {/* IMAGE PLACEHOLDER — Executive session report UI:
                Three gauge dials (Cognitive Speed 58.4, Cognitive Agility 39.6,
                Cognitive Endurance 33.9), behavioural metrics panel, and
                Cognitive State Timeline graph. Replace with high-quality SVG. */}
            <PlaceholderVisual
              title="Session Report — Cognitive Speed · Agility · Endurance"
              designerNote="Full session report UI: three arc gauges at top (Speed 58.4, Agility 39.6, Endurance 33.9), 12-cell behavioural metrics grid below, Cognitive State Timeline graph at bottom. Dark background. Real report layout from the Neurostellar app."
              aspectRatio="aspect-[16/10]"
            />

            {/* Metric callout cards */}
            <div className="flex flex-col justify-center gap-4">
              {behavioralMetrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl border border-ns-border bg-ns-bg-card px-5 py-4"
                >
                  <p className="text-2xl font-extrabold text-ns-text">{m.value}</p>
                  <p className="mt-1 text-xs text-ns-text-muted">{m.label}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-6 text-sm text-ns-text-muted/70">
            Real session data from a 15-minute executive work session.
            This is what high cognitive speed with lower agility looks like —
            and exactly what your coach uses to build your improvement plan.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
```

---

## Task 9: Insert ProductDemo into homepage

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Add import and insert component**

```tsx
import { PageShell } from "@/components/layout/PageShell";
import { CaseStudyHighlights } from "@/components/sections/CaseStudyHighlights";
import { CTABand } from "@/components/sections/CTABand";
import { FeatureDeepDives } from "@/components/sections/FeatureDeepDives";
import { Hero } from "@/components/sections/Hero";
import { HomeFAQ } from "@/components/sections/HomeFAQ";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ProductDemo } from "@/components/sections/ProductDemo";
import { ProductVideo } from "@/components/sections/ProductVideo";
import { TeamSignal } from "@/components/sections/TeamSignal";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { UseCases } from "@/components/sections/UseCases";
import { WhatIsOrbit } from "@/components/sections/WhatIsOrbit";
import { JsonLd } from "@/components/seo/JsonLd";
import { getFaq } from "@/lib/content";
import { faqJsonLd, organizationJsonLd, productJsonLd } from "@/lib/seo";

export default function HomePage() {
  const faq = getFaq().slice(0, 5);

  return (
    <PageShell>
      <JsonLd
        data={[organizationJsonLd(), productJsonLd(), faqJsonLd(faq)]}
      />

      {/* 1. Hook */}
      <Hero />

      {/* 2. Validation anchor */}
      <TrustStrip />

      {/* 3. What is Orbit — outcome-first product intro */}
      <WhatIsOrbit />

      {/* 4. Why Orbit — Feature deep-dives: Focus / Resilience / Recovery */}
      <FeatureDeepDives />

      {/* 5. Data hook — show a real session report before explaining how it works */}
      <ProductDemo />

      {/* 6. How it works — Wear → Report → Coach */}
      <HowItWorks />

      {/* 7. Real use cases — Executives, Athletes, Knowledge Workers */}
      <UseCases />

      {/* 8. Proof — real results from real performers */}
      <CaseStudyHighlights />

      {/* 9. Science credibility anchor */}
      <TeamSignal />

      {/* 10. FAQ — remove purchase blockers */}
      <HomeFAQ items={faq} />

      {/* 11. Close */}
      <CTABand />
    </PageShell>
  );
}
```

- [ ] **Step 2: Run build to catch TypeScript errors**

Run: `npm run build`

Expected: Build completes with no type errors. (Warnings about images are fine; errors are not.)

- [ ] **Step 3: Visually verify page flow**

Open http://localhost:3000 and scroll through. Confirm:
- ProductDemo section appears between FeatureDeepDives and HowItWorks
- Section heading reads "This is what 15 minutes of Orbit data looks like."
- Four metric callout cards are visible on the right

---

## Task 10: Update HowItWorks — outcome-first step labels

**Files:**
- Modify: `components/sections/HowItWorks.tsx`

- [ ] **Step 1: Replace the `steps` array and section heading**

Replace only the `steps` array and the `SectionHeading` props (keep all layout/styling code untouched):

```tsx
const steps = [
  {
    step: "01",
    title: "Wear it for 10–15 minutes",
    description:
      "During deep work, a meeting, training, or recovery. No gel, no setup, no all-day commitment. Tag what you're doing and let Orbit capture your brain and body in action.",
    visual: {
      type: "image" as const,
      src: brandAssets.device.hero,
      alt: "Person wearing the Neurostellar Orbit headband during a focused session",
    },
  },
  {
    step: "02",
    title: "Get your cognitive report",
    description:
      "Instant scores for cognitive speed, agility, and endurance — plus deep work patterns, recovery quality, and where your focus broke. Ready before your next meeting.",
    visual: {
      type: "placeholder" as const,
      title: "Instant Report + Trend View — App UI",
      designerNote:
        "Split-panel app view. Left: post-session report with three gauge scores (Speed, Agility, Endurance). Right: 4-week trend lines per metric in white/silver. Minimal dark UI.",
    },
  },
  {
    step: "03",
    title: "Your coach builds the plan",
    description:
      "A Neurostellar performance coach reviews your trends weekly and creates a protocol to extend your peak windows and reduce cognitive drain — backed by the in-house neuroscience team.",
    visual: {
      type: "placeholder" as const,
      title: "Coach Session — Lifestyle Photo",
      designerNote:
        "One-on-one video call: user has Orbit dashboard open showing latest trend data. Coach visible on laptop screen. Professional, warm setting. Not overly staged.",
    },
  },
];
```

And update `SectionHeading` props:

```tsx
<SectionHeading
  id="how-it-works-heading"
  eyebrow="How it works"
  title="Wear. Report. Improve."
  description="From the moment you put it on to the expert who helps you act on the data."
/>
```

---

## Task 11: Update UseCases — pain-first copy + third persona

**Files:**
- Modify: `components/sections/UseCases.tsx`

- [ ] **Step 1: Replace the `useCases` array**

Replace only the data array (keep all layout/styling code untouched):

```tsx
const useCases = [
  {
    href: "/executives",
    eyebrow: "For executives & founders",
    title: "You make high-stakes decisions all day. Do you know when your brain is sharp enough to make them well?",
    description:
      "Orbit shows you your peak cognitive window — so you can schedule your hardest thinking for when your brain is actually ready, not just when the calendar says so.",
    bullets: [
      { label: "Decision clarity", body: "Know when you're at peak analytical capacity. Schedule your hardest work for when it counts most." },
      { label: "Cognitive endurance", body: "Track the invisible load of back-to-back meetings and high-pressure leadership before burnout shows up." },
      { label: "Deep work protection", body: "Identify your natural focus windows and defend them with data, not willpower alone." },
    ],
    stat: { value: "+67%", label: "deep work block consistency in 6 weeks — Sarah, Founder & CEO" },
    cta: "Explore executive benefits",
    image: brandAssets.device.desk,
    imageAlt: "Neurostellar Orbit on a premium executive desk setup",
    imageRight: true,
    bg: "",
  },
  {
    href: "/athletes",
    eyebrow: "For competitive athletes",
    title: "Your physical training is tracked to the gram. Your mental preparation isn't tracked at all.",
    description:
      "Orbit gives your brain the same rigour as your body — measuring cognitive recovery, focus under pressure, and mental readiness before competition.",
    bullets: [
      { label: "Focus under fatigue", body: "Know when your mind stays sharp during long training blocks — and when it doesn't." },
      { label: "Mental recovery", body: "Measure mental reset as seriously as physical recovery. Know when you're truly ready for the next effort." },
      { label: "Pre-competition readiness", body: "Build pre-game routines backed by your own focus and readiness data, not guesswork." },
    ],
    stat: { value: "76%", label: "of athletes improved sustained focus duration over 8 weeks" },
    cta: "Explore athlete benefits",
    image: brandAssets.device.chess,
    imageAlt: "Neurostellar Orbit — chess athlete cognitive tracking",
    imageRight: false,
    bg: "bg-ns-bg-elevated",
  },
  {
    href: "/science",
    eyebrow: "For biohackers & knowledge workers",
    title: "You track sleep, HRV, and nutrition. But not the thing those metrics are supposed to protect.",
    description:
      "Orbit closes the loop with the only metric that measures what you're actually trying to optimise — your cognitive output. The layer above everything else you already track.",
    bullets: [
      { label: "Complete the picture", body: "EEG + PPG together give you brain-body signals that no physical tracker can provide." },
      { label: "Compare to yourself", body: "No population averages. Orbit builds a personal baseline so every score is meaningful to you specifically." },
      { label: "Understand → Experiment loop", body: "See what interventions — sleep, nutrition, breathwork — actually improve your cognitive state." },
    ],
    stat: { value: "82%", label: "reported measurable improvement in sustained focus within 8 weeks" },
    cta: "See the science",
    image: brandAssets.device.front,
    imageAlt: "Neurostellar Orbit headband — front view",
    imageRight: true,
    bg: "",
  },
];
```

- [ ] **Step 2: Visually verify**

Confirm at http://localhost:3000 (scroll to use cases):
- Three persona sections are visible
- Each opens with a question / pain point, not a feature name
- Stat block shows below each bullet list
- No competitor names appear in any card

---

## Task 12: Reframe TeamSignal as science credibility anchor

**Files:**
- Modify: `components/sections/TeamSignal.tsx`

- [ ] **Step 1: Replace the full component**

```tsx
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

const proofPoints = [
  "EEG signal features correlated >0.5 with lab-standard equipment",
  "Task classification: p < 0.001 across multiple cognitive conditions",
  "Model robustness maintained within 8% under high-magnitude noise conditions",
  "Individual baseline only — compared to you, not population averages",
  "In-house ethics committee with external neuroscience experts",
];

export function TeamSignal() {
  return (
    <section
      id="science-anchor"
      aria-labelledby="science-anchor-heading"
      className="border-y border-ns-border py-20"
    >
      <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
        <FadeIn>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
            {/* Left — headline + body */}
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-ns-accent">
                The science behind the scores
              </p>
              <h2
                id="science-anchor-heading"
                className="text-2xl font-extrabold tracking-tight text-ns-text md:text-3xl"
              >
                Built at IIT Madras. Validated against research-grade equipment.
              </h2>
              <p className="mt-5 leading-relaxed text-ns-text-muted">
                Orbit was developed over 3+ years with neuroscientists and
                biomedical engineers. The algorithms are trained on 400+ hours
                of validated cognitive data — tested against laboratory-grade
                EEG and ECG equipment. A 2025 peer-reviewed preprint documents
                the full methodology.
              </p>
              <Link
                href="/science"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ns-text hover:text-ns-accent transition-colors"
              >
                Read the research
                <span aria-hidden>→</span>
              </Link>
            </div>

            {/* Right — proof points */}
            <ul className="space-y-4 pt-1">
              {proofPoints.map((point) => (
                <li key={point} className="flex gap-4">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-ns-accent" />
                  <p className="text-sm leading-relaxed text-ns-text-muted">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
```

---

## Task 13: Update CTABand — outcome headline, price CTA, WhatsApp secondary

**Files:**
- Modify: `components/ui/Button.tsx` (add `target` + `rel` props)
- Modify: `components/sections/CTABand.tsx`

- [ ] **Step 1: Add `target` and `rel` to Button.tsx**

The current `ButtonProps` type is missing `target` and `rel`. The WhatsApp CTA needs to open in a new tab. Replace the `ButtonProps` type and component signature in `components/ui/Button.tsx`:

```tsx
type ButtonProps = {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
};

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  target,
  rel,
}: ButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
```

- [ ] **Step 2: Replace the full CTABand component**

```tsx
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function CTABand() {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="relative overflow-hidden border-y border-ns-border py-24 md:py-32"
    >
      <div className="absolute inset-0 aurora-bg opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,var(--ns-glow),transparent_60%)]" />
      <div className="relative mx-auto max-w-[var(--ns-max-width)] px-6 text-center lg:px-8">
        <FadeIn>
          <h2
            id="cta-heading"
            className="text-3xl font-extrabold text-ns-text md:text-5xl"
          >
            Your brain is the one performance organ you've never trained with data. Start now.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/buy">Buy Orbit — $250</Button>
            <Button
              href="https://wa.me/917845216763"
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Questions? Chat on WhatsApp
            </Button>
          </div>
          <p className="mt-5 text-xs text-ns-text-muted/60">
            Free shipping&nbsp;·&nbsp;Includes device + performance coaching program
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Check Button component accepts `target` and `rel` props**

Open `components/ui/Button.tsx` and confirm it spreads additional props (or accepts `target`/`rel` explicitly). If it doesn't, add them to the props interface:

```tsx
// Add to Button props interface if not already present:
target?: string;
rel?: string;
```

- [ ] **Step 3: Visually verify**

Confirm at http://localhost:3000 (scroll to bottom):
- Headline reads "Your brain is the one performance organ..."
- Primary button reads "Buy Orbit — $250"
- Secondary button reads "Questions? Chat on WhatsApp"
- Micro-copy line shows free shipping + coaching

---

## Task 14: Update /buy page — real price and what's included

**Files:**
- Modify: `app/buy/page.tsx`

- [ ] **Step 1: Replace the pricing section and features list**

Replace only the `features` array and the price display text inside the existing component (keep `ReserveForm`, `DeviceSlideshow`, and all layout code untouched):

```tsx
const features = [
  "Neurostellar Orbit headband — EEG + PPG sensors",
  "Cognitive Speed, Agility & Endurance scores after every session",
  "12 behavioural metrics per session (deep work, recovery, intrusion rate, and more)",
  "iOS & Android app with session history and trend reports",
  "Weekly review with a dedicated performance coach",
  "Neuroscience team-curated intervention protocols",
  "8+ hours battery life",
  "Encrypted local-first data storage — your data is never sold or shared",
];
```

Replace the price display:

```tsx
{/* Was: <p className="mt-6 text-4xl font-extrabold text-ns-text">Launch pricing soon</p> */}
<p className="mt-6 text-4xl font-extrabold text-ns-text">$250</p>
<p className="mt-1 text-sm text-ns-text-muted">Includes device + performance coaching program · Free shipping</p>
```

And update the `PageHeader` description:

```tsx
<PageHeader
  eyebrow="Own the edge"
  title="Buy Neurostellar Orbit"
  description="Everything you need to start training your brain with data. One device. One coaching program. Every cognitive insight, yours."
/>
```

- [ ] **Step 2: Run build to confirm no TypeScript errors**

Run: `npm run build`

Expected: Build completes cleanly.

- [ ] **Step 3: Visually verify /buy page**

Open http://localhost:3000/buy. Confirm:
- Price shows $250 (not "Launch pricing soon")
- Features list includes coaching program and behavioural metrics
- ReserveForm is still present and functional

---

## Task 15: Final build verification

- [ ] **Step 1: Run full production build**

Run: `npm run build`

Expected output: Successful build with route sizes listed. No TypeScript errors. (ESLint warnings are acceptable; errors are not.)

- [ ] **Step 2: Run lint check**

Run: `npm run lint`

Expected: No errors. Address any warnings that reference modified files.

- [ ] **Step 3: Final visual walkthrough**

Run `npm run dev` and walk through the full homepage scroll at http://localhost:3000:

| Section | Check |
|---|---|
| Hero | "Train your brain like you train your body." · "Buy Orbit — $250" button · micro-copy visible |
| TrustStrip | Stats scrolling in marquee · "Built on evidence, not wellness claims." label |
| WhatIsOrbit | "Your brain has been performing blind." headline · 4 outcome-framed differentiators |
| FeatureDeepDives | Unchanged — verify still renders correctly |
| ProductDemo | "This is what 15 minutes..." · placeholder visual · 4 metric cards |
| HowItWorks | "Wear. Report. Improve." · 3 outcome-labeled steps |
| UseCases | 3 cards (Executives, Athletes, Knowledge Workers) · pain-first opening per card |
| CaseStudyHighlights | Data-first quotes visible in cards |
| TeamSignal | "Built at IIT Madras." · 5 proof points · "Read the research →" link |
| FAQ | "Do I need to wear Orbit all day?" is question #1 |
| CTABand | "Buy Orbit — $250" · WhatsApp button |

Also check http://localhost:3000/buy:
- Price shows $250
- Features list updated
- No "Launch pricing soon" text visible anywhere

---

## Out of Scope for This Plan

These pages need copy updates but depend on team confirmation of return policy and partner names before publishing. Handle in a follow-up plan:

- `/executives` — full page copy rewrite (ROI framing)
- `/athletes` — full page copy rewrite (sport-specific)
- `/science` — no changes needed (already serves as the deep-dive destination)
- `/faq` standalone page — inherits the updated `content/faq.json` from Task 1; no component changes needed
