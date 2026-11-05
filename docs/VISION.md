---
covers: ["*"]
verified_at: 207fbc59
verified_on: 2026-10-24
---
# Product Vision & Strategic Direction

This repo is the marketing and acquisition website for Giddh, a cloud accounting product built by Walkover. It is not the product. Its job is to rank in search, explain Giddh to small and medium businesses in India, the UAE and the UK and to chartered accountants, and turn visitors into signups, demo requests and affiliate partners. Those visitors are then handed off to the Giddh app (`NEXT_PUBLIC_APP_URL`) and the existing Giddh API.

## Authoritative Sources & Status

Sources used: the user's confirmation on 2026-10-24 (approved direction), `README.md` (folder and styling conventions only, no purpose statement), `package.json` (name `next-giddh`, no description), the copy in `src/pages/about.js`, `src/pages/pricing.js` and `src/pages/chartered-accountant-signup.js`, page JSON in `src/data/pagesdata/`, titles and descriptions in `src/data/metadata.json`, the blog CMS in `public/admin/config.yml`, and git history (2,017 commits since 2023-07-18).

- **Approved Direction** (confirmed by the user, 2026-10-24):
  - The ICP is SMBs in India, the UAE and the UK, plus chartered accountants who manage clients.
  - The website holds no accounting product logic; that lives in the Giddh app.
  - It adds no backend or APIs of its own and only calls the existing Giddh API.
  - Pages stay static and SEO-first: marketing content is never rendered client-only.
  - Release flow: `<clickup-id>-web` → `web` (Netlify test site) → `main` (production giddh.com). See [DEVELOPMENT.md](DEVELOPMENT.md).
  - The only company-level purpose statement in the sources is in `src/pages/about.js`, as stated on the site: "provide technologies to organizations that enables them to take data driven financial decisions in the quickest way possible."
- **Current Implementation** (at `d66a2a8f`):
  - Four locale trees: global (`src/pages/`, 37 top-level page files besides `_app`/`_document`/`404`), `src/pages/in/` (35), `src/pages/ae/` (32) and `src/pages/uk/` (32).
  - India-only pages: `src/pages/in/gst.js`, `src/pages/in/e-invoice.js`, `src/pages/in/bank-integration.js` and `src/pages/in/tally-to-giddh-migration.js`. UAE and UK only: `src/pages/ae/vat.js` and `src/pages/uk/vat.js`.
  - Global-only funnel pages: `src/pages/chartered-accountant-signup.js`, `src/pages/online-accounting-software.js` (demo landing page), `src/pages/thank-you.js`, `src/pages/payment.js` (Razorpay checkout) and `src/pages/googleauth.js`.
  - Also live: the MDX blog (`_posts/blog/`, 253 posts, Decap CMS), the affiliate program (`src/pages/affiliate.js`) and comparison and switching pages (`src/pages/tally-vs-giddh.js`, `src/pages/zoho-vs-giddh.js`, `src/pages/make-the-switch.js`).
  - Mechanics are documented in [ARCHITECTURE.md](ARCHITECTURE.md) and [FLOWS.md](FLOWS.md).
