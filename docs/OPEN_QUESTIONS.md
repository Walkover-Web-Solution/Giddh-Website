---
covers: ["*"]
verified_at: fa3d74c4
verified_on: 2026-10-30
---
# Open Questions & Known Ambiguities

Everything here is unresolved: a product decision nobody has recorded, conflicting evidence, or a
defect found while preparing the docs. Agents: do not "fix" an item by guessing. Ask the human, then
move the answer to the doc that owns it ([VISION.md](VISION.md), [DECISIONS.md](DECISIONS.md), …)
and delete the row.

## Active Questions Table

| ID | Topic / Question | Affected Code | Conflicting Evidence / Current Status | What Would Resolve It |
|---|---|---|---|---|
| Q-001 | Success metrics and market priority | `src/utils/segmento.js`, `src/pages/_document.js` | Tracking exists (GTM, Segmento, UTM cookies) but no KPI or per-market priority is written anywhere | Product owner names the KPIs and the IN / AE / UK priority order → [VISION.md](VISION.md) |
| Q-002 | Is UAE login / region support being dropped? | `public/js/helper.js`, `src/pages/login.js` | UAE is in the confirmed ICP, but unmerged `origin/86d0zqj36-main` is titled "Removed AE region support" and PR #768 dropped the AE session cookie | Human decision. Until then, don't merge that branch |
| Q-003 | Pricing is fetched in the browser | `src/pages/pricing.js` | Conflicts with the "static / SEO-first" non-goal: plans are not in the prerendered HTML in any locale. A JSON pricing rewrite (PR #645) was rolled back (PR #673) over a "discount pricing issue" | Decide whether browser pricing is acceptable. If not, a build-time readable plans source is needed (see [CONTRACTS.md](CONTRACTS.md)) |
| Q-004 | Old `/ca-signup` URLs return 404 | `public/_redirects` | `1bcb61c5` renamed `/ca-signup` (and the `/in`, `/ae`, `/uk` variants) to `/chartered-accountant-signup` without a 301; printed ICAI / QR material may use the old URL | Confirm, then add 301 rules | <!-- verify:ignore -->
| Q-005 | Unreferenced public assets (~61 MB) | `public/uploads/**`, `public/img/**` | 1,028 files have no reference in the repo: 850 WordPress resize variants (48 MB), 27 other uploads, 155 `public/img` files (8.7 MB). Their URLs may be hot-linked from emails, the Giddh app or Google Images | Check Netlify analytics or logs for hits, then delete in that order. Regenerate the list by grepping each file basename across `src/`, `_posts/` and `public/` (the prep audit method) |
| Q-006 | Is `/v2/login` still used? | `src/pages/v2/login.js` | Noindexed, not in the sitemap, no in-site link, and 183 of its 217 lines duplicate `src/pages/login.js`. It also omits `&region=` on token-verify | Ask the app or desktop team whether they link to it |
| Q-007 | Dangling "See Giddh in Action" scroll target | `src/components/NewComps/CTA/index.js`, `src/components/NewComps/PopUp/index.js` | Both call `getElementById("SeeGiddhInAction")`. That section was removed from pages in `6c48b1c8` and deleted as dead code in `8b45872d`, so the buttons do nothing on scroll | Product decides the new target (the demo form?) |
| Q-008 | Wrong SEO copy in metadata | `src/data/metadata.json`, `src/data/hrefLangTag.json` | "GST" appears in AE / UK descriptions. `/uk/inventory-management-software` and `/uk/privacy-policy` have wrong titles. `/online-accounting-software` has a placeholder description. `/in/help` and `/in/walkover` have entries but no pages. hreflang lists `tallyplusgiddh` (now a 301) and omits `tally-to-giddh-migration` | Marketing approves corrected copy. Changes must keep SEO intent ([DESIGN.md](DESIGN.md)) |
| Q-009 | `public/sitemap.xml` is stale | `public/sitemap.xml` | Committed once (`ad04b9d1`, 2025-06-27). Against HEAD it misses 39 routes (including `/`, triggers, customer-portal, chartered-accountant-signup, tally-to-giddh-migration) and 169 of 253 blog posts | Decide: generate at build time, or keep editing it by hand per page |
| Q-010 | Two UI generations: should the remaining legacy pages move to the JSON pipeline? | `src/pages/ae/index.js`, `src/pages/uk/index.js`, `src/components/bannerSection.js` | Global and IN pages mostly use `src/components/Pages/*` + `src/data/pagesdata/**`. AE / UK home, pricing and about still use legacy components (`bannerSection.js`, `featureGallery.js`, `clientSummary.js`, `makeTheSwitch.js`). The feature-page JSON rewrite that was on `origin/86d3e3xxz-web` is on `web` as PR #828 (`63cb6ea0`, 2026-10-28). It changed copy and section order. It did not convert those legacy home pages | Product decision for the pages that are still legacy |
| Q-011 | No committed lockfile | `.gitignore` | `package-lock.json` is gitignored, so Netlify installs float within `^` ranges (e.g. `next ^16.0.8` built as 16.4.3 locally) | Decide whether to commit a lockfile |
| Q-012 | `npm run lint` is broken | `package.json` | The script is `next lint`, which Next 16 removed. There is no ESLint config, so the repo has no lint check at all | Decide: add ESLint flat config + `eslint .`, or drop the script |
| Q-013 | Unused `helper.js` globals | `public/js/helper.js` | `deleteUtmCookies`, `removeGiddhSession`, `setGiddhSession`, `getCurrentSiteCountry` are never called from `src`. GTM custom-HTML tags might call them | Check the GTM container `GTM-K2L9QG`, then remove or keep |
| Q-014 | Is Decap CMS still used? | `public/admin/config.yml` | Configured (git-gateway, editorial workflow on `main`) but no CMS-authored commits since 2023-09. Its tag list is hard-coded | Content team confirms. If unused, remove `public/admin/` |
| Q-015 | `react-lottie` is unmaintained | `src/components/NewComps/LottiePlayer/index.js` | Pulls `core-js@2` (npm deprecation warning on install) | Decide on a maintained Lottie player. That's a dependency change, so it needs a separate PR with visual checks |
| Q-016 | Two client-visible MSG91 credentials | `src/utils/segmento.js`, `public/js/helper.js` | `NEXT_PUBLIC_MSG91_AUTH_KEY` is read only by `src/utils/segmento.js:sendDataInSegmento`. `src/utils/msg91Otp.js` does not read it. The OTP widget uses a separate `widgetId` and `tokenAuth`, both string literals in `public/js/helper.js:getOtpwidgetConfiguration`, the same in every environment. Whether either value is a widget token or an account key is not knowable from the repo. Do not copy the literals out of that function | Security owner confirms the scope of both credentials |
| Q-018 | `/in/financial-reporting` page JSON-LD never renders | `src/pages/in/financial-reporting.js` | Passes `<Schema schema={schema} />`, but `src/components/NewComps/Schema/index.js:Schema` reads `schemas` | Bug fix (rename the prop). It changes the page's HTML, so ship it as its own SEO change, not as cleanup |
| Q-019 | Signup phone country always defaults to India | `src/utils/signupHelpers.js:geoIpLookupHandler` | Reads `res.ipAddress` from the `fetch` Response without `.json()`, so it always falls back to `"in"`. It also calls `http://ip-api.com`, which an https page blocks | Decide whether geo-defaulting is wanted. If yes, fix both |
| Q-020 | Google login `postMessage` is not origin-checked | `src/pages/googleauth.js`, `src/components/googleLogin.js` | The popup posts the token with target `"*"`, and the opener's listener checks `event.data.origin === "giddh"` (a payload field) instead of `event.origin` | Security owner confirms. Fix by pinning the target origin and checking `event.origin` |
| Q-021 | `/v2/login` `noindex` is set only on the client | `src/components/header.js` | The `noindex` robots meta is added after mount, so the static HTML lacks it | Fix once Q-006 decides whether the page stays |
| Q-022 | Invoice payment: Giddh is never told for v1 invoices | `src/pages/payment.js` | In `successPayment`, the non-v2 branch does `payload = data;` and `data` is undefined, so it throws after Razorpay has already captured the payment. The page is the invoice pay link sent to Giddh users' customers, not the pricing checkout | Confirm whether voucherVersion 1 invoices are still issued, then fix (behaviour change, separate PR) |
| Q-023 | UK OTP calls go to the default API | `src/components/otpVerifyModal.js`, `src/pages/signup.js`, `src/pages/login.js` | The modal reads `props.path.isUK`, but `signUp(path)` / login pass their whole props object as `path`, so `isUK` is undefined. Only `src/pages/chartered-accountant-signup.js` passes the right object | Confirm UK OTP must hit `NEXT_PUBLIC_UK_API_URL`, then fix |
| Q-024 | Locale pages link to global signup | `src/data/pagesdata/{in,ae,uk}/*.json` | Button URLs in page JSON render verbatim. Locale files use bare `/signup`, so UK visitors register against the default API. Pricing, affiliate and payment never switch to the UK API either | Decide whether UK traffic must stay on the UK API end to end |
| Q-025 | Blog image fields disagree | `public/admin/config.yml`, `src/pages/blog/[slug].js` | Decap writes `thumbnail` (read only by list cards). Post pages read `coverImage` for og:image and JSON-LD, which the CMS cannot set. 178 posts use `coverImage`, 17 use `thumbnail` | Pick one field. Update the CMS config and the post page together |
| Q-026 | Is `NEXT_PUBLIC_SITE_URL` set in Netlify? | `src/components/header.js` | Canonical and og:image are built from it with no fallback (local build ships `href="undefined/…"`). Only 21 of 137 `metadata.json` entries define a canonical, and blog posts have none | Confirm the Netlify env. Decide the canonical policy |
| Q-027 | Placeholder data in blog JSON-LD | `src/data/blogSchema.json` | 149 entries contain template placeholders (`URL_of_…` ×235, `XXXX` ×43, `Editor_Name` ×53), plus one empty and one mangled URL | Content team fills or removes the placeholders |
| Q-028 | `lang="en"` for every locale; FAQ schema only on the client | `src/pages/_document.js`, `src/components/faq.js` | All locales share `lang="en"` (no `en-IN` / `en-GB`). The legacy `faq.js` injects its FAQPage JSON-LD in `useEffect`, so it's missing from the static HTML | SEO owner decides |
| Q-029 | CA membership number never reaches the backend | `src/pages/chartered-accountant-signup.js` | The MRN travels only in the redirect `source` param and the `giddh_query` cookie, not in the `/v2/register` body | Backend / product confirms where the MRN should be stored |
| Q-030 | localStorage `userData` has no writer | `src/pages/signup.js` | Signup reads `userData` from localStorage, but nothing in the repo writes it | Find the writer (the app?) or remove the read |
| Q-031 | `web` has not been promoted to `main` since February | git history | The user-confirmed flow is `web` → `main`, but the last such PR was #737 (`b7eb090b`, 2026-02-25). Since then `main` has been fed by `<id>-main` branches, and `web` is 142 commits ahead (e.g. `66a7f148`, the `/triggers` and `/customer-portal` pages, is not on `origin/main`) | Release owner decides when to promote, and whether direct `-main` hotfixes are the norm |
| Q-032 | `public/_redirects` editing traps | `public/_redirects` | 6 source paths appear twice (Netlify uses the first match), and the file has no trailing newline, so appending with `echo >>` corrupts the last rule | Deduplicate and add a trailing newline in a dedicated redirects PR, checked on a Netlify deploy preview |
| Q-017 | Why locale folders instead of Next i18n, and `_headers` instead of `next.config.js` headers? | `src/pages/{in,ae,uk}/`, `public/_headers` | No commit records the reason ([DECISIONS.md](DECISIONS.md)) | Ask the original authors. Record the answer as an ADR |

---

## Detailed Issue Records

### Q-003: Pricing rendered in the browser

- **The Ambiguity:** The user-confirmed non-goal says marketing content must stay static / SEO-first,
  but `src/pages/pricing.js` loads plans with `fetch` inside `useEffect`, so crawlers see an empty table.
  Every locale (`src/pages/in/pricing.js`, `src/pages/ae/pricing.js`, `src/pages/uk/pricing.js`) reuses that page.
- **Affected Code & Paths:** `src/pages/pricing.js`, `src/data/pricingData.json`
- **Current Evidence:** the local production build shows the `/in/pricing` table empty and the console logs
  `HTTP error! status: 404` when `NEXT_PUBLIC_API_URL` is unset. A build-time version (PR #645) was reverted by PR #673.
- **Potential Risk:** pricing keywords and plan names never reach search engines. Changing the fetch
  timing changes how discounts display, which was the reason for the earlier rollback.
- **What Resolves This:** a product decision, plus a plans endpoint the build can read (no auth, stable shape).

### Q-005: Unreferenced assets

- **The Ambiguity:** about 61 MB of `public/` files have no reference in code, MDX, data JSON, `_redirects` or the sitemap.
  The repo cannot show outside references (dimension 7 of the removal checklist).
- **Affected Code & Paths:** `public/uploads/` year folders (Decap's `media_folder`), `public/img/**`
- **Current Evidence:** legacy WordPress media URLs under `/blog/uploads/…` already 301 (`public/_redirects`),
  but `/uploads/…` paths are served directly. The prep pass deleted only server artefacts with zero possible use (`5ece024c`).
- **What Resolves This:** 30 days of Netlify request logs or analytics for `/uploads/` and `/img/` paths.

### `getPageData` resolves a variable `require` (risk, works today)

- **Status:** verified working. The prerendered HTML for JSON-driven pages (e.g. `/in/gst`) contains its JSON copy and JSON-LD.
- **Risk:** `src/utils/getPageData.js:getPageData` builds `filePath` in a variable and `require`s it inside
  `try { } catch { return null }`. A missing file, a typo, or a slug missing from `pagesToGetData` silently renders the page
  without its sections. No error is thrown at build time. Verify any new JSON page in the built HTML ([DEVELOPMENT.md](DEVELOPMENT.md)).

---

## Known Technical Limitations & Verification Gaps

- **Environment values:** no `.env` file or `.env.example` exists <!-- verify:ignore -->, and values live outside the repo (inferred: Netlify site settings).
  Without them, canonical URLs render as `undefined/...`, pricing plans 404, and signup, login, OTP, demo and affiliate submissions can't
  be exercised. Prep verification therefore covered the build, all 402 prerendered pages (byte-identical before and after cleanup, after
  normalizing chunk hashes), and a browser load of 15 key pages. It did **not** cover live form submissions.
- **Netlify:** `_redirects`, `_headers` and Decap CMS run only on Netlify. They were not exercised locally.
- **Third-party scripts:** CookieYes errors on `localhost` (domain-locked), and GTM / the amplifyapp tracker were not validated.
- **No automated tests or lint:** regressions are caught only by `npm run build` and manual or browser checks (Q-012).
