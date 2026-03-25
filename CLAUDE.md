# CLAUDE.md — Client Website Template Rules

## Session Start Protocol (MANDATORY — do this first, every session, no exceptions)

1. **Invoke the `frontend-design` skill** before writing any frontend code.
2. **Read `BRIEF.md` completely** — this is the client specification for this project.
3. **Read all files in `brand_assets/`** — extract logo path, colors, typography, and tone.
4. **Check `src/config/client.js`** — if it still contains placeholder values, populate it from BRIEF.md before writing any component or page.
5. **Update Zone 1 + Zone 2 of `src/styles/globals.css`** from brand_assets/ color palette and fonts. If no brand guide exists, derive a full palette from `PRIMARY_COLOR` in BRIEF.md.
6. **Update the Google Fonts `<link>` in `src/layouts/BaseLayout.astro`** to match the font family names set in Zone 2 of globals.css.
7. **Only then begin building pages.**

---

## Architecture — Astro SSG + React Islands

This template uses **Astro** for routing, SEO, and static generation, with **React** for interactive components.

**How pages work:**
- Every route has two files:
  1. `src/pages/[route].astro` — handles the `<head>` (title, meta, schema) and wraps the React component
  2. `src/pages/[PageName].jsx` — the React component with all visual content

- Routing is **file-based** (Astro). There is no `App.jsx` or React Router.
- SEO (title, meta description, canonical, JSON-LD) lives in the `.astro` file, **never** in the `.jsx` file.
- The LocalBusiness schema is injected automatically on every page by `BaseLayout.astro`.
- Pass page-specific schemas (FAQPage, Article, etc.) via the `schema` prop on `<BaseLayout>`.

**When creating a new page** (service, blog post, legal, local SEO):
1. Create the React content component: `src/pages/services/Extranjeria.jsx`
2. Create the Astro route wrapper: `src/pages/servicios/extranjeria-y-nacionalidad.astro`

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro'
import Extranjeria from '../services/Extranjeria.jsx'
import { CLIENT } from '../../config/client.js'

// Optional: page-specific schema (FAQPage, Article, etc.)
const schema = JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", ... })
---
<BaseLayout
  title={`Extranjería | ${CLIENT.name}`}
  description="..."
  canonical={`https://${CLIENT.domain}/servicios/extranjeria-y-nacionalidad`}
  schema={schema}
>
  <Extranjeria client:load />
</BaseLayout>
```

3. Add the route to `CLIENT.nav.links` in `src/config/client.js`.

---

## Detecting Build Mode

Check `BRIEF.md` field `WEBSITE_MODE`:
- `full-website` → multi-page Astro site (default) — build one `.astro` + one `.jsx` per page
- `landing-page` → single `src/pages/Home.jsx` only; `src/pages/index.astro` renders it; navbar uses anchor links (`href="#section-id"`), not internal page links

---

## full-website Mode

- Build every page listed in `BRIEF.md` under `PAGES`, plus one page per `SERVICE_*` entry.
- For each page: create the `.jsx` content file AND the `.astro` route wrapper.
- Navbar links and Footer service/company links must match BRIEF pages exactly (via `CLIENT.nav.links`).
- Generate blog posts only if `BRIEF.md` specifies `BLOG: true` and provides topics or `TARGET_KEYWORDS`.
- Generate local SEO pages only if `LOCAL_SEO_CITIES` is populated.
- **Always generate legal pages** (Aviso Legal, Política de Privacidad, Política de Cookies, Declaración de Accesibilidad) — these are legally required in Spain for every website.

## landing-page Mode

- Single `src/pages/Home.jsx` containing all sections as anchors.
- `src/pages/index.astro` already exists and renders `<Home client:load />`.
- Navbar becomes a single-page anchor nav. Links use `href="#section-id"`, not internal page hrefs.
- Footer has no internal page links — only contact info + legal inline text.
- No blog, no service sub-pages, no local SEO pages.
- Still generate legal pages (as separate routes or inline modals).

---

## Populating `src/config/client.js`

This file is the **single source of truth** for all client-specific constants.

**Never hardcode** business name, phone, WhatsApp number, email, address, logo path, social URLs, or UI strings directly into any component or page. Always import from `src/config/client.js`.

After reading BRIEF.md, populate this file first — before touching any component.

---

## Logo Rule (CRITICAL)

The logo **must** be placed in `public/brand_assets/` — NOT in `src/brand_assets/` or `brand_assets/`.

Astro (and Vite) only serve files from `public/` in production (Vercel, Netlify, etc.). If the logo is referenced from outside `public/`, it will display locally but break on deployment.

When a logo is provided in `brand_assets/`, copy it to `public/brand_assets/` and reference it as `/brand_assets/filename.webp` in `client.js`.

---

## Cookie Banner (ALWAYS INCLUDE)

Every website for Spain must include the `<CookieBanner />` component — RGPD (Spain's GDPR implementation) legally requires cookie consent. It is already included in `BaseLayout.astro` and links to `/politica-de-cookies`. Do not remove it.

---

## Reference Images

- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`). Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see Anti-Generic Guardrails below).
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or the user says so.

