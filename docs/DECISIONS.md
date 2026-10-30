---
covers: ["*"]
verified_at: fa3d74c4
verified_on: 2026-10-30
---
# Architectural & Design Decisions (ADRs)

Recovered from git history (2,017 commits, 2023-07-18 → 2026-09-26). Commit messages in this repo rarely state a reason, so most rationale below is labelled **inference**. PR numbers come from GitHub merge commits. Where nothing records the reason, see [OPEN_QUESTIONS.md](OPEN_QUESTIONS.md).

## Decision Index

| Date | Decision Record | Status | Area Affected | Key Rationale |
|---|---|---|---|---|
| 2023-07-18 | [ADR-001: Rebuild the WordPress site in Next.js and keep old URLs alive](#adr-001-rebuild-the-wordpress-site-in-nextjs-and-keep-old-urls-alive) | Accepted | Routing / Hosting | Keep SEO equity from WP-era URLs |
| 2023-08-08 | [ADR-002: Locales as mirrored page folders, not Next i18n](#adr-002-locales-as-mirrored-page-folders-not-next-i18n) | Accepted | Routing / SEO | Per-country content and pricing |
| 2023-08-26 | [ADR-003: Blog as MDX files in the repo (Decap CMS + HTML mode)](#adr-003-blog-as-mdx-files-in-the-repo-decap-cms--html-mode) | Accepted | Content | Static, git-reviewed blog |
| 2024-04-16 | [ADR-004: Anti-framing headers in Netlify `_headers`](#adr-004-anti-framing-headers-in-netlify-_headers) | Accepted | Security | Only layer that worked on Netlify |
| 2025-09-19 | [ADR-005: JSON-driven pages with NewComps sections](#adr-005-json-driven-pages-with-newcomps-sections) | Accepted | UI / Data | One page component per type, content in JSON |
| 2025-12-20 | [ADR-006: Pricing rewrite rolled back to the legacy page](#adr-006-pricing-rewrite-rolled-back-to-the-legacy-page) | Accepted | Pricing | Discount bug in the new version |
| 2025-12-16 | [ADR-007: Next 16 + React 19 + Turbopack](#adr-007-next-16--react-19--turbopack) | Accepted | Build | Framework upgrade |
| 2026-04-30 | [ADR-008: Per-region session cookies (UK vs IN)](#adr-008-per-region-session-cookies-uk-vs-in) | Accepted | Auth | UK users hit a separate server |
| 2025-07-21 | [ADR-009: UTM attribution in `helper.js`, sent to Segmento](#adr-009-utm-attribution-in-helperjs-sent-to-segmento) | Accepted | Analytics | Lead source tracking |
| 2026-03-18 | [ADR-010: SEO "clean" passes with path-keyed metadata](#adr-010-seo-clean-passes-with-path-keyed-metadata) | Accepted | SEO | Audit-driven fixes |
| 2026-02-02 | [ADR-011: Desktop-app download URLs centralised in `s3Config`](#adr-011-desktop-app-download-urls-centralised-in-s3config) | Accepted | Downloads | Test vs prod buckets |
| 2025-03-05 | [ADR-012: `web` staging branch; no committed env or lockfile](#adr-012-web-staging-branch-no-committed-env-or-lockfile) | Accepted | Delivery | Netlify test site before prod |
| 2026-10-24 | [ADR-013: AI-readiness prep: docs set and evidence-based cleanup](#adr-013-ai-readiness-prep-docs-set-and-evidence-based-cleanup) | Accepted | Repo-wide | Agents need verified docs; dead code removed only with 7-point evidence |
| 2026-10-30 | [ADR-014: Settings inventory in CONFIGURATION.md](#adr-014-settings-inventory-in-configurationmd) | Accepted | Configuration | Env vars and literals had no single list |

---

## ADR-001: Rebuild the WordPress site in Next.js and keep old URLs alive
### Status
Accepted
### Context & Problem Statement
giddh.com used to be a WordPress site. Evidence: WP plugin assets copied into `public/uploads/` (`wp-megamenu`, `wp-file-manager-pro`, `redux`) in `b8336c13` (2023-08-29), and old `/Giddh/...`, `/2021/08/...`, `/blog/.../feed/` and `?p=login` `.php` URLs in `public/_redirects`. <!-- verify:ignore -->
### Decision & Implementation
The site was rebuilt as a Next.js pages-router app (`c1ae7ba6`, 2023-07-18, "intializing next in giddh-website"). Old URLs are kept with Netlify 301s in `public/_redirects` (about 2,000 lines). The client-side fallback `public/js/helper.js:redirectPhpLink` strips a trailing `.php` (`b14b3568`, 2023-09-04). <!-- verify:ignore -->
### Supporting Evidence & Past Incidents
- PR #353 (`9a4e0d99`, 2024-02-29), commit `7d25ad0c`: "write bulk redirection code in nodejs". It generated 803 rules from a gitignored `public/404.csv` with a `public/node.js` script. That script and its `csv-parser` dependency are no longer in the repo. <!-- verify:ignore -->
- More redirect batches followed broken-link audits: `b571e469`, `c445107b` (2025-07), `9a8d6674`, `9793977c` (2025-10).
### Consequences & Trade-offs
- **Positive:** WP-era backlinks still resolve.
- **Negative / Constraints:** `public/_redirects` is edited by hand and the generator is gone. Renaming or removing a page needs a manual rule (see the `ca-signup` incident below). `public/uploads/` still holds about 877 unreferenced WordPress media files; the WordPress server artefacts there (an `.htaccess`, a PHP stub, an installer log) were removed in `5ece024c`.
### Superseded / Rejected Alternatives
1. **Keeping WordPress:** replaced. No reason is recorded.

---

## ADR-002: Locales as mirrored page folders, not Next i18n
### Status
Accepted
### Context & Problem Statement
Content, pricing (GST vs VAT) and contact details differ for India, UAE and the UK.
### Decision & Implementation
Each locale gets its own copy of the page file under `src/pages/in/`, `src/pages/ae/` and `src/pages/uk/` (`3b1e1438`, 2023-08-08, "Pages added in uk ae"). `src/pages/_app.js:MyApp` reads the country from the first path segment and builds the `path` prop. hreflang alternates are rendered in `src/components/header.js:Header`, but only for the pages listed per locale in `src/data/hrefLangTag.json`.
### Supporting Evidence & Past Incidents
- hreflang series, 2024-02-13 to 2024-02-17: `b3a4c39b`, `1c46d7ba`, `a0599672`, `1753ad88`. `84be4693` removed tally-vs-giddh from crawl. Later fixes: `79c1e313` (2025-04), `99c32272` (2025-08).
- `e19502f9` (2024-04-12) deleted a commented-out `i18n: { locales: ["en"] }` block from `next.config.js`.
### Consequences & Trade-offs
- **Positive:** Each locale page can have its own content and URL.
- **Negative / Constraints:** A new page means up to four page files, plus entries in `src/data/hrefLangTag.json` and `src/data/metadata.json`. Missing one fails silently, with no hreflang or meta tags.
### Superseded / Rejected Alternatives
1. **Next.js built-in i18n:** it was only ever a commented-out stub and was removed in `e19502f9`. Why it was dropped is not recorded.

---

## ADR-003: Blog as MDX files in the repo (Decap CMS + HTML mode)
### Status
Accepted
### Context & Problem Statement
The blog needs to be static and SEO-friendly. Non-developers were expected to edit it.
### Decision & Implementation
Posts are `_posts/blog/*.mdx` files with frontmatter. `src/components/blogs/lib/posts.js:fetchPostContent` reads them, and `src/pages/blog/[slug].js` renders them with `next-mdx-remote`. Decap/Netlify CMS was added at `public/admin/config.yml` (`aeba0dbc`, 2023-08-26), set up with git-gateway, branch `main` and the editorial workflow. Since 2025-07-29 (`17da4a07`), a post's frontmatter can point to a raw HTML file in `src/data/htmlblogs/` instead; it is injected with `dangerouslySetInnerHTML`. Blog JSON-LD comes from `src/utils/getBlogSchema.js` (`136a61eb`, 2025-08-19, "blog schema automated").
### Supporting Evidence & Past Incidents
- The CMS commits ("Create Blog …") all date from 2023-09-01 to 2023-09-11. Since then, posts are committed by developers, e.g. `55303f0a` (2026-03-17, "Added blog till 100").
- `c730ecc1` (2025-11-13, PR #630) "handled blog renderng issue on netlify": `getStaticProps` now fails the build when a slug has no MDX file.
### Consequences & Trade-offs
- **Positive:** Blog pages are generated at build time, and every content change goes through git.
- **Negative / Constraints:** One bad MDX file breaks the whole build (`cdc78f36`). HTML-mode posts are not sanitised.
### Superseded / Rejected Alternatives
1. **Editing through Decap CMS:** it is still configured, but there is no CMS commit since 2023-09. *Inference:* it is no longer used.

> [!TODO]
> Whether `public/admin/` (Decap CMS) is still in use is not recorded. Needs a human.

---

## ADR-004: Anti-framing headers in Netlify `_headers`
### Status
Accepted
### Context & Problem Statement
Other sites must not be able to frame giddh.com (clickjacking).
### Decision & Implementation
`public/_headers` sends `X-Frame-Options: DENY` and `Content-Security-Policy: frame-ancestors 'none'` for `/*`.
### Supporting Evidence & Past Incidents
- PR #365 (`e3b84741`, 2024-04-16, "Add content security policy"). It went through four attempts in five days:
  1. `9fbbb070` (2024-04-12): a meta tag in `src/components/header.js`.
  2. `e19502f9` (2024-04-12): Next `headers()` in `next.config.js`, with `SAMEORIGIN`.
  3. `1f5e51df` (2024-04-15): an Apache `public/.htaccess` file. <!-- verify:ignore -->
  4. `32b22d22` (2024-04-16): the Netlify `_headers` file, which was kept.
### Consequences & Trade-offs
- **Positive:** The headers apply to every route at the CDN.
- **Negative / Constraints:** No other CSP directives exist. Adding embeds or third-party scripts needs no CSP change today.
### Superseded / Rejected Alternatives
1. **Meta tag CSP:** browsers ignore `frame-ancestors` in a meta tag. That is general knowledge, not recorded in the commit.
2. **`next.config.js` headers():** replaced the next day. *Inference:* the headers did not reach the deployed Netlify site.
3. **`.htaccess`:** Netlify does not read Apache config.

---

## ADR-005: JSON-driven pages with NewComps sections
### Status
Accepted
### Context & Problem Statement
Before this, each locale's page file carried its own hard-coded JSX. Duplicating that across four locales caused drift.
### Decision & Implementation
- Reusable sections live in `src/components/NewComps/` (first added in `28737e59`, 2025-07-09, for the landing page; PR #459).
- `src/utils/getPageInfo.js:getPageInfo` maps a route to `{country, folder, page}`. `src/utils/getPageData.js:getPageData` then loads `src/data/pagesdata/<country>/<page>.json`, but only for pages listed in its `pagesToGetData` array.
- `src/pages/_app.js:MyApp` passes `pageData` to thin page files. For example, `src/pages/index.js` renders `src/components/Pages/Home.js`, which composes the NewComps sections. `src/components/NewComps/Schema` renders `pageData.schemas` and `pageData.faqs`.
### Supporting Evidence & Past Incidents
- `d61a6aa6` (2025-09-19), "create getPageData and getPageInfo function". Home page: PR #553 (`b21c52c9`, web, 2025-09-26).
- PR #559 put this on main and PR #564 reverted it the same day (`e6b68a67`, 2025-09-26). PR #561 "Build change" (`2606b0ad`) renamed `pageData` to `pagesdata`. PR #573 (`397277c0`, 2025-10-16) re-landed it together with the landing pages.
- PR #740 (`302e51ec`, 2026-03-05, branch `86d18fkty-test-clean`, `c44d6d83`) moved make-the-switch, zoho-vs-giddh and financial-reporting to JSON.
- `7ddc3964` (2025-09-26) added the `pagesToGetData` allowlist so that static pages skip the lookup.
- PR #828 (`63cb6ea0`, merged 2026-10-28 from `86d3e3xxz-web`) rewrote the JSON and the section order for the feature pages and for `src/components/Pages/InvoiceSoftware.js`. Several compositions dropped `quickStartSection` and `ctaTwo` and started passing `benefits` and `giddhVs`. AE and UK home pages were not converted. See [Q-010](OPEN_QUESTIONS.md#active-questions-table).
### Consequences & Trade-offs
- **Positive:** Locale variants share one component. Content edits only touch JSON.
- **Negative / Constraints:** A new JSON page must also be added to `pagesToGetData`, or it gets `pageData = null` with no error. Since `02dd10f2` the `catch` block swallows load errors. Since `c44d6d83` the code calls `require` with a variable (`require(filePath)`) rather than a literal.
### Superseded / Rejected Alternatives
1. **Per-page hard-coded JSX:** still used by non-allowlisted pages such as `src/pages/about.js`, `src/pages/pricing.js` and `src/pages/signup.js`. It is being migrated page by page.

---

## ADR-006: Pricing rewrite rolled back to the legacy page
### Status
Accepted (rewrite superseded)
### Context & Problem Statement
The pricing page is hand-written JSX. It fetches plans from the Giddh API in the browser and merges them with feature rows from `src/data/pricingData.json`.
### Decision & Implementation
`src/pages/pricing.js` still calls `${NEXT_PUBLIC_API_URL}/v2/subscription/plans/all?regionCode=…` inside a `useEffect`. The rewrite used NewComps, JSON and a `getPricingPlans.js` utility that sanitised HTML with DOMPurify. It was removed from `web`. <!-- verify:ignore -->
### Supporting Evidence & Past Incidents
- PR #645 `pricing-clean` (`171d8125`, 2025-12-10): added `src/utils/getPricingPlans.js` (`4a8d1975`) and DOMPurify sanitising (`f5401940`). <!-- verify:ignore -->
- `2cfe67c3` (2025-12-19) "pricing discount issue clean". Then `290dba4b` (2025-12-20) "syncing web with old pricing", merged as PR #673 "discount pricing issue" (`82fd292a`), deleted the rewrite.
### Consequences & Trade-offs
- **Positive:** Restored the known-good discount display.
- **Negative / Constraints:** Pricing is rendered in the browser, so plan prices are not in the static HTML. That conflicts with the SEO-first rule in [VISION.md](VISION.md). The DOMPurify dependency from that rewrite is not in `package.json` now. ADR-013 records the removal (`9ebe342f`).
### Superseded / Rejected Alternatives
1. **NewComps/JSON pricing page (PR #645):** rolled back because of the discount bug. The bug itself is not described in any commit.

> [!TODO]
> What exactly the discount issue was, and whether the rewrite will return, is not recorded. Needs a human.

---

## ADR-007: Next 16 + React 19 + Turbopack
### Status
Accepted
### Context & Problem Statement
The site had run on Next 13.4 and React 18.2 since 2023.
### Decision & Implementation
`868cd374` (2025-12-11) bumped `next` from ^13.4.10 to ^16.0.8, `react`/`react-dom` from 18.2.0 to ^19.2.1, and `next-mdx-remote` from ^4.4.1 to ^5.0.0. `next.config.js` sets `turbopack: {}` so that the old webpack `fs: false` fallback no longer triggers a warning. `sassOptions.silenceDeprecations: ['import']` was added in `8cee722c` (2026-03-17, "fixed scss error").
### Supporting Evidence & Past Incidents
- PR #656 (`ca184320`, 2025-12-16) "PIYUSH | TEST | Next.js version update".
### Consequences & Trade-offs
- **Positive:** The framework is current.
- **Negative / Constraints:** The `lint` script is still `next lint`, which Next 16 removed. Running it fails (verified 2026-10-24, [Q-012](OPEN_QUESTIONS.md#active-questions-table)). SCSS still uses `@import`, with the deprecation warning silenced.
### Superseded / Rejected Alternatives
1. **Staying on Next 13 with webpack:** replaced. No reason is recorded.

---

## ADR-008: Per-region session cookies (UK vs IN)
### Status
Accepted
### Context & Problem Statement
UK users sign up against separate "GB" APIs (`1d1a58da`, `c7da243e`, 2024-10). After login, refreshing or going back sent UK users to the India server.
### Decision & Implementation
`public/js/helper.js:getRegionSessionCookieName` maps UK to `giddh_session_id_uk` and every other region to `giddh_session_id`. Login pages read the cookie for their region: `src/pages/login.js`, `src/pages/signup.js`, `src/pages/v2/login.js`.
### Supporting Evidence & Past Incidents
- `a337dcb7` (2026-04-30) added region session cookies, including AE. PR #767 (`94b07d47`) and PR #768 (`7cf44b74`) then "Removed AE region support and simplified region mapping to UK and IN only".
- `src/pages/v2/login.js` was created in `6e022407` (2023-09-22). `a19343e7` marked it `noindex, nofollow` (see `src/components/header.js:Header`).
### Consequences & Trade-offs
- **Positive:** UK sessions no longer fall back to India.
- **Negative / Constraints:** UAE shares the India session cookie. Any new region-specific backend needs a new map entry.
### Superseded / Rejected Alternatives
1. **One `giddh_session_id` for all regions:** caused incident #768.
2. **A separate AE cookie:** added and removed on the same day. No reason is recorded.

---

## ADR-009: UTM attribution in `helper.js`, sent to Segmento
### Status
Accepted
### Context & Problem Statement
Marketing needs to know the source of each signup and demo request.
### Decision & Implementation
`public/js/helper.js:setUtmParamInLocalStorage` and `setUtmParamsInCookies` capture query parameters. `src/utils/utmParams.js:getUtmParamsFromCookies` reads them back, and `src/utils/segmento.js:sendDataInSegmento` posts lead data, mainly from `src/components/NewComps/BookFreeDemoForm/index.js`.
### Supporting Evidence & Past Incidents
- `6a2eb381` (2025-07-21, PR #463): Segmento API added. `56c83fa1` (2025-12-31): UTM data attached to Segmento payloads.
- `b666da20` (2026-01-07): the UTM cookie domain changed from the base domain (`.giddh.com`) to the exact host.
- `3f087e99` (2026-09-18): `public/js/helper.js:setCookie` went back to `.giddh.com` on any `giddh.com` host (exact host elsewhere, none on localhost). This is the current behaviour.
- `07e79c80` (2026-09-15): only `utm_*`, `ref`, `region` and `source` are kept as standard keys. Any other parameters are stored under `source`.
### Consequences & Trade-offs
- **Positive:** One capture point for the whole site.
- **Negative / Constraints:** Because cookies are now host-only, the app on another subdomain cannot read UTM cookies set on the website. *Inference:* that is the intent. Analytics code lives in a global script outside the React tree.
### Superseded / Rejected Alternatives
1. **Exact-host UTM cookies (`b666da20`):** reverted to the base domain in `3f087e99`. No reason is recorded for either change.

---

## ADR-010: SEO "clean" passes with path-keyed metadata
### Status
Accepted
### Context & Problem Statement
Technical SEO audits (Screaming Frog, broken links) reported missing headings, meta tags, og images and bad internal links.
### Decision & Implementation
Titles, descriptions and keywords live in one map, `src/data/metadata.json`, keyed by path and read by `src/components/header.js:Header` (since `006085d9`, 2023-08-07). Fixes are made in batches on "clean" branches.
### Supporting Evidence & Past Incidents
- PR #636 `86d102mc5-main` (2025-11-19, "href interlinking issues").
- "Isha | cleaning web" batches 1–3: `c8a8cc29`, `5d26894f`, `089ced80` (2026-01-27).
- PR #742 `86d102mc5-clean` (`3e41ba30`, 2026-03-18, "Fixed seo issues", 82 files). It includes `cd4550fb` "resolved screaming frog Audit" and `37bc6a9a` "Added ogImage for missing blogs".
- `public/sitemap.xml` is a static file committed once in `ad04b9d1` (2025-06-27) and never changed since.
### Consequences & Trade-offs
- **Positive:** One file to audit for meta tags.
- **Negative / Constraints:** The sitemap is stale. It is missing `triggers`, `customer-portal`, `chartered-accountant-signup` and `tally-to-giddh-migration`, and lists 187 `/blog/` URLs, while 169 of the 253 MDX posts have no matching URL (many listed URLs are old slugs).
### Superseded / Rejected Alternatives
> [!TODO]
> No commit records why the sitemap is hand-maintained rather than generated at build time. Needs a human.

---

## ADR-011: Desktop-app download URLs centralised in `s3Config`
### Status
Accepted
### Context & Problem Statement
Download links for the Electron desktop app were hard-coded S3 URLs in `src/components/downloadFreeModal.js` and `src/components/footer.js`.
### Decision & Implementation
`src/utils/s3Config.js` (`getDownloadUrl`, `getAppVersion`) picks the bucket and environment name from env config and falls back to a default version.
### Supporting Evidence & Past Incidents
- `0e6bba84` (2026-01-16), merged in PR #720 (`6169c92a`, 2026-02-02, "Setup Auto Electron Build Github action for Test and Production"). Then `e5df4e87`/`aa052f76` (2026-01-21) "centralized test environment path".
### Consequences & Trade-offs
- **Positive:** Test and prod builds link to the matching bucket.
- **Negative / Constraints:** The GitHub Action named in the PR title is not in this repo, which has no `.github/`. *Inference:* it lives in the Electron repo. <!-- verify:ignore -->
### Superseded / Rejected Alternatives
1. **Hard-coded URLs in components:** replaced.

---

## ADR-012: `web` staging branch; no committed env or lockfile
### Status
Accepted
### Context & Problem Statement
Changes need a Netlify test site before they reach production on `main`. The full flow is in [DEVELOPMENT.md](DEVELOPMENT.md).
### Decision & Implementation
Feature branches named `<clickup-id>-web` open PRs into `web`, which is then promoted to `main`. The first `web` → `main` PR was #437 (`8ffc361d`, 2025-03-05, "Web to Main"), and the first `-web` feature branch was PR #471 (2025-07-22). `.gitignore` excludes `package-lock.json` and `.env*`. <!-- verify:ignore -->
### Supporting Evidence & Past Incidents
- `7784cc3a` (2023-08-14) deleted `package-lock.json`, and `11b7b02a` (2023-08-09) added it to `.gitignore`.
- `.env.production` was tracked until `61ca0644`, merged in PR #536 (`d382d95c`, 2025-09-11). It held only `NEXT_PUBLIC_*` names, and the values remain in git history. <!-- verify:ignore -->
### Consequences & Trade-offs
- **Positive:** There is a review step on the test site before production.
- **Negative / Constraints:** Dependency versions are not reproducible, because builds resolve `^` ranges fresh each time. `web` is 142 commits ahead of `main`, so cherry-picks between the two are common (e.g. `4a8d1975` "cherry pick").
### Superseded / Rejected Alternatives
1. **PRs straight to `main`** (2023 to early 2025): replaced by the `web` staging flow.

---

## ADR-013: AI-readiness prep: docs set and evidence-based cleanup
### Status
Accepted, 2026-10-24, on branch `ai-docs-web` (cut from `web`).
### Context & Problem Statement
The repo had only a short `README.md`, no tests and no working lint, so agents and new engineers had to rediscover the locale model, the two page systems and the deploy flow every time.
### Decision & Implementation
- Added `AGENTS.md` (entry point), `CLAUDE.md` (`@AGENTS.md`) and this `docs/` set. `docs/.ai-docs.json` records the verified commit.
- Removed only code that cleared all seven evidence checks (runtime registration, dynamic imports, routing, flags, CSS refs, build/static config, external consumers): `8b45872d` (unused NewComps sections, `gstIndexPage.js`, `getMdIcons.js`), `408523df` (3 dead SCSS partials), `9ebe342f` (`dompurify`, `path`), `5ece024c` (WordPress server artefacts, `vercel.svg`), `250f50f8` (dead commented imports), `207fbc59` (`config.js` template keys). <!-- verify:ignore -->
### Supporting Evidence & Past Incidents
- After each step: `npm run build` passed with the baseline's warnings, the 402-page list was identical, and 0 of 402 prerendered HTML files differed once chunk hashes were normalised. The method is in [DEVELOPMENT.md](DEVELOPMENT.md#how-an-agent-checks-its-work-verification-checklist). The SSR routes `/blog` and `/blog/tags/*` were checked in the browser.
### Consequences & Trade-offs
- **Positive:** less code to misread. Docs are tied to a commit and checkable.
- **Negative / Constraints:** docs must be updated in the same change as the code they describe.
### Superseded / Rejected Alternatives
1. **Deleting the ~61 MB of unreferenced public assets:** deferred. External hot-links can't be ruled out from the repo ([OPEN_QUESTIONS.md](OPEN_QUESTIONS.md) Q-005).
2. **Fixing the defects found (payment v1, UK OTP API, schema prop, …):** deferred. They change behaviour, so each needs its own PR (Q-018 to Q-030).

---

## ADR-014: Settings inventory in CONFIGURATION.md
### Status
Accepted, 2026-10-30.
### Context & Problem Statement
Env vars were described only inside [DEVELOPMENT.md](DEVELOPMENT.md). Hard-coded settings (the MSG91 widget literals, the GTM id, Decap, `next.config.js`, cookie names, `pagesToGetData`) had no single list. The repo still has no env example file.
### Decision & Implementation
[CONFIGURATION.md](CONFIGURATION.md) lists every setting the code reads, with no deployed values and without the MSG91 literals. [DEVELOPMENT.md](DEVELOPMENT.md) keeps the setup steps and the env table. `scripts/vendor/ai-docs/verify_docs.py` looks for env var names in DEVELOPMENT.md, not in CONFIGURATION.md, so a new variable has to be named in both ([RECIPES.md](RECIPES.md#add-an-environment-variable)).
### Supporting Evidence & Past Incidents
- At `fa3d74c4`, `process.env` is read in eleven places. Every name starts with NEXT_PUBLIC_, and every reader also runs in the browser. `src/utils/msg91Otp.js` does not read `NEXT_PUBLIC_MSG91_AUTH_KEY`. The OTP widget id and token are literals in `public/js/helper.js` `getOtpwidgetConfiguration`.
### Consequences & Trade-offs
- **Positive:** An agent can see which settings move with a rebuild and which move only with a code edit.
- **Negative / Constraints:** Two docs name the env vars. Forgetting CONFIGURATION.md leaves the inventory stale even when DEVELOPMENT.md is updated.
### Superseded / Rejected Alternatives
1. **Moving the env table out of DEVELOPMENT.md:** rejected for this change. The coverage check would warn on every variable.

---

## Lessons Learned & Incident Log

- **Incident / Bug:** Signup and login regressions keep coming back.
  - **Root Cause:** OTP and region logic is spread across `src/pages/signup.js`, `src/pages/login.js`, `src/pages/v2/login.js`, `src/components/otpVerifyModal.js` and `public/js/helper.js`. Examples: `2902add0` (sendOtp called once, endless loader), `7480560a` (two-factor login), `1d1a58da`/`c7da243e` (UK GB APIs not called), `1a82974b` (affiliate OTP widget raced its script load, in `src/hooks/useEmailOtpVerification.js`).
  - **Prevention Rule:** After any auth change, test login, signup and two-factor login for global, `/in` and `/uk`.
- **Incident / Bug:** The Home/Global page rebuild was merged and reverted on main the same day (PR #559 → #564, 2025-09-26).
  - **Root Cause:** The data folder was named `pageData`, `pagedata` and `pagesdata` across different commits (`d61a6aa6`, `7ddc3964`, `2606b0ad`).
  - **Prevention Rule:** The folder is `src/data/pagesdata/`, all lowercase. Netlify builds are case-sensitive.
- **Incident / Bug:** Builds broke after NewComps changes: `1d327b50` (the prop typo `compdDta`), `02dd10f2` (getPageData), `8cee722c` (SCSS). <!-- verify:ignore -->
  - **Root Cause:** There is no CI, no tests and no type checking. Errors only show up in the Netlify build.
  - **Prevention Rule:** Run `npm run build` locally before opening a PR.
- **Incident / Bug:** One malformed MDX post failed the whole build (`cdc78f36`, 2023-09-02; `652d859b` "deleting blog post due to error"), and blog pages broke on Netlify (`c730ecc1`).
  - **Root Cause:** Every post is compiled at build time.
  - **Prevention Rule:** Build locally after adding or editing a post.
- **Incident / Bug:** The "Contact sales button not working on mobile" fix was reverted twice (`4acf7e64`, `220502f8`, 2025-01-02) and then re-landed (`62fc0fe1`, 2025-01-07).
  - **Root Cause:** Not recorded.
  - **Prevention Rule:** Check mobile breakpoints on the `web` test site before promoting.
- **Incident / Bug:** A brand colour change across SVGs (`f7e7856c`) was reverted the same day (`f87a4b39`, `31b60237`, 2026-01-09).
  - **Root Cause:** Not recorded. *Inference:* it was not approved.
  - **Prevention Rule:** Brand tokens need sign-off; see [DESIGN.md](DESIGN.md).
- **Incident / Bug:** `ca-signup` was renamed to `chartered-accountant-signup` (`1bcb61c5`, 2026-09-21), which deleted `src/pages/{in,ae,uk}/ca-signup.js`, but no `public/_redirects` rule was added.
  - **Root Cause:** Renames have no redirect checklist.
  - **Prevention Rule:** Every removed or renamed URL gets a 301 in `public/_redirects`.
- **Incident / Bug:** A Trustpilot widget caused a hydration error (`cfc158cf`, 2024-12-16, `src/components/navbar.js`).
  - **Prevention Rule:** Mount third-party widgets only on the client, after hydration.

