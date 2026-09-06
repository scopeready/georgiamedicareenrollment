# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Static marketing/lead-generation site for ECOS Medicare Solutions (agent: Darin Weidauer, NPN 18580338) serving Georgia, live at https://georgiamedicareenrollment.com. There is no framework, package manager, build step, test suite, or linter — the repository root **is** the deployed site: ~34 hand-authored HTML pages plus shared `site.css`, `site.js`, and image assets.

## Deployment

- Hosted on **GitHub Pages**, served from the `main` branch root. Pushing to `main` deploys.
- `CNAME` (custom domain) and `.nojekyll` (empty; disables Jekyll processing) must never be deleted.
- **All internal links, image srcs, and asset references are relative** (`atlanta.html`, `site.css` — no leading `/`). This is deliberate so the site renders both at `username.github.io/repo/` and at the apex domain. Do not introduce root-absolute paths.

## Local preview

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## Site structure

- `index.html` — homepage, includes the Web3Forms contact form (POSTs to `api.web3forms.com/submit`, redirects to `thank-you.html`).
- City pages (`atlanta.html`, `savannah.html`, `columbus.html`, …) and region pages (`metro-atlanta.html`, `north-georgia.html`, `csra.html`, …).
- Plan/topic pages: `medicare-advantage.html`, `medicare-supplement.html`, `part-d.html`, `medicare-costs.html`, `chronic-snp.html`, `institutional-snp.html`, `medicaid.html`, `veterans.html`, `turning-65.html`, `fort-benning.html`.
- `privacy.html`, `terms.html`, `thank-you.html`.
- `site.css` / `site.js` — shared by every page. `site.js` is dependency-free: consent timestamp stamping, footer year, and IntersectionObserver scroll-reveal (skipped under `prefers-reduced-motion`).
- Images: real photos for Atlanta, Savannah, Columbus, North Georgia, and Veterans pages (with `-800w` responsive variants); other pages use inline SVG landscape scenes.

## Key conventions

- **Pages are self-contained.** Header, nav, footer, disclaimers, and `<head>` metadata are duplicated in every HTML file. A site-wide change (nav item, phone number, disclaimer wording, footer) must be applied to **every** page — grep across `*.html` to find all occurrences and verify with a count afterward.
- **Every page has**: a canonical URL including the `.html` suffix (`https://georgiamedicareenrollment.com/atlanta.html`), meta description, Open Graph tags, and JSON-LD structured data.
- **SEO/AI-discovery files must stay in sync with the page set**: when adding, renaming, or removing a page, update `sitemap.xml`, `llms.txt`, and `llms-full.txt` (the latter two describe every page for AI crawlers and also carry verified Medicare figures for the current plan year).
- Fonts are loaded from Google Fonts (Fraunces + Source Sans 3); everything else is self-hosted.

## Compliance — do not weaken

This is a Medicare marketing site subject to CMS/TPMO rules:

- Every page carries the TPMO disclaimer ("We do not offer every plan available in your area… not connected with or endorsed by the U.S. Government or the federal Medicare program") with specific counts (currently "8 organizations which offer 87 products"). Preserve this wording and keep the counts consistent site-wide; only change them when the user provides updated figures.
- Pages cite specific plan-year dollar figures (Part B premium, deductibles, Part D cap, IRMAA thresholds). Do not invent or "update" these numbers — only change them when the user supplies verified figures, and keep `llms.txt`/`llms-full.txt` consistent with the pages.
- The contact form records a permission-to-contact consent checkbox and hidden `consent_timestamp`; do not remove these.
- 1-800-MEDICARE is referenced as the official fallback; the business phone is (770) 285-5174 throughout.
