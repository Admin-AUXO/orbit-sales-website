# GA4 — How Analytics Works on This Site

**Site:** https://www.neuro-stellar.com — Next.js 16 (App Router), React 19, Vercel.
**GA4 property:** fresh property `G-F75KF0N3SH` (not the old Wix `G-KEVS5H2JQN`).
**Status:** built and in the code. The only thing left is operational — set the env var and finish the GA4 Admin config (Sections 5–6).
**Companion doc:** `utm-gsc-clarity-plan.md`.

---

## 1. How the tag loads

- `@next/third-parties/google` renders the GA tag in `app/layout.tsx`:
  ```tsx
  {GA_ID && <GoogleAnalytics gaId={GA_ID} />}   // GA_ID = process.env.NEXT_PUBLIC_GA_ID
  ```
- It loads **only when `NEXT_PUBLIC_GA_ID` is set** — locally in `.env.local`, and in Vercel (Production + Preview), then redeploy.
- Vercel Analytics (`<Analytics />`) runs alongside it. Every custom event fires to **both** sinks.
- App Router page views are handled automatically by the tag + Enhanced Measurement. We do **not** hand-roll a pageview listener.

## 2. Consent Mode v2

GA sets no cookies before consent.

- A `beforeInteractive` script in `app/layout.tsx` sets all four signals to `denied` by default (`ad_storage`, `analytics_storage`, `ad_user_data`, `ad_personalization`).
- The cookie banner (`components/CookieConsent.tsx` + `lib/consent.ts`) flips them to `granted` on Accept and stores the choice in `localStorage`.
- Re-open the banner anytime via the **Cookie settings** link in the footer.
- File the GA tag under the **analytics** consent category in GA4.

## 3. Firing events — `lib/analytics.ts`

One typed wrapper dual-fires to GA4 + Vercel:

```ts
trackEvent(name, params)          // base
trackCTA(action, location)        // → cta_click
trackScheduleDemo()               // → schedule_demo
trackCareersApply(jobId, title)   // → careers_apply
trackFormError(formId, message)   // → form_error
trackContactClick(method, loc)    // → contact_click
trackFaqOpen(question)            // → faq_open
trackReportTourChapter(ch, i)     // → report_tour_chapter
```

## 4. Events we send

snake_case. Google recommended names where one fits, custom otherwise.

| Event | Params | Key event | Where it fires |
|---|---|:--:|---|
| `page_view` | `page_location, page_title` | — | Enhanced Measurement (auto) |
| `cta_click` | `cta_action, cta_location` | — | `BookDemoButton.tsx` |
| `schedule_demo_start` | `method` | — | Calendly modal opens (`CalendlyModal.tsx`) |
| **`schedule_demo`** | `method` | ✅ | Calendly booking confirmed |
| **`careers_apply`** | `job_id, job_title` | ✅ | Careers form success (`CareersForm.tsx`) |
| `form_error` | `form_id, message` | — | Careers form failure |
| `contact_click` | `method, contact_location` | — | any `tel:`/`mailto:` click (`ContactLinkTracker.tsx`) |
| `faq_open` | `question` | — | FAQ accordion (`Accordion.tsx` `trackAs="faq"`) |
| `report_tour_chapter` | `chapter, chapter_index` | — | `/report` chapter scrolls into view |
| `scroll` | `percent_scrolled` | — | Enhanced Measurement (auto) |
| `click` (outbound) | `link_url, link_domain` | — | Enhanced Measurement (auto) — covers social/news/partner links |

**Conversion model:** demo-first, no checkout. The conversion is a **booked Calendly meeting** (`schedule_demo`), opened by any "Book a Demo" button. Careers applications are the second key event.

**Not tracked on purpose:** self-hosted video, mobile-menu toggles, nav clicks, and the Spline iframe — low signal or not visible to GA4. Outbound clicks are left to Enhanced Measurement.

## 5. Custom dimensions (Admin → Custom definitions)

Event-scoped, snake_case, never PII. Register the params you want to report on:

`cta_action`, `cta_location`, `method`, `contact_location`, `job_id`, `job_title`, `question`, `chapter`.

New dimensions read "(not set)" for ~24–48 h before populating.

## 6. GA4 Admin checklist

| Setting | Action |
|---|---|
| Data stream | Web stream for `neuro-stellar.com` under property **`G-F75KF0N3SH`** |
| Enhanced Measurement | **ON** (keep history-events, outbound clicks, scroll, file downloads) |
| Key events | Mark **`schedule_demo`** and **`careers_apply`** |
| Custom dimensions | Register the 8 params above |
| Data retention | 2 → **14 months** |
| Internal traffic | Filter the team IP(s), set **Active** |
| Google signals | **OFF** at this traffic |
| Consent category | GA tag under **analytics** |
| Link Search Console | Admin → Product links (see companion doc) |

## 7. QA

On the deployed site (not localhost), in GA4 **DebugView / Realtime**:

1. Accept the banner → `page_view` fires once per navigation.
2. Click a CTA → `cta_click` with the right `cta_action`/`cta_location`.
3. Book a test Calendly slot → `schedule_demo` (and `schedule_demo_start` when the modal opens).
4. Submit the careers form → `careers_apply`; open an FAQ → `faq_open`; scroll `/report` → `report_tour_chapter`; click a phone/email link → `contact_click`.
5. Decline consent in a fresh session → no analytics cookies, no hits.

---

## Appendix — GA4 quick reference
- **Event tiers:** automatic · enhanced measurement · recommended (Google's names) · custom. Prefer a recommended name when one fits.
- **Key events** = the 2024 rename of "conversions". Build Google Ads conversions from the GA4 key event later if you run paid.
- **Custom dimensions:** register a parameter to report on it. 50 event / 25 user scoped. "(not set)" for ~48 h after creation.
- **Consent Mode v2 signals:** `ad_storage, analytics_storage, ad_user_data, ad_personalization`. Required since Mar 2024 for EEA/UK Google tags.
- **Low traffic:** under ~1,000 events/day, behavioral modeling won't qualify — get the events right and lean on Clarity for qualitative insight (companion doc).
