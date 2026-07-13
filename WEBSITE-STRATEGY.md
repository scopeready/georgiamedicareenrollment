# Medicare Website Strategy — ECOS Medicare Solutions
**Sites covered:** georgiamedicareenrollment.com (GitHub Pages) · medicareenrollmentarizona.com (Vercel)
**Prepared:** July 13, 2026 · Agent: Darin Weidauer, MBA, RSSA (NPN 18580338)

> This document lives in both site repos. It is the operating playbook for growing both sites from
> "well-built but new" to a steady source of Medicare leads, with a plan keyed to the 2026 Annual
> Enrollment Period (Oct 15 – Dec 7, 2026).

---

## 1. Executive summary

Both sites are structurally excellent — far better than the typical local-agent site. They have
clean semantic HTML, correct 2026 CMS figures, full JSON-LD schema (InsuranceAgency, FAQPage,
BreadcrumbList, city/area entities), llms.txt for AI discovery, TPMO-compliant disclaimers, and a
deep city/region page architecture (34 pages in Georgia, 15 in Arizona).

What they lack is everything **off-page**: no analytics, no Google Business Profiles driving the
map pack, no reviews, no directory listings, no backlinks. In this market, city-level SERPs are
dominated by directories (Yelp, Expertise.com, MedicareAgentsHub, MedicareSupp.org) — an
independent agent wins locally through the **map pack, reviews, and directory presence**, with the
website converting that visibility into calls and form fills.

**The three highest-leverage moves, in order:**
1. **Google Business Profiles + review engine** (Mesa and Sun City offices for AZ; service-area
   profile for GA) — this is the single biggest lead lever for a local agent.
2. **Measurement** — install a real GA4 ID on both sites, set up Search Console, define call/form
   conversions. You cannot steer what you cannot see.
3. **Directory (barnacle) listings + citations** — get listed everywhere that already ranks.

Everything else in this plan compounds on those three.

## 2. Where the two sites stand today (audit snapshot)

