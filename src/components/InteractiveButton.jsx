import { ArrowRight } from 'lucide-react'

/**
 * InteractiveButton — sliding dot hover animation.
 *
 * Props:
 *  variant   'gold' | 'outline-dark' | 'outline'
 *  href      URL or path (internal paths work as plain <a href>)
 *  children  button label
 *  style     extra inline styles
 */
export default function InteractiveButton({ variant = 'gold', href, children, style, ...rest }) {
  const cls = `btn-interactive btn-interactive--${variant}`

  return (
    <a href={href} className={cls} style={style} {...rest}>
      <div className="btn-interactive__dot" />
      <span className="btn-interactive__label">{children}</span>
      <span className="btn-interactive__hover-label">
        {children}
        <ArrowRight size={16} />
      </span>
    </a>
  )
}
