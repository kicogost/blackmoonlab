import { useState, useEffect } from 'react'
import { CLIENT } from '../config/client.js'

const STORAGE_KEY = 'cookie-consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '24px',
        right: '24px',
        maxWidth: '480px',
        zIndex: 9998,
        background: 'var(--white)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        padding: '20px 24px',
        boxShadow: 'var(--shadow-xl)',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <p style={{ fontSize: '13px', color: 'var(--ink-mid)', lineHeight: 1.6 }}>
        {CLIENT.ui.cookieBannerText}{' '}
        <a
          href="/politica-de-cookies"
          style={{ color: 'var(--accent-dark)', textDecoration: 'underline', fontWeight: '500' }}
        >
          {CLIENT.ui.cookieBannerLearnMore}
        </a>
      </p>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button
          onClick={accept}
          style={{
            background: 'var(--accent)',
            color: 'var(--primary)',
            border: 'none',
            borderRadius: 'var(--radius-sm)',
            padding: '9px 20px',
            fontFamily: 'var(--font-body)',
            fontSize: '13px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--accent-dark)'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--accent)'}
        >
          {CLIENT.ui.cookieBannerAccept}
        </button>
        <button
          onClick={decline}
          style={{
            background: 'transparent',
            color: 'var(--ink-mid)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-sm)',
            padding: '9px 20px',
            fontFamily: 'var(--font-body)',
            fontSize: '13px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'border-color 0.2s, color 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--neutral)'; e.currentTarget.style.color = 'var(--ink)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--ink-mid)' }}
        >
          {CLIENT.ui.cookieBannerDecline}
        </button>
      </div>
    </div>
  )
}
