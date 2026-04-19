/**
 * Logo — BLACK MOON LAB wordmark.
 *
 * Renders the wordmark as inline text so Google-loaded fonts (Bebas Neue + Allura)
 * render correctly. The `<img>` tag in Navbar/Footer has been replaced with this.
 *
 * Props:
 *   size     'sm' | 'md' (default 'sm' for navbar)
 *   onDark   true (cream ink) | false (dark ink on light bg)
 */
export default function Logo({ size = 'sm', onDark = true }) {
  const scale = size === 'md' ? 1.4 : 1
  const baseSize = 26 * scale
  const inkColor = onDark ? 'var(--cream)' : 'var(--primary)'

  return (
    <span
      aria-label="Black Moon Lab"
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        lineHeight: 0.85,
        userSelect: 'none',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: `${baseSize}px`,
          letterSpacing: '0.04em',
          color: inkColor,
          textTransform: 'uppercase',
        }}
      >
        Black Moon
      </span>
      <span
        style={{
          fontFamily: 'var(--font-script)',
          fontSize: `${baseSize * 0.85}px`,
          color: 'var(--accent)',
          marginTop: `${-baseSize * 0.35}px`,
          marginLeft: `${baseSize * 1.4}px`,
          transform: 'rotate(-3deg)',
          transformOrigin: 'left center',
          lineHeight: 1,
        }}
      >
        lab
      </span>
    </span>
  )
}
