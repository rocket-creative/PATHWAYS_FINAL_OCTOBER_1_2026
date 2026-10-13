// Builds every responsive image the site uses from the masters in /masters.
// Backdrop: capped at 5000px wide so Safari on older Macs still decodes it.
import sharp from "sharp";
import { mkdir, readdir, stat } from "node:fs/promises";
import path from "node:path";

sharp.cache(false);
const MASTERS = process.env.MASTERS ?? "/home/claude/pw-assets";
const OUT = path.resolve("public/img");

const BACKDROP_WIDTHS = [960, 1440, 1920, 2560, 3840, 5000];
const PHOTO_WIDTHS = [640, 1200, 2000];
const HEADSHOT_WIDTHS = [320, 640];

async function ensure(dir) {
  await mkdir(dir, { recursive: true });
}

async function backdrop() {
  const src = path.join(MASTERS, "branch-16368.webp");
  const out = path.join(OUT, "backdrop");
  await ensure(out);
  const base = sharp(src, { limitInputPixels: false });
  const meta = await base.metadata();
  for (const w of BACKDROP_WIDTHS) {
    const h = Math.round((meta.height / meta.width) * w);
    await sharp(src, { limitInputPixels: false })
      .resize(w, h, { kernel: "lanczos3" })
      .webp({ quality: w >= 3840 ? 72 : 78, effort: 5 })
      .toFile(path.join(out, `branch-${w}.webp`));
    await sharp(src, { limitInputPixels: false })
      .resize(w, h, { kernel: "lanczos3" })
      .avif({ quality: w >= 3840 ? 48 : 54, effort: 4 })
      .toFile(path.join(out, `branch-${w}.avif`));
    console.log("backdrop", w, h);
  }
  // Tiny blurred placeholder for the first paint.
  await sharp(src, { limitInputPixels: false })
    .resize(48)
    .blur(1)
    .webp({ quality: 40 })
    .toFile(path.join(out, "branch-lqip.webp"));
}

async function logo() {
  await ensure(OUT);
  await sharp(path.join(MASTERS, "logo.webp")).resize(640).webp({ quality: 90 }).toFile(path.join(OUT, "logo.webp"));
  await sharp(path.join(MASTERS, "logo.webp")).resize(192).png().toFile(path.join(OUT, "logo-192.png"));
}

/**
 * April 2026 sweep portraits. The frame includes the blue walls, stands, and
 * floor around the white paper. These squares sit on the paper only, with
 * white left above the highest head. Fractions of the source frame.
 */
const SWEEP_CROPS = {
  "ha-ap26-camp-five": { x: 0.214, y: 0.003, s: 0.5575 },
  "ha-ap26-camp-pair": { x: 0.299, y: 0.09, s: 0.4995 },
  "ha-ap26-camp-three": { x: 0.2645, y: 0.1778, s: 0.441 },
  "ha-ap26-camp-tiffany": { x: 0.1815, y: 0.0758, s: 0.509 },
  "ha-ap26-rachel-family": { x: 0.2795, y: 0.036, s: 0.5355 },
  "ha-ap26-rachel-solo": { x: 0.306, y: 0.1253, s: 0.476 },
  "ha-ap26-woman-smile": { x: 0.272, y: 0.2041, s: 0.4235 },
};

function sweepExtract(meta, slug) {
  const crop = SWEEP_CROPS[slug];
  if (!crop) return null;
  const side = Math.max(1, Math.round(crop.s * meta.width));
  const width = Math.min(side, meta.width);
  const height = Math.min(side, meta.height);
  const left = Math.max(0, Math.min(Math.round(crop.x * meta.width), meta.width - width));
  const top = Math.max(0, Math.min(Math.round(crop.y * meta.height), meta.height - height));
  return { left, top, width, height };
}

async function folder(name, widths, square = false) {
  const srcDir = path.join(MASTERS, "images", name);
  const out = path.join(OUT, name);
  await ensure(out);
  for (const file of await readdir(srcDir)) {
    if (!file.endsWith(".webp")) continue;
    const slug = file.replace(/-\d+\.webp$/, "");
    const src = path.join(srcDir, file);
    const meta = await sharp(src).metadata();
    const extract = name === "photos" ? sweepExtract(meta, slug) : null;
    for (const w of widths) {
      if (w > meta.width && w !== widths[0]) continue;
      let pipe = sharp(src);
      if (extract) pipe = pipe.extract(extract);
      pipe = square ? pipe.resize(w, w, { fit: "cover", position: "attention" }) : pipe.resize({ width: Math.min(w, meta.width) });
      await pipe.webp({ quality: 80 }).toFile(path.join(out, `${slug}-${w}.webp`));
    }
  }
  console.log(name, "done");
}

await logo();
await backdrop();
await folder("providers", HEADSHOT_WIDTHS, true);
await folder("photos", PHOTO_WIDTHS);
