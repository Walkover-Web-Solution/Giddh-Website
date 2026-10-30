---
covers: ["src/utils/**", "src/hooks/**", "src/pages/**/login.js", "src/pages/**/signup.js", "src/pages/chartered-accountant-signup.js", "src/pages/pricing.js", "src/pages/payment.js", "src/components/otp*.js", "src/components/googleLogin.js", "src/components/loginWithPassword.js", "src/components/NewComps/BookFreeDemoForm/**", "src/components/NewComps/AffiliateForm/**", "src/data/pagesdata/**", "_posts/**", "public/admin/config.yml", "public/js/**", "src/pages/_document.js"]
verified_at: fa3d74c4
verified_on: 2026-10-30
---
# Contracts & Data Schemas

This file lists every network call, cookie, storage key, analytics hook and content JSON shape the website depends on. The repo has no TypeScript, no API client module and no shared types. Each `fetch` is written inline in the page or component that uses it, so the authoritative contract is the request the code builds and the response fields it reads. Both are cited below. Env var names appear here only as references; their meaning and defaults live in [CONFIGURATION.md](CONFIGURATION.md) and [DEVELOPMENT.md](DEVELOPMENT.md). Journeys and step order are in [FLOWS.md](FLOWS.md), and the `pageData` pipeline is in [ARCHITECTURE.md](ARCHITECTURE.md).

## Authoritative Type Definitions

No TS types exist. The table names where each JSON shape is defined de facto.

