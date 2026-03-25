/**
 * Contact.jsx — Shell page (Contacto)
 *
 * CLAUDE: Build this page using BRIEF.md as the content source.
 *
 * Required sections:
 * 1. Mini hero     — page title
 * 2. Contact info  — phone, email, WhatsApp CTA button
 * 3. Locations     — one card per LOCATION_* entry with address + hours
 *                  — embed Google Map if mapSrc is provided in LOCATION_*
 * 4. Contact form  — only if PRIMARY_CTA_ACTION is contact-form
 *                  — otherwise show large WhatsApp / booking CTA
 *
 * Design rules:
 * - Google Maps iframe: use mapSrc from CLIENT.locations[n].mapSrc
 * - If no mapSrc: show address card without map embed
 * - If GOOGLE_BUSINESS_URL is set: show "Ver en Google Maps" button
 * - Never invent addresses — use CLIENT.locations from client.js
 */

import { CLIENT, whatsappLink, ctaLink } from '../config/client.js'
import InteractiveButton from '../components/InteractiveButton.jsx'

export default function Contact() {
  return (
    <>
      {/* CLAUDE: Build all sections here */}
      <div style={{ paddingTop: 'var(--nav-height)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--neutral)' }}>
          Contact page — Claude will build this from BRIEF.md
        </p>
      </div>
    </>
  )
}