| Dimension | Georgia | Arizona |
|---|---|---|
| Pages | 34 (10 plan/info, 14 city, 8 region, legal, thank-you) | 15 (home, 8 cities, 2 guides, about, contact, guides hub, 404) |
| Hosting | GitHub Pages + custom domain | Vercel (cleanUrls, no trailing slash) |
| Schema (JSON-LD) | InsuranceAgency, 31× FAQPage, BreadcrumbList, City/AdministrativeArea | InsuranceAgency, 11× FAQPage, Person, Place, State |
| llms.txt / llms-full.txt | ✅ both | ✅ both (llms-full needs regeneration — see §3) |
| Sitemap/robots/canonicals | ✅ correct | ✅ correct (after this branch's cleanup) |
| 2026 CMS figures | ✅ verified (Part B $202.90/$283; Part A $1,736; Part D cap $2,100; IRMAA $109k/$218k) | ✅ verified |
| TPMO compliance | ✅ "8 organizations / 87 products" + SHIP references | ✅ disclaimers site-wide, both offices |
| Analytics | ❌ none installed | ⚠️ GA4 installed but placeholder `G-XXXXXXXXXX` |
| Lead capture | Form → thank-you.html (noindex ✅) | Web3Forms + Supabase `website_leads` w/ permission-to-contact ✅ |
| Social preview (og:image) | ✅ fixed on this branch | ⚠️ references missing photos (see §3) |
| About/bio page | ❌ none (bio section on home only) | ✅ about.html |
| Google Business Profile | ❌ | ❌ |
| Reviews | ❌ | ❌ |
| Backlinks/citations | ❌ effectively none | ❌ effectively none |

## 3. Urgent items — what was fixed on this branch, and what only you can do

**Fixed in this branch (no action needed):**
- *Georgia:* home page og:image pointed to a file that didn't exist (`og-georgia.png`), so shared
  links showed no image. Now points to a real image (`og-georgia.jpg`, the Atlanta skyline photo),
  and a matching `twitter:image` tag was added.
- *Arizona:* removed 9 stray `index (N).html` files (old homepage versions that were publicly
  reachable); removed the 13 stale old-generation page directories (`/about/`, `/contact/`,
  `/medicare-phoenix-az/`, etc.) that duplicated the current pages with conflicting canonicals;
  added the missing `/assets/favicon.svg`; set the 404 page to `noindex`; normalized llms.txt
  links to the canonical no-trailing-slash URLs.

**Only you can do (do these first):**
1. **Arizona — upload the photos.** Every page references `/assets/photos/*.webp`
   (grand-canyon.webp, sonoran-bloom.webp, etc.) but the `assets/photos/` folder was never
   uploaded to GitHub. Hero images and og:images are broken site-wide. Copy `site/assets/photos/`
   from your original package zip into the repo's `assets/photos/`.
2. **GA4 Measurement IDs.** Create two GA4 properties (or one property, two data streams) at
   analytics.google.com. Arizona: find-and-replace `G-XXXXXXXXXX` (3 occurrences per page — or fix
   it in `source/generate.py` and regenerate). Georgia: has no analytics at all; add the same GA4
   snippet to every page.
3. **Google Search Console.** Verify both domains, submit both sitemaps.
4. **Arizona — regenerate `llms-full.txt`** from the current build (it still embeds snapshots of
   the old page generation); rerun `source/generate.py` or ask for a rebuild.

## 4. Business goal and funnel math

Work backward from enrollments:
- A realistic Year-1 target for two new sites: **15–30 organic-sourced enrollments** across GA+AZ.
- Typical funnel: ~1,000 organic visits/mo → 2–4% contact rate → 20–40 leads/mo → 30–50% held
  appointment → 8–15 enrollments/mo *at maturity*. New sites reach a fraction of this in year 1.
- **Seasonality is extreme.** 60–70% of annual "medicare plans / agent near me" demand lands
  Sep–Dec (AEP). The site work below is sequenced so both sites are at full strength by
  **September 1, 2026** — content frozen, GBPs seasoned, reviews accumulating.
- Lifetime value of a Medicare client (renewals, referrals, cross-state moves) justifies treating
  every lead as high-value: answer fast (see §17).

## 5. Market and competitor landscape

What actually ranks for "medicare agent/broker + city" queries (verified July 2026):
- **Directories and aggregators:** Yelp, Expertise.com, MedicareAgentsHub.com, MedicareSupp.org,
  CertifiedMedicareAgents.com, WeCanHelpYou.org, MedicareAgents.com — these own most top-10 slots.
- **A handful of independent brokers** with strong local sites (e.g., thebig65.com in AZ,
  ThePlemonsGroup.com in Phoenix).
- **The map pack (Google Business Profiles)** sits above organic for near-me queries — and is
  winnable by a single agent with reviews, where the organic 10 often is not.
- National carriers/lead-gen (eHealth, Aetna, Humana) own the generic plan-name head terms —
  don't fight them there.

**Implications:** (a) get listed in the directories that already rank (§9); (b) win the map pack
(§8); (c) target long-tail city + intent queries where directories are thin — exactly what the
existing city/region pages do; (d) win AI-assistant answers (§12), where an entity-consistent
independent agent can outperform directories.

## 6. Keyword strategy and priority targets

*Note: Semrush/Ahrefs API access wasn't available for this analysis (both connectors report
plan-level API blocks), so volumes below are directional estimates from market knowledge, not tool
exports. Re-pull exact volumes in Google Keyword Planner once ads accounts exist — or upgrade
either connector plan and re-run.*

**Tier 1 — money queries (map pack + city pages):**
"medicare agent near me", "medicare broker [Phoenix|Mesa|Tucson|Atlanta|Savannah|Macon…]",
"medicare help [city]", "medicare insurance agent [city]". Est. 10–400/mo per city — highest
intent, lowest volume. Owner: GBP + city pages.

**Tier 2 — decision queries (plan pages/guides):**
"medicare advantage vs medigap", "medicare advantage vs supplement [state]", "best medicare plan
[state] 2026/2027", "medigap plan g [state] cost". Est. 100–3,000/mo. Owner: comparison guides
(AZ has one — Georgia needs the equivalent, see §13).

