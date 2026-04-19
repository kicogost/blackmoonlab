import { useEffect, useState } from 'react'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { CLIENT, ctaLink } from '../config/client.js'
import InteractiveButton from '../components/InteractiveButton.jsx'
import FAQ from '../components/FAQ.jsx'
import Logo from '../components/Logo.jsx'

// ── Reusable bits ───────────────────────────────────────────────
const Sparkle = ({ style }) => (
  <span className="sparkle" style={style}>
    <svg viewBox="0 0 24 24">
      <path d="M12 0 L13.5 10.5 L24 12 L13.5 13.5 L12 24 L10.5 13.5 L0 12 L10.5 10.5 Z" />
    </svg>
  </span>
)

const SectionLabel = ({ children }) => (
  <span className="section-label">{children}</span>
)

// Fade-in on scroll
function useReveal() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    setVisible(true)
  }, [])
  return visible
}

const fadeStyle = (visible, delay = 0) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'translateY(0)' : 'translateY(16px)',
  transition: `opacity 0.8s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}ms, transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}ms`,
})

// ── Hero ───────────────────────────────────────────────────────
function Hero() {
  const visible = useReveal()
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '56px 0 80px',
      position: 'relative',
      background: `
        radial-gradient(ellipse at top right, rgba(236,31,128,0.08), transparent 60%),
        radial-gradient(ellipse at bottom left, rgba(236,31,128,0.06), transparent 50%),
        var(--primary)
      `,
      overflow: 'hidden',
    }}>
      <Sparkle style={{ top: '40px', left: '40px' }} />
      <Sparkle style={{ top: '40px', right: '40px' }} />
      <Sparkle style={{ bottom: '40px', left: '40px', opacity: 0.35 }} />

      <div className="container" style={{ ...fadeStyle(visible) }}>
        {/* Top meta */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '80px',
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'var(--ink-light)',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <span>Laboratorio · Contenido · Membresía</span>
          <span>€49 / mes · Acceso inmediato</span>
        </div>

        {/* Headline — big, editorial */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(54px, 9vw, 140px)',
          lineHeight: 0.9,
          letterSpacing: '0.01em',
          color: 'var(--cream)',
          maxWidth: '15ch',
        }}>
          Deja de publicar<br />al vacío.
        </h1>

        <div style={{
          marginTop: '-12px',
          marginLeft: 'clamp(120px, 25vw, 320px)',
          fontFamily: 'var(--font-script)',
          fontSize: 'clamp(48px, 8vw, 110px)',
          color: 'var(--accent)',
          transform: 'rotate(-2deg)',
          lineHeight: 1,
        }}>
          empieza a vender.
        </div>

        {/* Sub */}
        <p style={{
          marginTop: '56px',
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: 'clamp(18px, 2vw, 22px)',
          color: 'var(--cream)',
          maxWidth: '48ch',
          lineHeight: 1.45,
          fontWeight: 300,
        }}>
          Cada semana recibes la estrategia, las ideas y el feedback directo para crear contenido que posiciona, conecta y vende — sin forzarte ni agotarte.
        </p>

        {/* CTAs */}
        <div style={{
          marginTop: '48px',
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}>
          <InteractiveButton
            variant="gold"
            href={ctaLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Entra al lab · €49/mes
          </InteractiveButton>
          <a href="#sistema" style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--ink-mid)',
            borderBottom: '1px solid var(--border)',
            padding: '6px 0',
            transition: 'color 0.2s, border-color 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--cream)'; e.currentTarget.style.borderColor = 'var(--cream)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--ink-mid)'; e.currentTarget.style.borderColor = 'var(--border)' }}>
            Cómo funciona →
          </a>
        </div>

        {/* Footer meta */}
        <div style={{
          marginTop: '120px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'var(--ink-light)',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <span>By Roberta Scagliarini</span>
          <span>Para emprendedoras de servicios</span>
        </div>
      </div>
    </section>
  )
}

