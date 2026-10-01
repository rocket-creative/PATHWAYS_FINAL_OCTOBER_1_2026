"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { NAV, SITE } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [drawer, setDrawer] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setOpen(null);
    setDrawer(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setDrawer(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawer ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawer]);

  return (
    <header className="site-header">
      <div className="wrap wrap--wide relative flex h-full items-center justify-between gap-4">
        <Link href="/" className="no-underline" aria-label="Pathways Within home" style={{ fontFamily: "var(--font-display)" }}>
          <span className="flex flex-col leading-tight text-brand-ink">
            <span className="text-[1.1rem] font-bold">Pathways Within</span>
            <span className="hidden text-[0.62rem] tracking-[0.18em] uppercase opacity-70 sm:block">Wisdom &amp; Wellness Collaborative</span>
          </span>
        </Link>

        <nav ref={navRef} aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV.map((group) => {
            const hasMenu = Boolean(group.columns || group.links);
            if (!hasMenu) {
              return (
                <Link key={group.href} href={group.href} className="nav-link">
                  {group.label}
                </Link>
              );
            }
            const isOpen = open === group.label;
            return (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => setOpen(group.label)}
                onMouseLeave={() => setOpen((o) => (o === group.label ? null : o))}
              >
                <button
                  type="button"
                  className="nav-link flex items-center gap-1"
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  onClick={() => setOpen(isOpen ? null : group.label)}
                >
                  {group.label}
                  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                    <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="mega" style={group.columns ? { gridTemplateColumns: `repeat(${group.columns.length}, minmax(190px, 1fr))`, width: "max-content" } : undefined}>
                    {group.columns?.map((col) => (
                      <div key={col.title}>
                        <div className="mega__title">{col.title}</div>
                        {col.links.map((l) => (
                          <Link key={l.href} href={l.href}>
                            {l.label}
                            {l.note && <span className="ml-2 text-[0.7rem] uppercase tracking-wider text-ink-soft">{l.note}</span>}
                          </Link>
                        ))}
                      </div>
                    ))}
                    {group.links?.map((l) => (
                      <Link key={l.href} href={l.href}>
                        {l.label}
                      </Link>
                    ))}
                    {group.columns && (
                      <Link href={group.href} className="col-span-full !text-brand-deep font-bold">
                        All services →
                      </Link>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a href={SITE.phoneHref} className="hidden font-bold text-brand-ink no-underline md:inline" style={{ fontFamily: "var(--font-display)" }}>
            {SITE.phone}
          </a>
          <Link href="/contact" className="btn btn--primary hidden md:inline-flex" style={{ padding: "0.7em 1.3em" }}>
            Contact Us
          </Link>
          <button
            type="button"
            className="nav-link lg:hidden"
            aria-expanded={drawer}
            aria-controls="mobile-nav"
            onClick={() => setDrawer((d) => !d)}
          >
            {drawer ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {drawer && (
        <div id="mobile-nav" className="fixed inset-x-0 bottom-0 top-[var(--header-h)] z-40 overflow-y-auto bg-white px-6 py-6 text-ink lg:hidden" style={{ borderRadius: "28px 28px 0 0" }}>
          <div className="grid gap-6">
            {NAV.map((group) => (
              <div key={group.label}>
                <Link href={group.href} className="mega__title !text-base !mb-2 block">
                  {group.label}
                </Link>
                <div className="grid gap-1">
                  {group.columns?.flatMap((c) => c.links).map((l) => (
                    <Link key={l.href} href={l.href} className="py-1 no-underline text-ink">
                      {l.label}
                    </Link>
                  ))}
                  {group.links?.map((l) => (
                    <Link key={l.href} href={l.href} className="py-1 no-underline text-ink">
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/contact" className="btn btn--primary">
                Contact Us
              </Link>
              <a href={SITE.phoneHref} className="btn btn--ghost">
                {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
