/**
 * Home.jsx — Shell page
 *
 * CLAUDE: Build this page using BRIEF.md as the content source.
 *
 * Required sections (in order):
 * 1. Hero          — tagline, short description, primary + secondary CTA
 * 2. Stats bar     — only if STAT_* fields are filled in BRIEF.md
 * 3. Services      — one ServiceCard per SERVICE_* entry
 * 4. Process       — only if PROCESS_STEP_* fields are filled
 * 5. Testimonials  — only if TESTIMONIAL_* fields are filled
 * 6. FAQ           — use FAQ_TOPICS from BRIEF.md (or generate from industry if blank)
 * 7. Bottom CTA    — gold InteractiveButton + secondary outline-dark button
 *
 * Optional sections (include only if specified in BRIEF.md or NOTES):
 * - Gallery        — if GALLERY: true
 * - Pricing        — if PRICING_STYLE ≠ none
 * - Blog preview   — if BLOG: true (show 3 latest cards)
 * - Local SEO CTA  — if LOCAL_SEO_CITIES is filled
 *
 * Design rules:
 * - Hero background: layered radial gradients using --primary-deep, --primary, --primary-mid
 * - Never hardcode hex colors — always use CSS custom properties
 * - All copy uses LANGUAGE from BRIEF.md (Castilian Spanish if es)
 * - Import CLIENT from ../config/client.js for all dynamic data
 * - Use InteractiveButton for all CTAs
 * - Import ctaLink from ../config/client.js for CTA href values
 */

import { CLIENT, ctaLink } from '../config/client.js'
import InteractiveButton from '../components/InteractiveButton.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import FAQ from '../components/FAQ.jsx'

export default function Home() {
  return (
    <>
      {/* CLAUDE: Build all sections here */}
      <div style={{ paddingTop: 'var(--nav-height)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--neutral)' }}>
          Home page — Claude will build this from BRIEF.md
        </p>
      </div>
    </>
  )
}
