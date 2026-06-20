# Content Writing Guide

All content lives as JSON in `content/`. No code changes needed. Use American English.

## Case Studies (`content/case-studies/*.json`)

One file per story. Follow this arc:

1. `persona` — `athlete` or `executive`
2. `name` — first name + role (get consent before publishing full names)
3. `headline` — outcome in ~8 words
4. `challenge` — 2 sentences on what limited performance
5. `intervention` — how they used Orbit (frequency, use cases)
6. `results` — array of before/after metrics with `% change`
7. `quote` — one strong sentence in their voice
8. `photo` — path to a lifestyle image in `public/brand/`
9. `featured` — `true` to show on homepage (max 2)

**Tone:** Lead with outcomes, not sensors. Use specific numbers. Keep EEG jargon out of headlines.

## Trials (`content/trials/*.json`)

1. `title` — study name
2. `partner` — university, sports org, or partner (confirm public use)
3. `duration` — e.g. "8 weeks"
4. `cohort` — participant count and profile
5. `method` — one non-technical sentence
6. `headlineResult` — single compelling stat
7. `status` — `completed` or `ongoing`

## FAQ (`content/faq.json`)

Write for buyers, not engineers.

- Answer "what," "who," and "why" before "how it works."
- Keep answers under 3 sentences.
- Link to `/science` for technical depth.

## Messaging Reference

| Avoid | Use instead |
|-------|-------------|
| "2 active EEG channels" | "See when your mind is truly locked in" |
| "Theta/Beta Ratio" | "Know your cognitive load before you burn out" |
| "Open Beta Waitlist" | "Book a Demo" / "See What You'll Unlock" |

The funnel is demo-only via Calendly. All CTAs point to booking a demo.

## SEO & GEO

- Each section should answer one distinct question a buyer or AI might ask.
- Use the full name "Neurostellar Orbit" at least once per page.
- Include specific outcomes and cohort sizes in trials.
- Keep FAQ answers self-contained (readable on their own).