---

## Local Dev Server

- Always serve on localhost — never screenshot a `file:///` URL.
- Start Astro dev server in the background: `npx astro dev --port 3000`
- If the server is already running, do not start a second instance.

---

## Screenshot Workflow

- Always screenshot from localhost: `node screenshot.mjs http://localhost:3000`
- Screenshots save to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label: `node screenshot.mjs http://localhost:3000 label` → saves as `screenshot-N-label.png`
- After screenshotting, read the PNG with the Read tool and analyze it visually.
- When comparing, be specific: "heading is 32px but reference shows 24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing.

---

## Brand Tokens — How to Apply

Open `src/styles/globals.css`. The `:root` block is divided into 3 zones:

**ZONE 1 (lines 1–18): Brand palette — change these per client:**
```
--primary-deep  darkest primary (hero/footer backgrounds)
--primary       base primary
--primary-mid   mid-tone (section backgrounds)
--primary-light light primary (hover states)
--primary-faint near-white tint (card backgrounds)
--accent        CTA / highlight color
--accent-light  light accent
--accent-dark   dark accent (hover, icon backgrounds)
--neutral       medium gray (secondary text)
--neutral-light lighter gray
--ink           primary text (usually same as --primary)
--ink-mid       secondary text
--ink-light     tertiary text
--border        light borders
--white / --off-white  surface colors
```

**ZONE 2 (lines 19–21): Typography — change font family names per client:**
```
--font-display  headings (serif or display)
--font-body     body text (clean sans-serif)
--font-mono     labels, meta text (monospace or geometric)
```

**ZONE 3 (lines 22–end): System tokens — rarely change:**
```
--radius-sm/md/lg/xl   border radii
--shadow-sm/md/lg/xl   layered shadows
--nav-height            navbar height
```

**Shadow rgba values** use the primary color's RGB. When you change `--primary`, update the shadow rgba values to match.

**Font imports:** Update the Google Fonts `<link>` in `src/layouts/BaseLayout.astro` (look for the comment `<!-- Fonts — CLAUDE: update href when changing ZONE 2 fonts -->`).

---

## SEO — Schema Markup

The `BaseLayout.astro` automatically injects a **LocalBusiness** JSON-LD schema on every page using data from `client.js`. You do not need to add it manually.

For **page-specific schemas** (FAQPage, Article, LegalService, etc.), pass them via the `schema` prop on `<BaseLayout>`:

```astro
---
const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqItems.map(q => ({
    "@type": "Question",
    "name": q.question,
    "acceptedAnswer": { "@type": "Answer", "text": q.answer }
  }))
})
---
<BaseLayout title="..." description="..." schema={faqSchema}>
  ...
</BaseLayout>
```

