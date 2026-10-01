import { chromium } from "@playwright/test";
import { startServer } from "./static-server.mjs";
const server = await startServer("out", 4174);
const b = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
for (const js of [false, true]) {
  const p = await b.newPage({ viewport: { width: 1440, height: 900 }, javaScriptEnabled: js });
  const res = await p.goto("http://localhost:4174/about.html", { waitUntil: "load" });
  console.log("js", js, res.status(), p.url(), await p.title(), (await p.content()).includes("Who We Are"));
  await p.close();
}
await b.close(); server.kill();
