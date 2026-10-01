import Link from "next/link";
import type { Block } from "@/content/types";
import { Headshot, Photo } from "@/components/ui/Photo";
import { LocationsBlock } from "@/components/blocks/LocationsBlock";
import { PeopleBlock } from "@/components/blocks/PeopleBlock";
import Quiz from "@/components/blocks/Quiz";
import ContactForms from "@/components/blocks/ContactForms";

/** Minimal inline markdown: `[label](/href)` and `**bold**`. Nothing else. */
export function Inline({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
        if (link) {
          const href = link[2];
          return href.startsWith("/") ? (
            <Link key={i} href={href}>
              {link[1]}
            </Link>
          ) : (
            <a key={i} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener">
              {link[1]}
            </a>
          );
        }
        const bold = /^\*\*([^*]+)\*\*$/.exec(part);
        if (bold) return <strong key={i}>{bold[1]}</strong>;
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

export function Arrow() {
  return (
    <svg className="btn__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 8h9M8.5 3.5 13 8l-4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Cta({ label: rawLabel, href, secondary }: { label: string; href: string; secondary?: boolean }) {
  const label = rawLabel.replace(/\s*[→⇢➔]\s*$/u, "");
  const cls = `btn ${secondary ? "btn--ghost" : "btn--primary"}`;
  if (href.startsWith("/"))
    return (
      <Link href={href} className={cls}>
        {label} <Arrow />
      </Link>
    );
  return (
    <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener">
      {label} <Arrow />
    </a>
  );
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => (
        <BlockView key={i} block={b} />
      ))}
    </>
  );
}

function BlockView({ block: b }: { block: Block }) {
  switch (b.kind) {
    case "eyebrow":
      return (
        <p className="eyebrow" data-reveal>
          {b.text}
        </p>
      );
    case "h2":
      return (
        <h2 data-reveal id={slugify(b.text)}>
          {b.text}
        </h2>
      );
    case "h3":
      return <h3 data-reveal>{b.text}</h3>;
    case "p":
      return (
        <p className={b.lead ? "lead" : undefined} data-reveal>
          <Inline text={b.text} />
        </p>
      );
    case "quote":
      return (
        <blockquote className="my-2 border-l-0 pl-0" data-reveal>
          <p className="text-[1.35rem] leading-snug text-brand-ink" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
            {b.text}
          </p>
          {b.cite && <footer className="mt-2 text-ink-soft">{b.cite}</footer>}
        </blockquote>
      );
    case "list": {
      const style = b.style ?? "check";
      if (style === "pills")
        return (
          <ul className="pill-list" data-reveal>
            {b.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        );
      if (style === "numbered")
        return (
          <ol className="grid list-decimal gap-2 pl-6" data-reveal>
            {b.items.map((it) => (
              <li key={it}>
                <Inline text={it} />
              </li>
            ))}
          </ol>
        );
      if (style === "bullet")
        return (
          <ul className="grid list-disc gap-2 pl-6" data-reveal>
            {b.items.map((it) => (
              <li key={it}>
                <Inline text={it} />
              </li>
            ))}
          </ul>
        );
      return (
        <ul className="check-list" data-reveal>
          {b.items.map((it) => (
            <li key={it}>
              <Inline text={it} />
            </li>
          ))}
        </ul>
      );
    }
    case "cta":
      return (
        <p className="pt-2" data-reveal>
          <Cta label={b.label} href={b.href} secondary={b.secondary} />
        </p>
      );
    case "note":
      return (
        <p className="rounded-[var(--r-md)] bg-brand-soft px-5 py-3 text-[0.95rem] text-brand-ink" data-reveal>
          <Inline text={b.text} />
        </p>
      );
    case "faq":
      return (
        <div className="grid gap-6">
          {b.intro && (
            <p className="lead" data-reveal>
              {b.intro}
            </p>
          )}
          <div className="faq">
            {b.items.map((it) => (
              <div key={it.q} className="faq__item" data-reveal>
                <h3>{it.q}</h3>
                {it.a.map((p, i) => (
                  <p key={i}>
                    <Inline text={p} />
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      );
    case "person":
      return (
        <div className="grid items-start gap-6 sm:grid-cols-[200px_1fr]" data-reveal>
          <div className="orbit mx-auto w-[180px] sm:mx-0 sm:mt-2">
            <Headshot slug={b.slug} name={b.name} size={180} />
          </div>
          <div className="grid gap-3">
            {b.eyebrow && <p className="eyebrow">{b.eyebrow}</p>}
            <h3 className="!text-[1.7rem]">{b.name}</h3>
            {b.credentials && <p className="-mt-2 text-ink-soft">{b.credentials}</p>}
            {b.paragraphs.map((p, i) => (
              <p key={i}>
                <Inline text={p} />
              </p>
            ))}
            {b.cta && (
              <p className="pt-1">
                <Cta label={b.cta.label} href={b.cta.href} />
              </p>
            )}
          </div>
        </div>
      );
    case "photo":
      return <Photo asset={b.asset} alt={b.alt} shape={b.shape ?? "round"} className="mx-auto w-full max-w-[520px]" float={30} />;
    case "steps":
      return (
        <ol className="grid gap-4 pl-0" data-reveal-group>
          {b.items.map((s, i) => (
            <li key={s.title} className="grid grid-cols-[56px_1fr] items-start gap-4" data-reveal>
              <span className="circle flex items-center justify-center bg-brand-deep text-[1.1rem] font-bold text-white" style={{ width: 56, height: 56, fontFamily: "var(--font-display)" }}>
                {i + 1}
              </span>
              <div>
                <h3 className="!text-[1.2rem]">{s.title}</h3>
                <p className="mt-1">
                  <Inline text={s.text} />
                </p>
              </div>
            </li>
          ))}
        </ol>
      );
    case "tiles":
      return (
        <div className="grid gap-3 sm:grid-cols-2">
          {b.items.map((t) => (
            <Link key={t.href} href={t.href} className="tile" data-reveal>
              <span className="circle bg-brand-soft" style={{ width: 76, height: 76 }}>
                {t.asset ? <img src={`/img/photos/${t.asset}-640.webp`} alt="" width={76} height={76} loading="lazy" className="h-full w-full object-cover" /> : <LabyrinthGlyph />}
              </span>
              <span>
                <span className="tile__title block">{t.title}</span>
                {t.text && <span className="tile__text block">{t.text}</span>}
              </span>
            </Link>
          ))}
        </div>
      );
    case "embed":
      return (
        <div className="overflow-hidden rounded-[var(--r-md)] bg-white" data-reveal>
          <iframe src={b.src} title={b.title} loading="lazy" style={{ width: "100%", height: b.height ?? 1400, border: 0 }} />
        </div>
      );
    case "locations":
      return <LocationsBlock />;
    case "people":
      return <PeopleBlock group={b.group} />;
    case "quiz":
      return <Quiz />;
    case "contactForms":
      return <ContactForms />;
    case "html":
      return <div dangerouslySetInnerHTML={{ __html: b.html }} />;
  }
}

export function LabyrinthGlyph({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true" className="m-auto block" style={{ marginTop: (76 - size) / 2 }}>
      <g fill="none" stroke="var(--brand-deep)" strokeWidth="1.6" strokeLinecap="round">
        <circle cx="20" cy="20" r="17" />
        <path d="M20 7a13 13 0 1 1-13 13" />
        <path d="M20 12a8 8 0 1 0 8 8" />
        <circle cx="20" cy="20" r="2.5" fill="var(--brand)" stroke="none" />
      </g>
    </svg>
  );
}

export function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
