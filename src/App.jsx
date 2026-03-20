import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import { CLIENT } from './config/client.js'

// ── Main pages ────────────────────────────────────────────────
// CLAUDE: Add/remove lazy imports to match BRIEF.md PAGES field
const Home    = lazy(() => import('./pages/Home.jsx'))
const About   = lazy(() => import('./pages/About.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const Blog    = lazy(() => import('./pages/Blog.jsx'))

// ── Service pages ─────────────────────────────────────────────
// CLAUDE: Generate one lazy import per SERVICE_* entry in BRIEF.md
// e.g., const Extranjeria = lazy(() => import('./pages/services/Extranjeria.jsx'))

// ── Blog posts ────────────────────────────────────────────────
// CLAUDE: Generate one lazy import per blog post created
// e.g., const Post1 = lazy(() => import('./pages/blog/PostSlug.jsx'))

// ── Legal pages ───────────────────────────────────────────────
// CLAUDE: These are always required — generate all four
// const AvisoLegal               = lazy(() => import('./pages/legal/AvisoLegal.jsx'))
// const PoliticaPrivacidad       = lazy(() => import('./pages/legal/PoliticaPrivacidad.jsx'))
// const PoliticaCookies          = lazy(() => import('./pages/legal/PoliticaCookies.jsx'))
// const DeclaracionAccesibilidad = lazy(() => import('./pages/legal/DeclaracionAccesibilidad.jsx'))

// ── Local SEO pages ───────────────────────────────────────────
// CLAUDE: Generate one per LOCAL_SEO_CITIES × service combination
// e.g., const ServicioCiudad = lazy(() => import('./pages/local/ServicioCiudad.jsx'))

const loading = (
  <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <span style={{ fontFamily: 'var(--font-body)', color: 'var(--neutral)' }}>{CLIENT.ui.loading}</span>
  </div>
)

export default function App() {
  return (
    <Layout>
      <Suspense fallback={loading}>
        <Routes>
          {/* Main pages */}
          <Route path="/"         element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/blog"     element={<Blog />} />

          {/* CLAUDE: Add service routes — one per SERVICE_* entry */}
          {/* <Route path="/servicios/[slug]" element={<ServicePage />} /> */}

          {/* CLAUDE: Add blog post routes */}
          {/* <Route path="/blog/[post-slug]" element={<PostComponent />} /> */}

          {/* CLAUDE: Add legal routes (always required) */}
          {/* <Route path="/aviso-legal"               element={<AvisoLegal />} /> */}
          {/* <Route path="/politica-de-privacidad"    element={<PoliticaPrivacidad />} /> */}
          {/* <Route path="/politica-de-cookies"       element={<PoliticaCookies />} /> */}
          {/* <Route path="/declaracion-accesibilidad" element={<DeclaracionAccesibilidad />} /> */}

          {/* CLAUDE: Add local SEO routes */}
          {/* <Route path="/[service]-[city]" element={<LocalPage />} /> */}
        </Routes>
      </Suspense>
    </Layout>
  )
}
