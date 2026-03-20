/**
 * src/config/client.js
 *
 * Single source of truth for all client-specific constants.
 * Claude populates this file by reading BRIEF.md at session start.
 *
 * NEVER hardcode these values in any component or page.
 * Every component that needs client data imports from here.
 *
 * CLAUDE: Replace ALL placeholder values below with data from BRIEF.md.
 */

export const CLIENT = {
  // ── Identity ──────────────────────────────────────────────
  name: '[BUSINESS_NAME]',           // BRIEF: BUSINESS_NAME
  tagline: '[TAGLINE]',              // BRIEF: TAGLINE
  description: '[SHORT_DESCRIPTION]', // BRIEF: SHORT_DESCRIPTION
  domain: '[DOMAIN]',                // BRIEF: DOMAIN (no https://, no trailing slash)
  language: 'es',                    // BRIEF: LANGUAGE
  schemaType: '[SCHEMA_TYPE]',       // BRIEF: SCHEMA_TYPE
  foundingYear: null,                // BRIEF: FOUNDING_YEAR (number or null)

  // ── Brand assets ──────────────────────────────────────────
  // Logo MUST be in public/brand_assets/ for Vite/Vercel to serve it.
  logoSrc: '/brand_assets/logo.webp', // Update filename to match actual file in public/brand_assets/
  logoAlt: '[BUSINESS_NAME]',        // Same as name

  // ── Contact ───────────────────────────────────────────────
  phone: '[PHONE]',                  // BRIEF: PHONE (display format: +34 694 269 008)
  whatsapp: '[WHATSAPP_NUMBER]',     // BRIEF: WHATSAPP_NUMBER (digits only, no +)
  whatsappMessage: '',               // BRIEF: WHATSAPP_MESSAGE (URL-encoded automatically)
  email: '[EMAIL]',                  // BRIEF: EMAIL
  openingHours: '',                  // BRIEF: OPENING_HOURS (schema.org format)
  googleBusinessUrl: '',             // BRIEF: GOOGLE_BUSINESS_URL
  primaryCtaAction: 'whatsapp',      // BRIEF: PRIMARY_CTA_ACTION
  bookingUrl: '',                    // BRIEF: BOOKING_URL (if primaryCtaAction is booking-link)

  // ── NIF/CIF (for legal pages) ──────────────────────────────
  nif: '[NIF_CIF]',                  // BRIEF: NIF_CIF
  legalName: '',                     // BRIEF: LEGAL_NAME (leave empty if same as name)

  // ── Locations ─────────────────────────────────────────────
  // Array of location objects from BRIEF.md LOCATION_* fields.
  locations: [
    // {
    //   city: 'Barcelona',
    //   address: 'C/ Sardenya, 311',
    //   postal: '08025',
    //   country: 'ES',
    //   hours: 'Mo-Fr 09:00-18:00',
    //   mapSrc: '',   // Google Maps iframe src
    // },
  ],

  // ── Social media ──────────────────────────────────────────
  // Add only platforms that exist. Claude will render icons only for non-empty values.
  social: {
    instagram: '',   // BRIEF: SOCIAL instagram
    tiktok: '',      // BRIEF: SOCIAL tiktok
    linkedin: '',    // BRIEF: SOCIAL linkedin
    facebook: '',    // BRIEF: SOCIAL facebook
    youtube: '',     // BRIEF: SOCIAL youtube
    twitter: '',     // BRIEF: SOCIAL twitter_x
  },

  // ── Navigation ────────────────────────────────────────────
  nav: {
    ctaLabel: '[NAV_CTA_LABEL]',   // BRIEF: NAV_CTA_LABEL
    ctaHref: '[NAV_CTA_HREF]',     // BRIEF: NAV_CTA_HREF

    // Populate from BRIEF.md PAGES + SERVICE_* entries.
    // iconName must match a key in the ICONS map in Navbar.jsx.
    // Available icons: Home, Globe, Briefcase, BarChart2, Users, BookOpen,
    //                  FileText, Star, Heart, Stethoscope, Utensils, Building2
    links: [
      { to: '/', label: 'Inicio', iconName: 'Home', end: true },
      // { to: '/servicios/extranjeria', label: 'Extranjería', iconName: 'Globe', end: false },
      // { to: '/nosotros', label: 'Nosotros', iconName: 'Users', end: false },
      // { to: '/blog', label: 'Blog', iconName: 'BookOpen', end: false },
      // { to: '/contacto', label: 'Contacto', iconName: 'FileText', end: false },
    ],
  },

  // ── UI strings (translate to LANGUAGE from BRIEF) ─────────
  // Claude: translate ALL values to the language specified in BRIEF.md LANGUAGE field.
  ui: {
    loading: 'Cargando...',
    backToHome: 'Inicio',
    readMore: 'Leer más',
    learnMore: 'Saber más',
    whatsappAriaLabel: 'Escríbenos por WhatsApp',
    closeMenu: 'Cerrar menú',
    openMenu: 'Abrir menú',
    cookieBannerText: 'Usamos cookies para mejorar tu experiencia.',
    cookieBannerAccept: 'Aceptar',
    cookieBannerDecline: 'Rechazar',
    cookieBannerLearnMore: 'Más información',
  },

  // ── Legal page links (footer bottom bar) ──────────────────
  // Claude: update paths and labels to match LANGUAGE.
  legal: {
    links: [
      { to: '/aviso-legal', label: 'Aviso legal' },
      { to: '/politica-de-privacidad', label: 'Política de privacidad' },
      { to: '/politica-de-cookies', label: 'Política de cookies' },
      { to: '/declaracion-accesibilidad', label: 'Declaración de accesibilidad' },
    ],
  },
}

// ── Computed helpers ─────────────────────────────────────────
// WhatsApp link builder (use this everywhere, don't build manually)
export function whatsappLink() {
  const msg = CLIENT.whatsappMessage
    ? `?text=${encodeURIComponent(CLIENT.whatsappMessage)}`
    : ''
  return `https://wa.me/${CLIENT.whatsapp}${msg}`
}

// Primary CTA link builder (respects PRIMARY_CTA_ACTION)
export function ctaLink(customHref) {
  if (customHref) return customHref
  switch (CLIENT.primaryCtaAction) {
    case 'whatsapp':      return whatsappLink()
    case 'email':         return `mailto:${CLIENT.email}`
    case 'phone':         return `tel:${CLIENT.phone.replace(/\s/g, '')}`
    case 'booking-link':  return CLIENT.bookingUrl
    case 'contact-form':  return '/contacto'
    default:              return whatsappLink()
  }
}
