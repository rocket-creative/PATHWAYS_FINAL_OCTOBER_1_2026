"use client";

import { useEffect, useState } from "react";

/** Rotating office photos for a location card. Cross-fades every few seconds; the first frame renders without JavaScript. */
export function LocationPhotos({ name, assets }: { name: string; assets: string[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (assets.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => setI((n) => (n + 1) % assets.length), 4200);
    return () => window.clearInterval(t);
  }, [assets.length]);
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[var(--r-md)] bg-brand-soft" aria-label={`${name} office photos`}>
      {assets.map((a, n) => (
        <img
          key={a}
          src={`/img/photos/${a}-640.webp`}
          srcSet={`/img/photos/${a}-640.webp 640w, /img/photos/${a}-1200.webp 1200w`}
          sizes="(max-width: 760px) 90vw, 40vw"
          alt={n === 0 ? `${name} office` : ""}
          loading={n === 0 ? "eager" : "lazy"}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
          style={{ opacity: n === i ? 1 : 0 }}
        />
      ))}
    </div>
  );
}
