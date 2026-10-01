import type { ElementType } from "react";

/** Wraps each word so GSAP can raise them one at a time. Text stays intact for readers. */
export function Split({ as: Tag = "h1", text, className = "", id }: { as?: ElementType; text: string; className?: string; id?: string }) {
  const words = text.split(/(\s+)/);
  return (
    <Tag className={className} data-split id={id} aria-label={text}>
      {words.map((w, i) =>
        /^\s+$/.test(w) ? (
          " "
        ) : (
          <span key={i} className="inline-block overflow-hidden align-bottom" aria-hidden="true">
            <span className="w inline-block will-change-transform">{w}</span>
          </span>
        ),
      )}
    </Tag>
  );
}
