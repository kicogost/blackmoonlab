import { ArrowLeft } from 'lucide-react'
import { CLIENT } from '../config/client.js'

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: '40px' }}>
      <h2 style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '12px',
        fontWeight: '400',
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
        color: 'var(--accent)',
        marginBottom: '16px',
        paddingBottom: '12px',
        borderBottom: '1px solid var(--border)',
      }}>{title}</h2>
      {children}
    </div>
  )
}

function P({ children }) {
  return (
    <p style={{ fontSize: '15px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '14px', fontWeight: 300, maxWidth: '68ch' }}>
      {children}
    </p>
  )
}

function Ul({ items }) {
  return (
    <ul style={{ paddingLeft: '20px', marginBottom: '14px' }}>
      {items.map((item, i) => (
        <li key={i} style={{ fontSize: '15px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '6px', fontWeight: 300 }}>{item}</li>
      ))}
    </ul>
  )
}

export { Section, P, Ul }

export default function LegalPage({ title, children }) {
  return (
    <>
      {/* Mini hero */}
      <section style={{
        background: `
          radial-gradient(ellipse at top right, rgba(236,31,128,0.1), transparent 60%),
          var(--primary-deep)
        `,
        paddingTop: '80px',
        paddingBottom: '64px',
      }}>
        <div className="container">
          <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--ink-mid)', fontSize: '12px', fontFamily: 'var(--font-mono)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '32px', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--ink-mid)'}>
            <ArrowLeft size={13} /> {CLIENT.ui.backToHome}
          </a>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 5vw, 64px)',
            color: 'var(--cream)',
            letterSpacing: '0.02em',
            lineHeight: 1,
          }}>{title}</h1>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: 'var(--primary)', padding: '72px 0 120px' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            {children}
          </div>
        </div>
      </section>
    </>
  )
}