---

## Spain Spanish (Castilian)

When `LANGUAGE: es`, all copy must use Castilian Spanish conventions:
- Use **tuteo** (tú, te, tu) for direct address — not usted/vosotros depending on tone.
- Use **vosotros** for plural address in formal-warm or professional contexts.
- Do NOT use Latin American Spanish expressions, spelling, or grammar.
- Dates: DD de mes de AAAA. Decimals: comma (3,5%). Thousands: period (1.000€).

---

## No Invented Facts (CRITICAL)

**Never generate stats, certifications, years in business, NIF/CIF, awards, testimonials, press mentions, or pricing figures.**

If a BRIEF.md field is blank, **omit that section entirely**. Do not fill it with plausible-sounding fiction. These are facts that belong to the client — inventing them creates legal and trust risks.

Only exceptions: generic copy (hero headlines, service descriptions, FAQ answers about general procedures) — these can be written by Claude based on industry knowledge.

---

## Anti-Generic Guardrails

- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Derive entirely from `--primary-*` and `--accent-*` tokens.
- **Shadows:** Never flat `shadow-md`. Use layered, color-tinted shadows matching the `--shadow-*` system in globals.css.
- **Typography:** Never use the same font for headings and body. Pair a display/serif with a clean sans. Apply tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing (`cubic-bezier(0.25,0.46,0.45,0.94)`).
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Add a gradient overlay (`background: linear-gradient(to top, rgba(0,0,0,0.6), transparent)`) and a color treatment layer with `mix-blend-multiply`.
- **Spacing:** Use intentional, consistent spacing — reference `--radius-*`, `--shadow-*`, and the `.container` padding system in globals.css.
- **Depth:** Surfaces have a layering system (base → elevated → floating). Not everything on the same z-plane.
- **Hero backgrounds:** Use the layered radial-gradient + linear-gradient pattern. Always reference `var(--primary-deep)`, `var(--primary)`, `var(--primary-mid)` — never hardcode hex in JSX.

---

## Hard Rules

- Never hardcode business name, phone, address, email, WhatsApp, logo path, or social URLs in components. All come from `src/config/client.js`.
- Never add sections or features not listed in BRIEF.md or requested by the user.
- Never "improve" a reference design — match it exactly.
- Do not stop after one screenshot pass.
- Do not use `transition-all`.
- Do not use default Tailwind blue/indigo as primary color.
- All UI strings (button labels, aria-labels, back-links, loading text) must be in the language specified in `BRIEF.md` under `LANGUAGE`.
- Logo always goes in `public/brand_assets/`. Never reference from `src/` or `brand_assets/`.
- `<CookieBanner />` is already in `BaseLayout.astro` — do not remove it.
- `InteractiveButton` uses `href` prop only — there is no `to` prop.

---

## Living System — Keeping This Template Up to Date

This template improves with every client project. Update `CLAUDE.md`, `BRIEF.md`, components, and the plan file whenever:

| Trigger | Action |
|---|---|
| A correction is made twice across two sessions | Add a rule to CLAUDE.md so it never needs correcting again |
| A new section type is built (pricing, gallery, testimonials slider) | Add the component to the template; document it in BRIEF.md |
| A new page type is built (case studies, team, pricing page) | Add a shell page; add a flag to BRIEF.md |
| A deployment issue is found | Add a fix to CLAUDE.md or vercel.json; document the root cause |
| A better animation/interaction pattern is found | Update the component; retire the old pattern |
| A client's industry needs something sector-specific | Add an INDUSTRY_NOTES field to BRIEF.md |

At any point, Francisco can say:
- **"Add this to the template"** → Claude updates the relevant file(s)
- **"We keep doing X — add it as a default"** → Claude adds it as a rule
- **"This worked really well — save it"** → Claude saves it as a reusable component

Claude will also proactively flag: *"This is the second time we've done X — should I add it to the template?"*
