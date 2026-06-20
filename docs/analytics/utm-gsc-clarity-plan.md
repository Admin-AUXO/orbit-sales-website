# Neurostellar Orbit — UTM, Search Console & Clarity Plan

**Site:** https://www.neuro-stellar.com (Next.js rebuild, deploying on Vercel)
**Scope:** Organic Instagram + LinkedIn campaign tracking, Google Search Console, Microsoft Clarity.
**Companion doc:** `ga4-implementation-plan.md` (event tracking & GA4 setup).
**Prepared:** 2026-06-20.

---

## Part 1 — UTM Plan (organic Instagram + LinkedIn)

### Why UTMs matter here
GA4 reads the five `utm_*` query parameters automatically and maps them to its default
**Session source / medium / campaign / content** dimensions — no custom dimensions, no code.
The only discipline required is **naming consistency**. GA4 is **case-sensitive**: `LinkedIn`,
`Linkedin`, and `linkedin` become three different sources and fracture every report. **Everything
lowercase, no spaces, underscores only.**

### The taxonomy

| Parameter | Required | Rule | Allowed values |
|---|:--:|---|---|
| `utm_source` | ✅ | The platform the click came from | `instagram`, `linkedin` |
| `utm_medium` | ✅ | Always `organic_social` for unpaid posts | `organic_social` |
| `utm_campaign` | ✅ | A theme or a month — **pick one convention and never mix** | `launch_awareness`, `founder_story`, `2026_07_focus`, `evergreen` |
| `utm_content` | ✅ | The exact post / asset, so two links in one campaign stay distinct | `bio_link`, `reel_focus_demo`, `carousel_3scores`, `post_founder_origin` |
| `utm_term` | ❌ | Skip — it is a paid-keyword field, meaningless for organic | — |

**The `organic_social` rule is the most important decision in this plan.** Reserve the bare
`social` / `paid_social` / `cpc` mediums for the day you run ads. Tagging organic posts
`organic_social` now means your unpaid reach and your future paid spend never blend into one
unreadable bucket.

### Where UTMs actually attach (organic-specific)
You cannot tag a feed post's body reliably, so tag the **destinations you control**:

| Surface | How to tag |
|---|---|
| Instagram bio link | One tagged URL (or a Linktree where **each** outbound link is individually tagged) |
| Instagram Stories link sticker | Tag per story |
| Instagram broadcast channel / DMs | Tagged URL |
| LinkedIn company-page "Website" button | Tagged URL |
| LinkedIn post links (company + founder personal) | Tag every link, differentiate by `utm_content` |
| LinkedIn newsletter / article links | Tagged per placement |

### Naming conventions to lock
- **Lowercase + underscores only.** No `Launch Awareness`, no `reel-focus`.
- **Founder vs. brand on LinkedIn:** same `utm_source=linkedin`; separate them with
  `utm_content` (`post_founder_*` vs `post_company_*`). Founder-organic is a primary lane in the
  channel strategy, so it must be independently measurable.
- **Persona routing:** LinkedIn skews executive, Instagram skews athlete/younger. For now both
  land on `/demo` or `/`. Once `/executives` and `/athletes` are re-enabled, point each platform
  at its persona page (and keep the UTM identical so attribution still rolls up).
- **One destination per goal:** conversion-intent posts → `/demo`; awareness posts → `/` or
  `/orbit`; science/credibility posts → `/science`.
- **Keep a UTM log** (a shared sheet). Drift is the #1 cause of UTM data rot. One row per link:
  `date | platform | campaign | content | full URL | post permalink`.

### Ready-to-use URLs

```
# Instagram — bio link (awareness → demo)
https://www.neuro-stellar.com/demo?utm_source=instagram&utm_medium=organic_social&utm_campaign=launch_awareness&utm_content=bio_link

# Instagram — Reel (focus demo)
https://www.neuro-stellar.com/demo?utm_source=instagram&utm_medium=organic_social&utm_campaign=launch_awareness&utm_content=reel_focus_demo

# Instagram — Story link sticker (3 scores explainer)
https://www.neuro-stellar.com/orbit?utm_source=instagram&utm_medium=organic_social&utm_campaign=launch_awareness&utm_content=story_3scores

# LinkedIn — founder personal post (origin story)
https://www.neuro-stellar.com/demo?utm_source=linkedin&utm_medium=organic_social&utm_campaign=founder_story&utm_content=post_founder_origin

# LinkedIn — company page post (product)
https://www.neuro-stellar.com/orbit?utm_source=linkedin&utm_medium=organic_social&utm_campaign=evergreen&utm_content=post_company_product

# LinkedIn — company page "Website" button (evergreen)
https://www.neuro-stellar.com/?utm_source=linkedin&utm_medium=organic_social&utm_campaign=evergreen&utm_content=company_button
```

### Reporting (once GA4 + UTMs are live)
- GA4 → **Reports → Acquisition → Traffic acquisition**, set primary dimension to
  *Session source / medium*. You will see `instagram / organic_social` and
  `linkedin / organic_social` as clean rows.
- Add a **secondary dimension** of *Session campaign* or *Session manual ad content* to drill
  into individual posts.
- Build one **Exploration** (free-form): rows = Session source/medium + campaign + content,
  metrics = Sessions, Engaged sessions, Key events (`schedule_demo`, `careers_apply`),
  Conversion rate. This is your single organic-social scoreboard.

