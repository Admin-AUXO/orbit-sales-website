# Neurostellar Content Writing Guide

Use this guide when filling in case studies, trials, and page copy. All content lives in the `content/` directory as JSON files — no code changes needed.

## Case Studies (`content/case-studies/*.json`)

Each file represents one story. Use this narrative arc:

1. **persona** — `athlete` or `executive`
2. **name** — First name + role (get consent before publishing full names)
3. **headline** — Outcome in ~8 words
4. **challenge** — 2 sentences on what was limiting performance
5. **intervention** — How they used Orbit (frequency, use cases)
6. **results** — Array of before/after metrics with `% change`
7. **quote** — One powerful sentence in their voice
8. **photo** — Path to lifestyle image in `public/brand/images/`
9. **featured** — `true` to show on homepage (max 2 recommended)

### Tone
- Lead with outcomes, not sensors
- Use specific numbers when available
- Avoid EEG jargon in headlines

## Trials (`content/trials/*.json`)

1. **title** — Study name
2. **partner** — University, sports org, or partner name (confirm public use)
3. **duration** — e.g. "8 weeks"
4. **cohort** — Participant count and profile
5. **method** — One non-technical sentence
6. **headlineResult** — Single compelling stat
7. **status** — `completed` or `ongoing`

## FAQ (`content/faq.json`)

Write for buyers, not engineers:
- Answer "what", "who", "why buy" before "how it works technically"
- Keep answers under 3 sentences
- Link to `/science` for deep technical detail

## Messaging Reference

| Avoid | Use instead |
|-------|-------------|
| "2 active EEG channels" | "See when your mind is truly locked in" |
| "Theta/Beta Ratio" | "Know your cognitive load before you burn out" |
| "Open Beta Waitlist" | "Buy Orbit" / "Reserve yours" |

## SEO & GEO Tips

- Each page section should answer a distinct question a buyer or AI might ask
- Use full entity name "Neurostellar Orbit" at least once per page
- Include specific outcomes and cohort sizes in trials
- FAQ answers should be self-contained (readable without surrounding context)
