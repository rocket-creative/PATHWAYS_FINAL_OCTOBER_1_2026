// Records a scroll-through of a page with motion enabled. Usage: node scripts/record.mjs /
import { chromium } from "@playwright/test";
import { startServer } from "./static-server.mjs";
import { mkdir, readdir, rename } from "node:fs/promises";

const url = process.argv[2] ?? "/";
const server = await startServer("out", 4177);
await mkdir("shots/video", { recursive: true });
const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, recordVideo: { dir: "shots/video", size: { width: 1440, height: 900 } } });
const page = await ctx.newPage();
await page.goto(`http://localhost:4177${url}`, { waitUntil: "networkidle" });
await page.waitForTimeout(2500);
const total = await page.evaluate(() => document.documentElement.scrollHeight);
let y = 0;
while (y < total - 900) {
  y += 18;
  await page.mouse.wheel(0, 18);
  await page.waitForTimeout(16);
}
await page.waitForTimeout(2000);
await ctx.close();
await browser.close();
server.close();
const [file] = (await readdir("shots/video")).filter((f) => f.endsWith(".webm"));
const name = `shots/video/${url === "/" ? "home" : url.replace(/\//g, "_").slice(1)}.webm`;
await rename(`shots/video/${file}`, name);
console.log(name);
