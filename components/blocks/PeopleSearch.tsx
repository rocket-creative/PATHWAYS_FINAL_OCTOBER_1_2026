"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Headshot } from "@/components/ui/Photo";

export type SearchPerson = {
  slug: string;
  name: string;
  credentials: string;
  title: string;
  paragraphs: string[];
  specialties: string;
  type: string;
  locations: string[];
  tags: string[];
  href?: string;
};

const TYPES = ["Mental Health", "Medication / Specialized Care", "Mind-Body Support", "Wellness"];
const LOCATIONS = ["Rockville Centre", "Garden City", "Massapequa", "Port Jefferson", "Smithtown", "Nassau", "Suffolk", "Virtual"];
const QUICK = ["anxiety", "depression", "trauma", "teens", "couples", "ADHD", "veterans", "LGBTQ", "grief", "life transitions", "families", "children"];

const select = "w-full rounded-full border border-[rgb(0_126_252_/_0.35)] bg-white px-4 py-3 text-[1rem] outline-none focus:border-brand";

/** Find Your Provider: specialty / concern / keyword, location, and provider type. */
export default function PeopleSearch({ people }: { people: SearchPerson[] }) {
  const [q, setQ] = useState("");
  const [loc, setLoc] = useState("");
  const [type, setType] = useState("");
  const needle = q.trim().toLowerCase();

  const locations = useMemo(() => LOCATIONS.filter((l) => people.some((p) => p.locations.includes(l))), [people]);

  const results = useMemo(() => {
    return people.filter((p) => {
      if (type && p.type !== type) return false;
      if (loc && !p.locations.includes(loc)) return false;
      if (needle && !`${p.name} ${p.credentials} ${p.title} ${p.specialties} ${p.type} ${p.paragraphs.join(" ")}`.toLowerCase().includes(needle)) return false;
      return true;
    });
  }, [needle, loc, type, people]);

  const clear = () => {
    setQ("");
    setLoc("");
    setType("");
  };

  return (
    <div className="grid gap-6">
      <div className="glass glass--strong grid gap-4 p-5" style={{ borderRadius: "var(--r-md)" }}>
        <div className="grid gap-4 md:grid-cols-[1.4fr_1fr_1fr]">
          <label className="grid gap-2">
            <span className="eyebrow">Specialty / Concern / Keyword</span>
            <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Try anxiety, teens, couples, massage…" className={select} />
          </label>
          <label className="grid gap-2">
            <span className="eyebrow">Location</span>
            <select value={loc} onChange={(e) => setLoc(e.target.value)} className={select} disabled={locations.length === 0}>
              <option value="">{locations.length ? "Any location" : "Locations coming soon"}</option>
              {locations.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-2">
            <span className="eyebrow">Provider Type</span>
            <select value={type} onChange={(e) => setType(e.target.value)} className={select}>
              <option value="">All provider types</option>
              {TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="flex flex-wrap gap-2" aria-label="Quick filters">
          {QUICK.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setQ(q.toLowerCase() === t.toLowerCase() ? "" : t)}
              aria-pressed={q.toLowerCase() === t.toLowerCase()}
              className={`rounded-full border px-3.5 py-1.5 text-[0.9rem] font-bold transition ${
                q.toLowerCase() === t.toLowerCase() ? "border-brand-deep bg-brand-deep text-white" : "border-[rgb(0_126_252_/_0.3)] bg-white text-brand-ink hover:border-brand"
              }`}
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t}
            </button>
          ))}
        </div>
        <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.9rem] text-ink-soft" aria-live="polite">
          <span>
            {results.length} of {people.length} providers
          </span>
          {(q || loc || type) && (
            <button type="button" className="font-bold text-brand-deep" onClick={clear}>
              Clear filters
            </button>
          )}
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {results.map((p) => (
          <article key={p.slug} id={p.slug} className="glass grid scroll-mt-28 gap-3 p-5 md:p-6" style={{ borderRadius: "var(--r-md)" }}>
            <div className="flex items-center gap-4">
              <Headshot slug={p.slug} name={p.name} size={112} />
              <div className="min-w-0">
                <h3 className="!text-[1.1rem]">
                  {p.name}
                  {p.credentials && <span className="font-normal text-ink-soft">, {p.credentials}</span>}
                </h3>
                <p className="eyebrow !text-[0.68rem]">{p.title || p.type}</p>
                {p.locations.length > 0 && <p className="text-[0.85rem] text-ink-soft">{p.locations.join(" · ")}</p>}
              </div>
            </div>
            {p.paragraphs.map((t, i) => (
              <p key={i} className="text-[0.95rem]">
                {t}
              </p>
            ))}
            {p.specialties && <p className="text-[0.9rem] text-ink-soft">{p.specialties}</p>}
            {p.href && (
              <Link href={p.href} className="text-[0.9rem] font-bold">
                Read full bio →
              </Link>
            )}
          </article>
        ))}
        {results.length === 0 && (
          <p className="md:col-span-2">
            No match for those filters. Try another specialty, or <Link href="/contact">contact the Welcome Team</Link> and they will help you find the right fit.
          </p>
        )}
      </div>
    </div>
  );
}
