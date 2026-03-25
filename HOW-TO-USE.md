# How to Build a New Client Website

Follow these steps every time you start a new client project.
Total time before Claude takes over: **~20 minutes.**

---

## Step 1 — Create the project folder (2 min)

Open Terminal and run:

```bash
cp -r /Users/francisco/client-website-template /Users/francisco/[client-name]
cd /Users/francisco/[client-name]
npm install
```

Replace `[client-name]` with something like `clinica-perez` or `restaurante-sol`.

Then create a new GitHub repo for this client and push:

```bash
git remote set-url origin https://github.com/kicogost/[client-name].git
git push -u origin main
```

---

## Step 2 — Add the brand assets (2–5 min)

1. Get the client's logo (ask for a transparent `.webp` or `.svg` — the wider the better).
2. Drop it into **both** `brand_assets/` (for Claude to read) and `public/brand_assets/` (for the build to serve it).
3. If they have a brand guidelines document (PDF or HTML), drop that in `brand_assets/` too.
4. If they have team/founder photos, drop those into `founder_photos/`.

That's it. You don't need to rename anything yet — Claude will handle it.

---

## Step 3 — Fill in BRIEF.md (10–15 min)

Open `BRIEF.md` in any text editor (VS Code, TextEdit, Notes — anything).

Go through it section by section and replace the placeholder values with the client's real information. Most of it you can get from a quick conversation with the client, their existing social media, or a WhatsApp card they send you.

**The most important fields (must fill):**

| Field | Where to find it |
|---|---|
| `BUSINESS_NAME` | The name they trade under |
| `TAGLINE` | Ask them: "How would you describe what you do in one sentence?" |
| `SHORT_DESCRIPTION` | 2–3 sentences about what they do and who for |
| `NIF_CIF` | Their fiscal ID — ask them directly |
| `PHONE` | Their main phone number |
| `WHATSAPP_NUMBER` | Digits only, no spaces (e.g. `34694269008`) |
| `EMAIL` | Their contact email |
| `LOCATION_1` | City, street address, postal code |
| `PRIMARY_COLOR` | Their dominant brand color (hex code from logo) |
| `ACCENT_COLOR` | Their highlight/CTA color |
| `NAV_CTA_LABEL` | What the main button should say (e.g. "Reservar Cita") |
| `NAV_CTA_HREF` | Where it links (usually their WhatsApp link) |
| `PRIMARY_CTA_ACTION` | `whatsapp` / `email` / `booking-link` |
| `WEBSITE_MODE` | `full-website` or `landing-page` |
| `LANGUAGE` | `es` for Spanish |
| `DOMAIN` | Their domain name (e.g. `clinicaperez.com`) |

**Optional but highly recommended:**

- `SERVICE_1`, `SERVICE_2`, etc. — list each service they offer
- `FOUNDING_STORY` — why they started the business (2–4 sentences)
- `DIFFERENTIATORS` — what makes them better than competitors
- `STAT_1`, `STAT_2`, etc. — real numbers ("500+ clients", "8 years experience")
- `TESTIMONIAL_1`, etc. — paste real quotes from happy clients
- `PROCESS_STEP_1`, etc. — how their process works (great for homepage)
- `FAQ_TOPICS` — questions clients ask a lot
- `TARGET_KEYWORDS` — Google search terms they want to rank for

> **Note:** Claude will never invent stats, testimonials, or certifications.
> If you leave a field blank, that section simply won't appear on the site.

---

## Step 4 — Open Claude Code (30 sec)

Open VS Code in the project folder:

```bash
code /Users/francisco/[client-name]
```

Then open Claude Code (the terminal panel at the bottom, or `Cmd+Shift+P → Claude Code`).

Type exactly:

> **"Build the full website from BRIEF.md."**

Claude will then:
1. Read `BRIEF.md` completely
2. Read `brand_assets/` for colors, fonts, and logo
3. Populate `src/config/client.js` with all client data
4. Update the color tokens and fonts in `globals.css`
5. Update the Google Fonts link in `src/layouts/BaseLayout.astro`
6. Build all pages (Home, About, Services, Contact, Blog, Legal pages)
7. Start the dev server
8. Take screenshots and check its own work
9. Iterate until it looks right

You don't need to do anything during this step — just wait.

---

## Step 5 — Review and give feedback (varies)

Once Claude finishes the first pass, it will show you screenshots.

Look at each page and tell Claude what to change. Examples:
- "The hero feels too dark — lighten it slightly"
- "Move the stats section above the services"
- "The CTA button color doesn't feel right with this brand"
- "Add a section about their awards on the About page"

Claude will make the changes and re-screenshot until you're happy.

---

## Step 6 — Build and deploy (5 min)

When you're satisfied with all pages:

```bash
npm run build
```

Then go to [vercel.com](https://vercel.com), connect the GitHub repo, and deploy.

Vercel auto-detects Astro — no extra configuration needed. Direct URL access to any route works automatically (no SPA workarounds required).

---

## Common questions

**"What if the client doesn't have brand guidelines?"**
Just fill in `PRIMARY_COLOR` and `ACCENT_COLOR` in BRIEF.md with the hex codes from their logo. Claude will derive the full palette from those two values.

**"What if the client doesn't have a logo yet?"**
Leave `brand_assets/` empty and add a note in `NOTES:` at the bottom of BRIEF.md. Claude will use a text placeholder and make the site easy to swap the logo in later.

**"What if they only need a single-page landing page?"**
Set `WEBSITE_MODE: landing-page` in BRIEF.md. Claude will build everything as one scrollable page with anchor links — no sub-pages.

**"What if they want the site in English?"**
Set `LANGUAGE: en` in BRIEF.md. All UI strings (button labels, aria-labels, back links, loading text) will be in English automatically.

**"How do I update the site later?"**
Open the project in Claude Code and say what you want to change. Example: "Add a new service page for X" or "Update the phone number to Y". Claude reads `client.js` and knows all the context.

**"How do I add a blog post?"**
Open the project in Claude Code and say: "Write a blog post about [topic] and add it to the blog." Claude will create the post `.jsx` file, its `.astro` route wrapper, and add it to the Blog posts array.

---

## Folder reference

```
[client-name]/
├── BRIEF.md                    ← Fill this in per client
├── CLAUDE.md                   ← Claude's instructions (don't edit)
├── astro.config.mjs            ← Astro build config (don't edit)
├── brand_assets/               ← Drop logo + brand guide here
├── founder_photos/             ← Drop team photos here
├── public/brand_assets/        ← Also copy logo here (for production)
├── src/config/client.js        ← Claude fills this from BRIEF.md
├── src/styles/globals.css      ← Brand tokens (Claude updates Zones 1+2)
├── src/layouts/BaseLayout.astro← Shared HTML shell: head, fonts, SEO, schema
├── src/components/             ← Reusable components (don't edit)
├── src/pages/                  ← .astro route files + .jsx content files
└── vercel.json                 ← Security headers config
```

---

## If something goes wrong

| Problem | Fix |
|---|---|
| Logo not showing on Vercel | Make sure it's in `public/brand_assets/`, not just `brand_assets/` |
| Fonts not loading | Check the Google Fonts link in `src/layouts/BaseLayout.astro` matches the fonts in `globals.css` Zone 2 |
| WhatsApp button links to wrong number | Check `WHATSAPP_NUMBER` in `BRIEF.md` — digits only, no `+`, no spaces |
| Sitemap not generating | Make sure `CLIENT.domain` is set in `src/config/client.js` (no `https://`, no trailing slash) |
