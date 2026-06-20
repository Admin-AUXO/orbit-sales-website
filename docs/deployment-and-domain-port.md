# Deployment & Domain Port

How to deploy the Next.js site to Vercel and move `neuro-stellar.com` off Wix.

## 1. Deploy to Vercel
1. Push the repo to GitHub.
2. In Vercel, **New Project → Import** the repo. Framework auto-detects as Next.js.
3. Set environment variables (Production + Preview):
   - `NEXT_PUBLIC_SITE_URL` = `https://www.neuro-stellar.com`
   - `NEXT_PUBLIC_GA_ID` = `G-F75KF0N3SH` (the fresh GA4 property)
   - `NEXT_PUBLIC_CLARITY_ID` = `x9xec923ng` (Microsoft Clarity)
   - `NEXT_PUBLIC_CALENDLY_URL` = the Calendly booking URL
   - `RESEND_API_KEY` = for careers-form email delivery (also verify the `neuro-stellar.com`
     sending domain in Resend)
4. Deploy. Every branch/PR gets a preview URL — QA there before promoting.

## 2. Pre-cutover checklist (do before touching DNS)
- Build passes (`npm run build`) and the Vercel production deploy looks correct on its `*.vercel.app` URL.
- Env vars set; the Calendly modal opens and books; GA4 fires in DebugView (after consent).
- `sitemap.xml`, `robots.txt`, and `llms.txt` resolve and list only live pages.
- **Redirects** for any Wix URL whose path changed are in `next.config.ts` `redirects()` — e.g. `/about-us` → `/about`, `/beta-program-signup` → `/demo`. Preserves SEO equity.
- Legal pages exist (privacy, terms). The privacy policy now covers DPDP + GDPR (explicit
  biometric consent, consent withdrawal, data-principal rights, Grievance Officer) — still needs a
  **named** Grievance Officer and a **lawyer sign-off** before launch.

## 3. DNS cutover (Wix → Vercel)
The domain is currently connected to Wix. Move it:
1. In Vercel → Project → **Settings → Domains**, add `neuro-stellar.com` and `www.neuro-stellar.com`. Vercel shows the required records.
2. At the **DNS registrar** (where the domain is registered — may be Wix or a third party):
   - Point `www` via **CNAME** to `cname.vercel-dns.com`.
   - Point the apex `@` via **A record** to Vercel's IP (Vercel shows the current value), or use an ALIAS/ANAME if the host supports it.
   - Remove the old Wix A/CNAME records.
3. If the domain was **bought through Wix**, you may need to either transfer the domain out or change its nameservers/records from the Wix domain dashboard — Wix-managed domains can restrict external pointing. Confirm you can edit DNS before scheduling the cutover.
4. Wait for propagation (minutes to a few hours). Vercel auto-provisions SSL once records resolve.
5. Set the canonical host: pick `www` as primary (Vercel will 308-redirect the apex to it, matching `NEXT_PUBLIC_SITE_URL`).

## 4. Post-cutover
- Verify `https://www.neuro-stellar.com` serves the new site with a valid certificate.
- In **Google Search Console**: verify the Domain property (DNS TXT), submit `sitemap.xml`, and watch Coverage for two weeks (see `docs/analytics/utm-gsc-clarity-plan.md`).
- Confirm old high-traffic URLs 301 to their new equivalents.
- Unpublish or retire the old Wix site so it stops competing in search.
- Retire the old Wix API token and the second `wixsite.com` subdomain (SEO fragmentation).

## Rollback
If something breaks, repoint the `www` CNAME / apex record back to the Wix values. Keep the old Wix records noted before you change them.
