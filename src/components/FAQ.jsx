import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ({ items }) {
  const [open, setOpen] = useState(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-md)',
            background: 'var(--white)',
            overflow: 'hidden',
          }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '20px 24px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              gap: '16px',
            }}
          >
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              fontWeight: '500',
              color: 'var(--primary)',
              lineHeight: 1.4,
            }}>
              {item.q}
            </span>
            <ChevronDown
              size={18}
              style={{
                flexShrink: 0,
                color: 'var(--accent-dark)',
                transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.25s cubic-bezier(0.25,0.46,0.45,0.94)',
              }}
            />
          </button>
          {open === i && (
            <div style={{
              padding: '0 24px 20px',
              fontSize: '15px',
              color: 'var(--ink-mid)',
              lineHeight: 1.75,
              borderTop: '1px solid var(--border)',
              paddingTop: '16px',
            }}>
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
