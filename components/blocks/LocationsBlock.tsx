import { LOCATIONS, SITE } from "@/lib/site";
import { Photo } from "@/components/ui/Photo";
import { LocationPhotos } from "./LocationPhotos";

/** Each location shown once: name, address, accessibility, map link. No history or transition notes. */
export function LocationsBlock({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`grid gap-5 ${compact ? "sm:grid-cols-2 lg:grid-cols-5" : "md:grid-cols-2"}`}>
      {LOCATIONS.map((l) => (
        <article key={l.slug} id={l.slug} className="glass glass--strong grid scroll-mt-28 gap-4 p-5" data-reveal style={{ borderRadius: "var(--r-md)" }}>
          {!compact && l.photos && l.photos.length > 1 ? (
            <LocationPhotos name={l.name} assets={l.photos} />
          ) : !compact && l.photo ? (
            <Photo asset={l.photo} alt={`${l.name} office`} shape="circle" className="ring mx-auto w-[150px]" sizes="150px" />
          ) : null}
          <div>
            <h3 className="!text-[1.25rem]">{l.name}</h3>
            <p className="mt-1 leading-snug">
              {l.line1}
              <br />
              {l.line2}
            </p>
          </div>
          <p className="flex items-start gap-2 text-[0.92rem] text-ink-soft">
            <span
              aria-hidden="true"
              className="circle mt-[3px] inline-flex shrink-0 items-center justify-center text-[0.7rem] font-bold text-white"
              style={{ width: 20, height: 20, background: l.accessible ? "var(--brand)" : "#8a94a3" }}
            >
              {l.accessible ? "♿" : "–"}
            </span>
            <span>{l.accessibility}</span>
          </p>
          <a
            className="text-[0.92rem] font-bold"
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${l.line1}, ${l.line2}`)}`}
            target="_blank"
            rel="noopener"
          >
            Open in Maps →
          </a>
        </article>
      ))}
      {!compact && (
        <p className="md:col-span-2 text-ink-soft" data-reveal>
          If stairs are a barrier, contact our Welcome Team at <a href={SITE.phoneHref}>{SITE.phone}</a>. We can help you explore appointments at an accessible location or virtual care when available.
        </p>
      )}
    </div>
  );
}