**Tier 3 — education/cost queries (long-tail volume + AI citations):**
"medicare part b premium 2027", "part d $2,100 cap", "turning 65 checklist", "IRMAA brackets
2027", "medicare enrollment periods". High volume, informational — these earn topical authority,
AI-answer citations, and remarketing audiences rather than direct leads. Owner: medicare-costs and
turning-65 pages, kept ruthlessly current (§13).

**Tier 4 — niche moats (already built, rare among competitors):**
veterans/TRICARE-for-Life (GA veterans.html + fort-benning.html), C-SNP/I-SNP, dual-eligible/
D-SNP/Extra Help (medicaid.html). Low volume, near-zero competition, high conversion. Promote
these pages in link building (§19) — veteran and senior-care organizations link to exactly this.

**October pivot:** as soon as CMS publishes 2027 numbers (typically late Sep/Oct), update
everything and add "2027" variants to titles. Ranking for "[figure] 2027" the week it's announced
is the cheapest traffic spike of the year.

## 7. Mapping intent to existing pages (gap check)

Georgia's 34 pages and Arizona's 15 cover Tiers 1, 3, and 4 well. Gaps:
- **Georgia:** no "Medicare Advantage vs Medigap in Georgia" comparison guide (AZ has one — it's
  the highest-converting content type); no About page (§14); no per-city "plans available"
  refresh mechanism.
- **Arizona:** only 8 cities — missing Scottsdale, Chandler, Glendale, Peoria, Surprise, Sun City
  West, Prescott, Casa Grande, Green Valley (heavy retiree density). Add via `generate.py`.
- **Both:** no "Medicare Supplement rates [state]"-style page targeting Medigap shoppers by state.

## 8. Local SEO: Google Business Profiles and the review engine

This is priority #1 overall.
- **Arizona:** create two GBPs — "ECOS Medicare Solutions – Arizona East" (Mesa office) and
  "…– Arizona West" (Sun City). Category: *Insurance agency* (primary), *Health insurance agency*
  (secondary). Link Mesa GBP → /medicare-mesa-az, Sun City → home or /contact. Add office photos,
  hours, appointment link (planenroll.com purl or /contact).
- **Georgia:** no physical office ⇒ create a **Service Area Business** profile (address hidden,
  service area = metro Atlanta + statewide), linked to the home page.
- **Reviews are the ranking factor.** Build the habit: after every enrollment, send a review link
  (GBP short URL) by text same-day. Target: 2–4 new reviews/mo per profile. Respond to every
  review. *Compliance note: reviews must be unincentivized; never quote plan benefits in replies.*
- **NAP consistency:** the exact business name/address/phone from the site's JSON-LD must match
  GBP and every citation (§9). AZ: (480) 845-0246 + both office addresses. GA: (770) 285-5174.

## 9. Directory ("barnacle") strategy

The directories outrank you — so be in them. In priority order:
1. MedicareAgentsHub.com (agent profile, GA + AZ)
2. MedicareSupp.org agent directory
3. CertifiedMedicareAgents.com
4. Yelp (both offices; claim + photos)
5. Expertise.com (Phoenix + Atlanta health-insurance lists — apply)
6. WeCanHelpYou.org (AZ nonprofit directory)
7. General citations: Google, Bing Places, Apple Maps, Nextdoor, BBB, Alignable, chamber of
   commerce (Mesa, Sun City area, plus GA metro chambers)
8. NPN-verifiable industry listings (NIPR-fed sites) — ensure name/agency consistency.

Each profile links back to the relevant site — these are also your first backlinks.

## 10. On-page SEO standards (mostly met — keep it that way)

Already strong: unique titles/descriptions, one H1/page, canonicals, breadcrumb + FAQ schema,
city pages with county-level specificity, relative-link integrity, image alt text.
Standards for all future pages:
- Title pattern: `{Topic} in {Place} {Year} | ECOS Medicare Solutions` — refresh year annually.
- Every city page: ≥1 unique local fact block (hospital systems, county plan counts), FAQ with
  3–5 city-specific Q&As, one internal link up (region) and down (neighboring cities).
