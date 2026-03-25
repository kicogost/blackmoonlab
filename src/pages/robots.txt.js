// Dynamic robots.txt — reads domain from client.js automatically
import { CLIENT } from '../config/client.js'

export async function GET() {
  return new Response(
    `User-agent: *\nAllow: /\nSitemap: https://${CLIENT.domain}/sitemap-index.xml\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
  )
}
