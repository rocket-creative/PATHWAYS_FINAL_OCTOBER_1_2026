import type { PageContent, Section } from "@/content/types";
import { Blocks, Cta } from "./Blocks";
import { Photo } from "@/components/ui/Photo";
import { Split } from "@/components/ui/Split";
import { PathLine } from "@/components/ui/PathLine";
import { Inline } from "./Blocks";
import { SITE } from "@/lib/site";

/**
 * Lays a PageContent out as a winding page: a hero, then sections that
 * alternate left and right, each one telling the backdrop camera where to
 * settle. Copy is never transformed here; it is only placed.
 */
export default function PageRenderer({ page }: { page: PageContent }) {
  return (
    <article>
      <Hero page={page} />
      <div className="relative" data-draw-scope>
        <PathLine />
        {page.sections.map((s, i) => (
          <SectionView key={s.id} section={s} index={i} />
        ))}
      </div>
      {page.closing && <Closing page={page} />}
    </article>
  );
}

function Hero({ page }: { page: PageContent }) {
  const hasPhoto = Boolean(page.heroPhoto);
  return (
    <header className="section pt-10 md:pt-16" data-stop={page.heroStop ?? "wide"}>
      <div className={`wrap grid items-center gap-10 ${hasPhoto ? "lg:grid-cols-[1.15fr_0.85fr]" : ""}`}>
        <div className="glass glass--strong px-6 py-7 md:px-10 md:py-10">
          {page.eyebrow && (
            <p className="eyebrow mb-4" data-reveal>
              {page.eyebrow}
            </p>
          )}
          <Split as="h1" text={page.h1} />
          {page.subtitle && (
            <p className="lead mt-5 text-brand-deep" data-reveal>
              {page.subtitle}
            </p>
          )}
          {page.intro?.map((p, i) => (
            <p key={i} className="lead mt-5" data-reveal>
              <Inline text={p} />
            </p>
          ))}
          {page.heroCtas && (
            <div className="mt-8 flex flex-wrap gap-3" data-reveal>
              {page.heroCtas.map((c) => (
                <Cta key={c.href + c.label} {...c} />
              ))}
            </div>
          )}
        </div>
        {page.heroPhoto && (
          <div className="relative mx-auto w-[min(78vw,460px)] lg:w-full lg:max-w-[520px]">
            <div className="orbit">
              <Photo asset={page.heroPhoto.asset} alt={page.heroPhoto.alt} shape="circle" className="ring" priority sizes="(max-width: 1024px) 78vw, 520px" float={40} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function SectionView({ section: s, index }: { section: Section; index: number }) {
  const layout = s.layout ?? (s.photo || s.photos ? (index % 2 ? "split-reverse" : "split") : "prose");
  const glass = s.glass ?? true;
  const drift = index % 2 ? "drift-r" : "drift-l";
  const body = (
    <div className={`grid gap-5 ${glass ? "glass px-6 py-7 md:px-9 md:py-9" : ""}`}>
      {s.eyebrow && (
        <p className="eyebrow" data-reveal>
          {s.eyebrow}
        </p>
      )}
      {s.heading && (
        <h2 id={s.id} data-reveal>
          {s.heading}
        </h2>
      )}
      <Blocks blocks={s.blocks} />
    </div>
  );

  if (layout === "prose")
    return (
      <section className="section" data-stop={s.stop} id={s.heading ? undefined : s.id}>
        <div className={`wrap wrap--narrow ${drift}`} style={{ maxWidth: 820 }}>
          {body}
        </div>
      </section>
    );

  if (layout === "center")
    return (
      <section className="section" data-stop={s.stop}>
        <div className="wrap wrap--narrow text-center [&_.check-list]:text-left">{body}</div>
      </section>
    );

  if (layout === "wide" || layout === "cards")
    return (
      <section className="section" data-stop={s.stop}>
        <div className="wrap">{body}</div>
      </section>
    );

  const reverse = layout === "split-reverse";
  const media = s.photos ? (
    <div className="relative mx-auto grid w-[min(80vw,420px)] grid-cols-2 gap-4 lg:w-full">
      {s.photos.map((p, i) => (
        <Photo key={p.asset} asset={p.asset} alt={p.alt} shape="circle" className={`ring ${i === 1 ? "mt-10" : ""} ${i === 2 ? "-mt-6" : ""}`} float={24 + i * 12} sizes="220px" />
      ))}
    </div>
  ) : s.photo ? (
    <div className="relative mx-auto w-[min(78vw,440px)] lg:w-full lg:max-w-[480px]">
      <Photo asset={s.photo.asset} alt={s.photo.alt} shape={s.photo.shape ?? "circle"} className="ring" float={36} sizes="(max-width: 1024px) 78vw, 480px" />
    </div>
  ) : null;

  return (
    <section className="section" data-stop={s.stop}>
      <div className={`wrap wrap--wide grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        {body}
        {media}
      </div>
    </section>
  );
}

function Closing({ page }: { page: PageContent }) {
  const c = page.closing!;
  return (
    <section className="section" data-stop="standing">
      <div className="wrap wrap--narrow">
        <div className="glass glass--strong grid gap-5 px-7 py-9 text-center md:px-12 md:py-12">
          <h2 data-reveal>{c.heading}</h2>
          {c.text?.map((p, i) => (
            <p key={i} className="lead mx-auto max-w-[60ch]" data-reveal>
              <Inline text={p} />
            </p>
          ))}
          <div className="mt-2 flex flex-wrap justify-center gap-3" data-reveal>
            <Cta label={c.cta.label} href={c.cta.href} />
            <Cta label={SITE.phone} href={SITE.phoneHref} secondary />
          </div>
        </div>
      </div>
    </section>
  );
}
