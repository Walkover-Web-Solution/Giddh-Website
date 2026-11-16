---
verified_at: ad5219f6
verified_on: 2026-11-16
---
# Docs index

Written for AI coding agents and new engineers; start at [../AGENTS.md](../AGENTS.md). Every claim was checked against the code at the commit in each doc's frontmatter. Run `python3 scripts/vendor/ai-docs/verify_docs.py .` to check them again, and `python3 scripts/vendor/ai-docs/affected_docs.py .` to see which docs your change may have outdated.

| Doc | Read it when |
|---|---|
| [VISION.md](VISION.md) | Before accepting any feature request: purpose, ICP, non-goals, how to judge requests |
| [ARCHITECTURE.md](ARCHITECTURE.md) | First, for any code change: locale model, page systems, `pageData`, where a change goes |
| [FLOWS.md](FLOWS.md) | Touching signup, login, demo, pricing / payment, affiliate, blog or the locale switch |
| [CONTRACTS.md](CONTRACTS.md) | Calling the Giddh API or a third party; cookies, analytics, page JSON or MDX shapes |
| [DESIGN.md](DESIGN.md) | Styling, choosing a section component, or changing SEO (meta, hreflang, JSON-LD, sitemap) |
| [RECIPES.md](RECIPES.md) | Adding a page, locale variant, section or blog post; renaming a URL; adding an env var |
| [DEVELOPMENT.md](DEVELOPMENT.md) | Setting up, verifying your work, opening a PR, deploying |
| [DECISIONS.md](DECISIONS.md) | Before reversing an established pattern |
| [OPEN_QUESTIONS.md](OPEN_QUESTIONS.md) | Something looks wrong: it may be a known, undecided issue |

## Docs maintenance (for weekly agent runs)

| Field | Value |
|---|---|
| Last reviewed revision | `ad5219f6` (`web`, 2026-11-16) |
| Previous reviewed revision | `207fbc59` (2026-10-24 ai-docs prep) |
| Commits between them | 40 (feature JSON merge, NDA policy, CSP headers, login `redirect_url`, footer preview installers, STATUS tracker, experiment helpers) |

### Coverage map

Status is **verified** when `python3 scripts/vendor/ai-docs/verify_docs.py .` reports 0 errors at the reviewed revision. **Partial** means accurate but with open `[!TODO]` or human-only gaps. **N/A** means out of repo scope.

| Topic | Authoritative location | Status |
|---|---|---|
| Product purpose, ICP, non-goals | [VISION.md](VISION.md) | partial (success metrics unconfirmed) |
| Feature journeys / funnels | [FLOWS.md](FLOWS.md) | verified |
| Architecture & module map | [ARCHITECTURE.md](ARCHITECTURE.md) | verified |
| API & third-party contracts | [CONTRACTS.md](CONTRACTS.md) | verified |
| UI, SEO, a11y | [DESIGN.md](DESIGN.md) | partial (`lang`, `NEXT_PUBLIC_SITE_URL` on Netlify) |
| Setup, env, PR flow | [DEVELOPMENT.md](DEVELOPMENT.md) | partial (Netlify Node pin, env ownership) |
| How-to recipes | [RECIPES.md](RECIPES.md) | verified |
| ADRs | [DECISIONS.md](DECISIONS.md) | verified |
| Known defects & questions | [OPEN_QUESTIONS.md](OPEN_QUESTIONS.md) | verified |
| Plan scorecard | [../STATUS.md](../STATUS.md) | partial (nothing proven with real users) |
| Agent entry & rules | [../AGENTS.md](../AGENTS.md) | verified |
| Backend / database | — | N/A (Giddh app, not this repo) |
| Lint / unit tests | — | N/A (none working; build is the gate) |
| Measurement KPIs | — | missing (attribution wired, metrics unnamed) |

### Unfinished for the next run

- Confirm success metrics and IN vs AE vs UK priority ([VISION.md](VISION.md#strategic-priorities--success-measures)).
- Pin Netlify Node version and record where env values live ([DEVELOPMENT.md](DEVELOPMENT.md#prerequisites--runtime-environment)).
- Reconcile `web` vs `main` promotion status after the next promote ([Q-031](OPEN_QUESTIONS.md#active-questions-table)).
- Owner for amplifyapp tracker and CookieYes via GTM ([ARCHITECTURE.md](ARCHITECTURE.md#external-systems--dependencies)).

## Needs a human

The full list, with affected code, is in [OPEN_QUESTIONS.md](OPEN_QUESTIONS.md#active-questions-table). The `[!TODO]` callouts that block docs:
- Success metrics and per-market priority: [VISION.md](VISION.md#strategic-priorities--success-measures)
- Netlify Node version, where env values live, safe test data, who promotes `web` → `main`: [DEVELOPMENT.md](DEVELOPMENT.md#prerequisites--runtime-environment)
- Owner of the amplifyapp tracker, and whether CookieYes and other tags come from GTM: [ARCHITECTURE.md](ARCHITECTURE.md#external-systems--dependencies), [CONTRACTS.md](CONTRACTS.md#analytics--telemetry-event-contracts)
- Whether Decap CMS is still used, the pricing-rollback reason, and why the sitemap is hand-maintained: [DECISIONS.md](DECISIONS.md)
- Whether `NEXT_PUBLIC_SITE_URL` is set on Netlify, and `lang` per locale: [DESIGN.md](DESIGN.md#seo--metadata-expectations)
