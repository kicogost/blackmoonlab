/**
 * Blog.jsx — Shell page (Blog / Recursos)
 * Only include if BRIEF.md has BLOG: true
 *
 * CLAUDE: Build this page using BRIEF.md as the content source.
 *
 * Required sections:
 * 1. Mini hero     — "Blog" title + subtitle
 * 2. Category filter — one button per BLOG_CATEGORIES entry + "Todos"
 * 3. Posts grid    — BlogCard for each published post
 * 4. Bottom CTA    — InteractiveButton variant="gold"
 *
 * Design rules:
 * - Category colors: derive from --primary-* and --accent-* tokens
 * - Pass categoryColors prop to BlogCard from a local map
 * - Post data comes from a local POSTS array defined in this file
 *   (not from an external CMS — static data for now)
 */

import { useState } from 'react'
import { CLIENT, ctaLink } from '../config/client.js'
import BlogCard from '../components/BlogCard.jsx'
import InteractiveButton from '../components/InteractiveButton.jsx'

// CLAUDE: Replace with actual posts from BRIEF.md blog topics
// Format: { category, title, excerpt, readTime, href }
const POSTS = []

// CLAUDE: Define category colors derived from brand tokens
const CATEGORY_COLORS = {
  // 'Category': { bg: '#EBF4FF', color: '#1E3A6E' },
}

export default function Blog() {
  const categories = ['Todos', ...new Set(POSTS.map(p => p.category))]
  const [active, setActive] = useState('Todos')
  const filtered = active === 'Todos' ? POSTS : POSTS.filter(p => p.category === active)

  return (
    <>
      {/* CLAUDE: Build all sections here */}
      <div style={{ paddingTop: 'var(--nav-height)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--neutral)' }}>
          Blog page — Claude will build this from BRIEF.md
        </p>
      </div>
    </>
  )
}
