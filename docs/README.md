---
verified_at: fa3d74c4
verified_on: 2026-10-30
---
# Docs index

Written for AI coding agents and new engineers; start at [../AGENTS.md](../AGENTS.md). Every claim was checked against the code at the commit in each doc's frontmatter. Run `python3 scripts/vendor/ai-docs/verify_docs.py .` to check them again, and `python3 scripts/vendor/ai-docs/affected_docs.py .` to see which docs your change may have outdated.

| Doc | Read it when |
|---|---|
| [VISION.md](VISION.md) | Before accepting any feature request: purpose, ICP, non-goals, how to judge requests |
| [ARCHITECTURE.md](ARCHITECTURE.md) | First, for any code change: locale model, page systems, `pageData`, where a change goes |
| [CONFIGURATION.md](CONFIGURATION.md) | Any setting or env var: names, where they are read, what happens if unset. No values |
| [FLOWS.md](FLOWS.md) | Touching signup, login, demo, pricing / payment, affiliate, blog or the locale switch |
| [CONTRACTS.md](CONTRACTS.md) | Calling the Giddh API or a third party; cookies, analytics, page JSON or MDX shapes |
| [DESIGN.md](DESIGN.md) | Styling, choosing a section component, or changing SEO (meta, hreflang, JSON-LD, sitemap) |
| [RECIPES.md](RECIPES.md) | Adding a page, locale variant, section or blog post; renaming a URL; adding an env var |
| [DEVELOPMENT.md](DEVELOPMENT.md) | Setting up, verifying your work, opening a PR, deploying |
| [DECISIONS.md](DECISIONS.md) | Before reversing an established pattern |
| [OPEN_QUESTIONS.md](OPEN_QUESTIONS.md) | Something looks wrong: it may be a known, undecided issue |

## Needs a human

The full list, with affected code, is in [OPEN_QUESTIONS.md](OPEN_QUESTIONS.md#active-questions-table). The `[!TODO]` callouts that block docs:
- Success metrics and per-market priority: [VISION.md](VISION.md#strategic-priorities--success-measures)
- Netlify Node version, where env values live, safe test data, who promotes `web` → `main`: [DEVELOPMENT.md](DEVELOPMENT.md#prerequisites--runtime-environment)
- Owner of the amplifyapp tracker, and whether CookieYes and other tags come from GTM: [ARCHITECTURE.md](ARCHITECTURE.md#external-systems--dependencies), [CONTRACTS.md](CONTRACTS.md#analytics--telemetry-event-contracts)
- Whether Decap CMS is still used, the pricing-rollback reason, and why the sitemap is hand-maintained: [DECISIONS.md](DECISIONS.md)
- Whether `NEXT_PUBLIC_SITE_URL` is set on Netlify, and `lang` per locale: [DESIGN.md](DESIGN.md#seo--metadata-expectations)
