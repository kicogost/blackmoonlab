import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const target = useRef({ x: -100, y: -100 })
  const current = useRef({ x: -100, y: -100 })
  const lastMove = useRef({ x: -100, y: -100, t: 0 })
  const rafId = useRef(null)
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches
    if (isTouch) return

    const reducedMq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(reducedMq.matches)
    const onReducedChange = e => setReduced(e.matches)
    reducedMq.addEventListener('change', onReducedChange)

    setEnabled(true)
    document.documentElement.classList.add('cursor-hidden')

    const onMove = e => {
      target.current.x = e.clientX
      target.current.y = e.clientY
      const now = performance.now()
      const dt = now - lastMove.current.t
      if (dt > 0) {
        const dx = e.clientX - lastMove.current.x
        const dy = e.clientY - lastMove.current.y
        const speed = Math.min(Math.hypot(dx, dy) / dt, 2)
        const angle = Math.atan2(dy, dx) * (180 / Math.PI)
        if (cursorRef.current) {
          cursorRef.current.dataset.speed = speed.toFixed(3)
          cursorRef.current.dataset.angle = angle.toFixed(2)
        }
      }
      lastMove.current = { x: e.clientX, y: e.clientY, t: now }
    }

    const onOver = e => {
      const interactive = e.target.closest('a, button, [role="button"], input, textarea, select, label')
      setHovering(!!interactive)
    }

    const onLeave = () => {
      target.current.x = -100
      target.current.y = -100
    }

    const tick = () => {
      const ease = reducedMq.matches ? 1 : 0.22
      current.current.x += (target.current.x - current.current.x) * ease
      current.current.y += (target.current.y - current.current.y) * ease
      const el = cursorRef.current
      if (el) {
        const speed = parseFloat(el.dataset.speed || '0')
        const angle = parseFloat(el.dataset.angle || '0')
        const tilt = reducedMq.matches ? 0 : Math.max(-18, Math.min(18, (angle - 270) * 0.06 * speed * 4))
        const stretch = reducedMq.matches ? 1 : 1 + Math.min(speed * 0.35, 0.18)
        el.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%) rotate(${tilt}deg) scale(${stretch})`
      }
      rafId.current = requestAnimationFrame(tick)
    }
    rafId.current = requestAnimationFrame(tick)

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })
    document.addEventListener('mouseleave', onLeave)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseleave', onLeave)
      reducedMq.removeEventListener('change', onReducedChange)
      cancelAnimationFrame(rafId.current)
      document.documentElement.classList.remove('cursor-hidden')
    }
  }, [])

  if (!enabled) return null

  const size = hovering ? 36 : 24
  const opacity = hovering ? 1 : 0.95

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: size,
        height: size,
        pointerEvents: 'none',
        zIndex: 9999,
        transition: reduced
          ? 'none'
          : 'width 0.2s cubic-bezier(0.25,0.46,0.45,0.94), height 0.2s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.2s',
        willChange: 'transform',
        opacity,
        mixBlendMode: 'normal',
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        style={{
          display: 'block',
          filter: hovering
            ? 'drop-shadow(0 0 12px rgba(236,31,128,0.65))'
            : 'drop-shadow(0 0 6px rgba(236,31,128,0.4))',
          transition: 'filter 0.2s',
        }}
      >
        <path
          d="M12 2 C6.48 2 2 6.48 2 12 s4.48 10 10 10 c1.72 0 3.34-0.43 4.75-1.19 C11.63 18.93 7.94 14.95 7.94 10.5 S11.63 2.07 16.75 1.19 C15.34 2.43 13.72 2 12 2z"
          fill="var(--accent)"
        />
      </svg>
    </div>
  )
}
