/**
 * About.jsx — Shell page (Nosotros / About Us)
 *
 * CLAUDE: Build this page using BRIEF.md as the content source.
 *
 * Required sections:
 * 1. Mini hero     — page title + breadcrumb
 * 2. Story         — FOUNDING_STORY from BRIEF.md (or business description if blank)
 * 3. Team          — one card per TEAM_* entry (photo + name + title + bio)
 *                  — if no team entries, skip and focus on business story + values
 * 4. Values/Why us — DIFFERENTIATORS from BRIEF.md
 * 5. Bottom CTA    — gold InteractiveButton linking to contact/WhatsApp
 *
 * Design rules:
 * - Team photo: use founder_photos/[filename] from BRIEF.md TEAM_* entries
 * - If photo file doesn't exist, use placehold.co/400x400
 * - Never invent bios — use exactly what's in BRIEF.md TEAM_* fields
 */

import { CLIENT, ctaLink } from '../config/client.js'
import InteractiveButton from '../components/InteractiveButton.jsx'

export default function About() {
  return (
    <>
      {/* CLAUDE: Build all sections here */}
      <div style={{ paddingTop: 'var(--nav-height)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--neutral)' }}>
          About page — Claude will build this from BRIEF.md
        </p>
      </div>
    </>
  )
}
