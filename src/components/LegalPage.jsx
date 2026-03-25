import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { CLIENT } from '../config/client.js'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: '36px' }}>
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: '18px',
        fontWeight: '700',
        color: 'var(--primary)',
        marginBottom: '12px',
        paddingBottom: '8px',
        borderBottom: '1px solid var(--border)',
      }}>{title}</h2>
      {children}
    </div>
  )
}

function P({ children }) {
  return (
    <p style={{ fontSize: '14px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '10px' }}>
      {children}
    </p>
  )
}

function Ul({ items }) {
  return (
    <ul style={{ paddingLeft: '20px', marginBottom: '10px' }}>
      {items.map((item, i) => (
        <li key={i} style={{ fontSize: '14px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '4px' }}>{item}</li>
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
        background: 'linear-gradient(135deg, var(--primary-deep) 0%, var(--primary) 100%)',
        paddingTop: 'calc(var(--nav-height) + 40px)',
        paddingBottom: '40px',
      }}>
        <div className="container">
          <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginBottom: '16px', textDecoration: 'none' }}>
            <ArrowLeft size={13} /> {CLIENT.ui.backToHome}
          </a>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(22px, 3vw, 32px)',
            fontWeight: '700',
            color: 'var(--white)',
            letterSpacing: '-0.02em',
          }}>{title}</h1>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: 'var(--white)', padding: '56px 0 80px' }}>
        <div className="container">
          <motion.div {...fadeUp} style={{ maxWidth: '760px' }}>
            {children}
          </motion.div>
        </div>
      </section>
    </>
  )
}
