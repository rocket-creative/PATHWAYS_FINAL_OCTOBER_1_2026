import Link from "next/link";
import { NAV } from "@/lib/site";
import { Arrow } from "./Blocks";

/** Cross-links on every interior page: siblings in the same service family, then the main entry points. */
export function Related({ url }: { url: string }) {
  const columns = NAV[0].columns!;
  const column = columns.find((c) => c.links.some((l) => l.href === url));
  const siblings = column ? column.links.filter((l) => l.href !== url) : [];
  const core = [
    { label: "All services", href: "/services" },
    { label: "Our Team", href: "/team" },
    { label: "Locations", href: "/locations" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "FAQs", href: "/faq" },
    { label: "Contact Us", href: "/contact" },
  ].filter((l) => l.href !== url);
  return (
    <section className="section--tight" aria-label="Related pages" data-stop="ground">
      <div className="wrap">
        <div className="glass grid gap-5 px-6 py-7 md:px-9">
          {siblings.length > 0 && (
            <div>
              <p className="eyebrow mb-3">More in {column!.title}</p>
              <div className="flex flex-wrap gap-2">
                {siblings.map((l) => (
                  <Link key={l.href} href={l.href} className="btn btn--ghost !py-2 !px-4 !text-[0.9rem]">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
          <div>
            <p className="eyebrow mb-3">Keep exploring</p>
            <div className="flex flex-wrap gap-2">
              {core.map((l) => (
                <Link key={l.href} href={l.href} className={`btn !py-2 !px-4 !text-[0.9rem] ${l.href === "/contact" ? "btn--primary" : "btn--ghost"}`}>
                  {l.label} {l.href === "/contact" && <Arrow />}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