### Caveats specific to organic social
- **Instagram in-app browser** sometimes strips referrers; the UTM survives because it is in the
  URL, but **direct/unattributed** traffic will still be higher than reality. UTMs are the fix —
  untagged links from IG show up as `(not set)` or `direct`.
- **LinkedIn** appends its own `?trk=` params on some surfaces; they do not conflict with `utm_*`.
- **Link shorteners:** if you use one, make sure it **preserves** the query string (most do via
  301) — test one click in GA4 DebugView before a campaign.

---

## Part 2 — Google Search Console (GSC) setup

GSC is the organic-search counterpart to the social UTMs above: it shows the queries, pages,
impressions, clicks, and technical-indexing health that GA4 cannot. Free, essential pre-launch.

### Setup steps
1. **Choose a property type.** Use a **Domain property** (`neuro-stellar.com`) — it covers
   `http`, `https`, `www`, and non-`www` in one place. (URL-prefix is the fallback if you cannot
   edit DNS.)
2. **Verify via DNS TXT record.** GSC gives a `google-site-verification=…` TXT value. Add it as a
   TXT record on the root domain (host `@`) at the current DNS host — **today that's Wix**
   (Domains → Edit DNS). Domain properties **require** DNS verification. Keep the record after the
   Wix→Vercel DNS port, or re-add it at Vercel, or verification is lost.
3. **Submit the sitemap.** This site already generates one at **`/sitemap.xml`**
   (`app/sitemap.ts`). In GSC → **Sitemaps**, submit `https://www.neuro-stellar.com/sitemap.xml`.
4. **Confirm robots.** `app/robots.ts` serves `/robots.txt`; verify it references the sitemap and
   does not block anything you want indexed. Note the **disabled routes** (`/buy`, `/executives`,
   `/athletes`, `/case-studies`, `/research`, `/team`) return 404 + `noindex` via `middleware.ts`
   — expected; they should not appear in Coverage. (`/careers` is **live**.)
5. **Set the international target** if relevant (India audience) and confirm there is no leftover
   verification pointing at the old Wix site.
6. **Use URL Inspection** on the homepage and 3–4 key pages post-launch to request indexing and
   confirm "URL is on Google".
7. **Link GSC to GA4** (GA4 → Admin → Product links → Search Console). This unlocks the
   *Search Console* reports inside GA4 (queries + landing pages alongside behavior).
8. **Migration watch-out:** the existing Wix site already ranks. When DNS cuts over, keep the
   same domain so history carries. Watch the **Coverage / Pages** report for a fortnight for
   crawl errors or dropped URLs, and add **301 redirects** in `next.config.ts` for any old Wix
   URL whose path changes (e.g. `/about-us` → `/about`, `/beta-program-signup` → `/demo`).

### What to monitor weekly
- **Performance:** top queries & pages, CTR, average position.
- **Pages (Indexing):** "Indexed" vs "Not indexed" with reasons.
- **Experience / Core Web Vitals:** field data for LCP/INP/CLS (the HeroVisual canvas perf note
  in the code audit feeds straight into this).
- **Enhancements:** validity of the `Organization`, `Product`, and `FAQPage` JSON-LD already
  emitted (`components/seo/JsonLd.tsx`).

---

## Part 3 — Microsoft Clarity (built)

Clarity is free, unlimited, GDPR/DPDP-friendly **session recording + heatmaps**. At low traffic
(GA4 behavioral modeling won't qualify), it's how you *watch* what users actually do.

**Project ID:** `x9xec923ng`.

### How it's wired
- `components/analytics/ClarityAnalytics.tsx` (mounted in `app/layout.tsx`) injects the Clarity
  tag, env-gated on `NEXT_PUBLIC_CLARITY_ID`.
- It loads **only after analytics consent is granted** — it checks stored consent on mount and
  listens for `CONSENT_CHANGED_EVENT` (`lib/consent.ts`), so it also starts the moment a user
  accepts the banner. No reload needed. Guards against double-loading.
- PII masking: Clarity masks input text by default, and we add `data-clarity-mask="true"` to the
  careers form's name, email, and cover-note fields as a belt-and-suspenders.

### Left to do (human)
1. Set `NEXT_PUBLIC_CLARITY_ID=x9xec923ng` in `.env.local` and Vercel, then redeploy.
2. In Clarity → Settings, confirm the masking mode (Balanced or Strict).
3. Optionally link Clarity ↔ GA4 (Clarity Settings → Integrations) to jump from a GA4 segment to
   the matching recordings.

### What to watch first
- **Book-a-Demo drop-off** — do users open the Calendly modal and stall?
- **Homepage scroll depth** — does the problem→product→proof narrative hold attention to the CTA?
- **Report tour engagement** — do users scroll the interactive `/report` walkthrough?
- **Careers form** — where applicants stall or rage-click.
- **Dead clicks** — users clicking non-interactive elements (a sign of confusing UI).

---

## Priority order
1. **GSC** — verify the domain and submit the sitemap **before/at launch** so indexing starts
   clean and migration is monitored.
2. **UTM conventions** — lock the taxonomy + start the UTM log **before the first IG/LinkedIn
   post** (retro-tagging is impossible).
3. **Clarity** — install at launch; it is the cheapest behavioral insight at this traffic level.
4. **GA4** — see the separate implementation doc; it is the system everything above reports into.
