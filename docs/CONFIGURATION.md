---
covers: ["package.json", "next.config.js", "jsconfig.json", "config.js", "public/_headers", "public/robots.txt", "public/admin/config.yml", "public/js/helper.js", "src/utils/getPageData.js", "src/utils/s3Config.js", "src/utils/segmento.js", "src/utils/msg91Otp.js", "src/pages/_app.js", "src/pages/_document.js", "src/pages/pricing.js", "src/hooks/useIntlTelInput.js"]
verified_at: fa3d74c4
verified_on: 2026-10-30
---
# Configuration

Every setting this repository reads, checked against the code at `fa3d74c4`. Names only: no deployed values. How to install and where humans keep the values is in [DEVELOPMENT.md](DEVELOPMENT.md). What each API call sends is in [CONTRACTS.md](CONTRACTS.md).

There is no `.env.example` and no committed env file. `.gitignore` ignores `.env`, `.env.local`, `.env.production`, `.env.test` and `package-lock.json`. <!-- verify:ignore -->

## How a setting is applied

Next inlines a variable whose name starts with NEXT_PUBLIC_ only when the source spells process.env and that name as a literal property. A dynamic lookup is empty in the browser. Changing a value in the host environment does nothing until the next build. There is no server-only env reader: every `process.env` use below is in a module that also runs in the browser.

Anything not in the env table is a literal in the file cited. It does not change between the `web` test site and production unless someone edits the file.

## Environment variables

Eleven variables. All are optional in the sense that `npm run build` still finishes when they are unset. "Breaks" means the behaviour when the variable is missing.

| Variable | Read in | If unset |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `src/pages/_app.js` (`baseURL` only; this reader has a hardcoded origin fallback), `src/components/header.js` (canonical and `og:image`), `src/pages/blog/[slug].js` (`og:image`), `src/utils/getBlogSchema.js`, `src/components/googleLogin.js` (redirect URI), `src/pages/v2/login.js` | Canonical and `og:image` become an `undefined` origin. Navbar country links still use the fallback inside `baseURL`. Blog JSON-LD lookup matches hand-written `src/data/blogSchema.json` URLs only when this value equals the origin those entries were written with. |
| `NEXT_PUBLIC_API_URL` | `src/pages/signup.js`, `src/pages/login.js`, `src/pages/v2/login.js`, `src/pages/chartered-accountant-signup.js`, `src/components/otpVerifyModal.js`, `src/pages/pricing.js`, `src/pages/payment.js`, `src/utils/affiliateRegistration.js` | Those requests use an `undefined` base. Pricing, login, signup, OTP, invoice payment and affiliate registration fail. |
| `NEXT_PUBLIC_UK_API_URL` | The four auth pages and `src/components/otpVerifyModal.js`, when the value they treat as `isUK` is true | UK auth calls use an `undefined` base. Pricing, payment and affiliate registration never read this variable; they always use `NEXT_PUBLIC_API_URL`. |
| `NEXT_PUBLIC_APP_URL` | `src/utils/signupHelpers.js` (`handleOtpVerifyRedirect`), `src/pages/signup.js`, `src/pages/login.js`, `src/pages/v2/login.js`, `src/pages/chartered-accountant-signup.js` | The browser is sent to a relative `token-verify` path on this site. |
| `NEXT_PUBLIC_APP_ENV` | `src/utils/s3Config.js` (`getEnvName`) | The download path contains the segment `undefined`. Only the exact string `test` selects the test installer name inside `getDownloadUrl`; any other string uses the production installer name. |
| `NEXT_PUBLIC_GOOGLE_CLIENT_ID` | `src/components/googleLogin.js` | The Google popup is opened with an empty client id. |
| `NEXT_PUBLIC_RAZORPAY_KEY` | `src/pages/payment.js` (`payInvoice`) | Razorpay checkout is opened with an empty key. The code treats it as the publishable key. No secret key is read anywhere. |
| `NEXT_PUBLIC_MSG91_PHONEBOOK_URL` | `src/utils/segmento.js` (`sendDataInSegmento`) | The demo-form POST fails, the `catch` runs, and the function returns a status of `error`. |
| `NEXT_PUBLIC_MSG91_AUTH_KEY` | `src/utils/segmento.js` only, as the `tokenAuth` header | Same failure as a missing phonebook URL. This name is not read by `src/utils/msg91Otp.js`. |
| `NEXT_PUBLIC_S3_BASE_URL` | `src/utils/s3Config.js` (`getS3BaseUrl`) | `getDownloadUrl` returns an empty string. `getAppVersion` shows the word `latest` and does not fetch. |
| `NEXT_PUBLIC_S3_BUCKET_NAME` | `src/utils/s3Config.js` (`getBucketName`) | Same fallback as a missing base URL. Both must be set or the download URL is empty. |

