# Placing copy: rules for every page file

You place copy. You do not write it. Every string you put in a `PageContent` must be
copied character for character from a file in `content/source/`. No paraphrase, no
"fixes", no added sentences, no invented facts, no reordering inside a paragraph.
Typos stay. Hyphens stay. Casing stays.

You may: choose which lines become headings, paragraphs, lists, FAQ items, CTAs, and
which photo sits beside which section. You may drop old-site scaffolding only:
"Learn More", "READ BIO", "Item 1 of 12", nav/footer/menu captures, "[Google Map embed]",
form field captures, the marquee repeat, and "sister site/sister practice" link
lines ("For all Wellness Services, visit our sister site…"). Everything else must land.

Verification: after the build, `npx tsx scripts/verify-copy.mjs` lists every source
line that is not found on the site. Your goal is zero missing lines for your files.

## Model
Read `content/types.ts` and `content/pages/about.ts` (the model page) before writing.
Export an array from the group file you own. Each page:

```ts
{
  url: "/services/individual-therapy",
  title: "<the Title: line from the source file, verbatim>",
  meta: "<first body paragraph of the page, verbatim, trimmed to a sentence or two>",
  h1: "<the page's first heading line>",
  subtitle: "<the tagline line under it, if there is one>",
  eyebrow: "Therapy" | "Wellness" | "Medication Management" | "Coaching",
  intro: ["<opening paragraph(s), verbatim>"],
  heroPhoto: { asset: "<photo slug>", alt: "<describe the photo>" },
  heroStop: "wide",
  sections: [ ... ],
  closing: { heading: "<a closing line from the source>", text: [...], cta: { label: "Contact Us", href: "/contact" } },
  source: "04-www-pathwayswithin-me-individual-therapy.txt",
}
```

Sections: 4 to 8 per page. Vary `stop` across the page in this order of preference so
the backdrop camera travels: cairn → pool → labyrinth → seated → standing → ivy → ground.
Never use the same stop twice in a row. Hero stays `wide`.

Blocks you can use (see types.ts): `p` (set `lead: true` for the one or two most
important lines), `h3`, `list` (`style: "check"` for benefit lists, `"pills"` for long
symptom/condition lists, `"bullet"` for plain lists), `quote` (with `cite` for the
Jung/Aristotle style quotes), `faq` (the "Q:/A:" pairs, each answer paragraph as a
separate string in `a`), `person` (a provider intro; `slug` must exist in
`public/img/providers`), `cta`, `note`, `steps`, `tiles`, `photo`.

Keep FAQ answers in `faq` blocks, visible, never hidden. Do not add FAQ items that are
not in the source. Lines like "Healing is holistic. / Take the next step…/ Discover your
Pathway to Wellness" are the page closer: put them in `closing` (heading = first line,
text = the rest; the CTA is the last line as label pointing to `/contact`).

Links: internal links must be one of the URLs in `lib/site.ts` NAV/FOOTER or the
pages your group builds. Old-site CTAs like "Let's Get Started" / "Work with Tia Baumohl"
/ "Schedule your … consultation today." become `{ kind: "cta", label: "<that line>", href: "/contact" }`.
Sister-site references inside a sentence stay as written (they are flagged separately).

Photos: use slugs from `public/img/photos` (strip the `-640/-1200/-2000.webp` suffix).
Prefixes: `th-` therapy sessions and families, `cw-` wellness/acupuncture/massage/nature,
`ha-` team and offices, `pr-` office rooms. Pick photos that match the service. Prefer
`-ap26-` sets (newest April shoot). Headshots live in `public/img/providers/<slug>-320.webp`.

Do not touch any file outside your group file. Do not install packages. Do not run
`next build` (the integrator does). Check types with `npx tsc --noEmit`.

Finish with a short report: pages built, any source line you could not place and why,
any photo you wanted but could not find.