// ── Problema ───────────────────────────────────────────────────
function Problema() {
  const pains = [
    { mono: '01', text: 'Abres Instagram para publicar y te bloqueas. Otra vez.' },
    { mono: '02', text: 'Publicas sin estrategia, esperando que "esta vez sí" funcione.' },
    { mono: '03', text: 'Copias fórmulas de otras y sientes que no son tu voz.' },
    { mono: '04', text: 'Pierdes horas cada semana sin que lleguen clientes.' },
    { mono: '05', text: 'Sabes que tienes algo bueno — pero no logras comunicarlo.' },
    { mono: '06', text: 'Estás cansada de métodos que no encajan con tu energía.' },
  ]

  return (
    <section id="problema" style={{
      padding: '120px 0',
      background: 'var(--primary)',
    }}>
      <div className="container">
        <SectionLabel>El punto de partida</SectionLabel>
        <h2 style={{
          fontSize: 'clamp(40px, 6vw, 72px)',
          color: 'var(--cream)',
          maxWidth: '18ch',
          marginBottom: '24px',
        }}>
          No es pereza. Es que<br />nadie te dio un sistema.
        </h2>
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: '20px',
          color: 'var(--ink-mid)',
          maxWidth: '52ch',
          marginBottom: '64px',
          lineHeight: 1.5,
          fontWeight: 300,
        }}>
          Publicar en redes no debería sentirse como un impuesto semanal. Si te reconoces aquí, no eres tú — es el enfoque.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 0,
          borderTop: '1px solid var(--border)',
        }}>
          {pains.map((p, i) => (
            <div
              key={i}
              style={{
                padding: '28px 24px',
                borderBottom: '1px solid var(--border)',
                borderRight: '1px solid var(--border)',
                display: 'flex',
                gap: '20px',
                alignItems: 'baseline',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.2em',
                color: 'var(--accent)',
              }}>
                {p.mono}
              </span>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                color: 'var(--cream)',
                lineHeight: 1.6,
                fontWeight: 300,
              }}>
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Sistema (reveal) ───────────────────────────────────────────
function Sistema() {
  const pillars = [
    {
      label: '01 · Estrategia',
      title: 'Tu plan semanal',
      text: 'Cada semana recibes la estructura completa: 4 piezas de feed, secuencia de stories y dirección clara. Sin tener que inventar qué publicar.',
    },
    {
      label: '02 · Feedback',
      title: 'Mi mirada directa',
      text: 'Dejas tus dudas en la comunidad privada y yo te respondo personalmente. Una mirada experta cada vez que te bloqueas.',
    },
    {
      label: '03 · En directo',
      title: 'Clase mensual',
      text: 'Una sesión en vivo cada mes donde hago auditorías reales de cuentas y resolvemos dudas en tiempo real. Sin filtros.',
    },
  ]

  return (
    <section id="sistema" style={{
      padding: '140px 0',
      background: 'var(--primary-mid)',
      position: 'relative',
    }}>
      <Sparkle style={{ top: '40px', right: '40px' }} />
      <div className="container">
        <SectionLabel>El laboratorio</SectionLabel>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '80px' }}>
          <h2 style={{
            fontSize: 'clamp(56px, 9vw, 120px)',
            color: 'var(--cream)',
            lineHeight: 0.9,
          }}>
            Black Moon
          </h2>
          <span style={{
            fontFamily: 'var(--font-script)',
            fontSize: 'clamp(48px, 7vw, 88px)',
            color: 'var(--accent)',
            marginTop: '-18px',
            marginLeft: 'clamp(100px, 18vw, 200px)',
            transform: 'rotate(-3deg)',
            lineHeight: 1,
          }}>
            lab
          </span>
        </div>

        <p style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: 'clamp(22px, 2.4vw, 28px)',
          color: 'var(--cream)',
          maxWidth: '50ch',
          marginBottom: '80px',
          lineHeight: 1.4,
          fontWeight: 300,
        }}>
          Un laboratorio estratégico donde el contenido deja de ser un bloqueo y se convierte en un sistema que trabaja para ti.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '0',
          border: '1px solid var(--border)',
          background: 'var(--primary)',
        }}>
          {pillars.map((p, i) => (
            <div
              key={i}
              style={{
                padding: '48px 32px',
                borderRight: i < pillars.length - 1 ? '1px solid var(--border)' : 'none',
                position: 'relative',
                transition: 'background 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--primary-light)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.3em',
                color: 'var(--accent)',
                textTransform: 'uppercase',
                marginBottom: '32px',
              }}>
                {p.label}
              </div>
              <h3 style={{
                fontSize: '32px',
                color: 'var(--cream)',
                marginBottom: '16px',
                letterSpacing: '0.03em',
              }}>
                {p.title}
              </h3>
              <p style={{
                fontSize: '14px',
                color: 'var(--ink-mid)',
                lineHeight: 1.7,
                fontWeight: 300,
              }}>
                {p.text}
              </p>
            </div>
          ))}
        </div>

        <p style={{
          marginTop: '40px',
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          letterSpacing: '0.2em',
          color: 'var(--ink-light)',
          textTransform: 'uppercase',
        }}>
          + Comunidad privada de emprendedoras · Espacio para conectar, no para vender
        </p>
      </div>
    </section>
  )
}