`getDownloadUrl` builds a path of base, bucket, env name, then `windows` or `mac`, then `latest`, plus an installer file. Windows uses an `.exe` name and Mac a `.dmg` name. `getAppVersion` fetches a YAML file whose name starts with latest and ends in the yml extension, or the Mac name with -mac before that extension. Callers are `src/components/downloadFreeModal.js` and `src/components/footer.js`.

The same eleven names are repeated in [DEVELOPMENT.md](DEVELOPMENT.md#environment-variables-reference) so the doc check can see them there. Add a new variable to both files ([RECIPES.md](RECIPES.md#add-an-environment-variable)).

## Build and repo settings

| Setting | Where | What the code does |
|---|---|---|
| npm scripts | `package.json` | `dev` and `start` run Next on port `8080`. `build` is `next build`. `lint` is `next lint`. |
| `sassOptions.silenceDeprecations` | `next.config.js` | Silences the Sass `import` deprecation. The SCSS still uses `@import`. |
| `turbopack` | `next.config.js` | Empty object. Present so Next 16 does not warn about the webpack block. |
| webpack `fs` fallback | `next.config.js` | `resolve.fallback.fs` is `false`. The comment in the file says this keeps a client bundle from breaking on `fs`. |
| `@/*` | `jsconfig.json` | Maps that alias onto the src directory. The pattern is in the file. |
| `posts_per_page` | `config.js` | Number `25`. Re-exported by `src/components/blogs/lib/config.js`. No other key in `config.js` is read. |
| Prettier | `.prettierrc` | One key, `singleQuote`, set to false. Prettier is not a dependency in `package.json`. |
| Lockfile and env files | `.gitignore` | The lockfile and the four env filenames above are ignored. `package.json` has no engines field. The repo has no nvmrc file and no Netlify config file. |
| Frame headers | `public/_headers` | `X-Frame-Options` is `DENY`. `Content-Security-Policy` is `frame-ancestors 'none'`. No other CSP directive is set. |
| Robots | `public/robots.txt` | `User-agent: *`, `Disallow: /cgi-bin/`, then two `Sitemap` lines: this site's `sitemap.xml`, and an external image sitemap. Who operates that host is not in the repo ([OPEN_QUESTIONS.md](OPEN_QUESTIONS.md)). |
| Decap CMS | `public/admin/config.yml` | Backend name `git-gateway`, branch `main`, `publish_mode` `editorial_workflow`, `media_folder` `public/uploads`, `public_folder` `/uploads`. One collection, `blog`, folder `_posts/blog`, extension `mdx`. Field names: `title`, `seoTitle`, `slug`, `date`, `author`, `tag`, `thumbnail`, `description`, `seoDescription`, `seoKeywords`, `body`. `tag` options are a fixed list in that file. |

## Hard-coded runtime settings

These are not environment variables.

| Setting | Where | Behaviour |
|---|---|---|
| GTM container | `src/pages/_document.js` | Inline snippet and `<noscript>` iframe. The container id in both is `GTM-K2L9QG`. |
| `helper.js` | `src/pages/_document.js` | Blocking script `/js/helper.js` on every page. |
| Amplify tracker | `src/pages/_document.js` | Async script URL written in the file. Not an env var. What it collects is not in the repo. |
| `<Html lang>` | `src/pages/_document.js` | The attribute is the literal `en` for every locale. |
| Chrome hidden | `src/pages/_app.js` | Navbar and footer are omitted when the last path segment is `login`, `signup`, `chartered-accountant-signup`, `online-accounting-software`, `thank-you` or `googleauth`. |
| `baseURL` fallback | `src/pages/_app.js` | Only this field falls back when `NEXT_PUBLIC_SITE_URL` is unset. The fallback is a hardcoded production origin in that file. |
| MSG91 OTP widget | `public/js/helper.js` `getOtpwidgetConfiguration` | `widgetId` and `tokenAuth` are string literals, the same for every environment. `addOtpWidgetScript` loads the otp-provider script from verify.msg91.com. `src/utils/msg91Otp.js` calls `addOtpWidgetScript`; it does not read `NEXT_PUBLIC_MSG91_AUTH_KEY`. Do not copy the two literals into docs, tickets or new code. |
| Pricing region code | `src/pages/pricing.js` `getRegionByLink` | `in` → `IND`, `ae` → `ARE`, `uk` → `GBR`, anything else → `GLB`. Sent as `regionCode` on the plans request. |
| Session cookie name | `public/js/helper.js` `getRegionSessionCookieName` | Region `UK` uses `giddh_session_id_uk`. Every other region uses `giddh_session_id`. |
| Cookie domain and life | `public/js/helper.js` `setCookie` | Callers pass `30` as the day count. If the hostname contains `giddh.com`, the cookie domain is `.giddh.com`. Other hosts except `localhost` and `127.0.0.1` use that hostname. Localhost gets no `Domain` attribute. Path is `/`. |
| Typeform | `src/pages/contact-us.js`, `src/components/bannerSection.js` | `createSlider` is called with a form URL literal. The same URL is in both files. |
| Calendly | `public/js/helper.js` `openCalendly` | Injects Calendly's widget script and stylesheet, then opens a scheduling URL literal. |
| intl-tel-input | `src/hooks/useIntlTelInput.js` | CSS, JS and utils URLs are literals pointing at one jsDelivr version of the library. |
| Phone-country lookup | `src/utils/signupHelpers.js` `geoIpLookupHandler`, `src/hooks/useIntlTelInput.js` | Public geo-IP URLs (db-ip, and in the signup helper also ip-api and ipinfo). Not env vars. The signup helper's parse bug is [Q-019](OPEN_QUESTIONS.md#active-questions-table). |
| Page JSON allow-list | `src/utils/getPageData.js` `pagesToGetData` | 25 slugs, listed in the next section. A slug that is absent returns `null` with no build error. |

## Content allow-lists and SEO files

`pagesToGetData`, in order: `home`, `cloud-accounting-software`, `invoice-software`, `multi-user-accounting-software`, `online-accounting-software`, `tally-vs-giddh`, `inventory-management-software`, `small-business-bookkeeping-software`, `e-invoice`, `conect-bank-reconcile`, `import-data`, `gst`, `multi-currency-accounting-software`, `tally-to-giddh-migration`, `make-the-switch`, `zoho-vs-giddh`, `financial-reporting`, `affiliate`, `recurring-invoices`, `invoice-bill-scanning`, `email-to-bank-sync`, `salesperson-feature-report`, `customer-portal`, `magic-link-ledger-accounts`, `triggers`.

JSON files on disk at `fa3d74c4`: 12 under `src/data/pagesdata/global/`, 24 under `src/data/pagesdata/in/`, 8 under `src/data/pagesdata/ae/`, and 8 under `src/data/pagesdata/uk/`. The allow-list is not per locale. A listed slug with no file for that country makes `getPageData` return `null` (the `require` error is swallowed). India is missing only `online-accounting-software.json`, and `src/pages/in/` has no page file for that slug. AE and UK have no `home.json`; their home routes are legacy pages, so the `null` page data is unused. `invoice-software.json` exists only under `src/data/pagesdata/in/`.

Other files that configure what a public URL shows, without being env vars:

| File | Role |
|---|---|
| `src/data/metadata.json` | Title, description, keywords, OG and canonical, keyed by exact path. 137 entries; 21 of them set `canonical`. |
| `src/data/hrefLangTag.json` | Which paths get hreflang alternates. |
| `src/data/blogSchema.json` | Hand-written blog JSON-LD, matched by site URL plus slug. |
| `src/data/pricingData.json` | Feature rows merged with the plans API response. Keyed by country. |
| `src/data/faqs.json` | FAQ copy for legacy pages that import it. |
| `src/data/data.json` | Navbar feature menu and other shared links. |
| `public/sitemap.xml` | Hand-written URL list. Not generated by the build. |
| `public/_redirects` | Netlify redirect rules. |
| `_posts/blog/*.mdx` | One post per file. Front matter `slug` is the URL slug. |

## Cookies and localStorage

Written from the query string on every page load by `public/js/helper.js`:

- localStorage, via `setLocalStorage`: `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `ref`, `region`. Any other query key is stored together under `source`.
- Cookies, via `setUtmParamsInCookies`: the seven names above plus `gclid` and `fbclid`.
- Cookie `giddh_query`: a JSON string of the UTM object, also written by `src/pages/chartered-accountant-signup.js`.

Also: cookie `giddh_region` (`setGiddhRegion`), and the session cookies named above (`setGiddhRegionSession`). `setGiddhSession` writes `giddh_session_id` with no region argument.

`userData` is read from localStorage in `src/pages/signup.js` and `src/pages/chartered-accountant-signup.js`. Nothing in this repo writes it ([Q-030](OPEN_QUESTIONS.md#active-questions-table)).

## Not configured here

No Next.js i18n block, no API routes under `src/pages/`, no CI workflow, no test runner, no ESLint config, and no secret store. Third-party accounts (Giddh API, Google, Razorpay, MSG91, Netlify, GTM) are outside the repo. The values for the eleven variables are not recorded in git; [DEVELOPMENT.md](DEVELOPMENT.md) marks that as a human question.
