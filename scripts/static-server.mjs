// Minimal static server for the export: /about -> out/about.html, like Vercel's cleanUrls.
import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";

const TYPES = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".webp": "image/webp", ".avif": "image/avif", ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".woff2": "font/woff2", ".txt": "text/plain", ".json": "application/json", ".ico": "image/x-icon", ".xml": "application/xml" };

export function startServer(dir = "out", port = 4173) {
  const root = path.resolve(dir);
  const server = http.createServer(async (req, res) => {
    let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
    if (p.endsWith("/")) p += "index.html";
    const candidates = [p, p + ".html", p + "/index.html"];
    for (const c of candidates) {
      const file = path.join(root, c);
      try {
        const s = await stat(file);
        if (s.isFile()) {
          res.writeHead(200, { "content-type": TYPES[path.extname(file)] ?? "application/octet-stream" });
          res.end(await readFile(file));
          return;
        }
      } catch {}
    }
    res.writeHead(404, { "content-type": "text/html" });
    res.end(await readFile(path.join(root, "404.html")).catch(() => "not found"));
  });
  return new Promise((resolve) => server.listen(port, () => resolve(server)));
}

if (import.meta.url === `file://${process.argv[1]}`) {
  await startServer(process.argv[2] ?? "out", Number(process.argv[3] ?? 4173));
  console.log("serving on", process.argv[3] ?? 4173);
}
