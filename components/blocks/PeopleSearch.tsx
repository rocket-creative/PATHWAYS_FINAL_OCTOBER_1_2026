"use client";

import { useMemo, useState } from "react";
import { Headshot } from "@/components/ui/Photo";

type P = {
  slug: string;
  group: string;
  name: string;
  credentials: string;
  title: string;
  paragraphs: string[];
  specialties: string;
  tags: string[];
};

const QUICK = ["anxiety", "depression", "trauma", "teens", "couples", "ADHD", "veterans", "LGBTQ", "grief", "life transitions", "families", "children"];

/** Search providers by specialty. The bios and specialty lines are shown exactly as written. */
export default function PeopleSearch({ people }: { people: P[] }) {
  const [q, setQ] = useState("");
  const needle = q.trim().toLowerCase();
  const results = useMemo(() => {
    if (!needle) return people;
    return people.filter((p) => `${p.name} ${p.credentials} ${p.title} ${p.specialties} ${p.paragraphs.join(" ")}`.toLowerCase().includes(needle));
  }, [needle, people]);

  return (
    <div className="grid gap-6">
      <div className="glass glass--strong grid gap-4 p-5" style={{ borderRadius: "var(--r-md)" }}>
        <label className="grid gap-2">
          <span className="eyebrow">Search providers by specialty</span>
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Try anxiety, teens, couples, veterans, ADHD…"
            className="w-full rounded-full border border-[rgb(0_126_252_/_0.35)] bg-white px-5 py-3 text-[1rem] outline-none focus:border-brand"
          />
        </label>
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
        <p className="text-[0.9rem] text-ink-soft" aria-live="polite">
          {results.length} of {people.length} providers
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {results.map((p) => (
          <article key={p.slug} id={p.slug} className="glass grid scroll-mt-28 gap-3 p-6" style={{ borderRadius: "var(--r-md)" }}>
            <div className="flex items-center gap-4">
              <Headshot slug={p.slug} name={p.name} size={128} />
              <div>
                <h3 className="!text-[1.1rem]">
                  {p.name}
                  {p.credentials && <span className="font-normal text-ink-soft">, {p.credentials}</span>}
                </h3>
                {p.title && <p className="eyebrow !text-[0.68rem]">{p.title}</p>}
              </div>
            </div>
            {p.paragraphs.map((t, i) => (
              <p key={i} className="text-[0.95rem]">
                {t}
              </p>
            ))}
            {p.specialties && <p className="text-[0.9rem] text-ink-soft">{p.specialties}</p>}
          </article>
        ))}
        {results.length === 0 && (
          <p className="md:col-span-2">
            No match for that word. Try another specialty, or <a href="/contact">contact the Welcome Team</a> and they will match you.
          </p>
        )}
      </div>
    </div>
  );
}
