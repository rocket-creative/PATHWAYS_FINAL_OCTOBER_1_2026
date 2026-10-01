import data from "@/content/people.json";
import { Headshot, Photo } from "@/components/ui/Photo";
import Link from "next/link";
import PeopleSearch from "./PeopleSearch";

export type Person = {
  slug: string;
  group: string;
  name: string;
  credentials: string;
  title: string;
  paragraphs: string[];
  specialties: string;
};

export const PEOPLE = data.people as Person[];
export const WELLNESS = data.wellness as {
  slug: string;
  name: string;
  role: string;
  paragraphs: string[];
  cta: string;
  displayName: string;
  short: string;
}[];

/** Specialty tags derived from each "Specializes in" line, for the search filter. */
export function tagsFor(p: Person): string[] {
  return p.specialties
    .replace(/^Specializes in:?\s*/i, "")
    .replace(/\.$/, "")
    .split(/,\s*|\s+and\s+(?=[a-z])/i)
    .map((t) => t.trim().replace(/^and\s+/i, ""))
    .filter((t) => t.length > 1 && t.length < 60);
}

export function PeopleBlock({ group }: { group: string }) {
  if (group === "search") {
    const people = PEOPLE.filter((p) => ["leadership", "clinical", "specialized"].includes(p.group) && p.slug !== "rachel-lessard");
    return <PeopleSearch people={people.map((p) => ({ ...p, tags: tagsFor(p) }))} />;
  }
  if (group === "wellness") {
    return (
      <div className="grid gap-4 sm:grid-cols-2">
        {WELLNESS.map((p) => (
          <Link key={p.slug} href={`/team/${p.slug}`} className="tile !grid-cols-[128px_1fr] !rounded-[var(--r-md)]" data-reveal>
            <Headshot slug={p.slug} name={p.displayName} size={128} ring={false} />
            <span>
              <span className="eyebrow block !text-[0.68rem]">{p.role}</span>
              <span className="tile__title block">{p.displayName}</span>
              <span className="tile__text block">{p.short}</span>
              <span className="tile__text mt-1 block font-bold text-brand-deep">{p.cta.replace("Work with", "Read bio")} →</span>
            </span>
          </Link>
        ))}
      </div>
    );
  }
  if (group === "dogs") {
    const dogs = PEOPLE.filter((p) => p.group === "dogs");
    const photo: Record<string, string> = { domino: "ha-domino-therapy-dog", "gypsy-sassafras": "ha-gypsy-therapy-dog" };
    return (
      <div className="grid gap-6">
        <p className="lead" data-reveal>
          {data.dogsIntro}
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {dogs.map((d) => (
            <div key={d.slug} className="grid gap-3 text-center" data-reveal>
              <Photo asset={photo[d.slug]} alt={`${d.name}, therapy dog`} shape="circle" className="ring mx-auto w-[260px]" sizes="260px" />
              <h3>{d.name}</h3>
              {d.paragraphs.map((p, i) => (
                <p key={i} className="text-left">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
  const people = PEOPLE.filter((p) => p.group === group);
  return (
    <div className="grid gap-8">
      {people.map((p) => (
        <div key={p.slug} id={p.slug} className="grid scroll-mt-28 items-start gap-5 sm:grid-cols-[190px_1fr]" data-reveal>
          <Headshot slug={p.slug} name={p.name} size={190} className="mx-auto sm:mx-0" />
          <div className="grid gap-2">
            <h3 className="!text-[1.25rem]">
              {p.name}
              {p.credentials && <span className="font-normal text-ink-soft">, {p.credentials}</span>}
            </h3>
            {p.title && <p className="eyebrow -mt-1">{p.title}</p>}
            {p.paragraphs.map((t, i) => (
              <p key={i}>{t}</p>
            ))}
            {p.specialties && <p className="text-[0.95rem] text-ink-soft">{p.specialties}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
