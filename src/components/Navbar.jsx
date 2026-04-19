import { useState, useEffect } from 'react'
import {
  Home, Globe, Briefcase, BarChart2, Users, BookOpen,
  FileText, Star, Heart, Utensils, Building2, Phone,
} from 'lucide-react'
import { CLIENT } from '../config/client.js'
import Logo from './Logo.jsx'

// Icon lookup — add more as needed for new clients
const ICONS = {
  Home, Globe, Briefcase, BarChart2, Users, BookOpen,
  FileText, Star, Heart, Utensils, Building2, Phone,
}

export default function Navbar({ pathname = '/' }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = CLIENT.nav.links

  // isActive helper — replaces useLocation
  const isLinkActive = (l) => l.end ? pathname === l.to : pathname.startsWith(l.to)

  const onDark = true // BML is dark-theme end-to-end
  const tubeColor   = 'var(--accent)'
  const pillBg      = 'rgba(236,31,128,0.10)'
  const linkColor   = 'rgba(245,243,239,0.7)'
  const activeColor = 'var(--accent)'

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 1000,
      height: 'var(--nav-height)',
      transition: 'background 0.3s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.3s cubic-bezier(0.25,0.46,0.45,0.94), border-color 0.3s',
      background: scrolled ? 'rgba(10,10,10,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(245,243,239,0.08)' : '1px solid transparent',
    }}>
      <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>

        {/* Logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }} aria-label={CLIENT.logoAlt}>
          <Logo size="sm" onDark />
        </a>

        {/* Desktop nav — tubelight pill container */}
        <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {links.map(l => {
            const isActive = isLinkActive(l)

            return (
              <a
                key={l.to}
                href={l.to}
                style={{
                  position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '8px 16px',
                  borderRadius: '999px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  fontWeight: isActive ? '600' : '400',
                  color: isActive ? activeColor : linkColor,
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = onDark ? 'white' : 'var(--primary)' }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = linkColor }}
              >
                {/* Active pill background */}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '999px',
                      background: pillBg,
                      zIndex: 0,
                    }}
                  >
                    {/* Tubelight glow bar on top */}
                    <span style={{
                      position: 'absolute',
                      top: '-3px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '32px',
                      height: '3px',
                      borderRadius: '0 0 3px 3px',
                      background: tubeColor,
                      zIndex: 1,
                    }}>
                      <span style={{
                        position: 'absolute',
                        width: '48px',
                        height: '16px',
                        borderRadius: '50%',
                        background: onDark ? 'rgba(200,169,110,0.25)' : 'rgba(13,31,60,0.12)',
                        filter: 'blur(6px)',
                        top: '-6px',
                        left: '-8px',
                      }} />
                      <span style={{
                        position: 'absolute',
                        width: '32px',
                        height: '12px',
                        borderRadius: '50%',
                        background: onDark ? 'rgba(200,169,110,0.2)' : 'rgba(13,31,60,0.1)',
                        filter: 'blur(4px)',
                        top: '-4px',
                        left: '0',
                      }} />
                    </span>
                  </span>
                )}

                <span style={{ position: 'relative', zIndex: 1 }}>{l.label}</span>
              </a>
            )
          })}
        </div>

        {/* CTA button */}
        <div className="nav-desktop">
          <a
            href={CLIENT.nav.ctaHref}
            target={CLIENT.nav.ctaHref.startsWith('http') ? '_blank' : undefined}
            rel={CLIENT.nav.ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
            style={{
              background: 'var(--accent)',
              color: 'var(--primary)',
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              fontWeight: '600',
              padding: '9px 20px',
              borderRadius: 'var(--radius-sm)',
              textDecoration: 'none',
              transition: 'background 0.2s, color 0.2s',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-dark)'; e.currentTarget.style.color = 'white' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = 'var(--primary)' }}
          >
            {CLIENT.nav.ctaLabel}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-hamburger"
          aria-label={menuOpen ? CLIENT.ui.closeMenu : CLIENT.ui.openMenu}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            padding: '8px', display: 'none', flexDirection: 'column', gap: '5px',
          }}
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block', width: '22px', height: '2px',
              background: scrolled ? 'var(--primary)' : 'white',
              borderRadius: '2px',
              transition: 'transform 0.2s, opacity 0.2s',
              transform: menuOpen
                ? i === 0 ? 'translateY(7px) rotate(45deg)'
                : i === 2 ? 'translateY(-7px) rotate(-45deg)'
                : 'scaleX(0)'
                : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        style={{
          position: 'absolute',
          top: 'var(--nav-height)',
          left: 0, right: 0,
          background: 'var(--white)',
          borderTop: '1px solid var(--border)',
          padding: '12px 24px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '2px',
          boxShadow: 'var(--shadow-lg)',
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? 'translateY(0)' : 'translateY(-8px)',
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.2s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.2s cubic-bezier(0.25,0.46,0.45,0.94)',
        }}
      >
            {links.map(l => {
              const Icon = ICONS[l.iconName] || Home
              const isActive = isLinkActive(l)
              return (
                <a
                  key={l.to}
                  href={l.to}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '15px',
                    fontWeight: isActive ? '600' : '400',
                    color: isActive ? 'var(--primary)' : 'var(--ink-mid)',
                    textDecoration: 'none',
                    padding: '13px 4px',
                    borderBottom: '1px solid var(--border)',
                    borderLeft: isActive ? '3px solid var(--accent)' : '3px solid transparent',
                    paddingLeft: isActive ? '12px' : '4px',
                    transition: 'border-color 0.2s, color 0.2s, padding-left 0.2s',
                  }}
                >
                  <Icon size={16} strokeWidth={isActive ? 2 : 1.5} />
                  {l.label}
                </a>
              )
            })}
            <a
              href={CLIENT.nav.ctaHref}
              target={CLIENT.nav.ctaHref.startsWith('http') ? '_blank' : undefined}
              rel={CLIENT.nav.ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
              onClick={() => setMenuOpen(false)}
              style={{
                marginTop: '12px',
                background: 'var(--accent)',
                color: 'var(--primary)',
                textAlign: 'center',
                padding: '13px',
                borderRadius: 'var(--radius-md)',
                fontWeight: '600',
                fontSize: '14px',
                textDecoration: 'none',
                display: 'block',
              }}
            >
              {CLIENT.nav.ctaLabel}
            </a>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
