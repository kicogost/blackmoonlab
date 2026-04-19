import { Mail, Phone } from 'lucide-react'
import { CLIENT } from '../config/client.js'
import Logo from './Logo.jsx'

const SocialIcons = {
  instagram: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  ),
  tiktok: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.36 6.36 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
    </svg>
  ),
  linkedin: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  ),
}

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--primary)',
      color: 'var(--ink-mid)',
      padding: '80px 0 32px',
      borderTop: '1px solid var(--border)',
      position: 'relative',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '56px',
          marginBottom: '56px',
        }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: '20px' }}>
              <Logo size="sm" onDark />
            </div>
            <p style={{ fontSize: '13px', color: 'var(--ink-mid)', lineHeight: 1.7, maxWidth: '300px' }}>
              {CLIENT.description}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: '400',
              color: 'var(--accent)',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}>Contacto</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              <a href={`mailto:${CLIENT.email}`}
                style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--ink-mid)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--cream)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--ink-mid)'}>
                <Mail size={14} /> {CLIENT.email}
              </a>
              <a href={`tel:${CLIENT.phone.replace(/\s/g, '')}`}
                style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--ink-mid)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--cream)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--ink-mid)'}>
                <Phone size={14} /> {CLIENT.phone}
              </a>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              {Object.entries(CLIENT.social).map(([platform, url]) => {
                if (!url || !SocialIcons[platform]) return null
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={platform.charAt(0).toUpperCase() + platform.slice(1)}
                    style={{
                      color: 'var(--ink-mid)',
                      transition: 'color 0.2s, border-color 0.2s',
                      border: '1px solid var(--border)',
                      width: '38px', height: '38px',
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      borderRadius: '50%',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--ink-mid)'; e.currentTarget.style.borderColor = 'var(--border)' }}
                  >
                    {SocialIcons[platform]}
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '28px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 0', alignItems: 'center' }}>
            {CLIENT.legal.links.map((l, i, arr) => (
              <span key={l.to} style={{ display: 'flex', alignItems: 'center' }}>
                <a
                  href={l.to}
                  style={{ fontSize: '11px', color: 'var(--ink-light)', textDecoration: 'none', transition: 'color 0.2s', whiteSpace: 'nowrap', letterSpacing: '0.02em' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--cream)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--ink-light)'}
                >
                  {l.label}
                </a>
                {i < arr.length - 1 && (
                  <span style={{ color: 'var(--ink-light)', margin: '0 10px', fontSize: '11px' }}>·</span>
                )}
              </span>
            ))}
          </div>
          <p style={{ fontSize: '11px', color: 'var(--ink-light)', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>
            © {new Date().getFullYear()} {CLIENT.legalName} · NIF {CLIENT.nif} · Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}
