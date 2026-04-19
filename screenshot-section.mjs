// Viewport-only screenshot at a given scrollY, for section-level inspection.
// Usage: node screenshot-section.mjs <url> <scrollY> <label>
import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const screenshotDir = path.join(__dirname, "temporary screenshots");
if (!fs.existsSync(screenshotDir)) fs.mkdirSync(screenshotDir, { recursive: true });

const [, , url = "http://localhost:3000", scrollY = "0", label = "section"] = process.argv;
const files = fs.readdirSync(screenshotDir);
const pattern = new RegExp(`^screenshot-(\\d+)-${label}\\.png$`);
const idx = Math.max(0, ...files.map(f => { const m = f.match(pattern); return m ? parseInt(m[1]) : 0 })) + 1;
const outputPath = path.join(screenshotDir, `screenshot-${idx}-${label}.png`);

const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox", "--disable-setuid-sandbox"] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: "networkidle0" });
await page.evaluate(y => window.scrollTo(0, parseInt(y, 10)), scrollY);
await new Promise(r => setTimeout(r, 400));
await page.screenshot({ path: outputPath, fullPage: false });
await browser.close();
console.log(`Screenshot saved: ${outputPath}`);
