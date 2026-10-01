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

async function folder(name, widths, square = false) {
  const srcDir = path.join(MASTERS, "images", name);
  const out = path.join(OUT, name);
  await ensure(out);
  for (const file of await readdir(srcDir)) {
    if (!file.endsWith(".webp")) continue;
    const slug = file.replace(/-\d+\.webp$/, "");
    const src = path.join(srcDir, file);
    const meta = await sharp(src).metadata();
    for (const w of widths) {
      if (w > meta.width && w !== widths[0]) continue;
      let pipe = sharp(src);
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
