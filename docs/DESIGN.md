---
covers: ["src/scss/**", "src/components/NewComps/**", "src/components/*.js", "src/components/header.js", "src/components/NewComps/Schema/**", "src/data/metadata.json", "src/data/hrefLangTag.json", "src/data/faqs.json", "src/data/schema/**", "public/fonts/**", "public/sitemap.xml", "public/robots.txt"]
verified_at: 207fbc59
verified_on: 2026-10-24
---
# Design System & UI Standards

The site is a static marketing site. Its styles are Bootstrap 5 CSS plus one global SCSS bundle. Newer sections also use CSS modules. There is no component library, no Tailwind, no theme provider and no dark mode. Two UI generations live side by side:

- **Current:** JSON-driven sections in `src/components/NewComps/`. Page bodies in `src/components/Pages/` compose them from `pageData`. Global and `/in` pages mostly use this generation ([ADR-005](DECISIONS.md#adr-005-json-driven-pages-with-newcomps-sections)).
- **Legacy:** hand-written page markup and the root-level `src/components/*.js` sections. The AE / UK home pages use these, along with pricing, about and other pages ([Q-010](OPEN_QUESTIONS.md#active-questions-table)).

The page and `pageData` pipeline belongs to [ARCHITECTURE.md](ARCHITECTURE.md). Recipes for adding pages and sections belong to [RECIPES.md](RECIPES.md). Product intent belongs to [VISION.md](VISION.md).

## Visual & Interaction Principles

1. **Bootstrap first.** This is the team rule from `README.md`. Lay out with Bootstrap grid and utilities (`container`, `row`, `col-lg-*`, `d-flex`, `gap-*`, `py-5`). Add local styles only when Bootstrap can't do the job.
2. **Current look (NewComps):**
   - Headings use serif Cormorant Garamond (`garmond-font`, `font-heading`, `font-sub-heading`).
   - Body text uses Outfit (`outfit-font`).
   - The brand is navy `#1b1f6d` (`--col-primary`). Sections sit on `bg-accent` / `bg-accent-light` bands or a `gradient-primary` radial gradient.
   - See `src/components/NewComps/Banner/StackedBanner/index.js:StackedBanner` and `src/components/NewComps/CTA/index.js:CTA`.
3. **Legacy look:** the body font is Opel Sans (`body` in `src/scss/global.scss`), with the `c-fs-*` / `col-*` utilities from `src/scss/_text.scss`. When you edit a legacy page, keep its look. Use the current tokens on new NewComps sections.
4. **Buttons:** use Bootstrap `.btn` with the brand variants defined in `src/scss/global.scss`: `btn-primary`, `btn-primary-outline`, `btn-secondary(-outline)`, `btn-tertiary`, `btn-white(-outline)`. Each has a hover state that inverts the colours. There are no disabled or loading variants beyond Bootstrap's own.
5. **Feedback:** toasts come from `react-toastify` through `src/components/toastify.js:Toastify` (top-right, 3 s, Slide). Full-page waits use `src/components/customLoader.js` (pricing and payment pages only).

> [!WARNING]
> Brand colours need sign-off. A brand colour change across SVGs (`f7e7856c`) was reverted the same day ([DECISIONS.md](DECISIONS.md)). Don't change values in `$color-values` without approval.

## Design Tokens & Styling Primitives

- **Token source files:**
  - `src/scss/mixins.scss` holds colours and the new font-size scale.
  - `src/scss/_var.scss` holds the legacy size scale, font weights and layout values.
  - `src/scss/_text.scss` holds the `@font-face` rules and the legacy utility classes.

### Load order and SCSS structure

- `src/pages/_app.js:MyApp` imports `@/scss/global.scss` **first** and `bootstrap/dist/css/bootstrap.css` **second**. It loads Bootstrap's JS bundle on the client in a `useEffect`. <!-- verify:ignore -->
- `src/scss/global.scss` loads `src/scss/_import.scss`. That file loads, in order:
  1. `@use 'mixins'` (which emits the colour and font utilities)
  2. `_reset.scss`
  3. `_text.scss`
  4. `_var.scss`
  5. 30 per-page or per-section partials from `src/scss/scsscomps/`
- NewComps sections import their own CSS module (`src/components/NewComps/**/*.module.scss`, 14 files, none elsewhere). Those modules use camelCase class names (`styles.accordionButton`, `styles.bannerForm`).

> [!WARNING]
> Bootstrap loads **after** the global SCSS, so Bootstrap wins every tie in specificity. *Inference:* that's why `src/scss/` uses `!important` about 280 times. An override of a Bootstrap class needs higher specificity or `!important`. Don't swap the import order without a visual check of every locale: many rules now depend on it.

### Colours

The `generate-color-utilities` mixin in `src/scss/mixins.scss` turns every key in `$color-values` into four things:

- a `--col-<key>` custom property
- a `.font-<key>` text colour class
- a `.bg-<key>` background class
- a `.border-<key>` border colour class

Each class is `!important`. Main keys:

| Role | Key → value |
|---|---|
| Brand | `primary` #1b1f6d. `accent` is the same colour (it maps to `var(--col-primary)`). `accent-light` #E2E6FF. `blue` #4b55c2. `blue-light` #C8C9EE. `soft-blue` #d2d8ff. `faded-blue` #e9ecff. `extra-light-blue` #f5f6ff |
| Neutral | `dark` #1c1c1c, `dark-100` #212528, `grey` #343a40, `grey-deep` #6c757d, `grey-faded` #767676, `dark-grey` #656565, `dark-light` #707070, `slate-grey` #3f4346, `light-gray` #e7e8ea, `light` #f8f9fa, `white` #fff |
| Feedback | `success` #28a745, `danger` #dc3545 (no warning token) |
| Tints (card backgrounds) | `warm` / `warm-border`, `sky-tint` / `sky-border`, `mint-tint` / `mint-border`, `light-green`, `baby-pink`, `light-blue`, `light-golden`, plus `orange-`, `cyan-`, `emerald-`, `purple-` `light` / `deep` pairs |

There is also a legacy text-colour set: `.col-primary`, `.col-dark`, `.col-grey` and others in `src/scss/_text.scss`. These read the same `--col-*` variables. New code uses `.font-<key>`.

### Typography

- **Fonts:** every font is self-hosted from `public/fonts/` through `@font-face` in `src/scss/_text.scss`:
  - Opel Sans, Regular and Bold (`.ttf` + `.woff`)
  - Outfit (one `.ttf`)
  - Cormorant Garamond, 400 and 700 (`.ttf`)
  - No Google Fonts and no `next/font`.
- **New scale:** the `generate-font-classes` mixin in `src/scss/mixins.scss` emits `.font-xs` 12, `.font-sm` 14, `.font-rg` 16, `.font-md` 20, `.font-lg` 24, `.font-xl` 32, `.font-xxl` 36, `.font-sub-heading` 36 and `.font-heading` 48 (px). At ≤768px these shrink: md 18, lg 20, xl 24, xxl 28, sub-heading 28, heading 36. Weights are `.font-400` and `.font-600`.
- **Legacy scale:** `src/scss/_var.scss` defines `--heading` 48, `--sub-heading` 32, `--small-heading` 20 and `--c-fs-1`…`--c-fs-7` (32 down to 12). All of these step down at `max-width: 992px`. The matching classes are `.heading`, `.sub-heading`, `.c-fs-1`… and `.c-fw-400` / `.c-fw-600`.

> [!WARNING]
> `.font-heading` and `.font-sub-heading` are defined twice. `src/scss/mixins.scss` sets their font-size (48 / 36). `src/scss/_text.scss` sets their font-family to Cormorant Garamond weight 800, and weight 600 for sub-heading. Both rules apply. Renaming either one changes every NewComps heading.

### Spacing, layout, elevation and dark mode

- **Spacing:** Bootstrap spacing utilities. The one custom section padding is `.section_py`: 40px, or 24px at ≤769px (`src/scss/global.scss`).
- **Layout:** `.container` is capped at 1140px with `!important` (`src/scss/_reset.scss`). `--w-max-content` is 900px (`.content-width`). `--nav-height` is 54px (`.padding-nav` offsets the fixed navbar).
- **Elevation:** Bootstrap shadows only, plus `navbar--box-shadow`. There are no shadow tokens.
- **Dark mode:** none. There is no `prefers-color-scheme`, no `data-bs-theme` and no toggle. `Toastify` hard-codes `theme="light"`.

### Team conventions (from `README.md`) and what the code does

| Stated rule | Observed |
|---|---|
| Use Bootstrap classes, local styles only if necessary | Followed in NewComps and Pages. There are also 75 inline `style` props across components and pages |
| Separate sections in style files with `//` comments | Followed (`// Utility Class`, `//Buttons` in `src/scss/global.scss`) |
| A long page style gets its own file in `scss/scssComp`, imported in `_import.scss` | Followed. The folder is actually `src/scss/scsscomps/` (lowercase). New partials must be added to `src/scss/_import.scss` or they never load |
| `global.scss` holds global styles, `_var` variables, `_reset` Bootstrap resets, `_text` text styles | Mostly. But colours and the new font scale live in `src/scss/mixins.scss`, which `README.md` doesn't mention |
| Name page files meaningfully (`pricing.js`) | Followed. Page files are kebab-case URL slugs |
| BEM class names | Partly. The global partials use `&__element` / `&--modifier` about 210 times (`blog-container__back-btn`, `navbar--theme-white`). Deviations: underscores inside names (`country_dropdown__menu`, `section_py`, `navbar--navbar_brand`), a modifier used as an element (`navbar--navbar_brand`), the typo `dropdown-menu__wapper`, and CSS modules that use camelCase instead of BEM |

## Reusable Component Catalog

The **routes** count is how many of the 142 files in `src/pages/` render the component, directly or through other components (from a static import walk at `250f50f8`). Props marked `compData` read a key of `pageData` that the page body chooses, for example `pageData?.stackedBanner` in `src/components/Pages/Home.js:Home`. Every NewComps section returns little or nothing when its data is missing. Some, but not all, return `null` (`FAQs`).

### Current sections (`src/components/NewComps/`)

| Component | File Path | Purpose & When to Use | Key Props / Variants |
|---|---|---|---|
| `SplitBanner` | `src/components/NewComps/Banner/SplitBanner/index.js` | Hero with the `h1` on the left. The right side shows the demo form, the affiliate form, an image or a Lottie animation. 44 routes | `compData`: `headingPrefix` / `headingHighlight` / `headingSuffix` or `heading`, `subHeading`, `tagline`, `ctaText`, `ctaHref`, `form`, `affiliateForm`, `image`, `lottie`, `hideTrustBadges` |
| `StackedBanner` | `src/components/NewComps/Banner/StackedBanner/index.js` | Centred hero (home, comparison pages). 8 routes | `compData`: `heading`, `subHeading`, `buttons[{text,link}]`, `image` |
| `BookFreeDemoForm` | `src/components/NewComps/BookFreeDemoForm/index.js` | Demo request form with phone OTP (`FormFields.js`, `PhoneField.js`). Rendered inside `SplitBanner`. 44 routes. API calls: [CONTRACTS.md](CONTRACTS.md) | `hiddenAbsolute`, `location`, `heading`, `verticalFields` |
| `AffiliateForm` | `src/components/NewComps/AffiliateForm/index.js` | Affiliate sign-up form (email OTP), inside `SplitBanner` when `compData.affiliateForm` is set | none |
| `CTA` | `src/components/NewComps/CTA/index.js` | Full-width call-to-action band. 52 routes | `compData`: `heading`, `subheading`, `buttons`, `image`, `footer`, `theme` (`"light"` or dark by default), `seeGiddhInActionButton`. Also `hasImage`. The scroll target is dead: [Q-007](OPEN_QUESTIONS.md#active-questions-table) |
| `FAQs` | `src/components/NewComps/FAQs/index.js` | FAQ accordion (one item open). Its JSON-LD comes from `Schema`, not from this component. 54 routes | `faqs[{question,answer}]` |
| `AlternateFeatures` | `src/components/NewComps/Features/AlternateFeatures/index.js` | Image and text rows that alternate sides. 42 routes | `features`: `heading`, `subHeading`, `content[{heading,feature,description,img,more_content}]`, `buttons`. Also `imgFluid` |
| `GridFeatures` | `src/components/NewComps/Features/GridFeatures/index.js` | Icon card grid. 40 routes | `features`: `heading`, `subHeading`, `cards[{icon,heading,description,more_content}]` |
| `EssentialFeatures` | `src/components/NewComps/Features/EssentialFeatures/index.js` | Numbered feature list on the small feature pages. 29 routes | `compData`: `heading`, `subHeading`, `content[{title,description}]`, `buttons` |
| `BentoFeatures` | `src/components/NewComps/Features/BentoFeatures/index.js` | Bento grid, landing page only. 1 route | `features`: `heading`, `items[{name,description,icon,tags}]` |
| `QuickStartSection` | `src/components/NewComps/QuickStartSection/index.js` | "Get started in N steps" row. 32 routes | `compData`: `heading`, `subHeading`, `steps[{icon,title,description}]` |
| `Stepper` | `src/components/NewComps/Stepper/index.js` | Numbered steps on the affiliate page. 4 routes | `compData`: `heading`, `subHeading`, `steps[{title,description}]` |
| `Instructions` | `src/components/NewComps/Instructions/index.js` | Step list with a Lottie animation (`/in/import-data`). 1 route | `compData`: `heading`, `subHeading`, `steps[{id,title,description}]`, `buttons`, `footer` |
| `FeedbackCards` | `src/components/NewComps/FeedbackCards/index.js` | Testimonial cards. 14 routes | `testimonials`: `heading`, `subheading`, `data[{testimonial,owner,company}]` |
| `SpotlightTestimonials` | `src/components/NewComps/Testimonials/SpotlightTestimonials/index.js` | Testimonials in a marquee, landing page. 1 route | same shape as `FeedbackCards` |
| `Stats` | `src/components/NewComps/Stats/index.js` | Count-up numbers. 6 routes | `stats`: `heading`, `stats[{value,label}]` |
| `GiddhVs` | `src/components/NewComps/GiddhVs/index.js` | Comparison table (Giddh vs Tally or Zoho). 7 routes | `giddhVs`: `heading`, `subheading`, `columns`, `content[{feature,…}]` |
| `WhyGiddh` | `src/components/NewComps/WhyGiddh/index.js` | Traditional vs Giddh table, landing page. 1 route | `compData`: `heading`, `variant`, `columns`, `features[{challenge,traditional,giddh,emoji}]` |
| `GiddhFor` | `src/components/NewComps/GiddhFor/index.js` | Tabbed "Giddh for…" audiences. 2 routes | `compData`: `badge`, `heading`, `subheading`, `content[{tabIcon,title,…}]` |
| `Benefits` | `src/components/NewComps/Benefits/index.js` | Icon and text benefit rows (home). 2 routes | `benefits[{cols,items[{icon,text}]}]` |
| `GridBenefits` | `src/components/NewComps/GridBenefits/index.js` | Benefit grid (`/in/e-invoice`, `/in/multi-currency-…`). 2 routes | `compData`: `heading`, `features[[{icon,title}]]` |
| `Industries` | `src/components/NewComps/Industries/index.js` | Industry logos in three rows (home). 2 routes | `giddhIndustries`: `heading`, `description`, `rowOne` / `rowTwo` / `rowThree[{img,name}]` |
| `SupportedPlatforms` | `src/components/NewComps/SupportedPlatforms/index.js` | Platform logos (`/in` only). 7 routes | `supportedPlatforms`: `heading`, `platforms[{image,name}]` |
| `TrustBadge` | `src/components/NewComps/TrustBadge/index.js` | Static review and award badges. Rendered through `SplitBanner` / `TrustBadgeScrollable`. 48 routes | none (hard-coded) |
| `TrustBadgeScrollable` | `src/components/NewComps/TrustBadgeScrollable/index.js` | Scrolling brand strip plus `TrustBadge`. 7 routes | `compData`: `title`, `description` |
| `GetStarted` | `src/components/NewComps/GetStarted/index.js` | Closing CTA, landing page. 1 route | `compData`: `badge`, `heading`, `subheading`, `buttons` |
| `PopUp` | `src/components/NewComps/PopUp/index.js` | Timed popup, landing page. 1 route | none |
| `LottiePlayer` | `src/components/NewComps/LottiePlayer/index.js` | Wrapper around `react-lottie` ([Q-015](OPEN_QUESTIONS.md#active-questions-table)) | `lottie` |
| `Footer` (minimal) | `src/components/NewComps/Footer/index.js` | Short footer for pages that hide the shell footer (`/chartered-accountant-signup`, `/online-accounting-software`). 2 routes | none. Its sales email is `falcon@giddh.com`; the shell footer uses `sales@` / `hello@` |
| `ThankYou` | `src/components/NewComps/ThankYou/index.js` | `/thank-you` body. 1 route | none |
| `Schema` | `src/components/NewComps/Schema/index.js` | JSON-LD writer. See [SEO](#seo--metadata-expectations) | `schemas[]`, `faqs[]` |

### Shell and legacy components (`src/components/*.js`)

| Component | File Path | Purpose & When to Use | Key Props / Variants |
|---|---|---|---|
| Navbar (current shell) | `src/components/navbar.js` | Fixed top nav, collapses below `lg`. The feature mega-menu comes from `src/data/data.json` `features`, where each item has `global` / `in` / `ae` / `uk` flags. Locale dropdown, GST/VAT link, Trustpilot widget on UK | `path` (from `MyApp`), `browserPath` |
| Header (current shell) | `src/components/header.js` | `<Head>` metadata only, no markup. See [SEO](#seo--metadata-expectations) | `path`, `browserPath` |
| Footer (current shell) | `src/components/footer.js` | Site footer with locale links and desktop-app download links (`src/utils/s3Config.js`) | `path` |
| GlobalComponents (current shell) | `src/components/globalComponents.js` | Mounts `downloadFreeModal.js` and the back-to-top button on every page except `/online-accounting-software` | `path` (the split `asPath` array) |
| Toastify (current shell) | `src/components/toastify.js` | The single `ToastContainer`. Call `toast()` from anywhere | none |
| `faq.js` (legacy) | `src/components/faq.js` | FAQ accordion fed by `src/data/faqs.json` (keys: home, invoice-software, vat, gst…). 27 routes, global feature pages plus AE / UK. New pages use `NewComps/FAQs` with `pageData.faqs` | `faq[{question,answer}]` |
| `bannerSection.js`, `featureGallery.js`, `clientSummary.js`, `makeTheSwitch.js`, `trust-badge.js` (legacy) | `src/components/bannerSection.js` etc. | AE and UK home pages only (`src/pages/ae/index.js`, `src/pages/uk/index.js`) | `path` and page-specific props |
| Auth widgets (legacy) | `src/components/googleLogin.js`, `src/components/otpLogin.js`, `src/components/otpVerifyModal.js`, `src/components/loginWithPassword.js` | Login, signup and CA-signup pages. The last three are loaded through `next/dynamic`. The journeys are in [FLOWS.md](FLOWS.md) | see each file |
| `downloadFreeModal.js`, `customLoader.js` (legacy) | `src/components/downloadFreeModal.js`, `src/components/customLoader.js` | Global download modal, and the pricing / payment loader | none |

**Shell visibility:** `src/pages/_app.js:MyApp` drops `Navbar` and `Footer` when the last path segment is `login`, `signup`, `chartered-accountant-signup`, `online-accounting-software`, `thank-you` or `googleauth`.

> [!WARNING]
> `src/components/navbar.js` compares `pathname`, which is the full `router.asPath` such as `/in`, against `""`, `"in"`, `"ae"` and `"uk"`. Those never match, so the "transparent on home, white on scroll" branch is dead. The navbar is always `navbar--theme-white`. Check visually before you "fix" it: home heroes may now depend on the white bar.

## Responsive Behavior & Breakpoints

- **Grid:** Bootstrap 5 default breakpoints: sm 576, md 768, lg 992, xl 1200, xxl 1400. The navbar uses `navbar-expand-lg`, so it becomes a hamburger below 992px.
- **There are no breakpoint mixins.** Despite its name, `src/scss/mixins.scss` holds only the font and colour generators. Partials write raw `@media` queries. The most common are `max-width: 767px` (12 uses), `991px` (11), `575px` (10), `992px` (6) and `1199px` (4). Token and section steps sit at 992px (`_var.scss`), 768px (`mixins.scss` fonts) and 769px (`.section_py`).
- At exactly 992px, `max-width: 992px` rules and Bootstrap `lg` rules both apply. That's an off-by-one against the 991px rules used elsewhere.
- **Mobile patterns:**
  - The Bootstrap collapse menu.
  - The custom scrollbar is hidden at ≤991px (`src/scss/_reset.scss`).
  - Hero CTAs stack (`flex-column flex-md-row` in `StackedBanner`).
  - Marquee and scrolling strips (`TrustBadgeScrollable`, `SpotlightTestimonials`).

> [!WARNING]
> `src/scss/scsscomps/_typeform.scss` contains `@media (max-width: 480px) and (min-width: 481px)`. That query can never match, so its rules are dead.

## Accessibility (A11y) Standards

Observed in the 139 prerendered non-blog pages of the local build. *Inference:* there is no a11y tooling or test in the repo.

- **Language:** `src/pages/_document.js` hard-codes `<Html lang="en">` for every locale. There is no `en-IN`, `en-AE` or `en-GB`; locale variants exist only in hreflang.
- **Alt text:** all 2,463 `<img>` tags have a non-empty `alt`. NewComps usually reuse the heading as alt text (`alt={compData?.heading}` in `StackedBanner`). Keep `alt` on every image.
- **Headings:**
  - Every page has exactly one `h1`, except `/payment`, `/googleauth` and `/in/bank-integration`, which have none.
  - NewComps section titles are `h2`. FAQ questions are `h3`.
  - Keep the one-`h1`-in-the-banner pattern (`SplitBanner` and `StackedBanner` own the `h1`).
- **Focus:** `src/scss/_reset.scss` removes the focus ring on links (`a:focus-visible { outline: none; box-shadow: none }`) and on `.form-control` / `.form-select`. Keyboard focus is mostly invisible. There are only 11 `:focus` rules in `src/scss/`.
- **Interactive markup to avoid copying:**
  - The back-to-top control in `globalComponents.js` is a `<div onClick>` with no role, label or key handler.
  - `StackedBanner` nests `<button>` inside `<a target="_blank">`, so every hero CTA opens a new tab.
- **ARIA:** the navbar toggler and dropdowns carry `aria-controls`, `aria-expanded` and `aria-label` from the Bootstrap markup. `.visually-hidden` and `.figcaption` (in `global.scss`) provide screen-reader-only text.

## Website Messaging & Copy Guidelines

- **Voice:** confident and benefit-led. Speaks to SMB owners and accountants: "Powerful All-in-One Accounting Software For Your Business Growth" (`src/data/pagesdata/in/home.json`). CTAs are short imperatives: "Get Started", "Book a Free Demo", "Request a Demo". The brand is written "Giddh" in body copy. Ten metadata titles use "GIDDH" (`/`, `/uk`, `/ae`, `/contacts`, `/terms`…). Prefer "Giddh" in new copy.
- **Tax terms by locale:**
  - India uses **GST** (`/in/gst`, e-invoice pages are India-only).
  - UAE and UK use **VAT** (`/ae/vat`, `/uk/vat`).
  - Global uses neither: the navbar shows the GST/VAT link only when the locale isn't global (`src/components/navbar.js`).
  - Never put GST in AE / UK copy, or VAT in IN copy.
- **Currency:**
  - Plan prices come from the API with `plan.currency` (`src/pages/pricing.js`, [CONTRACTS.md](CONTRACTS.md)).
  - Hard-coded add-on copy uses "INR 800/-" (IN), "AED 350/-" (AE) and "GBP 70/-" (UK **and global**).
- **Locale links in JSON:** NewComps render `button.link` as written. A locale page must store the prefixed URL. For example, `src/data/pagesdata/in/home.json` links "Get Started" to `/signup` (global), not `/in/signup`. *Inference:* that may be unintended.

### Known copy defects (unresolved: [Q-008](OPEN_QUESTIONS.md#active-questions-table))

| Where (`src/data/metadata.json` key) | Defect |
|---|---|
| `/ae/affiliate` | The description says "GST-ready" for the UAE |
| `/uk/terms` | The description says "invoicing, GST, reports". The title is generic |
| `/uk/privacy-policy` | Title is "Accounting Dashboard Features" |
| `/uk/inventory-management-software` | Title is "Digital Invoicing Software…" |
| `/uk/security`, `/security`, `/in/security` | Titles are about generic software or "Unlimited User" software, not about security |
| `/uk/import-data` = `/uk/tally-vs-giddh`, `/uk/about` = `/uk/cloud-accounting-software`, `/ae/make-the-switch` = `/ae/tally-vs-giddh`, `/contacts` = `/ae/terms` | Duplicate titles |
| `/online-accounting-software` | Placeholder description ("Fits the needs of every business." repeated 4×) |
| `/in/help`, `/in/walkover` | Entries with no page |
| `/404`, `/payment`, `/googleauth` | No entry, so the `<title>` is empty. `/chartered-accountant-signup` has no entry but sets its own head |

## SEO & Metadata Expectations

### How the head is built

`src/components/header.js:Header` renders on every page from `MyApp`:

| Tag | Source |
|---|---|
| `<title>`, description, keywords, `og:title`, `og:description` | `src/data/metadata.json`, keyed by the **exact path**: `asPath` with the query and hash removed, no trailing slash. A new page without an entry gets an empty title. `og:*` falls back to `title` / `description` |
| `og:image` | `` `${NEXT_PUBLIC_SITE_URL}${ogImage}` ``, falling back to `/img/home-page/index_banner_global.webp` |
| canonical | Only when the entry has `canonical` (21 of 137 entries): `` `${NEXT_PUBLIC_SITE_URL}${canonical}` `` |
| hreflang | `src/data/hrefLangTag.json`. For each locale list (`global` → `en`, `in` → `en-IN`, `ae` → `en-AE`, `uk` → `en-GB`) that contains `path.page`, it emits `https://giddh.com/<locale>/<page>`. `x-default` is always `https://giddh.com/` |
| robots noindex | Only on `/v2/login`, and set client-side after mount (`useEffect`) |

- No `og:url`, `og:locale` or `twitter:*` tags are emitted.
- Blog posts set their own title, description, OG and JSON-LD in `src/pages/blog/[slug].js` (Next dedupes `<title>`). They have no canonical.

> [!WARNING]
> Canonical and `og:image` use `NEXT_PUBLIC_SITE_URL` with **no fallback**. Compare `path.baseURL` in `_app.js`, which falls back to `https://giddh.com`. When the variable is unset, the HTML ships `href="undefined/contacts"` and `content="undefined/img/…"`, as seen in the local build. Check that it's set in the Netlify environment before you trust canonicals (env ownership: [DEVELOPMENT.md](DEVELOPMENT.md)).

> [!WARNING]
> hreflang keys on `path.page`, which is the first segment after the locale. Every `/blog/<slug>` therefore advertises `https://giddh.com/blog` as its `en` alternate. Locale variants are only emitted when the page is listed: `in` lists `tallyplusgiddh` (now a 301) but not `tally-to-giddh-migration` ([Q-008](OPEN_QUESTIONS.md#active-questions-table)).

### JSON-LD

- `src/components/NewComps/Schema/index.js:Schema` is mounted in `MyApp` with `pageData?.schemas` and `pageData?.faqs`. It writes each schema as `<script type="application/ld+json">`. If `faqs` exist and no schema is already `FAQPage`, it adds one built from the FAQs. This is server-rendered.
- Per-page schemas live in `pageData.schemas` (`src/data/pagesdata/**`, in 42 files). `src/data/schema/organizationSchema.json` holds an Organization block. Some schemas carry empty values: `"logo": ""` on `/in`.
- Legacy `src/components/faq.js` builds its `FAQPage` in `useEffect`, so it is **not in the prerendered HTML**. This was checked on `/import-data`, `/ae/vat` and `/uk/invoice-software`, which emit no JSON-LD at all. Moving those pages to `NewComps/FAQs` + `pageData.faqs` fixes it.
- `src/pages/in/financial-reporting.js` passes `schema={schema}`, but `Schema` reads `schemas`. Its WebPage and Service schema is silently dropped; only the FAQ schema from `pageData` is emitted.
- Blogs:
  - `src/utils/getBlogSchema.js:getBlogSchema` looks the post up in `src/data/blogSchema.json` by `` `${NEXT_PUBLIC_SITE_URL}/blog/<url>` ``. If there's no match it falls back to `generateBlogSchema`.
  - The 149 hand-written entries contain template placeholders: `URL_of_…` 235 times, `XXXX` 43 times, `Editor_Name` 53 times.
  - One entry has an empty `url`. Another is a mangled concatenation of two URLs.
  - With the variable unset, nothing matches, so the generated schema is used.

### Sitemap, robots and URL changes

- `public/sitemap.xml` is **hand-maintained and stale** ([Q-009](OPEN_QUESTIONS.md#active-questions-table)):
  - It was committed once (`ad04b9d1`, 2025-06-27) with 638 URLs, all with the same `lastmod` of 2025-06-22.
  - At `250f50f8` it misses 39 page routes, including `/`, every `customer-portal`, `email-to-bank-sync`, `triggers`, `recurring-invoices` and `invoice-bill-scanning` variant, `/in/tally-to-giddh-migration` and `/chartered-accountant-signup`.
  - It misses 169 of the 253 MDX posts.
  - It still lists old WordPress-era blog slugs and `/api/*` docs URLs that have no page here.
  - Add every new public page by hand until generation is decided.
- `public/robots.txt` allows everything except `/cgi-bin/`. It points to `https://giddh.com/sitemap.xml` and to an external image sitemap at `a324049.sitemaphosting6.com`. *Inference:* the external one is a third-party hosted image sitemap; who owns it isn't recorded.
- **URL changes:** a renamed or removed URL needs a 301 in `public/_redirects` in the same PR. When `1bcb61c5` renamed `/ca-signup` to `/chartered-accountant-signup`, no redirect was added ([Q-004](OPEN_QUESTIONS.md#active-questions-table)). <!-- verify:ignore --> Also update `metadata.json`, `hrefLangTag.json` and `sitemap.xml` for the new path.

### Checklist for a new or changed public page

1. Add a `src/data/metadata.json` entry for the exact path in each locale: title, description, and `canonical` if wanted. Use locale-correct tax terms.
2. Add the page slug to the right lists in `src/data/hrefLangTag.json`.
3. Add the URL to `public/sitemap.xml`. On a rename, add a 301 to `public/_redirects`.
4. Use one `h1` (in the banner section). Give every image an `alt`.
5. Put FAQs in `pageData.faqs` (server-rendered schema), not in `faq.js`.

> [!TODO]
> Is `NEXT_PUBLIC_SITE_URL` set on the Netlify production and `web` sites? Who owns the external image sitemap in `public/robots.txt`? Should `<Html lang>` vary by locale? Recorded in the design notes for [OPEN_QUESTIONS.md](OPEN_QUESTIONS.md).
