import { MapPin, Phone, Mail } from 'lucide-react'
import { CLIENT, whatsappLink } from '../config/client.js'

// Social media SVG icons
const SocialIcons = {
  instagram: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  ),
  tiktok: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.36 6.36 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
    </svg>
  ),
  linkedin: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  ),
  facebook: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  ),
  youtube: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
    </svg>
  ),
  twitter: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
}

// Service links from nav (filter to /servicios/* paths)
const serviceLinks = CLIENT.nav.links.filter(l => l.to.startsWith('/servicios'))

// Company links (non-service, non-home pages)
const companyLinks = CLIENT.nav.links.filter(l =>
  l.to !== '/' && !l.to.startsWith('/servicios') && !l.to.startsWith('/blog')
)

export default function Footer() {
  return (
    <footer style={{ background: 'var(--primary)', color: 'var(--white)', padding: '64px 0 32px' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '48px',
          marginBottom: '48px',
        }}>
          {/* Brand */}
          <div>
            <img
              src={CLIENT.logoSrc}
              alt={CLIENT.logoAlt}
              loading="lazy"
              style={{ height: '32px', width: 'auto', filter: 'brightness(0) invert(1)', marginBottom: '16px' }}
            />
            <p style={{ fontSize: '14px', color: 'var(--neutral)', lineHeight: 1.75, marginBottom: '20px', maxWidth: '260px' }}>
              {CLIENT.description}
            </p>
            {/* Social icons — only renders platforms with a URL */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {Object.entries(CLIENT.social).map(([platform, url]) => {
                if (!url || !SocialIcons[platform]) return null
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={platform.charAt(0).toUpperCase() + platform.slice(1)}
                    style={{ color: 'var(--neutral)', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--neutral)'}
                  >
                    {SocialIcons[platform]}
                  </a>
                )
              })}
            </div>
          </div>

          {/* Services */}
          {serviceLinks.length > 0 && (
            <div>
              <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: '600', color: 'var(--white)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '20px' }}>Servicios</h3>
              {serviceLinks.map(l => (
                <a key={l.to} href={l.to} style={{ display: 'block', fontSize: '14px', color: 'var(--neutral)', marginBottom: '10px', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--white)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--neutral)'}>
                  {l.label}
                </a>
              ))}
            </div>
          )}

          {/* Company */}
          {companyLinks.length > 0 && (
            <div>
              <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: '600', color: 'var(--white)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '20px' }}>Empresa</h3>
              {companyLinks.map(l => (
                <a key={l.to} href={l.to} style={{ display: 'block', fontSize: '14px', color: 'var(--neutral)', marginBottom: '10px', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--white)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--neutral)'}>
                  {l.label}
                </a>
              ))}
            </div>
          )}

          {/* Contact */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: '600', color: 'var(--white)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '20px' }}>Contacto</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--neutral)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--white)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--neutral)'}>
                <Phone size={14} /> {CLIENT.phone}
              </a>
              <a href={`mailto:${CLIENT.email}`}
                style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--neutral)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--white)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--neutral)'}>
                <Mail size={14} /> {CLIENT.email}
              </a>
              {CLIENT.locations.map((loc, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '14px', color: 'var(--neutral)' }}>
                  <MapPin size={14} style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>{loc.address}<br />{loc.postal} {loc.city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 0', alignItems: 'center' }}>
            {CLIENT.legal.links.map((l, i, arr) => (
              <span key={l.to} style={{ display: 'flex', alignItems: 'center' }}>
                <a
                  href={l.to}
                  style={{ fontSize: '11px', color: 'rgba(135,149,168,0.7)', textDecoration: 'none', transition: 'color 0.2s', whiteSpace: 'nowrap' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--neutral)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(135,149,168,0.7)'}
                >
                  {l.label}
                </a>
                {i < arr.length - 1 && (
                  <span style={{ color: 'rgba(135,149,168,0.35)', margin: '0 10px', fontSize: '11px' }}>·</span>
                )}
              </span>
            ))}
          </div>
          <p style={{ fontSize: '12px', color: 'rgba(135,149,168,0.6)' }}>
            © {new Date().getFullYear()} {CLIENT.legalName || CLIENT.name} — Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}
