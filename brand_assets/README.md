# brand_assets/

Place the client's brand files here before starting a Claude Code session.

## What to put here

| File | Description |
|---|---|
| `logo.webp` or `logo.svg` | Logo on transparent background (WebP preferred, at least 1920px wide) |
| `logo-dark.webp` | Dark variant of the logo (if available) |
| `brand-guidelines.html` or `brand-guidelines.pdf` | Full brand guidelines document |
| `color-palette.png` or `.jpg` | Color swatches (if no full guidelines) |
| `fonts.txt` | Font names if not in the guidelines |

## Important

**The logo must be copied to `public/brand_assets/` for Vite to serve it in production.**

Claude will do this automatically when building the site. If you place the logo here, Claude will:
1. Read the filename
2. Copy it to `public/brand_assets/`
3. Reference it as `/brand_assets/[filename]` in `src/config/client.js`

## What Claude reads here

When you say "Build the full website from BRIEF.md", Claude reads:
- The logo filename (to set `CLIENT.logoSrc`)
- Brand guidelines (to extract color palette for `globals.css` Zone 1)
- Font names (to update `globals.css` Zone 2 and the Google Fonts link in `index.html`)

If no guidelines are provided, Claude derives the palette from `PRIMARY_COLOR` and `ACCENT_COLOR` in `BRIEF.md`.
