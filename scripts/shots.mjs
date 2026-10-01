// Screenshots pages from the static export for review. Usage: node scripts/shots.mjs /about /services
import { chromium } from "@playwright/test";
import { startServer } from "./static-server.mjs";
import { mkdir } from "node:fs/promises";

const urls = process.argv.slice(2).length ? process.argv.slice(2) : ["/"];
const server = await startServer("out", 4173);
await mkdir("shots", { recursive: true });
const browser = await chromium.launch({ executablePath: process.env.CHROME ?? "/opt/pw-browsers/chromium" });
try {
  for (const [name, vp] of Object.entries({ desktop: { width: 1440, height: 900 }, phone: { width: 390, height: 844 } })) {
    const page = await browser.newPage({ viewport: vp, deviceScaleFactor: 1, reducedMotion: "reduce" });
    for (const url of urls) {
      await page.goto(`http://localhost:4173${url === "/" ? "/" : url}`, { waitUntil: "networkidle" });
      await page.waitForTimeout(600); console.log(url, await page.title(), page.url());
      // Force every reveal visible for the full-page shot.
      await page.evaluate(() => document.querySelectorAll("img[loading=lazy]").forEach((i) => (i.loading = "eager"))); await page.waitForTimeout(1200); await page.evaluate(() => document.querySelectorAll("[data-reveal]").forEach((e) => ((e.style.opacity = "1"), (e.style.transform = "none"))));
      const slug = url === "/" ? "home" : url.replace(/\//g, "_").replace(/^_/, "");
      await page.screenshot({ path: `shots/${slug}-${name}.png`, fullPage: true });
      console.log("shot", slug, name);
    }
    await page.close();
  }
} finally {
  await browser.close();
  server.kill();
}