- **Proposals & Roadmaps** (unmerged remote branches; none is approved):
  - `origin/86d3e3xxz-web` (2026-10-15) rewrites the UK/UAE JSON for the feature pages (triggers, customer portal, magic link, email-to-bank sync and others). <!-- verify:ignore -->
  - `origin/86d241cne-main` (2026-03-19) adds an FAQ page in every locale. <!-- verify:ignore -->
  - `origin/86d0zqj36-main` (2026-04-30) is named "Removed AE region support" and maps login regions to UK and IN only. The separate AE session cookie is already gone on `web` (PRs #767 / #768, [DECISIONS.md ADR-008](DECISIONS.md#adr-008-per-region-session-cookies-uk-vs-in)); the branch would go further and drop AE from login region mapping. That conflicts with the UAE being in the ICP, so it must not be merged without confirmation. <!-- verify:ignore -->
- **Unknowns & Ambiguities:** see [OPEN_QUESTIONS.md](OPEN_QUESTIONS.md).

## Target Audience & Ideal Customer Profile (ICP)

- **Primary Persona:** an owner or finance person at a small or medium business in India, the UAE or the UK who needs invoicing, tax compliance (GST in India, VAT and HMRC in the UAE and UK), inventory and reporting without desktop software. They are not technical. Each market gets its own copy: the `/in`, `/ae` and `/uk` entries in `src/data/metadata.json`, and `src/data/pagesdata/in/home.json` vs `src/data/pagesdata/global/home.json`.
- **Secondary Personas:**
  - **Chartered accountants and CPAs** who manage many client companies. `src/pages/chartered-accountant-signup.js` (an ICAI-member landing page, Sep 2026) promises "unlimited client organizations" and collects an MRN (membership registration number). `src/pages/pricing.js` also has an "Accounting Software for CAs and CS" section.
  - **Affiliates and partners** who refer businesses for commission (`src/data/pagesdata/global/affiliate.json`).
  - **Students and teachers**, offered free use as stated in `src/pages/pricing.js`.
  - **Existing users** who use the site's `/login` and `/signup` to reach the app (`src/pages/login.js`, `src/pages/signup.js`).

## Problems Solved & Value Proposition

Everything in this table is what the site says about itself, not confirmed company strategy.

| Customer Problem | How We Solve It | Unique Value / Differentiator |
|---|---|---|
| Manual spreadsheets or offline software for financial data (`src/pages/pricing.js`) | Cloud accounting with access on desktop, Android and iOS (`src/data/pagesdata/global/home.json` → `features`) | "Simplified Ledger-Based Accounting… No need for voucher navigation" (same file) |
| GST filing burden in India (`src/data/pagesdata/in/home.json`, `src/data/pagesdata/in/gst.json`) | Built-in GST returns and reports, e-invoicing (`src/data/pagesdata/in/e-invoice.json`) | Pitched as "fully automated GST filing" |
| VAT compliance in the UAE and UK (`src/pages/ae/vat.js`, `src/pages/uk/vat.js`, and the `/ae` and `/uk` entries in `src/data/metadata.json`) | VAT filing and reporting | "HMRC-friendly" (the `/uk` entry in `src/data/metadata.json`) |
| Being locked into Tally or Zoho (`src/data/pagesdata/in/tally-vs-giddh.json`, `src/data/pagesdata/in/zoho-vs-giddh.json`) | Migration and import (`src/data/pagesdata/in/make-the-switch.json`, `src/data/pagesdata/in/tally-to-giddh-migration.json`) | Cloud-based alternative with a "Start Free Migration" CTA |
| International trade in many currencies | Automatic currency conversion (`src/data/pagesdata/in/multi-currency-accounting-software.json`, and the "Automatic Currency Conversion" item under `features` in `src/data/pagesdata/global/home.json`) | "over 160 currencies" |
| Manual data entry and slow collections | Bill scanning, email-to-bank sync, recurring invoices, triggers, customer portal, magic links (`src/data/pagesdata/global/`) | Automation features added in Jun 2026 |
| CAs juggling many client books (`src/pages/chartered-accountant-signup.js`) | Multi-company dashboard, GST filing, bank reconciliation, audit trail | "Unlimited client organizations" |
| Teams sharing one ledger (`src/data/pagesdata/in/multi-user-accounting-software.json`) | Multi-user access with access control | Testimonials claim real-time use "without any limits" (`src/data/pagesdata/global/home.json` → `testimonials`) |

## Core Principles & Design Philosophy

1. **SEO-first static pages:** marketing copy has to be in the HTML that pages-router static generation produces. Content goes in page JSON or JSX, never behind a client-side fetch. Known gap: plan prices on `src/pages/pricing.js` are fetched in `useEffect` from `/v2/subscription/plans/all`, so prices are missing from the static HTML. Treat it as legacy and don't copy the pattern. <!-- verify:ignore -->
2. **The site is a funnel, not the product:** every page leads to `/signup`, the demo form on `/online-accounting-software`, `/chartered-accountant-signup` or the affiliate form. Accounting behaviour is described, never implemented.
3. **Market-specific truth:** each locale has to use its own tax regime and currency. Today's metadata breaks this: the `/ae/affiliate`, `/affiliate` and `/uk/terms` descriptions say "GST", the global `/contacts` description talks about UAE terms, and `/uk/inventory-management-software` carries the terms description (all in `src/data/metadata.json`).
4. **Locale parity is deliberate:** a global page usually has `in`, `ae` and `uk` twins, built either from shared page JSON (`src/data/pagesdata/{global,in,ae,uk}/`) or by re-exporting the global page (`src/pages/ae/affiliate.js`). A locale is left out only on purpose, as with GST pages for India only and VAT pages for the UAE and UK only.
5. **Content as data:** newer pages render `src/components/Pages/` with `src/components/NewComps/` from JSON. Older pages, including `src/pages/ae/index.js`, still use legacy components such as `src/components/bannerSection.js`. Build new pages the JSON way (inference from history; see [DECISIONS.md](DECISIONS.md) and [RECIPES.md](RECIPES.md)).
6. **Real backend only:** forms call the existing Giddh API or third parties listed in [CONTRACTS.md](CONTRACTS.md). Nothing is faked.

## Strategic Priorities & Success Measures

- **Top Priorities** (inferred from 2026 git history, not confirmed):
  1. Acquiring chartered accountants: the ICAI landing page, MRN capture and the QR code (Sep 2026).
  2. Partner-led growth: the affiliate page refactor, OTP and webhook work (May–Aug 2026).
  3. Organic search: blogs 73–104 plus "opt" rewrites, the Screaming Frog audit fixes and the redirects in `public/_redirects` (Jan–Apr 2026).
  4. Feature landing pages for app features and competitor comparisons (Jun–Oct 2026).

> [!TODO] Confirm the priority order, and how much each market (IN vs AE vs UK) matters. The blog is global-only and its tags in `public/admin/config.yml` lean toward India.

- **Key Success Metrics:** the code tracks attribution with GTM, `src/utils/segmento.js` and `src/utils/utmParams.js`, but no source names a KPI.

> [!TODO] Name the success metrics (for example signups per locale, demo requests, CA signups, affiliate signups, organic traffic) and say where they are measured.

## Boundaries & Non-Goals

- **Explicit Non-Goal:**
  - No accounting or product logic: no ledgers, GST calculation or invoicing engines in this repo.
  - No new backend or API routes: the repo has no `api/` folder, and that must not change, even though `README.md` mentions "app - for APIs", a leftover. <!-- verify:ignore -->
  - No client-only rendering of marketing content.
- **Anti-Patterns:**
  - Hardcoding numbers that belong to the API, such as prices or plans.
  - Mock endpoints or fake success states on forms.
  - Copying India-specific GST copy into UAE or UK pages.
  - Removing a URL without adding a 301 to `public/_redirects`. For example, `/ca-signup` was renamed to `/chartered-accountant-signup` on 2026-09-21 with no redirect. <!-- verify:ignore -->

## How Future Agents Must Evaluate Requests

When evaluating any user or feature request, follow this protocol:
1. **Align with Approved Direction:** Compare the request against the principles, ICP, and non-goals above.
2. **Improve Unclear Requests:** If a request is ambiguous or underspecified, clarify the problem it solves and suggest improvements aligned with this vision before writing code.
3. **Flag Conflicts:** If a request directly contradicts an approved principle or non-goal, explain the conflict clearly and recommend declining or modifying the change.
4. **Explicit Direction Changes:** If the user intentionally wishes to change product direction, make that decision explicit, confirm the strategic shift, and update this document alongside code changes.
5. **Contract Boundaries (No Fabricated Integrations):** If a requested frontend feature requires unavailable backend capabilities, describe the required backend API or contract clearly in [docs/CONTRACTS.md](CONTRACTS.md). **Never fabricate mock endpoints or fake working integrations that give a false impression of backend readiness.**

What this means in this repo:

- **"Add an accounting feature, like a GST calculator, ledger or invoice builder"** → decline here and point to the Giddh app. If the user wants a *marketing page about* that feature, build it from page JSON (see [RECIPES.md](RECIPES.md)).
- **"Save this form", "show the user's plan", or anything else that needs data the Giddh API doesn't expose** → write the needed request and response in [CONTRACTS.md](CONTRACTS.md), mark it unavailable, and don't add Next.js API routes, mocks or a hardcoded success toast.
- **"Load this section with useEffect or fetch it client-side", or a CSR-only widget for marketing copy** → this conflicts with the SEO-first non-goal. Put the copy in page JSON or static props instead.
- **A change to a global page** → check the `src/pages/in/`, `src/pages/ae/` and `src/pages/uk/` variants and their JSON in `src/data/pagesdata/`, plus the metadata keys in `src/data/metadata.json` and `src/data/hrefLangTag.json`. Fix tax terms per market (GST vs VAT). If you leave a locale out, say so.
- **A renamed or removed route** → add a 301 to `public/_redirects` in the same change.
- **"Drop UAE" or another market** → that changes the ICP. Confirm it with the user and update this file before touching code. Don't merge `origin/86d0zqj36-main` on its own say-so. <!-- verify:ignore -->
- **Copy that makes claims (stats, "unlimited", "160 currencies", commission rates)** → reuse existing site copy or ask. Never invent product claims or testimonials.
