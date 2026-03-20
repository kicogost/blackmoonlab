import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const screenshotDir = path.join(__dirname, "temporary screenshots");

// Ensure screenshot directory exists
if (!fs.existsSync(screenshotDir)) {
  fs.mkdirSync(screenshotDir, { recursive: true });
}

// Get next available screenshot number
function getNextIndex(label) {
  const files = fs.existsSync(screenshotDir) ? fs.readdirSync(screenshotDir) : [];
  const pattern = label
    ? new RegExp(`^screenshot-(\\d+)-${label}\\.png$`)
    : /^screenshot-(\d+)\.png$/;
  const indices = files
    .map((f) => {
      const m = f.match(pattern);
      return m ? parseInt(m[1], 10) : null;
    })
    .filter((n) => n !== null);
  return indices.length > 0 ? Math.max(...indices) + 1 : 1;
}

const url = process.argv[2] || "http://localhost:3000";
const label = process.argv[3] || "";

const index = getNextIndex(label);
const filename = label
  ? `screenshot-${index}-${label}.png`
  : `screenshot-${index}.png`;
const outputPath = path.join(screenshotDir, filename);

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: "networkidle0" });
await page.screenshot({ path: outputPath, fullPage: true });

await browser.close();

console.log(`Screenshot saved: ${outputPath}`);
