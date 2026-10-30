---
covers: ["src/pages/**", "src/components/Pages/**", "src/components/NewComps/**", "src/data/**", "_posts/**", "public/_redirects"]
verified_at: 207fbc59
verified_on: 2026-10-24
---
# Recipes

Step-by-step for the changes this repo sees most often. Each recipe was learned from real commits and checked against the current code. Run the [verification checklist](DEVELOPMENT.md#how-an-agent-checks-its-work-verification-checklist) after every recipe. Why pages work this way is in [ARCHITECTURE.md](ARCHITECTURE.md). Section components and SEO tag rules are in [DESIGN.md](DESIGN.md). The `pageData` JSON shape is in [CONTRACTS.md](CONTRACTS.md).

Two page systems coexist. Check which one a page uses before editing it:
- **JSON-driven**, the current standard for new pages: a thin `src/pages/**` file renders a `src/components/Pages/*.js` composition of `src/components/NewComps/` sections. The copy comes from `src/data/pagesdata/<country>/<page>.json`, loaded by `src/utils/getPageData.js:getPageData`.
- **Legacy**: the copy is hard-coded JSX in the page file itself. Examples include `src/pages/uk/cloud-accounting-software.js`. Most `/ae` and `/uk` pages are legacy: only the eight slugs with files in `src/data/pagesdata/ae/` and `src/data/pagesdata/uk/` are JSON-driven there. Edit legacy files directly.

## Add a global marketing page (JSON-driven)
Example commit: `66a7f148` "Fix : Added new features". It added `/triggers`, `/customer-portal` and five more, each in all four locales.

1. Create the section composition in `src/components/Pages/<PascalName>.js`, for example `src/components/Pages/Triggers.js:Triggers`. It takes `{ pageData }` and renders NewComps sections, passing one JSON key each: `<SplitBanner compData={pageData?.splitBanner} />`, `<FAQs faqs={pageData?.faqs} />` and so on.
2. Create the route file `src/pages/<slug>.js`. It's only a wrapper:
   ```js
   import TriggersComp from "@/components/Pages/Triggers";
   export default function Triggers({ pageData }) {
     return <TriggersComp pageData={pageData} />;
   }
   ```
   `pageData` is injected by `src/pages/_app.js:MyApp`, not by `getStaticProps`.
3. Create the copy file `src/data/pagesdata/global/<slug>.json`. Its top-level keys are the props from step 1. Optional `schemas` (an array of JSON-LD objects) and `faqs` are emitted by `src/components/NewComps/Schema/index.js:Schema`, which adds an FAQPage schema from `faqs` automatically. Copy the structure from a sibling such as `src/data/pagesdata/global/triggers.json`.
4. Add the slug to `pagesToGetData` in `src/utils/getPageData.js:getPageData`. This is easy to forget because nothing fails: an unlisted slug makes `getPageData` return `null`, every section returns `null`, and the page builds as an empty shell between navbar and footer.
5. Add SEO metadata to `src/data/metadata.json`, keyed by the **exact path** (`"/<slug>"`): `title`, `description`, optional `keywords`, `ogImage` and `canonical`. `src/components/header.js:Header` looks up `Data[path]`. Without an entry the page has no `<title>` unless it sets its own head: `/404`, `/payment` and `/googleauth` ship an empty title today, while `/chartered-accountant-signup` has no entry but sets its own head.
6. Add the slug to the `global` array in `src/data/hrefLangTag.json`. That array means "a variant exists at the root". Add the slug to the `in`, `ae` and `uk` arrays only for locales you actually build (next recipe).
7. Add a `<url>` for `https://giddh.com/<slug>` to `public/sitemap.xml`. Copy the existing entry format.
8. If it belongs in the navbar's feature mega-menu, add an item to `features` in `src/data/data.json` (read by `src/components/navbar.js`), setting its `global` / `in` / `ae` / `uk` flags to the locales that have the page.
9. Put images under `public/img/<slug>/`, as `c44d6d83` did with `public/img/make-the-switch/`. Reference them as `/img/<slug>/<file>` in the JSON.
10. Check it works: run `npm run build`, confirm the page count went up by the number of routes you added, then `npm run start` and check `/<slug>` (title, description, hreflang, JSON-LD).

> [!WARNING]
> The JSON folder name is all lowercase: `src/data/pagesdata/`. Netlify builds are case-sensitive. A `pageData` vs `pagesdata` mix-up already broke main once (PR #559 reverted by #564; see [DECISIONS.md](DECISIONS.md#lessons-learned--incident-log)). <!-- verify:ignore -->

> [!WARNING]
> `public/sitemap.xml` is a static file, committed once in `ad04b9d1` (all 638 `<lastmod>` values are 2025-06-22). Pages added since then (`/triggers`, `/chartered-accountant-signup`, recent blog posts) are missing from it. Whether to keep editing it by hand or regenerate it is an open question ([OPEN_QUESTIONS.md](OPEN_QUESTIONS.md)). Until that's decided, add your URLs by hand.

## Add a locale variant (`/in`, `/ae`, `/uk`)
Example commit: `66a7f148` (for example `src/pages/ae/triggers.js` with `src/data/pagesdata/ae/triggers.json`). Older single-locale example: `c44d6d83`, `/in` only for `make-the-switch`, `zoho-vs-giddh` and `financial-reporting`.

1. Create `src/pages/<country>/<slug>.js` (country is `in`, `ae` or `uk`). Use the same wrapper as the global page, with a prefixed component name (`InTriggers`, `AeTriggers`). Locales are mirrored folders, not Next i18n ([DECISIONS.md ADR-002](DECISIONS.md#adr-002-locales-as-mirrored-page-folders-not-next-i18n)).
2. Create `src/data/pagesdata/<country>/<slug>.json`. `src/utils/getPageInfo.js:getPageInfo` derives `country` from the first path segment, and `getPageData` loads `@/data/pagesdata/${country}/${page}.json`. If the file is missing, the `require` throws, the error is swallowed, and the page renders empty.
3. The slug must already be in `pagesToGetData` (it's one list for every locale).
4. Add a `src/data/metadata.json` entry keyed `"/<country>/<slug>"`. The locale home is `"/<country>"`.
5. Add the slug to `src/data/hrefLangTag.json` under that country. `src/components/header.js:Header` then emits `hreflang="en-IN"`, `"en-AE"` or `"en-GB"` pointing at `https://giddh.com/<country>/<slug>` on **every** variant of the page.
6. Add the URL to `public/sitemap.xml`.
7. Locale-specific copy, such as currency, tax names (GST for India, VAT for the UK and UAE) and phone numbers, goes in the JSON, not in `if (isIndia)` branches in components.
8. Check it works: build, then open `/<country>/<slug>` and the root page and confirm both carry the same set of hreflang links.

> [!WARNING]
> Region also changes behaviour. On `/uk/*`, auth calls go to `NEXT_PUBLIC_UK_API_URL` (`path.isUK`, see [DEVELOPMENT.md](DEVELOPMENT.md#environment-variables-reference)). If your page has a signup or login form, test it on `/uk` too.

## Add a NewComps section
Example commit: `1464d742` "Fix : Did Changes in Affiliate page". It added `src/components/NewComps/Stepper/index.js` with `Stepper.module.scss`, used it in `src/components/Pages/Affiliate.js`, and added a `stepper` key to all four `affiliate.json` files.

1. Create `src/components/NewComps/<Name>/index.js` with a default export that takes one data prop. Use `compData` for new sections; older ones take `features` or `faqs`.
2. Return `null` when the data is absent, for example `if (!compData?.steps?.length) return null;` in `src/components/NewComps/Stepper/index.js:Stepper`. Pages pass `pageData?.x`, so a page whose JSON lacks the key must still render.
3. Style the section with Bootstrap utilities and the shared font and colour classes (`garmond-font`, `outfit-font`, `font-primary`; see [DESIGN.md](DESIGN.md)). Put anything extra in a co-located `<Name>.module.scss`, as `src/components/NewComps/Features/GridFeatures/GridFeatures.module.scss` does, not in `src/scss/global.scss`.
4. Use `next/image` for icons, as `src/components/NewComps/QuickStartSection/index.js:QuickStartSection` does. Keep exactly one `<h1>` per page. It comes from the banner (`src/components/NewComps/Banner/SplitBanner/index.js`, `StackedBanner`), so sections use `<h2>` and `<h3>`.
5. Wire it into the page composition (`src/components/Pages/<Page>.js`) and add the matching key to **each** locale's JSON for that page.
6. Check it works: build, then open every locale of the page.

> [!WARNING]
> A wrong prop name fails silently: the section just returns `null`. That's how the `compdDta` typo in `1d327b50` shipped. After wiring, confirm the section actually appears in the rendered HTML. <!-- verify:ignore -->

## Edit copy on an existing JSON page
Example commit: `11aa9ba5` "Pallavi | website | Need to update the comparison between Zoho and Giddh". It touched only `src/data/pagesdata/in/zoho-vs-giddh.json`.

1. Find the file: `src/data/pagesdata/<country>/<slug>.json`, where `country` is `global` for root URLs. Run `ls src/data/pagesdata/*/<slug>.json` to see which locales have their own copy. Each one is edited separately; there's no inheritance.
2. Edit the values. Keep the keys and nesting, because components read fixed property names.
3. `<title>` and meta description aren't in this file. They're in `src/data/metadata.json` under the path key.
4. If you change `faqs`, the FAQPage JSON-LD changes too (`src/components/NewComps/Schema/index.js:Schema`). If `schemas` contains its own `FAQPage`, update that by hand, because the automatic one is skipped.
5. Check it works: build, then open the page.

> [!WARNING]
> If the page file is legacy (it doesn't take `pageData`), the copy is in the JSX. Grep the page file before assuming a JSON exists. For example, `src/pages/uk/cloud-accounting-software.js` reads FAQs from `src/data/faqs.json` instead.

## Add a blog post
Example commits: `3f6b7416` "Blog opt 62 & 96" (two posts, images, redirects for replaced posts) and `1bd59614` "Isha | posted blog 41 & 42".

**By hand (the path most recent commits used):**
1. Create `_posts/blog/<slug>.mdx`. **The filename is the URL**: `src/pages/blog/[slug].js:getStaticPaths` builds `/blog/<filename>`. Set the front-matter `slug` to the same value, because `src/components/blogs/postItem.js` links cards with `post.slug`.
2. Front-matter, taken from `_posts/blog/evolution-of-accounting-system.mdx` and the fields `getStaticProps` reads:
   ```yaml
   ---
   title: How the Evolution of Accounting Drives Business Growth   # <h1>, fallback <title>
   slug: evolution-of-accounting-system                            # = filename
   date: 2012-05-24T07:05:00+05:30   # sort order; future dates are hidden from lists
   author: Giddh
   coverImage: /img/blog/<slug>/<file>.jpg   # og:image (posts page)
   thumbnail: /img/blog/<slug>/<file>.jpg    # optional: card background (postItem.js)
   seoTitle: ...          # optional, overrides <title>
   description: ...       # card text + fallback meta description
   seoDescription: ...    # optional
   seoKeywords: ...       # optional
   tag: [accounting, small-business]   # optional; slugs
   # optional: html: <name> -> renders src/data/htmlblogs/<name>.html instead of MDX
   # optional: scripts: "<script ...>"   noSchema: true
   ---
   ```
   `modDate` appears in 47 posts but no code in `src/` reads it. <!-- verify:ignore -->
3. Put images in `public/img/blog/<slug>/`, which is what recent commits use. Decap uploads to `public/uploads/`.
4. The body is MDX. The only custom component available is `ReactPlayer` (`<ReactPlayer url="..." controls={true} />`), registered in `src/pages/blog/[slug].js`. Inline JSX such as `<aside style={{...}}>` is allowed. An unknown component or a syntax error **fails the whole build**. <!-- verify:ignore -->
5. Blog JSON-LD is generated by `src/utils/getBlogSchema.js:generateBlogSchema`, unless `src/data/blogSchema.json` has an entry whose `url` equals `${NEXT_PUBLIC_SITE_URL}/blog/<slug>`.
6. A tag used in the post shows in the `/blog` tag list only if it's in `src/tags-meta/tags.json` (read by `src/components/blogs/lib/tags.js:listTags`).
7. Check it works: run `npm run build` (it throws `MDX file not found for slug` on mismatches), then open `/blog/<slug>` and `/blog`.

**Via Decap CMS (`/admin`):** editors log in through Netlify Identity. Fields are defined in `public/admin/config.yml`. Saving goes through the editorial workflow and commits to **`main`**, not `web` ([DEVELOPMENT.md](DEVELOPMENT.md#pr-workflow--deployment-pipeline)). A `preSave` hook in `public/admin/index.html` derives `slug` from the title.

> [!WARNING]
> Decap's image field is `thumbnail`, but the post page's `og:image` reads `coverImage`. A CMS-created post therefore gets the default OG image unless someone adds `coverImage` by hand. Decap's `tag` options are a separate hard-coded list in `public/admin/config.yml`, not `src/tags-meta/tags.json`.

> [!WARNING]
> `isPublished` in `src/components/blogs/lib/posts.js` hides future-dated posts from lists, but `getStaticPaths` still builds their pages. `/blog` and `/blog/tags/...` are server-rendered (`getServerSideProps`), so on Netlify lists update at request time, but the post page itself exists from the moment it's built.

## Rename or remove a URL
Example commit: `3f6b7416`. It replaced `_posts/blog/changing-the-accounting-image.mdx` with `evolution-of-accounting-system.mdx` and added `/blog/changing-the-accounting-image /blog/evolution-of-accounting-system 301` to `public/_redirects`. Counter-example: `1bcb61c5` renamed `ca-signup` to `chartered-accountant-signup` and deleted `src/pages/{in,ae,uk}/ca-signup.js` with **no** redirect. Those URLs 404 today. <!-- verify:ignore -->

1. Rename or delete the page file(s) under `src/pages/` and the locale folders, and the JSON under `src/data/pagesdata/*/`.
2. Add one line per old URL to `public/_redirects`, in the format `<old-path> <new-path> 301`. Rules:
   - Add a line for each locale variant (`/in/x`, `/ae/x`, `/uk/x`).
   - Run `grep -n "^<old-path> " public/_redirects` first. Netlify uses the **first** match, and duplicates already exist.
   - The file has no trailing newline. Append with an editor, not `echo >>`.
   - Point at the final destination. Don't chain onto an existing redirect.
3. Update `pagesToGetData` in `src/utils/getPageData.js`, the path keys in `src/data/metadata.json`, the slug in `src/data/hrefLangTag.json`, and `public/sitemap.xml`.
4. Grep for internal links to the old path in `src/` (navbar, footer, JSON CTAs) and update them: `grep -rn "/old-slug" src public/js`.
5. If the page hides the navbar and footer, update the slug list in `src/pages/_app.js:MyApp` (`loginSignupPathStatus`). `1bcb61c5` had to do this.
6. Check it works: run `npm run build && npm run start`, then open the new URL. Redirects only run on Netlify, so verify the 301 on the `web` test deploy (`curl -sI https://<test-site>/<old-path>`).

> [!WARNING]
> Old URLs carry SEO value and inbound links. About 2,000 rules exist because the WordPress-era URLs were kept alive ([DECISIONS.md ADR-001](DECISIONS.md#adr-001-rebuild-the-wordpress-site-in-nextjs-and-keep-old-urls-alive)). Never delete an existing rule unless its source path is served by a real page again.

## Add an environment variable
Example commit: `5d5f050a` "feat: Refactored S3 configuration into centralized utility module". It moved the `NEXT_PUBLIC_S3_*` reads into `src/utils/s3Config.js` getters.

1. Name it `NEXT_PUBLIC_<NAME>` if the browser needs it. Every current reader runs client-side. A var without the prefix is visible only in `getStaticProps` and `getServerSideProps` (for example `src/pages/blog/[slug].js`).
2. Read it as a literal `process.env.NEXT_PUBLIC_<NAME>`. Prefer a small getter in a `src/utils/` module (the `src/utils/s3Config.js` pattern) over scattering reads. Handle the unset case explicitly, as `getDownloadUrl` does by returning `""`.
3. Add a row to the env table in [DEVELOPMENT.md](DEVELOPMENT.md#environment-variables-reference): required, default, where it's read, and the effect if missing.
4. Ask a human to set it in the Netlify environment for both the `web` test site and `main` production. A rebuild is needed, because values are inlined at build time.
5. Never put a secret in a `NEXT_PUBLIC_` var. If the value must stay secret, it needs a backend endpoint. This site adds no backend of its own ([VISION.md](VISION.md)), so record the need in [CONTRACTS.md](CONTRACTS.md) instead. <!-- verify:ignore -->
6. Check it works: build once without the var and confirm the page degrades rather than crashing. Then build with it set in `.env.local`. <!-- verify:ignore -->
