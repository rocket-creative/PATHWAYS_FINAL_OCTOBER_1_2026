import { LOCATIONS, SITE } from "@/lib/site";
import { Photo } from "@/components/ui/Photo";

export function LocationsBlock({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`grid gap-5 ${compact ? "sm:grid-cols-2 lg:grid-cols-5" : "md:grid-cols-2"}`}>
      {LOCATIONS.map((l, i) => (
        <article
          key={l.slug}
          id={l.slug}
          className="glass glass--strong grid scroll-mt-28 gap-4 p-5"
          data-reveal
          style={{ borderRadius: "var(--r-md)", marginTop: compact ? undefined : i % 2 ? 0 : 0 }}
        >
          {!compact && l.photo && (
            <Photo asset={l.photo} alt={`${l.name} office`} shape="circle" className="ring mx-auto w-[150px]" sizes="150px" />
          )}
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
          {!compact && l.status && <p className="text-[0.92rem] text-brand-ink">{l.status}</p>}
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
          If stairs are a barrier, the Welcome Team can schedule you at Rockville Centre, Smithtown, or Port Jefferson, or by telehealth. Call{" "}
          <a href={SITE.phoneHref}>{SITE.phone}</a>.
        </p>
      )}
    </div>
  );
}
