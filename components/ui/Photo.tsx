import type { CSSProperties } from "react";

const PHOTO_WIDTHS = [640, 1200, 2000];
const HEADSHOT_WIDTHS = [320, 640];

export function photoSrc(asset: string, w = 1200) {
  return `/img/photos/${asset}-${w}.webp`;
}

/** Ambient and office photography. `shape` applies the organic frame. */
export function Photo({
  asset,
  alt,
  shape,
  className = "",
  sizes = "(max-width: 760px) 90vw, 40vw",
  style,
  float,
  priority,
}: {
  asset: string;
  alt: string;
  shape?: "circle" | "blob" | "arch" | "round";
  className?: string;
  sizes?: string;
  style?: CSSProperties;
  float?: number;
  priority?: boolean;
}) {
  const frame = shape === "round" ? "overflow-hidden rounded-[var(--r-lg)]" : shape ? shape : "";
  return (
    <figure className={`${frame} ${className} m-0`} style={style} data-float={float ?? undefined}>
      <img
        src={photoSrc(asset, 1200)}
        srcSet={PHOTO_WIDTHS.map((w) => `${photoSrc(asset, w)} ${w}w`).join(", ")}
        sizes={sizes}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        width={1200}
        height={shape === "arch" ? 1500 : shape ? 1200 : 800}
        className="h-full w-full object-cover"
      />
    </figure>
  );
}

export function Headshot({
  slug,
  name,
  size = 160,
  className = "",
  ring = true,
  noPhoto = false,
}: {
  slug: string;
  name: string;
  size?: number;
  className?: string;
  ring?: boolean;
  noPhoto?: boolean;
}) {
  if (noPhoto) {
    const initials = name
      .split(/\s+/)
      .filter((w) => /^[A-Za-z]/.test(w))
      .slice(0, 2)
      .map((w) => w[0].toUpperCase())
      .join("");
    return (
      <span
        className={`circle ${ring ? "ring" : ""} flex shrink-0 items-center justify-center bg-brand-soft font-bold text-brand-deep ${className}`}
        style={{ width: size, maxWidth: "100%", aspectRatio: "1 / 1", fontSize: size * 0.34, fontFamily: "var(--font-display)" }}
        role="img"
        aria-label={`${name}, photo coming soon`}
      >
        {initials}
      </span>
    );
  }
  return (
    <span className={`circle ${ring ? "ring" : ""} block shrink-0 bg-white ${className}`} style={{ width: size, maxWidth: "100%", aspectRatio: "1 / 1" }}>
      <img
        src={`/img/providers/${slug}-320.webp`}
        srcSet={HEADSHOT_WIDTHS.map((w) => `/img/providers/${slug}-${w}.webp ${w}w`).join(", ")}
        sizes={`${size}px`}
        alt={`Portrait of ${name}`}
        width={size}
        height={size}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover"
      />
    </span>
  );
}