// ── Cómo funciona (proceso + estructura semanal) ───────────────
function ComoFunciona() {
  const steps = [
    { n: '01', title: 'Entras al laboratorio', text: 'Activas tu membresía y accedes al sistema desde el primer día.' },
    { n: '02', title: 'Abres tu Content Journal', text: 'Anotas lo que vives, tus aprendizajes y conversaciones con clientes durante la semana.' },
    { n: '03', title: 'Recibes tu plan semanal', text: 'Te enviamos la estructura: 4 piezas de feed + stories estratégicas alineadas con la energía de la semana.' },
    { n: '04', title: 'Publicas con claridad', text: 'Ejecutas sin bloquearte. Dejas tus dudas y recibes feedback personal mío en la comunidad.' },
  ]

  const weekly = [
    { label: 'FEED', pieces: '4 piezas semanales · 2 B-roll ligeros + 2 vídeos a cámara con estructura' },
    { label: 'STORIES · LUN', pieces: 'Conexión · reflexión, experiencia, mirada interna' },
    { label: 'STORIES · MAR', pieces: 'Captación · secuencia con CTA a tu lead magnet' },
    { label: 'STORIES · JUE', pieces: 'Conversión · una story única, venta directa sin rodeos' },
  ]

  return (
    <section id="como-funciona" style={{
      padding: '140px 0',
      background: 'var(--primary-mid)',
    }}>
      <div className="container">
        <SectionLabel>El sistema</SectionLabel>
        <h2 style={{
          fontSize: 'clamp(40px, 6vw, 72px)',
          color: 'var(--cream)',
          maxWidth: '16ch',
          marginBottom: '80px',
        }}>
          Cómo se ve una semana dentro del lab.
        </h2>

        {/* 4 steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1px',
          background: 'var(--border)',
          border: '1px solid var(--border)',
          marginBottom: '80px',
        }}>
          {steps.map((s, i) => (
            <div key={i} style={{ padding: '40px 32px', background: 'var(--primary)', minHeight: '220px' }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '56px',
                color: 'var(--accent)',
                lineHeight: 1,
                marginBottom: '24px',
                letterSpacing: '0.02em',
              }}>
                {s.n}
              </div>
              <h3 style={{
                fontSize: '22px',
                color: 'var(--cream)',
                marginBottom: '12px',
                letterSpacing: '0.03em',
              }}>
                {s.title}
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--ink-mid)', lineHeight: 1.65, fontWeight: 300 }}>
                {s.text}
              </p>
            </div>
          ))}
        </div>

        {/* Weekly structure */}
        <div style={{
          border: '1px solid var(--border)',
          padding: '48px',
          background: 'var(--primary)',
          position: 'relative',
        }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.3em',
            color: 'var(--accent)',
            textTransform: 'uppercase',
            marginBottom: '32px',
          }}>
            La estructura semanal
          </div>
          <h3 style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: '28px',
            fontWeight: 400,
            color: 'var(--cream)',
            marginBottom: '40px',
            textTransform: 'none',
            letterSpacing: 0,
            maxWidth: '40ch',
            lineHeight: 1.35,
          }}>
            Cada día de la semana tiene un propósito. Nada se publica por rellenar.
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderTop: '1px solid var(--border)' }}>
            {weekly.map((w, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: 'clamp(140px, 20vw, 220px) 1fr',
                gap: '32px',
                padding: '24px 0',
                borderBottom: '1px solid var(--border)',
                alignItems: 'baseline',
              }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.25em',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                }}>
                  {w.label}
                </span>
                <span style={{
                  fontSize: '15px',
                  color: 'var(--cream)',
                  lineHeight: 1.6,
                  fontWeight: 300,
                }}>
                  {w.pieces}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Roberta ────────────────────────────────────────────────────
function Roberta() {
  return (
    <section id="roberta" style={{
      padding: '140px 0',
      background: 'var(--primary-mid)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '80px',
          alignItems: 'center',
        }}>
          {/* Image */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute',
              inset: '-12px',
              background: 'var(--accent)',
              opacity: 0.15,
              transform: 'rotate(-2deg)',
              zIndex: 0,
            }} />
            <img
              src="/brand_assets/roberta.jpg"
              alt="Roberta Scagliarini · fundadora de Black Moon Lab"
              loading="lazy"
              style={{
                width: '100%',
                aspectRatio: '4/5',
                objectFit: 'cover',
                filter: 'grayscale(0.15) contrast(1.05)',
                position: 'relative',
                zIndex: 1,
                display: 'block',
              }}
            />
            <span style={{
              position: 'absolute',
              bottom: '-24px',
              right: '-8px',
              fontFamily: 'var(--font-script)',
              fontSize: '48px',
              color: 'var(--accent)',
              transform: 'rotate(-4deg)',
              zIndex: 2,
            }}>
              Roberta
            </span>
          </div>

          {/* Text */}
          <div>
            <SectionLabel>Quién está detrás</SectionLabel>
            <h2 style={{
              fontSize: 'clamp(36px, 5vw, 64px)',
              color: 'var(--cream)',
              marginBottom: '32px',
              maxWidth: '14ch',
            }}>
              No es un curso grabado. Soy yo, cada semana.
            </h2>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: '22px',
              color: 'var(--cream)',
              marginBottom: '24px',
              lineHeight: 1.45,
              fontWeight: 300,
              maxWidth: '42ch',
            }}>
              Llevo años ayudando a emprendedoras de servicios a crear contenido que posiciona y vende sin forzarse.
            </p>
            <p style={{
              fontSize: '15px',
              color: 'var(--ink-mid)',
              lineHeight: 1.8,
              marginBottom: '32px',
              maxWidth: '48ch',
              fontWeight: 300,
            }}>
              Black Moon Lab nace de una obsesión: construir un sistema real — no motivacional — para que coaches, terapeutas y marcas personales dejen de improvisar y empiecen a publicar con claridad. Tu feedback lo doy yo, tus preguntas las respondo yo, y cada mes aparezco en directo.
            </p>
            <a
              href={CLIENT.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--cream)',
                borderBottom: '1px solid var(--accent)',
                padding: '6px 0',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--cream)'}
            >
              @magical.mente →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Transformación (antes / después) ───────────────────────────
