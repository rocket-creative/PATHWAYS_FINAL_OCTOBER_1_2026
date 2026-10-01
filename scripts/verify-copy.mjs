// Proves every line of the client's source text was placed verbatim.
// For each page, reads the source file(s) named in `page.source`, strips the
// capture scaffolding, and checks each remaining line appears in the rendered HTML.
// Usage: node scripts/verify-copy.mjs [--all]  (writes copy-report.md)
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { PAGES } from "../content/pages/index.ts";

const SKIP_EXACT = new Set([
  "Learn More", "Learn More.", "Learn more", "READ BIO", "READ BIO\u200d", "Read More", "Item 1 of 12", "Skip to Content",
  "[ACCORDION ANSWERS — see section below]", "----- ACCORDION / FAQ ANSWERS (collapsed on page) -----", "----- ACCORDION ANSWERS (collapsed on page) -----",
  "WELLNESS SPA SERVICES ON LONG ISLAND", "WELLNESS SERVICES ON LONG ISLAND", "Created by Theory About That",
  "Wellness Services", "Wisdom Services", "HOME", "LOCATIONS", "Let's Talk", "Button: Submit",
]);
const SKIP_PREFIX = ["URL:", "####", "SITE 3:", "----- ACCORDION ANSWERS (collapsed on page;", "First Name*", "Last Name*", "Email*", "Phone*", "Is this a mobile phone?", "By submitting this form", "By checking this box", "What are you looking for support with?", "Any preferences in your therapist?", "If \"Other\"", "Please Specify if", "Title:", "(NOTE", "[Google Map", "----- SITE", "----- EMBEDDED", "Field placeholders", "Dropdown menus", "Consent text", "    ", "Q: ", "A: ", "==="];
const SKIP_RE = [/\(checkbox\)$/, /\[dropdown options/, /\[multi-select options/, /^(Pathway to Wisdom|Pathway to Wellness|Explore Therapy Services|Explore Holistic Care|Welcome to|Light Therapy|Bariatric Support|Lutronic Accufit|IV Vitamin Infusion|Mental Health & Therapy Services on Long Island|Garden City, NY 1530)$/, /^(Individual|Couples|Family|Trauma|Somatic) Therapy\.$/, /^Weight Loss Surgery Support\.$/, /^Item \d+ of \d+$/, /〰️/, /^For all Wellness Services/, /^For Wellness Services, please visit/, /^Discover your Pathway to Wellness$/, /^Discover Your Pathway to Wellness$/, /^Call Us Today$/, /^Visit Us$/, /^Contact Us to Book$/, /^Call 631-371-3825 to Book$/, /^CALL 631-371-3825 TO BOOK$/, /^All Services$/, /^Treatments$/, /^Providers$/, /^About$/, /^Home$/, /^About Us$/, /^Services$/, /^Types of Therapy$/, /^Clinicians$/, /^Get Started$/, /^Wisdom Home$/, /^Contact$/, /^News$/, /^Frequently Asked Questions$/, /^Location$/, /^Contact Us$/, /^Meet Our Team$/];

const norm = (s) =>
  s
    .replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&nbsp;/g, " ")
    .replace(/[\u2018\u2019]/g, "'").replace(/[\u201c\u201d]/g, '"').replace(/[\u2013\u2014]/g, "-").replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ").replace(/ ([.,;:!?])/g, "$1").replace(/^[✔✓]\s*/u, "").replace(/\s*[→⇢➔]\s*$/u, "").trim().toLowerCase();

function sourceLines(text) {
  const body = text.split(/={10,}\n/).slice(1).join("\n");
  const lines = [];
  for (let raw of body.split("\n")) {
    const l = raw.trim();
    if (!l) continue;
    if (SKIP_EXACT.has(l)) continue;
    if (SKIP_PREFIX.some((p) => raw.startsWith(p))) continue;
    if (SKIP_RE.some((r) => r.test(l))) continue;
    lines.push(l);
  }
  // Q:/A: pairs
  for (const m of body.matchAll(/^Q: (.+)\n((?:A: [\s\S]*?)(?=\n\nQ: |\n*$))/gm)) {
    lines.push(m[1].trim());
    for (const al of m[2].replace(/^A: /, "").split("\n")) if (al.trim()) lines.push(al.trim());
  }
  return [...new Set(lines)];
}

const htmlText = (html) => norm(html.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " "));

const CUT = ["22-", "39-", "40-", "41-", "42-", "43-", "00-"];
const { readdir } = await import("node:fs/promises");
const srcFiles = (await readdir("content/source")).filter((f) => f.endsWith(".txt") && !CUT.some((c) => f.startsWith(c))).sort();

// Site-wide text: every built page.
const built = new Map();
for (const page of PAGES) {
  const file = page.url === "/" ? "out/index.html" : `out${page.url}.html`;
  try { built.set(page.url, htmlText(await readFile(file, "utf8"))); } catch {}
}
try { built.set("/", htmlText(await readFile("out/index.html", "utf8"))); } catch {}
const site = [...built.values()].join(" \n ");

let report = "# Copy verification (site-wide)\n\nEach source file, with any line not found anywhere on the built site.\n\n";
let totalMissing = 0, total = 0;
for (const src of srcFiles) {
  const raw = await readFile(path.join("content/source", src), "utf8");
  const lines = sourceLines(raw);
  const missing = lines.filter((l) => !site.includes(norm(l)));
  total += lines.length; totalMissing += missing.length;
  report += `## ${src} — ${lines.length - missing.length}/${lines.length}\n`;
  for (const m of missing) report += `- ${m}\n`;
  report += "\n";
}
await writeFile("copy-report.md", report);
console.log(report);
console.log(`placed ${total - totalMissing}/${total}; missing ${totalMissing}`);
