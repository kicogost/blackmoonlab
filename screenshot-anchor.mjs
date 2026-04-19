// Viewport screenshot scrolled to a specific hash anchor.
// Usage: node screenshot-anchor.mjs <url> <#anchor> <label>
import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const screenshotDir = path.join(__dirname, "temporary screenshots");
if (!fs.existsSync(screenshotDir)) fs.mkdirSync(screenshotDir, { recursive: true });

const [, , baseUrl = "http://localhost:3000", anchor = "", label = "anchor"] = process.argv;
const files = fs.readdirSync(screenshotDir);
const pattern = new RegExp(`^screenshot-(\\d+)-${label}\\.png$`);
const idx = Math.max(0, ...files.map(f => { const m = f.match(pattern); return m ? parseInt(m[1]) : 0 })) + 1;
const outputPath = path.join(screenshotDir, `screenshot-${idx}-${label}.png`);

const url = anchor ? `${baseUrl}/${anchor.startsWith("#") ? "" : "#"}${anchor}` : baseUrl;

const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox", "--disable-setuid-sandbox"] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: "networkidle0" });
if (anchor) {
  const sel = anchor.startsWith("#") ? anchor : `#${anchor}`;
  await page.evaluate(s => { const el = document.querySelector(s); if (el) el.scrollIntoView({ behavior: "instant", block: "start" }) }, sel);
  await new Promise(r => setTimeout(r, 600));
}
await page.screenshot({ path: outputPath, fullPage: false });
await browser.close();
console.log(`Screenshot saved: ${outputPath}`);