function Transformacion() {
  const before = [
    'Publicas sin saber si lo que dices sirve.',
    'Dedicas horas y no te llegan mensajes.',
    'Copias a otras y suena forzado.',
    'Te bloqueas cada domingo por la noche.',
    'Tu marca se ve igual que diez más.',
    'Publicar te agota más que trabajar.',
  ]
  const after = [
    'Publicas con un plan claro y aplicable.',
    'Tu contenido mueve conversaciones de venta.',
    'Tu voz se reconoce — nadie te copia igual.',
    'Tienes el mapa de la semana antes de abrir IG.',
    'Te posicionas como referente en lo tuyo.',
    'Crear contenido deja de ser un impuesto.',
  ]

  return (
    <section style={{
      padding: '140px 0',
      background: 'var(--primary)',
    }}>
      <div className="container">
        <SectionLabel>Antes / Después</SectionLabel>
        <h2 style={{
          fontSize: 'clamp(40px, 6vw, 72px)',
          color: 'var(--cream)',
          maxWidth: '16ch',
          marginBottom: '80px',
        }}>
          El cambio que vas a notar en las primeras semanas.
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '0',
          border: '1px solid var(--border)',
        }}>
          {/* Antes */}
          <div style={{
            padding: '48px 40px',
            borderRight: '1px solid var(--border)',
            background: 'var(--primary-mid)',
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.3em',
              color: 'var(--ink-light)',
              textTransform: 'uppercase',
              marginBottom: '32px',
            }}>
              Antes del lab
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0 }}>
              {before.map((b, i) => (
                <li key={i} style={{
                  fontSize: '15px',
                  color: 'var(--ink-mid)',
                  padding: '14px 0 14px 24px',
                  borderBottom: i < before.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                  position: 'relative',
                  lineHeight: 1.5,
                  fontWeight: 300,
                }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--ink-light)', fontWeight: 500 }}>×</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Después */}
          <div style={{
            padding: '48px 40px',
            background: 'var(--primary-mid)',
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.3em',
              color: 'var(--accent)',
              textTransform: 'uppercase',
              marginBottom: '32px',
            }}>
              Dentro del lab
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0 }}>
              {after.map((a, i) => (
                <li key={i} style={{
                  fontSize: '15px',
                  color: 'var(--cream)',
                  padding: '14px 0 14px 24px',
                  borderBottom: i < after.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                  position: 'relative',
                  lineHeight: 1.5,
                  fontWeight: 400,
                }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontWeight: 500 }}>+</span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── FAQ ────────────────────────────────────────────────────────
function FaqSection() {
  const items = [
    {
      q: '¿Qué es exactamente Black Moon Lab?',
      a: 'Una membresía mensual donde cada semana recibes estrategia de contenido aplicable, ideas listas para ejecutar, feedback personal mío en la comunidad y una clase en directo cada mes. No es un curso grabado — es un sistema vivo.',
    },
    {
      q: '¿Para quién es este laboratorio?',
      a: 'Para emprendedoras de servicios: coaches, terapeutas, consultoras y marcas personales que ya están creando pero publican sin estrategia, se bloquean cada semana y no consiguen clientes de forma consistente.',
    },
    {
      q: '¿Cuánto tiempo necesito dedicar a la semana?',
      a: 'La idea es que ahorres tiempo, no que te dé más trabajo. Con el plan semanal y el Content Journal, la mayoría gestiona toda su semana de contenido en 2-3 horas bien enfocadas.',
    },
    {
      q: '¿Qué incluye la membresía?',
      a: 'Acceso al plan estratégico semanal (4 piezas de feed + stories), la metodología del Content Journal, la comunidad privada con mi feedback personal y una clase mensual en directo con auditorías reales. Todo por €49/mes.',
    },
    {
      q: '¿Qué es el Content Journal?',
      a: 'Es la pieza central del laboratorio. En lugar de escribir desde una plantilla, anotas lo que vives cada semana — conversaciones con clientes, aprendizajes, bloqueos, avances — y ese material real se transforma en contenido estratégico. Por eso nada se siente forzado.',
    },
    {
      q: '¿Hay permanencia?',
      a: 'No. Entras, usas el sistema y si en algún momento no te sirve, cancelas cuando quieras.',
    },
    {
      q: '¿Cómo recibo el contenido cada semana?',
      a: 'Directamente en la plataforma del lab. Cada semana encuentras el plan completo — estructura de feed, guion de stories y dirección estratégica — listo para ejecutar.',
    },
    {
      q: '¿Qué pasa si no tengo muchos seguidores todavía?',
      a: 'Mejor aún. Construir desde el inicio con un sistema claro evita los años que pierden quienes empiezan sin estrategia. El laboratorio funciona igual para crecer desde 200 seguidores que para afinar una cuenta con más recorrido.',
    },
  ]

  return (
    <section id="faq" style={{
      padding: '140px 0',
      background: 'var(--primary-mid)',
    }}>
      <div className="container">
        <SectionLabel>Preguntas frecuentes</SectionLabel>
        <h2 style={{
          fontSize: 'clamp(40px, 6vw, 64px)',
          color: 'var(--cream)',
          maxWidth: '16ch',
          marginBottom: '64px',
        }}>
          Lo que probablemente te estás preguntando.
        </h2>
        <FAQ items={items} />
      </div>
    </section>
  )
}

// ── Cierre (decision) ──────────────────────────────────────────
function Cierre() {
  return (
    <section style={{
      padding: '160px 0',
      background: `
        radial-gradient(ellipse at 30% 50%, rgba(236,31,128,0.15), transparent 60%),
        radial-gradient(ellipse at 80% 30%, rgba(236,31,128,0.08), transparent 55%),
        var(--primary-deep)
      `,
      position: 'relative',
      overflow: 'hidden',
    }}>
      <Sparkle style={{ top: '60px', left: '60px' }} />
      <Sparkle style={{ top: '60px', right: '60px' }} />
      <Sparkle style={{ bottom: '60px', left: '30%' }} />
      <Sparkle style={{ bottom: '40px', right: '20%', opacity: 0.4 }} />

      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          letterSpacing: '0.4em',
          color: 'var(--accent)',
          textTransform: 'uppercase',
          marginBottom: '32px',
        }}>
          — La decisión —
        </div>

        <h2 style={{
          fontSize: 'clamp(56px, 10vw, 140px)',
          color: 'var(--cream)',
          lineHeight: 0.9,
          maxWidth: '16ch',
          margin: '0 auto 24px',
        }}>
          Publicar sin sistema es caro.
        </h2>
        <div style={{
          fontFamily: 'var(--font-script)',
          fontSize: 'clamp(52px, 8vw, 110px)',
          color: 'var(--accent)',
          transform: 'rotate(-2deg)',
          lineHeight: 1,
          marginBottom: '48px',
        }}>
          cambia eso hoy.
        </div>

        <p style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: 'clamp(20px, 2vw, 24px)',
          color: 'var(--cream)',
          maxWidth: '52ch',
          margin: '0 auto 56px',
          lineHeight: 1.45,
          fontWeight: 300,
        }}>
          Entras al lab, activas tu primera semana y dejas de empezar cada domingo desde cero.
        </p>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
        }}>
          <InteractiveButton
            variant="gold"
            href={ctaLink()}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '16px', padding: '20px 40px' }}
          >
            Entra al lab ahora
          </InteractiveButton>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.3em',
            color: 'var(--ink-light)',
            textTransform: 'uppercase',
          }}>
            €49 / mes · Cancela cuando quieras
          </span>
        </div>

        <p style={{
          marginTop: '80px',
          fontSize: '14px',
          color: 'var(--ink-mid)',
          fontWeight: 300,
        }}>
          ¿Tienes una duda antes de entrar?{' '}
          <a
            href={CLIENT.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--accent)', borderBottom: '1px solid var(--accent)', paddingBottom: '1px' }}
          >
            Escríbeme por Instagram
          </a>
          .
        </p>
      </div>
    </section>
  )
}

// ── Export ─────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Hero />
      <Problema />
      <Sistema />
      <ComoFunciona />
      <Roberta />
      <Transformacion />
      <FaqSection />
      <Cierre />
    </>
  )
}
