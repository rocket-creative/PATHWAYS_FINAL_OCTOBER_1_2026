// Proves every placeable line in content/source/bios-2026-10-26.txt
// was copied into the provider records or the hard-coded profile pages.
// Format labels, NAME headers, and section markers are not placed.
// Usage: node scripts/verify-bios.mjs
import { readFile } from "node:fs/promises";

const norm = (s) =>
  s
    .replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&nbsp;/g, " ")
    .replace(/[\u2018\u2019]/g, "'").replace(/[\u201c\u201d]/g, '"').replace(/[\u2013\u2014]/g, "-").replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ").replace(/ ([.,;:!?])/g, "$1").replace(/^[✔✓]\s*/u, "").replace(/\s*[→⇢➔]\s*$/u, "").trim().toLowerCase();

const skip = (line) => {
  const t = line.trim();
  if (!t) return true;
  if (t.startsWith("(NOTE")) return true;
  if (t.startsWith("NAME:")) return true;
  if (t === "PARAGRAPHS" || t === "BULLETS") return true;
  return false;
};

function collect(value, out) {
  if (typeof value === "string") out.push(value);
  else if (Array.isArray(value)) for (const item of value) collect(item, out);
  else if (value && typeof value === "object") for (const item of Object.values(value)) collect(item, out);
}

const src = await readFile("content/source/bios-2026-10-26.txt", "utf8");
const lines = src.split("\n").filter((l) => !skip(l));
const peopleStrings = [];
collect(JSON.parse(await readFile("content/people.json", "utf8")), peopleStrings);
const pages = await Promise.all(
  ["content/pages/wellness.ts", "content/pages/specialized.ts"].map((f) => readFile(f, "utf8")),
);
const haystack = norm([...peopleStrings, ...pages].join("\n"));

const missing = lines.filter((l) => !haystack.includes(norm(l)));
console.log(`placed ${lines.length - missing.length}/${lines.length}`);
if (missing.length) {
  for (const m of missing) console.log(`- ${m}`);
  process.exit(1);
}
