// Checks every internal link in the export resolves, and lists pages nothing links to.
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";

async function walk(dir) {
  const out = [];
  for (const f of await readdir(dir)) {
    const p = path.join(dir, f);
    if ((await stat(p)).isDirectory()) out.push(...(await walk(p)));
    else if (p.endsWith(".html")) out.push(p);
  }
  return out;
}

const files = (await walk("out")).filter((f) => !f.includes("_not-found") && !f.endsWith("404.html"));
const pages = new Map();
for (const f of files) {
  const url = "/" + path.relative("out", f).replace(/index\.html$/, "").replace(/\.html$/, "").replace(/\/$/, "");
  pages.set(url || "/", await readFile(f, "utf8"));
}
const ids = new Map();
for (const [url, html] of pages) ids.set(url, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));

const broken = [];
const inbound = new Map([...pages.keys()].map((u) => [u, 0]));
for (const [url, html] of pages) {
  for (const m of html.matchAll(/href="([^"]+)"/g)) {
    const href = m[1].replace(/&amp;/g, "&");
    if (!href.startsWith("/") || href.startsWith("//") || href.startsWith("/_next") || href.startsWith("/favicon") || href.startsWith("/img") || href.startsWith("/fonts")) continue;
    const [p, hash] = href.split("#");
    const target = p === "" ? url : p.replace(/\/$/, "") || "/";
    if (!pages.has(target)) {
      broken.push(`${url} -> ${href}`);
      continue;
    }
    if (hash && !ids.get(target).has(hash)) broken.push(`${url} -> ${href} (missing #${hash})`);
    if (target !== url) inbound.set(target, inbound.get(target) + 1);
  }
}
console.log("pages:", pages.size);
console.log("broken:", broken.length);
for (const b of [...new Set(broken)]) console.log("  ", b);
const orphans = [...inbound].filter(([, n]) => n === 0).map(([u]) => u);
console.log("orphans (no inbound links):", orphans.length, orphans);
process.exit(broken.length ? 1 : 0);
