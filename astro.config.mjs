import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import { CLIENT } from './src/config/client.js'

// Use a fallback when CLIENT.domain still has its placeholder value
const domain = CLIENT.domain.startsWith('[') ? 'localhost' : CLIENT.domain

export default defineConfig({
  // site is read from client.js — update CLIENT.domain in src/config/client.js
  site: `https://${domain}`,
  integrations: [react(), sitemap()],
  output: 'static',
})
