import Link from "next/link";
import Image from "next/image";
import { FOOTER_COLUMNS, LOCATIONS, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__panel wrap wrap--wide px-6 py-12 md:px-14 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-4">
              <span className="circle" style={{ width: 144, height: 144 }}>
                <Image src="/img/logo.webp" alt="Pathways Within labyrinth logo" width={144} height={144} />
              </span>
              <div style={{ fontFamily: "var(--font-display)" }}>
                <div className="text-xl font-bold">Pathways Within</div>
                <div className="text-[0.7rem] uppercase tracking-[0.18em] text-ink-soft">Wisdom &amp; Wellness Collaborative</div>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-[1.35rem] leading-tight font-bold text-brand-ink" style={{ fontFamily: "var(--font-display)" }}>
              {SITE.footerTagline[0]}
              <br />
              {SITE.footerTagline[1]}
            </p>
            <div className="mt-6 grid gap-1 text-[1.05rem]">
              <a href={SITE.phoneHref}>{SITE.phone}</a>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </div>
            <div className="mt-8">
              <div className="mb-3 text-[0.72rem] font-bold tracking-[0.18em] uppercase text-brand">Locations</div>
              <ul className="grid gap-3">
                {LOCATIONS.map((l) => (
                  <li key={l.slug} className="text-[0.95rem] leading-snug whitespace-nowrap">
                    <Link href={`/locations#${l.slug}`} className="block">
                      {l.line1}
                      <br />
                      {l.line2}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <div className="mb-3 text-[0.72rem] font-bold tracking-[0.18em] uppercase text-brand">{col.title}</div>
              <ul className="grid gap-1.5 text-[0.95rem]">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-[rgb(13_42_92_/_0.12)] pt-6 text-[0.85rem] text-ink-soft">
          <span>© {new Date().getFullYear()} {SITE.legalName}</span>
          <span className="flex gap-4">
            <Link href="/contact">Contact</Link>
            <a href={SITE.careersUrl} target="_blank" rel="noopener">
              Careers
            </a>
            <a href={SITE.substack} target="_blank" rel="noopener">
              The Wisdom of Wellness on Substack
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
