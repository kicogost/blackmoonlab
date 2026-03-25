import { ArrowRight } from 'lucide-react'
import { CLIENT } from '../config/client.js'

export default function ServiceCard({ icon: Icon, title, description, href, ctaLabel }) {
  const label = ctaLabel || CLIENT.ui.learnMore

  return (
    <a
      href={href}
      style={{
        display: 'block',
        background: 'var(--white)',
        border: '1px solid var(--border)',
        borderLeft: '3px solid var(--accent)',
        borderRadius: 'var(--radius-lg)',
        padding: '28px',
        textDecoration: 'none',
        transition: 'box-shadow 0.25s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.25s cubic-bezier(0.25,0.46,0.45,0.94)',
        cursor: 'pointer',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
        e.currentTarget.style.transform = 'translateY(-3px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <div style={{
        width: '44px', height: '44px',
        background: 'var(--primary-faint)',
        borderRadius: '10px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '16px',
      }}>
        <Icon size={22} color="var(--primary)" strokeWidth={1.5} />
      </div>
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: '18px',
        fontWeight: '700',
        color: 'var(--primary)',
        marginBottom: '10px',
        lineHeight: 1.3,
      }}>{title}</h3>
      <p style={{
        fontSize: '14px',
        color: 'var(--ink-mid)',
        lineHeight: 1.7,
        marginBottom: '20px',
      }}>{description}</p>
      <span style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        fontSize: '13px',
        fontWeight: '600',
        color: 'var(--primary-light)',
      }}>
        {label} <ArrowRight size={14} />
      </span>
    </a>
  )
}