- Internal linking: every Tier-3 education page must link to one Tier-1 city page and one
  conversion point (contact/phone) above the fold.
- Keep FAQPage schema synced to visible FAQ text (Google requires parity).

## 11. Technical SEO

- **Georgia (GitHub Pages):** fine for a static site. Enforce HTTPS; keep `.nojekyll`; keep links
  relative. Limitation: no redirects/headers control — acceptable at this scale.
- **Arizona (Vercel):** `cleanUrls` + `trailingSlash:false` now matches canonicals and sitemap
  after this branch's cleanup. Keep one page = one root-level `NAME.html`; never re-upload the
  old directory structure. The generator (`source/generate.py`) is the source of truth — edit
  there, regenerate, commit the output.
- **Performance:** both sites are lean (system-font/preconnected-font static pages). After photos
  are uploaded to AZ, confirm hero images stay <150 KB (webp already) and carry explicit
  width/height (they do — CLS-safe). Run PageSpeed Insights once photos land; target >90 mobile.
- **Monitoring:** Search Console coverage report monthly; watch for the AZ old-URL 308s to drop
  out of the index naturally (don't force-remove).

## 12. GEO — being the answer in AI search

Seniors' children increasingly ask ChatGPT/Claude/Gemini/Perplexity "how do I help my mom pick a
Medicare plan in Phoenix". Both sites are unusually well positioned (llms.txt, llms-full.txt,
dense FAQ schema, verified CMS figures with sources). To press the advantage:
- Keep llms.txt figures **current to the day** — an AI that spots one stale premium discounts the
  whole file. Add a "Last verified: {date}" line; refresh at every CMS release.
