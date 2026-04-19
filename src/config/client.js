/**
 * src/config/client.js — Black Moon Lab
 * Single source of truth for all client-specific constants.
 */

export const CLIENT = {
  // ── Identity ──────────────────────────────────────────────
  name: 'Black Moon Lab',
  tagline: 'Tu laboratorio de contenido semanal.',
  description: 'Laboratorio estratégico de contenido para emprendedoras de servicios. Estrategia clara cada semana, feedback directo y un sistema que posiciona y vende sin agotarte.',
  domain: 'blackmoonlab.vercel.app',
  language: 'es',
  schemaType: 'ProfessionalService',
  foundingYear: null,

  // ── Brand assets ──────────────────────────────────────────
  logoSrc: '/brand_assets/black-moon-lab-logo.svg',
  logoAlt: 'Black Moon Lab',

  // ── Contact ───────────────────────────────────────────────
  phone: '+34 620 109 003',
  whatsapp: '34620109003',
  whatsappMessage: 'Hola Roberta, me interesa Black Moon Lab.',
  email: 'roberta@magicalmente.com',
  openingHours: '',
  googleBusinessUrl: '',
  primaryCtaAction: 'booking-link',
  bookingUrl: 'https://stan.store/Magicalmente/p/black-moon-lab',

  // ── NIF/CIF (for legal pages) ──────────────────────────────
  nif: 'X2441250F',
  legalName: 'Roberta Scagliarini',

  // ── Locations ─────────────────────────────────────────────
  locations: [],

  // ── Social media ──────────────────────────────────────────
  social: {
    instagram: 'https://www.instagram.com/magical.mente/',
    tiktok: '',
    linkedin: '',
    facebook: '',
    youtube: '',
    twitter: '',
  },

  // ── Navigation ────────────────────────────────────────────
  // Landing-page mode — anchor links to sections on the same page.
  nav: {
    ctaLabel: 'Entra al lab',
    ctaHref: 'https://stan.store/Magicalmente/p/black-moon-lab',
    links: [
      { to: '#problema',    label: 'El problema',    iconName: 'Home', end: false },
      { to: '#sistema',     label: 'El sistema',     iconName: 'Briefcase', end: false },
      { to: '#como-funciona', label: 'Cómo funciona', iconName: 'BarChart2', end: false },
      { to: '#roberta',     label: 'Roberta',        iconName: 'Users', end: false },
      { to: '#faq',         label: 'FAQ',            iconName: 'FileText', end: false },
    ],
  },

  // ── UI strings ────────────────────────────────────────────
  ui: {
    loading: 'Cargando...',
    backToHome: 'Volver al inicio',
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

  // ── Analytics ─────────────────────────────────────────────
  analytics: {
    ga4Id: '',
  },

  // ── Brand (mobile browser chrome) ─────────────────────────
  brand: {
    primaryColor: '#0A0A0A',
  },

  // ── Legal page links (footer bottom bar) ──────────────────
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
export function whatsappLink() {
  const msg = CLIENT.whatsappMessage
    ? `?text=${encodeURIComponent(CLIENT.whatsappMessage)}`
    : ''
  return `https://wa.me/${CLIENT.whatsapp}${msg}`
}

export function ctaLink(customHref) {
  if (customHref) return customHref
  switch (CLIENT.primaryCtaAction) {
    case 'whatsapp':      return whatsappLink()
    case 'email':         return `mailto:${CLIENT.email}`
    case 'phone':         return `tel:${CLIENT.phone.replace(/\s/g, '')}`
    case 'booking-link':  return CLIENT.bookingUrl
    case 'contact-form':  return '/contacto'
    default:              return CLIENT.bookingUrl
  }
}
