/**
 * Content model. Every string placed in these structures is copied verbatim
 * from content/source/*.txt (the client's live-site capture). Agents and
 * humans place copy here; they never rewrite it.
 */

/** Where the backdrop camera settles while a section is on screen. */
export type Stop = "wide" | "cairn" | "pool" | "labyrinth" | "seated" | "standing" | "ground" | "ivy";

export type Inline = string; // plain text; use `[label](/href)` markdown links sparingly

export type Block =
  | { kind: "eyebrow"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "p"; text: Inline; lead?: boolean }
  | { kind: "quote"; text: string; cite?: string }
  | { kind: "list"; items: string[]; style?: "check" | "bullet" | "pills" | "numbered" }
  | { kind: "cta"; label: string; href: string; secondary?: boolean }
  | { kind: "faq"; intro?: string; items: { q: string; a: string[] }[] }
  | {
      kind: "person";
      slug: string; // headshot slug in /public/img/providers
      eyebrow?: string;
      name: string;
      credentials?: string;
      paragraphs: string[];
      cta?: { label: string; href: string };
    }
  | { kind: "photo"; asset: string; alt: string; shape?: "circle" | "blob" | "arch" }
  | { kind: "steps"; items: { title: string; text: string }[] }
  | { kind: "tiles"; items: { title: string; text?: string; href: string; asset?: string }[] }
  | { kind: "note"; text: string } // small italic notice (e.g. "On hold")
  | { kind: "embed"; src: string; title: string; height?: number }
  | { kind: "locations" }
  | { kind: "people"; group: string }
  | { kind: "quiz" }
  | { kind: "contactForms" }
  | { kind: "html"; html: string };

export type SectionLayout = "prose" | "split" | "split-reverse" | "cards" | "center" | "wide";

export interface Section {
  id: string;
  stop: Stop;
  layout?: SectionLayout;
  heading?: string; // rendered as h2 unless `headingLevel`
  eyebrow?: string;
  photo?: { asset: string; alt: string; shape?: "circle" | "blob" | "arch" };
  photos?: { asset: string; alt: string }[]; // circle cluster
  blocks: Block[];
  glass?: boolean; // default true
}

export interface PageContent {
  url: string;
  title: string; // <title>
  meta: string; // <meta description>
  eyebrow?: string;
  h1: string;
  subtitle?: string;
  intro?: string[];
  heroStop?: Stop;
  heroPhoto?: { asset: string; alt: string };
  heroCtas?: { label: string; href: string; secondary?: boolean }[];
  sections: Section[];
  closing?: {
    heading: string;
    text?: string[];
    cta: { label: string; href: string };
  };
  index?: boolean;
  source: string; // which content/source file(s) this page was placed from
}
