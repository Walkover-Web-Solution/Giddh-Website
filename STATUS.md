# Status

**Plan:** Product Vision & Strategic Direction ([docs/VISION.md](docs/VISION.md)), standing in until a dedicated plan doc is named · **Last updated:** 2026-11-02 · **Reviewed up to commit:** `2024df86`

A living scorecard of the repo against its plan. Every status below rests on code or git history found at the reviewed commit. Rules for keeping it current are in [AGENTS.md](AGENTS.md#verification--knowledge-maintenance-expectations); `npm run status:check` enforces them on every PR.

**Legend:** ✅ works for real people · 🟡 built, not proven · ⛔ blocked · ⬜ not started · 🙈 hidden · ❌ dropped

"Built, not proven" is the default for shipped code: nothing here has been checked with real users from this repo, and `web` has not been promoted to production since 2026-02-25 ([Q-031](docs/OPEN_QUESTIONS.md#active-questions-table)), so a feature on `web` may not be live on giddh.com at all.

## At a glance

| Area | ✅ | 🟡 | ⛔ | ⬜ | 🙈 | ❌ |
|---|---|---|---|---|---|---|
| Approved direction | 0 | 4 | 1 | 0 | 0 | 0 |
| Current implementation | 0 | 12 | 0 | 0 | 0 | 0 |
| Proposals & roadmaps | 0 | 1 | 1 | 1 | 0 | 0 |
| Audience (ICP) | 0 | 5 | 0 | 0 | 0 | 0 |
| Value proposition | 0 | 8 | 0 | 0 | 0 | 0 |
| Core principles | 0 | 3 | 3 | 0 | 0 | 0 |
| Priorities & success measures | 0 | 1 | 1 | 0 | 0 | 0 |
| Non-goals & anti-patterns | 0 | 4 | 2 | 0 | 0 | 0 |

Headline: the site described by the plan is built across all four locale trees, but nothing is proven with real users, three principles have known breaches waiting on human decisions, and no success metric is defined.

## Phases

The plan defines no phases. Its nearest equivalent is the priority list under "Strategic Priorities", which the plan itself marks as inferred from git history and unconfirmed.

| Phase (inferred priority) | Status | Notes |
|---|---|---|
| 1. Acquire chartered accountants | 🟡 | `src/pages/chartered-accountant-signup.js` collects the MRN, but it never reaches `/v2/register` ([Q-029](docs/OPEN_QUESTIONS.md#active-questions-table)). Global only, no locale variants. |
| 2. Partner-led growth (affiliates) | 🟡 | `src/pages/affiliate.js` plus `in`/`ae`/`uk` variants and `src/data/pagesdata/*/affiliate.json`. Live form not exercised (no sandbox). |
| 3. Organic search | 🟡 | 253 MDX posts in `_posts/blog/`, about 2,000 rules in `public/_redirects`. Sitemap stale ([Q-009](docs/OPEN_QUESTIONS.md#active-questions-table)), metadata errors ([Q-008](docs/OPEN_QUESTIONS.md#active-questions-table)). |
| 4. Feature landing pages and comparisons | 🟡 | 25 page types in `src/components/Pages/`; comparison pages `src/pages/tally-vs-giddh.js`, `src/pages/zoho-vs-giddh.js`. Several feature pages are on `web` only, not production (Q-031). |

## Scope items

### Approved direction

| Item | Status | Notes |
|---|---|---|
| ICP: SMBs in India, UAE, UK plus chartered accountants | 🟡 | Locale trees `src/pages/in/` (35 pages), `src/pages/ae/` (32), `src/pages/uk/` (32) and a CA landing page exist. |
| No accounting product logic in this repo | 🟡 | Held as far as found: pages describe features and hand off to `NEXT_PUBLIC_APP_URL`. Not audited line by line. |
| No backend or API routes of its own | 🟡 | Held: `src/pages/api/` does not exist. |
| Pages static and SEO-first | ⛔ | Breached by browser-fetched pricing in `src/pages/pricing.js` (`useEffect` fetch of `/v2/subscription/plans/all`), blocked on a decision ([Q-003](docs/OPEN_QUESTIONS.md#active-questions-table)). Also [Q-028](docs/OPEN_QUESTIONS.md#active-questions-table), [Q-021](docs/OPEN_QUESTIONS.md#active-questions-table). |
| Release flow `<id>-web` → `web` → `main` | 🟡 | Followed for PRs into `web`, but `web` has not been promoted since 2026-02-25 ([Q-031](docs/OPEN_QUESTIONS.md#active-questions-table)). A PR status check now runs (`.github/workflows/status-check.yml`). |

### Current implementation

| Item | Status | Notes |
|---|---|---|
| Global locale tree (37 page files) | 🟡 | Count matches the plan at `2024df86`. |
| `in` / `ae` / `uk` locale trees (35 / 32 / 32) | 🟡 | Counts match the plan. |
| India-only pages: GST, e-invoice, bank integration, Tally migration | 🟡 | `src/pages/in/gst.js`, `src/pages/in/e-invoice.js`, `src/pages/in/bank-integration.js`, `src/pages/in/tally-to-giddh-migration.js`. |
| UAE and UK VAT pages | 🟡 | `src/pages/ae/vat.js`, `src/pages/uk/vat.js`. |
| CA signup | 🟡 | `src/pages/chartered-accountant-signup.js`; MRN gap [Q-029](docs/OPEN_QUESTIONS.md#active-questions-table); old `/ca-signup` URLs have no 301 ([Q-004](docs/OPEN_QUESTIONS.md#active-questions-table)). |
| Demo landing page | 🟡 | `src/pages/online-accounting-software.js`; leads go to MSG91 Segmento. Not submitted (live backend). |
| Thank-you page | 🟡 | `src/pages/thank-you.js`. |
| Invoice payment (Razorpay) | 🟡 | `src/pages/payment.js`; v1-invoice defect [Q-022](docs/OPEN_QUESTIONS.md#active-questions-table). |
| Google login callback | 🟡 | `src/pages/googleauth.js`; origin check gap [Q-020](docs/OPEN_QUESTIONS.md#active-questions-table). |
| MDX blog with Decap CMS | 🟡 | 253 posts in `_posts/blog/`; CMS use unconfirmed ([Q-014](docs/OPEN_QUESTIONS.md#active-questions-table)); image field and JSON-LD issues ([Q-025](docs/OPEN_QUESTIONS.md#active-questions-table), [Q-027](docs/OPEN_QUESTIONS.md#active-questions-table)). |
| Affiliate program | 🟡 | `src/pages/affiliate.js` and locale variants. |
| Comparison and switching pages | 🟡 | `src/pages/tally-vs-giddh.js`, `src/pages/zoho-vs-giddh.js`, `src/pages/make-the-switch.js`. |

### Proposals & roadmaps

| Item | Status | Notes |
|---|---|---|
| UK/UAE feature-page JSON rewrite (`origin/86d3e3xxz-web`) | 🟡 | The plan calls it unmerged, but it was merged into `web` by PR #828 (`63cb6ea0`, 2026-10-28). The plan text is out of date here. |
| FAQ page in every locale (`origin/86d241cne-main`) | ⬜ | Not merged into `web`; not approved. |
| Remove AE region support (`origin/86d0zqj36-main`) | ⛔ | Not merged; conflicts with UAE being in the ICP. Needs a human decision ([Q-002](docs/OPEN_QUESTIONS.md#active-questions-table)). |

### Audience (ICP)

| Item | Status | Notes |
|---|---|---|
| SMB owners and finance staff in IN / AE / UK | 🟡 | Per-market copy in `src/data/pagesdata/{global,in,ae,uk}/` and `src/data/metadata.json`. |
| Chartered accountants and CPAs | 🟡 | `src/pages/chartered-accountant-signup.js`; "Accounting Software for CAs and CS" section in `src/pages/pricing.js`. |
| Affiliates and partners | 🟡 | `src/data/pagesdata/global/affiliate.json`. |
| Students and teachers (free use) | 🟡 | Copy only, in `src/pages/pricing.js`. |
| Existing users reaching the app via `/login` and `/signup` | 🟡 | `src/pages/login.js`, `src/pages/signup.js`; UK API gaps [Q-023](docs/OPEN_QUESTIONS.md#active-questions-table), [Q-024](docs/OPEN_QUESTIONS.md#active-questions-table). |

### Value proposition

| Item | Status | Notes |
|---|---|---|
| Cloud accounting on desktop and mobile | 🟡 | `src/data/pagesdata/global/home.json` → `features`. |
| GST filing (India) | 🟡 | `src/data/pagesdata/in/gst.json`, `src/data/pagesdata/in/e-invoice.json`. |
| VAT compliance (UAE, UK) | 🟡 | `src/pages/ae/vat.js`, `src/pages/uk/vat.js`. |
| Migration from Tally / Zoho | 🟡 | `src/data/pagesdata/in/make-the-switch.json`, `src/data/pagesdata/in/tally-to-giddh-migration.json`. |
| Multi-currency | 🟡 | `src/pages/multi-currency-accounting-software.js` plus three locale variants. |
| Automation features (bill scanning, email-to-bank sync, recurring invoices, triggers, customer portal, magic links) | 🟡 | Page JSON in `src/data/pagesdata/global/`; each page has `in`/`ae`/`uk` variants. |
| CA multi-company dashboard | 🟡 | Claimed on `src/pages/chartered-accountant-signup.js`; the feature itself lives in the Giddh app. |
| Multi-user access | 🟡 | `src/pages/multi-user-accounting-software.js` plus three locale variants. |

### Core principles

| Item | Status | Notes |
|---|---|---|
| SEO-first static pages | ⛔ | See "Pages static and SEO-first" above ([Q-003](docs/OPEN_QUESTIONS.md#active-questions-table)). |
| The site is a funnel, not the product | 🟡 | CTAs lead to `/signup`, the demo form, CA signup or the affiliate form. |
| Market-specific truth (GST vs VAT) | ⛔ | Breached in `src/data/metadata.json`, e.g. `/ae/affiliate` says "GST-ready". Waiting on marketing-approved copy ([Q-008](docs/OPEN_QUESTIONS.md#active-questions-table)). |
| Locale parity, with deliberate exceptions | 🟡 | Feature pages have all three locale variants; CA signup is global only, and the plan doesn't say whether that is deliberate. |
| Content as data (JSON pages) | ⛔ | New pages use `src/components/Pages/` + JSON; AE / UK home still use `src/components/bannerSection.js`. Migration needs a decision ([Q-010](docs/OPEN_QUESTIONS.md#active-questions-table)). |
| Real backend only, nothing faked | 🟡 | Forms call the Giddh API or listed third parties ([CONTRACTS.md](docs/CONTRACTS.md)). |

### Priorities & success measures

| Item | Status | Notes |
|---|---|---|
| Priority 1–4 (see Phases) | 🟡 | Four rows above; order unconfirmed. |
| Named success metrics (KPIs) | ⛔ | None written anywhere; tracking exists (GTM, `src/utils/segmento.js`, `src/utils/utmParams.js`). Needs the product owner ([Q-001](docs/OPEN_QUESTIONS.md#active-questions-table)). |

### Non-goals & anti-patterns

| Item | Status | Notes |
|---|---|---|
| No accounting logic | 🟡 | Held (see Approved direction). |
| No new backend or API routes | 🟡 | Held: no `src/pages/api/`. |
| No client-only marketing content | 🟡 | Held except the known pricing and FAQ-schema cases above. |
| No mock endpoints or fake form success | 🟡 | None found in the files reviewed for this scorecard; not exhaustively audited. |
| No GST copy on UAE / UK pages | ⛔ | Breached in metadata ([Q-008](docs/OPEN_QUESTIONS.md#active-questions-table)). |
| No URL removal without a 301 | ⛔ | `/ca-signup` has no rule in `public/_redirects` ([Q-004](docs/OPEN_QUESTIONS.md#active-questions-table)). |

## Must-pass tests

The repo has no automated tests or working lint. These are the checks that exist.

| Check | Status | Notes |
|---|---|---|
| `npm run build` | 🟡 | Passes at `2024df86`: 402 static pages, one Sass `map-has-key` warning (run 2026-11-02, no env vars). |
| `python3 scripts/vendor/ai-docs/verify_docs.py .` | 🟡 | 0 errors, 5 warnings (all the gitignored `package-lock.json`). |
| `npm run status:check` | 🟡 | Runs on every PR via `.github/workflows/status-check.yml`; not yet seen on a real PR. |
| Browser check of touched pages and locale variants | ⬜ | Manual, per change; see [DEVELOPMENT.md](docs/DEVELOPMENT.md#how-an-agent-checks-its-work-verification-checklist). |
| Live form submissions (signup, OTP, demo, affiliate, payment) | ⛔ | No sandbox or test credentials exist; agents must not submit against production. |
| `npm run lint` | ⛔ | Broken under Next 16 ([Q-012](docs/OPEN_QUESTIONS.md#active-questions-table)). |

## Open questions

- **Which document is "the plan"?** This scorecard was requested against a plan doc that was never named. No plan, roadmap or spec exists in the repo, so `docs/VISION.md` stands in. Name the real plan and re-score against it.
- **Plan drift:** `docs/VISION.md` still lists `origin/86d3e3xxz-web` as unmerged; it was merged in PR #828. That fix belongs in VISION.md's own refresh.
- **Can anything become ✅?** That needs evidence from production (giddh.com analytics or Netlify logs) and a `web` → `main` promotion ([Q-031](docs/OPEN_QUESTIONS.md#active-questions-table)).
- All other unknowns live in [docs/OPEN_QUESTIONS.md](docs/OPEN_QUESTIONS.md#active-questions-table).

## Beyond the plan

Built in the repo but not named in the plan.

| Item | Status | Notes |
|---|---|---|
| Windows app error-codes page | 🟡 | `src/pages/windows-app-error-codes.js`, global only. |
| Salesperson report feature page | 🟡 | `src/pages/salesperson-feature-report.js` plus locale variants. |
| Security page | 🟡 | `src/pages/security.js` plus locale variants. |
| Desktop-app downloads from S3 | 🟡 | `src/utils/s3Config.js` ([ADR-011](docs/DECISIONS.md#adr-011-desktop-app-download-urls-centralised-in-s3config)). |
| `/v2/login` duplicate login page | 🙈 | `src/pages/v2/login.js`, noindexed and not linked from the site ([Q-006](docs/OPEN_QUESTIONS.md#active-questions-table)). |
| AI docs set and doc verifier | 🟡 | `docs/`, `scripts/vendor/ai-docs/`. A configuration inventory (`docs/CONFIGURATION.md`, PR #831) was added and then reverted on 2026-10-30 (`2024df86`). |
| Status tracker and PR check | 🟡 | This file, `scripts/status-check.mjs`, `.github/workflows/status-check.yml`. |

## Change log

Newest first: date · who · what · status effect.

- 2026-11-02 · Cursor cloud agent · Created STATUS.md, `npm run status:check` and the PR workflow; scored the repo against docs/VISION.md at `2024df86` · initial scores, no ✅ (nothing proven with real users)
