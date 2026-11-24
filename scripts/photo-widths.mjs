// Lists photos that were exported without every width (sources smaller than 2000px
// skip the larger sizes), so <Photo> only points srcset/src at files that exist.
import { readdirSync, writeFileSync } from "node:fs";

const FULL = [640, 1200, 2000];
const found = {};
for (const f of readdirSync("public/img/photos")) {
  const m = f.match(/^(.+)-(\d+)\.webp$/);
  if (!m) continue;
  (found[m[1]] ??= []).push(Number(m[2]));
}
const partial = {};
for (const [asset, widths] of Object.entries(found).sort()) {
  const ws = FULL.filter((w) => widths.includes(w));
  if (ws.length !== FULL.length) partial[asset] = ws;
}
writeFileSync("lib/photo-widths.json", JSON.stringify(partial, null, 2) + "\n");
console.log(`photo-widths: ${Object.keys(partial).length} photos with partial widths`);