- Regenerate AZ llms-full.txt (currently mirrors the old page generation — §3).
- Entity consistency: "ECOS Medicare Solutions" + "Darin Weidauer" + NPN 18580338 must appear
  identically across sites, GBP, directories, and the `sameAs` graph (the AZ schema already
  cross-references your CO/NV/other domains — extend the same block to Georgia's schema).
- FAQ answers should be self-contained (quotable without surrounding context) — most already are.
- Add "People also ask"-style questions with **month-and-year-stamped answers** ("As of July
  2026, the Part B premium is $202.90…") — timestamped facts get cited.

## 13. Content roadmap (Jul–Dec 2026)

| Month | Georgia | Arizona | Both |
|---|---|---|---|
| Jul | Add About page (§14); "MA vs Medigap in Georgia" guide | Upload photos; +4 city pages (Scottsdale, Chandler, Glendale, Peoria) | GA4 + GSC live; GBPs created |
| Aug | "Medigap Plan G in Georgia: what it costs" | +4 city pages (Surprise, Prescott, Casa Grande, Green Valley); "Medigap rates in AZ" | Directory listings done; first reviews |
| Sep | "AEP 2026 in Georgia: what's changing for 2027" (publish the week CMS releases 2027 landscape) | Same for AZ | Freeze structure; llms.txt re-verified |
| Oct | Update every 2026 figure → 2027 within days of CMS release; add "2027" title variants | Same | AEP: weekly GBP posts; fast lead response mode |
| Nov | City-page plan-count refreshes ("X plans available in Fulton County for 2027") | Same | Review asks after every enrollment |
| Dec | AEP wrap; "missed AEP? MA-OEP and SEP options" post | Same | Year-1 KPI review (§24) |

One page per site per month is enough — these are deep sites already; freshness and off-page
matter more than volume.

## 14. E-E-A-T and author authority

Darin's credentials are genuinely differentiating (MBA, RSSA, gerontologist, 22-year USAF
veteran, NPN-verifiable) — surface them everywhere:
- **Georgia: add an About page** mirroring the AZ one (photo `darin.jpg` is already in the repo),
  with Person schema linking `sameAs` to the AZ about page, LinkedIn, and directory profiles.
- Byline every guide: "Reviewed by Darin Weidauer, RSSA — last updated {date}".
- The veteran angle is both an E-E-A-T asset and a niche moat (§6 Tier 4) — pitch it in link
  building (§19).

## 15. Compliance guardrails (do not skip)

The sites are TPMO-compliant today. Keep them that way as you grow:
- Keep the "We do not offer every plan… 8 organizations / 87 products" disclaimer accurate —
  update counts per state per year (AZ counts differ from GA's; verify each site's numbers).
- Every new page: SHIP + 1-800-MEDICARE references stay; "not affiliated with the U.S.
  government" stays; no carrier logos or plan-specific benefits/premiums in organic content
  without carrier approval.
- Reviews/testimonials: no plan-specific claims; no incentivized reviews.
- Paid ads (if ever): Medicare-related creatives generally require carrier/CMS filing via TPMO
  rules — see §21 before spending a dollar.
- Keep permission-to-contact language on all forms (AZ already records consent to Supabase; add
  the same explicit consent text to Georgia's form if not present).

## 16. Conversion rate optimization

- **Phone-first:** seniors call. Keep tel: links huge and sticky on mobile (both sites do this
  well). Add call-note "no pressure, no obligation, free" adjacent to every number.
- **Georgia:** form posts to thank-you.html — add "what happens next" (call within X hours) and
  Darin's photo to the thank-you page to reduce no-answer rates.
- **Arizona:** Web3Forms + Supabase is live. Add the enrollment-window calculator (home page) as
  a CTA on every city page — interactive tools convert.
- Test one thing per month max (this traffic volume can't support real A/B testing — use
  before/after with GA4 events instead).

## 17. Lead capture, routing, and response SLA

- All AZ leads land in Supabase `website_leads` + email. Set up an alert (email is fine, Zapier
  if you want SMS) so **response time is <15 minutes during AEP business hours** — speed-to-lead
  is the highest-correlation variable in insurance lead conversion.
- Georgia leads: currently email-only via the form. Point the GA form at the same Web3Forms
  account (separate form ID) so both states land in one inbox/table with a `state` field.
- Log disposition (reached / voicemail / enrolled) — even a spreadsheet — so §24's KPIs are real.

## 18. Analytics and measurement

Once GA4 IDs exist (§3):
- **Events:** `tel_click`, `form_submit` (thank-you page view for GA; Web3Forms success for AZ),
  `planenroll_click` (outbound purl), `calculator_use` (AZ). Mark all as conversions.
- **Search Console:** monthly query report — watch which city pages earn impressions first;
  those cities get the next content investment.
- **Call tracking:** skip number-swapping services for now (NAP consistency risk outweighs
  attribution value at this scale). Ask "how did you find me?" and log it instead.
- Baseline targets are in §24.

## 19. Link building and citations

Realistic, compliance-safe sources for a solo agency:
1. Directory/citation profiles (§9) — the foundation.
2. **Veteran organizations** (GA: Fort Benning/Fort Gordon-area VSOs, American Legion posts;
   AZ: Luke AFB-area groups) — offer the TRICARE-for-Life/Medicare guide as a resource.
3. Senior centers, Area Agencies on Aging, retirement-community newsletters (Sun City is a
   goldmine — offices are *in* it).
4. Local press: pitch "what the $2,100 drug cap means for [state] seniors" to local TV/paper
   consumer reporters each AEP.
5. RSSA/NAHU (NABIP) member directories.
6. Cross-link the portfolio (§22) via schema `sameAs` (already done in AZ) — legitimate entity
   links, not link-scheming.
Avoid: guest-post marketplaces, PBNs, "medicare blog" link sellers — compliance and quality risk.

## 20. Social and video (lightweight)

Optional but cheap: one 60-second vertical video per month (Darin answering one FAQ from the
sites), posted to YouTube/Facebook — YouTube results appear in "medicare [city]" SERPs with near-
zero competition from actual local agents. Facebook is where 64-year-olds are; boost $20/post to
your service-area 60-67 audience (note: Medicare-topic ads on Meta require the insurance
ad-category flag; keep creatives generic-educational to stay TPMO-safe).

## 21. Paid search (defer, then do carefully)

Defer until organic + GBP are producing and measurement is live. When ready:
- Start with **Google Local Services Ads / "near me" search campaigns** on Tier-1 terms in your
  metros only; $500–1,000/mo test during Sep–Dec.
- TPMO rules: generic "talk to a licensed independent agent" creatives avoid carrier-filing
  requirements; anything naming carriers/plans/benefits requires review. Landing pages: city
  pages, not home.
- Track cost-per-enrollment, not cost-per-click; break-even is roughly one enrollment per
  ~$600–900 spend given renewal LTV.

## 22. Multi-state portfolio architecture

The AZ schema already declares the family: Colorado, Nevada, howdoiapplyformedicare.com,
medicareadvantageanswers.com, dentalinsurancetomorrow.com. Standardize:
- One generator (the AZ `source/generate.py` pattern) per site, shared templates — Georgia is
  currently hand-managed HTML; consider migrating it to the generator model to make the annual
  figure-updates a one-command operation across the portfolio.
- Identical entity block (name, NPN, founder Person schema, `sameAs` ring) on every site.
- One shared llms.txt "Verified {year} figures" section generated from a single data file, so a
  CMS update propagates everywhere the same day.
- Same GA4 account, one property per site; one Search Console account.

## 23. Operating cadence

**Weekly (30 min):** respond to reviews; check lead log + response times; one GBP post per
profile (during AEP: required; off-season: optional).
**Monthly (2 hrs):** GSC query review; publish the month's page (§13); one directory/citation
added; verify figures still current.
**Event-driven:** CMS releases (2027 premiums, landscape files) → same-week site-wide updates +
llms.txt re-verification; carrier contract changes → disclaimer count updates.
**Annually (January):** full figure audit, title-year refresh, plan-count refresh, this
document's review.

## 24. 90-day action plan and KPIs

**Days 1–7:** upload AZ photos; GA4 IDs live on both sites; GSC verified + sitemaps submitted;
merge this branch.
**Days 8–30:** GBPs live (Mesa, Sun City, GA service-area); first 5 directory listings; Georgia
About page + consent text; first review asks.
**Days 31–60:** remaining directories/citations; Georgia "MA vs Medigap" guide; AZ +4 city
pages; veteran-org outreach begins.
**Days 61–90 (lands ~Oct 1, AEP-ready):** 2027 figure updates the week CMS publishes; AEP
content live; weekly GBP posting begins; response-SLA drill.

**KPIs (review monthly):**

| Metric | 90-day target | AEP-end target (Dec 31) |
|---|---|---|
| GSC impressions/mo (per site) | 3,000 | 10,000 |
| Organic clicks/mo (per site) | 100 | 400 |
| GBP actions (calls+clicks)/mo | 20 | 75 |
| Google reviews (total, all profiles) | 8 | 20 |
| Leads/mo (calls + forms, both states) | 10 | 40 |
| Organic-sourced enrollments (cumulative) | 3 | 15 |

---

### Appendix A — defects fixed on branch `claude/medicare-website-strategy-yqahve`

**Georgia:** broken home-page og:image (`og-georgia.png` didn't exist) → now `og-georgia.jpg`
(real file, Atlanta skyline); added missing `twitter:image`.

**Arizona:** deleted 9 stray `index (N).html` uploads; deleted 13 stale old-generation page
directories whose trailing-slash canonicals conflicted with `vercel.json` (`trailingSlash:false`)
and the sitemap; added missing `/assets/favicon.svg`; 404 page set to `noindex, follow`;
llms.txt links normalized to canonical URLs.

**Known-open (needs owner action):** AZ `assets/photos/` upload; GA4 IDs; AZ llms-full.txt
regeneration. See §3.

### Appendix B — data-source note

Semrush and Ahrefs were both queried for keyword volumes and competitive metrics during this
analysis; both connectors returned plan-level API-access blocks (Semrush: plan without MCP
access; Ahrefs: "Insufficient plan"). Keyword-volume figures in §6 are therefore directional
estimates; SERP-competitor findings in §5 were verified by live web search in July 2026. To get
exact volumes: Google Keyword Planner (free with an Ads account) or upgrade either connector.