| Domain Entity | Primary TS Type / Interface | Source File | Description |
|---|---|---|---|
| Giddh API envelope | none (JS) | `src/pages/login.js:validateUserSession` | `{ status: "success" \| other, body, message }`. Every Giddh call branches on `status`, never on the HTTP code (see [error handling](#standard-error-envelope)) |
| Auth result (`body`) | none (JS) | `src/pages/login.js:sendOtpLoginCallbackToParent` | `body.session.id`, or `body.statusCode === "AUTHENTICATE_TWO_WAY"` with `countryCode`, `contactNumber`, `text` |
| Subscription plan | none (JS) | `src/pages/pricing.js:getAmount` | Fields read from `body[]` of the plans call. The row-to-field map is in `src/data/pricingData.json` |
| Invoice pay request | none (JS) | `src/pages/payment.js:getVoucherPaymentRequest` | `body.content` (base64 PDF), `contentNumber`, `contentType`, `amount`, `currency.code`, `company.{name,uniqueName}`, `canPay` |
| Signup identity | none (JS) | `src/pages/signup.js:initiateSignup` | In-memory `emailDetails` / `mobileDetails` objects: `{ email\|mobileNo, accessToken, isVerified, signupVia: "giddh"\|"google", requestId }` |
| Page content | none (JSON) | `src/data/pagesdata/` | Per-page section objects read by NewComps (see [Content Data Contracts](#content-data-contracts)) |
| Blog post | none (front matter) | `public/admin/config.yml` | MDX front matter read by `src/components/blogs/lib/posts.js:fetchPostContent` and `src/pages/blog/[slug].js:getStaticProps` |

## Backend API Endpoints & Contracts

All calls run in the browser, client-side (`mode: "cors"`, `cache: "no-store"` on the auth calls). None send cookies or credentials. The site has no Next.js API routes of its own.

### Giddh API

| Method | Endpoint Path | Base URL | Caller | Auth Required | Request Type | Response Type | Error Statuses |
|---|---|---|---|---|---|---|---|
| GET | `/v2/user` | UK rule ↓ | `src/pages/login.js:validateUserSession`, `src/pages/v2/login.js:validateUserSession` | header `session-id: <cookie value>` | none | `body.session.id` | not checked; non-success → cookie removed |
| GET | `/v2/google-login` | UK rule | `src/pages/login.js:initiateLogin`, `src/pages/v2/login.js:initiateLogin` | header `access-token: <Google OAuth token>` | none | auth result | toast `message` |
| POST | `/v2/auth-login` | UK rule | `src/pages/login.js:sendOtpLoginCallbackToParent`, `src/pages/v2/login.js:sendOtpLoginCallbackToParent` | none (MSG91 widget token in body) | `{ accessToken }` (widget `data.message`) | auth result | toast `message` |
| POST | `/v2/login-with-password` | UK rule | `src/pages/v2/login.js:initiateEmailPasswordLogin` | none | `{ uniqueKey, password }` from `src/components/loginWithPassword.js` | auth result | toast `message` |
| POST | `/v2/register` | UK rule | `src/pages/signup.js:initiateSignup`, `src/pages/chartered-accountant-signup.js:initiateSignup` | none (OTP or Google tokens in body) | `{ emailId, emailIdAccessToken, emailIdAuthType, mobileNo, mobileNoAccessToken }` | auth result | toast `message` (top-center) |
| POST | `/generate-otp` | UK rule | `src/components/otpVerifyModal.js:resendOtp` | none | `{ countryCode, mobileNumber }` from the 2FA `body` | `status` only | toast `message` |
| POST | `/v2/verify-number` | UK rule | `src/components/otpVerifyModal.js:verifyNumber` | none | `{ countryCode, mobileNumber, oneTimePassword }` | `body.session.id` | toast `message` |
| GET | `/v2/subscription/plans/all?regionCode=` | `NEXT_PUBLIC_API_URL` only | `src/pages/pricing.js` (`fetchData`, `getRegionByLink`) | none | query `regionCode` = `IND` / `ARE` / `GBR` / `GLB` from the locale prefix | `body[]` plans | `!response.ok` → `console.error` and an empty table, no toast |
| POST | `/verify-and-send` | `NEXT_PUBLIC_API_URL` only | `src/utils/affiliateRegistration.js:submitAffiliateRegistration` | none (MSG91 email token in body) | `{ email, phone, full_name, company_name, website_url, currency_code, "access-token" }` | `status`, `data.success`, message from `body`/`message`/`error`/`data.message` | throws → toast in `src/components/NewComps/AffiliateForm/index.js` |
| GET | `/invoice-pay-request/{token}?voucherVersion=` | `NEXT_PUBLIC_API_URL` only | `src/pages/payment.js:getVoucherPaymentRequest` | URL `token` query param | none | pay-request `body` | toast "No payment request found!" |
| POST | `/company/{uniqueName}/invoices/{contentNumber}/pay?voucherVersion=` | `NEXT_PUBLIC_API_URL` only | `src/pages/payment.js:successPayment` | none | v2: `{ paymentId, amount, date: "dd-mm-yyyy" }`; v1: `data`, an undeclared name, so this path throws `ReferenceError` | `body` (success text) | toast `body.message` |
| POST | `/company/{uniqueName}/proforma/{contentNumber}/pay` | `NEXT_PUBLIC_API_URL` only | `src/pages/payment.js:successPayment` | none | raw Razorpay handler response (`razorpay_payment_id`, …) | `body` | toast `body.message` |

**UK base URL rule.** Auth calls use `NEXT_PUBLIC_UK_API_URL` when `path.isUK` is true, and `NEXT_PUBLIC_API_URL` otherwise. `path.isUK` is true when the first URL segment is `/uk` (`src/pages/_app.js:MyApp`), so only `/uk/login` and `/uk/signup` (`src/pages/uk/login.js` and `src/pages/uk/signup.js` wrap the root pages) reach the UK API. Global, `/in` and `/ae` all use the default API. Pricing, affiliate and payment never switch. `src/pages/v2/login.js` exists only at the root, so its UK branch is unreachable (inference).

**Pricing auxiliary data.** Plan fields read: `name`, `description`, `monthlyAmount`, `yearlyAmount`, `monthlyAmountAfterDiscount`, `yearlyAmountAfterDiscount`, `monthlyDiscount`, `yearlyDiscount`, `monthlyDiscountAmount`, `yearlyDiscountAmount`, `currency.code` and `currency.symbol`. `src/pages/pricing.js:getPlanInfoByFeature` also reads the plan keys named by the rows of `src/data/pricingData.json` (`invoicesAllowed`/`monthlyInvoicesAllowed`, `billsAllowed`/`monthlyBillsAllowed`, `companiesLimit`/`monthlyCompaniesLimit`). Rows without `yearly` render `specificContent` (raw HTML), `isAvailableForAll` or a tick or cross.

### Handoff to the Giddh app (`token-verify`)

Every successful auth path sets the region session cookie (see [persistence](#persistence--client-cache-contracts)) and then assigns `window.location = NEXT_PUBLIC_APP_URL + "/token-verify?…"`:

| Query param | Value | Set by |
|---|---|---|
| `request` | `body.session.id` | OTP login, session revalidation, password login, 2FA verify (`src/utils/signupHelpers.js:handleOtpVerifyRedirect`), signup, CA signup |
| `token` | the Google OAuth access token, not the session id | Google login in `src/pages/login.js:initiateLogin` and `src/pages/v2/login.js:initiateLogin` |
| `region` | `GL` / `IN` / `AE` / `UK` (upper-cased locale prefix, `GL` for global) | `/login`, `/signup`, CA signup. Omitted by every `src/pages/v2/login.js` redirect |
| `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `ref` | the `localStorage` values written by `public/js/helper.js:setUtmParamInLocalStorage` | signup and CA signup only |
| `source` | JSON string of the non-UTM query params, from `src/utils/signupHelpers.js:getSourceParam`. CA signup adds `mrnNumber` (`src/pages/chartered-accountant-signup.js:getCaSourceParam`) | signup and CA signup only |

The values are concatenated without `encodeURIComponent`, so `source` is raw JSON inside the URL. The CA membership number (MRN) never goes to `/v2/register`. It reaches the app only through `source` and the `giddh_query` cookie.

### Third-party endpoints

| Method | Endpoint | Caller | Auth / key | Contract |
|---|---|---|---|---|
| GET (popup) | `https://accounts.google.com/o/oauth2/auth?response_type=token` <!-- verify:ignore --> | `src/components/googleLogin.js:initGoogleSignup` | `NEXT_PUBLIC_GOOGLE_CLIENT_ID`; redirect `NEXT_PUBLIC_SITE_URL + "/googleauth"` | `src/pages/googleauth.js` posts `{ origin: "giddh", accessToken }` to `window.opener` with target `"*"`. The listener does not check `event.origin` |
| GET | `https://www.googleapis.com/oauth2/v1/userinfo` <!-- verify:ignore --> | `src/components/googleLogin.js:getGoogleUserDetails` | `authorization: Bearer <token>` | reads `email`; adds `accessToken` and calls `googleApiSuccessCallback` |
| script | `https://verify.msg91.com/otp-provider.js` <!-- verify:ignore --> | `public/js/helper.js:addOtpWidgetScript` | widget id and token hard-coded in `public/js/helper.js:getOtpwidgetConfiguration` | Exposes `window.initSendOTP`, `sendOtp(id, ok, fail)`, `verifyOtp(otp, ok, fail, requestId)`, `retryOtp(channel, ok, fail, requestId)` and `getWidgetData()`. `data.message` is the `requestId` after a send and the access token after a verify. Channel `3` is email (`EMAIL_OTP_CHANNEL` in `src/hooks/useEmailOtpVerification.js`) |
| POST | `NEXT_PUBLIC_MSG91_PHONEBOOK_URL` (demo leads) | `src/utils/segmento.js:sendDataInSegmento` | header `tokenAuth: NEXT_PUBLIC_MSG91_AUTH_KEY` (shipped in the client bundle) | body `{ input: { name, email, phone, business, utm_source, utm_medium, utm_campaign, utm_term, utm_content, ref, region, gclid, fbclid } }` from `src/components/NewComps/BookFreeDemoForm/index.js`. An empty body counts as `{status:"success"}` whatever the HTTP status |
| GET | `NEXT_PUBLIC_S3_BASE_URL/NEXT_PUBLIC_S3_BUCKET_NAME/NEXT_PUBLIC_APP_ENV/{windows\|mac}/latest/latest[-mac].yml` <!-- verify:ignore --> | `src/utils/s3Config.js:getAppVersion` | public | regex `version:` → label; falls back to `"latest"`. Download links come from `src/utils/s3Config.js:getDownloadUrl` (`giddh-setup` or `giddh-test-setup` `.exe`/`.dmg`). Read only, nothing is uploaded |
| script + modal | `https://checkout.razorpay.com/v1/checkout.js` <!-- verify:ignore --> | `src/pages/payment.js:payInvoice` | `NEXT_PUBLIC_RAZORPAY_KEY` | options `{ key, amount (v2: body.amount; v1: amount*100), currency (v2: body.currency.code; v1: "INR"), name, description, handler }` |
| GET | `https://api.db-ip.com/v2/free/self` <!-- verify:ignore --> | `src/hooks/useIntlTelInput.js` (`geoIpLookup`), `src/utils/signupHelpers.js:geoIpLookupHandler` | public | reads `countryCode`, defaulting to `in`. `geoIpLookupHandler` never calls `.json()`, so signup always falls back to `in`. Its `http://ip-api.com` / `ipinfo.io` fallbacks never run |
| embed | Typeform `uOtrQ4tb`, Calendly popup, Trustpilot widget | `src/components/bannerSection.js`, `public/js/helper.js:openCalendly`, `src/components/navbar.js` | public | Typeform hidden field `utm` reads React state that is set in the same call (stale, `null` on the first open) |

## Authentication & Authorization Assumptions

- **Token Storage:** The site never holds a long-lived credential. A Giddh session id is written to a cookie by `public/js/helper.js:setGiddhRegionSession`: `giddh_session_id_uk` for UK, `giddh_session_id` for every other region (`getRegionSessionCookieName`). It lasts 30 days, with `path=/` and `domain=.giddh.com` on any `giddh.com` host, the current host elsewhere and no domain on localhost. It is readable by JS (not httpOnly). That is how the app on another `giddh.com` subdomain can share it (inference). The app is entered through the `token-verify` query params above, never through the cookie alone.
- **Token Refresh Cycle:** None. On mount, `/login` and `/v2/login` call `GET /v2/user` with the cookie's session id. If the response is `success` they redirect to the app. Otherwise `removeGiddhRegionSession` deletes the cookie. A failed fetch has no `.catch`.
- **Tenant Isolation:** Region is the only tenant split. It decides the API base URL (UK rule), the session cookie name, the `region` param and the `giddh_region` cookie. No tenant headers exist. The OTP 2FA step (`AUTHENTICATE_TWO_WAY`) is driven by the backend and handled in `src/components/otpVerifyModal.js`.
- `public/js/helper.js` also defines `setGiddhSession` and `removeGiddhSession`, which nothing in `src/` calls. `setGiddhSession` removes a `session` localStorage key.

## Standard Error Envelope

The API has no standard error envelope. The code assumes this shape (derived from the reads above, not from an API spec):

```json
{ "status": "success", "body": { "session": { "id": "…" }, "statusCode": "AUTHENTICATE_TWO_WAY", "countryCode": "…", "contactNumber": "…", "text": "…" } }
{ "status": "error", "message": "Human-readable reason shown in a toast" }
```

| Call(s) | Success test | Failure handling observed |
|---|---|---|
| Giddh auth calls (login, signup, OTP 2FA) | `status === "success"` (`==` in some) | `toast(response.message)` via react-toastify. `.catch(err => toast(err))` passes the `Error` object, not `err.message` |
| `GET /v2/user` | `status === "success"` | silent: cookie removed, no `.catch` |
| Plans | `response.ok`, then reads `body` | `console.error`; the table renders empty |
| `/verify-and-send` | `status === "success"` \|\| `data.success` \|\| `response.ok` | any 2xx counts as success even with an error body; message precedence `body` → `message` → `error` → `data.message` |
| Payment | `status === "success"` | toast; pay call reads `response.body.message`; no `.catch` |
| Demo lead (phonebook) | `status === "success"` or empty body | shows `data.errors` inline; network error → "Submission failed" |
| MSG91 widget callbacks | success callback | `toast(error.message)` |

Toasts render through the single `ToastContainer` in `src/components/toastify.js`. Every caller calls `toast.dismiss()` first.

## Persistence & Client Cache Contracts

All cookies are written by `public/js/helper.js:setCookie` (30 days, domain rule above). The script runs blocking in `<head>` (`src/pages/_document.js`) and executes `setUtmParamInLocalStorage` and `setUtmParamsInCookies` on every page load.

| Store Name | Storage Key | Format | Owner / Invalidator |
|---|---|---|---|
| cookie | `giddh_session_id` / `giddh_session_id_uk` | session id string | `public/js/helper.js:setGiddhRegionSession`; cleared by `removeGiddhRegionSession` |
| cookie | `giddh_region` | `gl` / `in` / `ae` / `uk` | `public/js/helper.js:setGiddhRegion`, from `/login`, `/signup`, CA signup |
| cookie | `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `ref`, `region`, `gclid`, `fbclid` | trimmed string; all nine are rewritten (blank if absent) whenever any one is in the URL | `public/js/helper.js:setUtmParamsInCookies`; read by `src/utils/utmParams.js:getUtmParamsFromCookies` |
| cookie | `giddh_query` | JSON `{ utm_*, ref, region, source: {…} }` of the landing query | `public/js/helper.js:setUtmParamInLocalStorage`; CA signup merges `source.mrnNumber` |
| localStorage | `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `ref`, `region` | JSON-encoded string (`setLocalStorage`) | `public/js/helper.js:setUtmParamInLocalStorage`; read by signup, CA signup, `src/components/bannerSection.js`, `src/pages/contact-us.js` |
| localStorage | `source` | JSON object of non-UTM query params (CA signup adds `mrnNumber`) | helper.js; `src/utils/signupHelpers.js:getSourceParam` |
| localStorage | `userData` | `{ user: { email \| mobileNo }, accessToken, signupVia }` | read and removed by signup and CA signup (`initOtpSignup`, `resetEverything`). No writer in this repo |

`public/js/helper.js:deleteUtmCookies` exists, but nothing calls it. No sessionStorage, IndexedDB or query cache is used.

## Analytics & Telemetry Event Contracts

| Event Name | Trigger Location | Required Payload Properties |
|---|---|---|
| gtm.js (GTM container `GTM-K2L9QG`) | inline snippet in `src/pages/_document.js:Document`, plus the `<noscript>` iframe | `gtm.start` timestamp. The code makes no other `dataLayer` push; tags and triggers live in the GTM container |
| amplifyapp tracker | `src/pages/_document.js` async `tracker.js` from `main.d2f49esifpcbwh.amplifyapp.com` <!-- verify:ignore --> | none passed by the site |
| demo lead ("Segmento") | `src/components/NewComps/BookFreeDemoForm/index.js` submit → `src/utils/segmento.js:sendDataInSegmento` | `input.{name,email,phone,business}` plus the nine UTM cookies |
| attribution handoff | `token-verify` redirect after signup | UTM, `ref` and `source` query params (see [handoff](#handoff-to-the-giddh-app-token-verify)) |

> [!TODO]
> No CookieYes code is in the repo, though `docs/OPEN_QUESTIONS.md` notes CookieYes running in the browser. It is presumably injected by the GTM container (inference). Confirm which consent banner and analytics tags GTM loads and what events they fire.

## Content Data Contracts

**pageData.** `src/utils/getPageData.js:getPageData` loads `src/data/pagesdata/{country}/{page}.json` only for the page slugs in its allow-list, and returns `null` when the file is missing. `src/pages/_app.js` passes the result as the `pageData` prop and also feeds `schemas` and `faqs` to `src/components/NewComps/Schema/index.js`. That component adds an FAQPage JSON-LD built from `faqs` when no `schemas[]` entry has that type. Section keys are free-form, but each one maps to a NewComp prop. Most common, counted across 52 JSON files at `fa3d74c4`: `faqs` (52 files), `cta` (48), `features` (46), `splitBanner` (44), `schemas` (42), `characteristics` (38), `useCases` (29), `quickStartSection` (21), `testimonials` (15), `giddhVs` (15), `benefits` (14), `ctaTwo` (7). `benefits` and `giddhVs` became common in the PR #828 feature-page rewrite. A trimmed real shape, from `src/data/pagesdata/global/home.json` and `src/data/pagesdata/uk/triggers.json`:

```json
{
  "stackedBanner": { "heading": "…", "subHeading": "…", "image": "/img/…svg", "buttons": [{ "text": "Book a Free Demo", "link": "/online-accounting-software" }] },
  "splitBanner":   { "heading": "…", "subHeading": "…", "image": "/img/…", "form": false, "header": false, "buttons": [{ "text": "…", "link": "/signup" }] },
  "stats":         { "heading": "…", "stats": [{ "value": "4.8/5", "label": "Average User Rating" }] },
  "features":      { "heading": "…", "content": [{ "heading": "…", "img": "/img/…", "description": "…", "more_content": ["…"] }], "buttons": [{ "text": "…", "link": "/all-features" }] },
  "characteristics": { "heading": "…", "subHeading": "…", "cards": [{ "heading": "…", "description": "…", "more_content": ["…"] }] },
  "quickStartSection": { "heading": "…", "steps": [{ "icon": "/img/…svg", "title": "…", "description": "…" }] },
  "cta":           { "heading": "…", "subheading": "…", "image": "/img/…svg", "theme": "light", "buttons": [{ "text": "Get Started", "link": "/signup", "type": "btn-secondary-outline" }] },
  "giddhVs":       { "heading": "…", "columns": [{ "key": "giddh", "label": "Giddh", "logo": "/img/…svg" }], "content": [{ "feature": "…", "giddh": "…", "quickbooks": "…", "tally": "…" }] },
  "testimonials":  { "heading": "…", "subheading": "…", "data": [{ "company": "…", "owner": "…", "testimonial": "…" }] },
  "benefits":      [{ "cols": 3, "items": [{ "icon": "/img/…svg", "text": "…" }] }],
  "faqs":          [{ "question": "…", "answer": "…" }],
  "schemas":       [{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [] }]
}
```

`buttons[].link` is rendered verbatim, with no locale prefix added (`src/components/NewComps/CTA/index.js`, `src/components/NewComps/Banner/StackedBanner/index.js`, `src/components/NewComps/Features/AlternateFeatures/index.js`). The `in`, `ae` and `uk` JSON files mostly link to bare `/signup`, which is the global signup page on the default API. Write `"/uk/signup"` explicitly if the locale should be kept. The `type` value is a button CSS class, and the theme value `"light"` switches CTA colours. Component props and styling are in [DESIGN.md](DESIGN.md).

**Blog front matter.** Fields come from the Decap collection in `public/admin/config.yml` (folder `_posts/blog`, .mdx files, git-gateway on `main`, editorial workflow, media in `public/uploads`) and from what the code reads:

| Field | Read by | Notes |
|---|---|---|
| `title`, `description`, `author`, `seoTitle`, `seoDescription`, `seoKeywords` | `src/pages/blog/[slug].js:getStaticProps` | `<title>`/meta/og fall back from the `seo*` fields to `title`/`description` |
| `date` | `posts.js` sort + `isPublished`; formatted `LLLL d, yyyy` | Future-dated posts are hidden from lists but still built by `getStaticPaths` |
| `slug` | `src/pages/blog/[slug].js` (`slugToPostContent`) and the blog schema URL | The URL comes from the file name (`staticPath`), but list cards link by `slug`, so it **must equal the file name** or the card links to a 404 |
| `tag` (array) | `countPosts` / `listPostContent` filters | CMS options are a hard-coded list; tag pages use `src/tags-meta/tags.json` |
| `thumbnail` | `src/components/blogs/postItem.js` (list card background) | CMS image widget writes this field |
| `coverImage` | `[slug].js` og:image and JSON-LD `image` | Not in the CMS config. 178 posts use it, 17 use `thumbnail` |
| `html` | `[slug].js` reads `src/data/htmlblogs/{html}.html` and renders it instead of the MDX body | Used by 2 posts (e.g. `_posts/blog/cloud-accounting-security-guide.mdx`) |
| `scripts` | `src/pages/blog/[slug].js` (`extractScripts`) → inline `<script>` in `<Head>` | YAML block string of `<script>` tags |
| `noSchema` | `src/utils/getBlogSchema.js:getBlogSchema` | Skips JSON-LD. Otherwise a matching `src/data/blogSchema.json` entry or a generated `BlogPosting` is used |

Front matter is parsed with `js-yaml` `JSON_SCHEMA`. WordPress-import keys (`status`, `type`, `id`, `post_format`, `wpmm_postgrid_views`, `modDate`, `excerpt`) appear in many posts, but the blog code does not read them. <!-- verify:ignore -->

**SEO key formats** (owned by [DESIGN.md](DESIGN.md)): `src/data/metadata.json` is keyed by the exact URL path (`"/"`, `"/in/pricing"`, `"/v2/login"`) with `{ title, description, keywords, ogTitle, ogDescription, ogImage, canonical }`. `src/data/hrefLangTag.json` is `{ global|in|ae|uk: [pageSlug…] }`, using the same slug as `path.page` (`"home"` for the locale root). Both are read in `src/components/header.js:Header`.

## Required / Unavailable Backend Capabilities

### Proposed Endpoint: `GET /v2/subscription/plans/all?regionCode=` readable at build time (proposal, not existing)
- **Purpose:** `src/pages/pricing.js` fetches plans in the browser, so no plan names or prices are in the prerendered HTML. That conflicts with the static, SEO-first non-goal ([VISION.md](VISION.md); Q-003 in [OPEN_QUESTIONS.md](OPEN_QUESTIONS.md)). Rendering plans with `getStaticProps` requires the same endpoint to be reachable without CORS or auth from the Netlify build, with stable data between deploys. Revalidation would also be needed if prices change between builds.
- **Required Query/Body Parameters:**
  ```json
  { "regionCode": "IND | ARE | GBR | GLB (required)" }
  ```
- **Expected Success Response (200 OK):** the existing envelope, unchanged. These are the fields `src/pages/pricing.js` already reads:
  ```json
  { "status": "success", "body": [{ "name": "string", "description": "string",
    "monthlyAmount": 0, "yearlyAmount": 0, "monthlyAmountAfterDiscount": 0, "yearlyAmountAfterDiscount": 0,
    "monthlyDiscount": "truthy-checked, type unknown", "yearlyDiscount": "truthy-checked, type unknown", "monthlyDiscountAmount": 0, "yearlyDiscountAmount": 0,
    "currency": { "code": "INR", "symbol": "₹" },
    "invoicesAllowed": 0, "monthlyInvoicesAllowed": 0, "billsAllowed": 0, "monthlyBillsAllowed": 0,
    "companiesLimit": 0, "monthlyCompaniesLimit": 0 }] }
  ```
- **Blocking Status:** Unknown whether the current endpoint already allows unauthenticated server-side reads. It needs backend confirmation, and nothing has been built. Don't hard-code plans in JSON as a stand-in: the JSON rewrite in PR #645 was rolled back in PR #673.
