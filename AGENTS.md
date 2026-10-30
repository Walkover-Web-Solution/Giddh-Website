# Giddh Website

Marketing and onboarding site for Giddh, a cloud accounting product, at giddh.com. It serves small and
medium businesses in India, the UAE and the UK, plus chartered accountants who manage clients. It sells the
product, takes signups, logins, demo requests and affiliate applications, and hands users off to the Giddh
app. Next.js 16 pages router, React 19, JavaScript only, Bootstrap 5 + SCSS, MDX blog, hosted on Netlify.
The accounting product itself is **not** in this repo.

## Commands

| Task | Command |
|---|---|
| Install dependencies | `npm install` (no lockfile is committed, see [Q-011](docs/OPEN_QUESTIONS.md#active-questions-table)) |
| Run dev server | `npm run dev` (port 8080) |
| Build for production | `npm run build` (about 402 static pages; one existing Sass deprecation warning) |
| Preview production build | `npm run start` (port 8080) |
| Lint | none working: `npm run lint` fails because Next 16 removed `next lint` ([Q-012](docs/OPEN_QUESTIONS.md#active-questions-table)) |
| Tests / type check | none exist |
| Verify the docs | `python3 scripts/vendor/ai-docs/verify_docs.py .` (0 errors expected) |
| Docs affected by your diff | `python3 scripts/vendor/ai-docs/affected_docs.py .` |

Without local env values, canonical tags render `undefined/...` and pricing plans don't load. That's expected;
see [DEVELOPMENT.md](docs/DEVELOPMENT.md#environment-variables-reference). <!-- verify:ignore -->

## Reading Order Before You Change Code

1. **[docs/VISION.md](docs/VISION.md)**: purpose, ICP, non-goals, and how to judge a request. Read it before accepting any feature.
2. **[docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)**: locale model, the two page systems, the `pageData` pipeline, and "where does a change go".
3. Then whichever of these the task touches:
   - [docs/CONFIGURATION.md](docs/CONFIGURATION.md): every env var and hard-coded setting, names only
   - [docs/FLOWS.md](docs/FLOWS.md): signup, login, demo, pricing / payment, affiliate, blog, locale switch, plus known defects
   - [docs/CONTRACTS.md](docs/CONTRACTS.md): Giddh API calls, UK API rule, cookies / localStorage, analytics, page JSON and MDX shapes
   - [docs/DESIGN.md](docs/DESIGN.md): SCSS / Bootstrap conventions, the NewComps catalog, SEO (meta, hreflang, JSON-LD, sitemap)
   - [docs/RECIPES.md](docs/RECIPES.md): add a page, locale variant, section or blog post; rename a URL; add an env var
   - [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md): setup, env vars, the verification checklist, PR and deploy flow
4. **[docs/DECISIONS.md](docs/DECISIONS.md)** before reversing an established pattern. **[docs/OPEN_QUESTIONS.md](docs/OPEN_QUESTIONS.md)** before "fixing" something odd: it may be a known, undecided issue.

## Project Rules & Boundaries

1. **No product logic, no new backend.** Don't add `src/pages/api/` routes, server code or mocks. Call only the existing Giddh API through the env base URLs. If a feature needs a capability the API lacks, write the contract in [CONTRACTS.md](docs/CONTRACTS.md#required--unavailable-backend-capabilities) and stop. (User-confirmed non-goal, 2026-10-24.) <!-- verify:ignore -->
2. **Marketing content stays static / SEO-first.** Put copy in page JSON or static markup, never behind a client-side `fetch` or `useEffect`. Browser-fetched pricing is a known open conflict ([Q-003](docs/OPEN_QUESTIONS.md#active-questions-table)), not a pattern to copy.
3. **Think in four locales.** Most pages exist as `src/pages/<slug>.js` plus `src/pages/{in,ae,uk}/<slug>.js`, and many wrappers share one `src/components/Pages/*.js`. A change to a shared component ships to every locale; a copy change usually needs each locale's JSON. Use GST wording for India and VAT for the UAE and UK.
4. **A JSON page needs its slug in `pagesToGetData`** (`src/utils/getPageData.js`). Otherwise `pageData` is silently `null` and the page renders without its sections. No error is raised, so check the built HTML.
5. **Every public URL needs an SEO entry.** Add the exact path to `src/data/metadata.json` (title, description) and `src/data/hrefLangTag.json`, plus `public/sitemap.xml` while it stays hand-maintained ([DESIGN.md](docs/DESIGN.md#checklist-for-a-new-or-changed-public-page)).
6. **Renaming or removing a URL needs a 301** in `public/_redirects` in the same PR. The `/ca-signup` rename skipped this and the old URLs now 404. The file has no trailing newline and already has duplicate sources, so edit it in an editor. <!-- verify:ignore -->
7. **Every env var is `NEXT_PUBLIC_*`, so it is inlined into the browser bundle.** Never put a secret in one. The full list, and the settings that are literals instead of env vars, is [CONFIGURATION.md](docs/CONFIGURATION.md). Values live outside the repo (inferred: Netlify); never commit env files. The MSG91 widget id and token in `public/js/helper.js` are literals: do not copy them into docs or new code.
8. **Keep the region rules.** Login and signup choose `NEXT_PUBLIC_UK_API_URL` on `/uk` paths, and session cookies are per region (`public/js/helper.js`). Don't change cookie names, localStorage keys, UTM handling or the `token-verify` handoff without checking the Giddh app side ([CONTRACTS.md](docs/CONTRACTS.md#persistence--client-cache-contracts)).
9. **Don't remove tracking.** GTM `GTM-K2L9QG`, `/js/helper.js` and the tracker script in `src/pages/_document.js`, and the `helper.js` globals, may be used by GTM tags outside the repo ([Q-013](docs/OPEN_QUESTIONS.md#active-questions-table)).
10. **Styling:** use Bootstrap classes first. Page styles go in `src/scss/scsscomps/_<page>.scss` imported from `src/scss/_import.scss`; section styles go in a CSS module next to the NewComps component. `global.scss` loads *before* `bootstrap.css`, so Bootstrap wins ties ([DESIGN.md](docs/DESIGN.md#load-order-and-scss-structure)). <!-- verify:ignore -->
11. **Build new pages on the JSON system:** `src/components/Pages/` + `src/components/NewComps/` + `src/data/pagesdata/`. The legacy section components (`bannerSection.js`, `featureGallery.js`, …) still power the AE / UK home pages; keep them working and don't extend them ([Q-010](docs/OPEN_QUESTIONS.md#active-questions-table)).
12. **Remove code only with evidence.** Clear all seven checks first: runtime registration, dynamic imports, routing (every file in `src/pages/` is a route), flags, CSS refs, build / static config, external consumers. Files in `public/` may be hot-linked from outside, so unreferenced does not mean unused ([Q-005](docs/OPEN_QUESTIONS.md#active-questions-table)).
13. **Blog posts must build.** One bad MDX file in `_posts/blog/` fails the whole build. The front-matter `slug` must equal the filename. If Decap CMS is still used ([Q-014](docs/OPEN_QUESTIONS.md#active-questions-table)), it commits posts to `main`, not `web`.
14. **Don't fix "obvious" bugs in passing.** The defects in [OPEN_QUESTIONS.md](docs/OPEN_QUESTIONS.md) (Q-018 to Q-030) change behaviour; each needs its own PR and a human decision.

## Where Things Are

- `src/pages/`: routes (file-based). `_app.js` derives locale and `pageData`; `_document.js` loads GTM and `helper.js`. Locale folders are `src/pages/in/`, `src/pages/ae/` and `src/pages/uk/`; `src/pages/blog/` holds the blog.
- `src/components/Pages/`: one component per JSON-driven page type. `src/components/NewComps/`: the reusable sections those pages compose.
- `src/components/*.js`: the shell (`navbar.js`, `header.js` for meta / hreflang, `footer.js`), auth widgets, and legacy sections.
- `src/data/pagesdata/<country>/<page>.json`: page copy. `src/data/metadata.json` and `hrefLangTag.json`: SEO. `src/data/blogSchema.json`: blog JSON-LD.
- `src/utils/`: page-info parsing, signup / OTP helpers, UTM, Segmento, S3 download URLs. `src/hooks/`: affiliate-form hooks.
- `src/scss/`: global SCSS (`src/scss/global.scss` → `src/scss/_import.scss` → `src/scss/scsscomps/`).
- `_posts/blog/*.mdx`: blog posts. `public/admin/`: Decap CMS. `public/_redirects` and `public/_headers`: Netlify rules.
- `public/js/helper.js`: cookies, sessions, UTM and Calendly globals, loaded on every page.

## PR & Deployment Flow

- **Branch:** `<clickup-task-id>-web`, cut from `web`. Open the PR against `web`.
- **Pipeline (user-confirmed):** PR → `web` (Netlify test site) → promote `web` → `main` (production giddh.com). Hotfixes use `<id>-main` branches into `main`, and `main` is then merged back into `web`.
- `web` hasn't been promoted since 2026-02-25 and is 142 commits ahead of `main` ([Q-031](docs/OPEN_QUESTIONS.md#active-questions-table)). Don't assume production matches `web`.
- No CI exists, so your local checks are the only gate. Merging and deploying follow the team's existing approvals; never push to `main` yourself. Details: [DEVELOPMENT.md](docs/DEVELOPMENT.md#pr-workflow--deployment-pipeline).

## Verification & Knowledge Maintenance Expectations

- **Before changing anything:** run `npm run build` on the untouched branch and note the page count and warnings.
- **After:** `npm run build` passes with the same warnings. For refactors, prerendered HTML must be identical (normalised diff in [DEVELOPMENT.md](docs/DEVELOPMENT.md#how-an-agent-checks-its-work-verification-checklist)).
- **Browser check:** run `npm run start` and check every touched page *and its locale variants*: title, description, canonical, hreflang, JSON-LD, mobile and desktop.
- **Live forms:** never submit signup, login, OTP, demo, affiliate or payment forms against production from an agent. No sandbox exists yet.
- **Judging a request:** follow [VISION.md](docs/VISION.md#how-future-agents-must-evaluate-requests). Improve unclear requests, explain conflicts with the non-goals, and recommend declining those. If the user changes direction on purpose, record it in VISION.md. Never fabricate an integration.
- **Docs move with the code:** update the owning doc in the same change (env vars and other settings → CONFIGURATION and DEVELOPMENT, endpoints → CONTRACTS, journeys → FLOWS, components / SEO → DESIGN, decisions → DECISIONS, unknowns → OPEN_QUESTIONS). Then run `python3 scripts/vendor/ai-docs/verify_docs.py .` and get 0 errors.
