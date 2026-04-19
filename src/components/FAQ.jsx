import { useState } from 'react'
import { Plus } from 'lucide-react'

export default function FAQ({ items }) {
  const [open, setOpen] = useState(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--border)' }}>
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div
            key={i}
            style={{
              borderBottom: '1px solid var(--border)',
              transition: 'background 0.25s',
              background: isOpen ? 'var(--primary-mid)' : 'transparent',
            }}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '28px 24px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                gap: '24px',
                color: 'var(--cream)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--cream)'}
            >
              <span style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '21px',
                fontWeight: '400',
                lineHeight: 1.4,
                color: 'inherit',
              }}>
                {item.q}
              </span>
              <Plus
                size={20}
                strokeWidth={1.4}
                style={{
                  flexShrink: 0,
                  color: 'var(--accent)',
                  transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94)',
                }}
              />
            </button>
            {isOpen && (
              <div style={{
                padding: '0 24px 28px',
                fontSize: '15px',
                color: 'var(--ink-mid)',
                lineHeight: 1.75,
                maxWidth: '72ch',
              }}>
                {item.a}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
