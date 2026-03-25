# How to Build a New Client Website

Follow these steps every time you start a new client project.
Total time before Claude takes over: **~10 minutes** (client does most of the legwork via the intake form).

---

## Step 1 — Send the client the intake form (Day 1, 2 min)

Send the client the Tally intake form link. This replaces most of the manual BRIEF.md work.

The form covers: business name, tagline, services, team, testimonials, stats, process steps, FAQ topics, contact details, social links, domain, and CTA preferences — all in plain Spanish, no jargon.

> **Tip:** Include a short message with the link:
> *"Antes de la primera reunión, rellena este formulario de 10-15 minutos. Cuanta más información nos des, mejor quedará tu web desde el primer día."*

While you wait for their response, do Steps 2 and 3.

---

## Step 2 — Create the project folder (2 min)

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

## Step 3 — Add the brand assets (2–5 min)

1. Get the client's logo (ask for a transparent `.webp` or `.svg` — the wider the better).
2. Drop it into **both** `brand_assets/` (for Claude to read) and `public/brand_assets/` (for the build to serve it).
3. If they have a brand guidelines document (PDF or HTML), drop that in `brand_assets/` too.
4. If they have team/founder photos, drop those into `founder_photos/`.

---

## Step 4 — Fill in BRIEF.md from the form responses (5–8 min)

When the client submits the Tally form, you'll receive their answers by email.

**Copy their responses into BRIEF.md** — most fields map directly. Then fill in the 6 fields the client can't know:

| Field | You decide this |
|---|---|
| `PRIMARY_COLOR` | Extract the hex code from their logo (use [imagecolorpicker.com](https://imagecolorpicker.com)) |
| `ACCENT_COLOR` | Pick a complementary highlight color from their brand |
| `SCHEMA_TYPE` | Choose the right schema.org type for their industry (see list in BRIEF.md) |
| `WEBSITE_MODE` | `full-website` for multi-page, `landing-page` for single scrollable page |
| `LANGUAGE` | `es` for Spanish (almost always), `en` for English |
| `LOCAL_SEO_CITIES` | Add cities if you want local SEO landing pages |

> **Note:** Claude will never invent stats, testimonials, or certifications.
> If a field is blank, that section simply won't appear on the site.

---

## Step 5 — Open Claude Code (30 sec)

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

## Step 6 — Review and give feedback (varies)

Once Claude finishes the first pass, it will show you screenshots.

Look at each page and tell Claude what to change. Examples:
- "The hero feels too dark — lighten it slightly"
- "Move the stats section above the services"
- "The CTA button color doesn't feel right with this brand"
- "Add a section about their awards on the About page"

Claude will make the changes and re-screenshot until you're happy.

---

## Step 7 — Build and deploy (5 min)

When you're satisfied with all pages:

```bash
npm run build
```

Then go to [vercel.com](https://vercel.com), connect the GitHub repo, and deploy.

Vercel auto-detects Astro — no extra configuration needed. Direct URL access to any route works automatically.

---

## Tally intake form — field mapping reference

Use this when transferring client responses into BRIEF.md:

| Tally question | BRIEF.md field |
|---|---|
| ¿Cómo se llama tu negocio? | `BUSINESS_NAME` |
| Resume lo que haces en una sola frase | `TAGLINE` |
| Describe tu negocio en 2 o 3 frases | `SHORT_DESCRIPTION` |
| ¿En qué sector trabajas? | `INDUSTRY` |
| ¿En qué año empezaste? | `FOUNDING_YEAR` |
| ¿Por qué empezaste este negocio? | `FOUNDING_STORY` |
| Servicio 1/2/3/4 — Nombre + Descripción | `SERVICE_1`, `SERVICE_2`... |
| ¿Quién es tu cliente ideal? | `TARGET_AUDIENCE` |
| ¿Qué te diferencia? | `DIFFERENTIATORS` |
| ¿Qué no quieres que aparezca? | `WHAT_TO_AVOID` |
| Cifra 1/2/3 | `STAT_1`, `STAT_2`, `STAT_3` |
| Testimonio 1/2/3 | `TESTIMONIAL_1`, `TESTIMONIAL_2`, `TESTIMONIAL_3` |
| Certificaciones | `CERTIFICATIONS` |
| Pasos de tu proceso (1-4) | `PROCESS_STEP_1`... `PROCESS_STEP_4` |
| NIF o CIF | `NIF_CIF` |
| Nombre legal (si diferente) | `LEGAL_NAME` |
| Dirección completa | `LOCATION_1` |
| Teléfono | `PHONE` |
| Número de WhatsApp | `WHATSAPP_NUMBER` |
| Mensaje de bienvenida WhatsApp | `WHATSAPP_MESSAGE` |
| Email | `EMAIL` |
| Horario de atención | `OPENING_HOURS` |
| Link a Google Business | `GOOGLE_BUSINESS_URL` |
| Equipo (nombre, cargo, bio, foto) | `TEAM_1`, `TEAM_2`, `TEAM_3` |
| Preguntas frecuentes | `FAQ_TOPICS` |
| Términos de Google | `TARGET_KEYWORDS` |
| Redes sociales | `SOCIAL_1`... `SOCIAL_5` |
| Dominio web | `DOMAIN` |
| Texto del botón principal | `NAV_CTA_LABEL` |
| Acción del botón (whatsapp/email/etc.) | `PRIMARY_CTA_ACTION` |
| URL sistema de reservas | `BOOKING_URL` |
| Tono de comunicación | `TONE` |
| Notas adicionales | `NOTES` |

---

## Common questions

**"What if the client doesn't fill the form before our meeting?"**
No problem — fill BRIEF.md yourself during or after the meeting. The form is a time-saver, not a blocker.

**"What if the client doesn't have brand guidelines?"**
Fill in `PRIMARY_COLOR` and `ACCENT_COLOR` in BRIEF.md with the hex codes from their logo. Claude will derive the full palette from those two values.

**"What if the client doesn't have a logo yet?"**
Leave `brand_assets/` empty and add a note in `NOTES:`. Claude will use a text placeholder and make it easy to swap the logo in later.

**"What if they only need a single-page landing page?"**
Set `WEBSITE_MODE: landing-page` in BRIEF.md. Claude will build everything as one scrollable page with anchor links.

**"What if they want the site in English?"**
Set `LANGUAGE: en` in BRIEF.md. All UI strings will be in English automatically.

**"How do I update the site later?"**
Open the project in Claude Code and say what you want to change. Example: "Add a new service page for X" or "Update the phone number to Y".

**"How do I add a blog post?"**
Open the project in Claude Code and say: "Write a blog post about [topic] and add it to the blog." Claude will create the post `.jsx` file, its `.astro` route wrapper, and add it to the Blog posts array.

---

## Folder reference

```
[client-name]/
├── BRIEF.md                    ← Fill this in per client (from Tally form)
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
