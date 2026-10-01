/**
 * A winding, scroll-drawn line that threads behind the sections, so the page
 * reads as one path rather than a stack of blocks. Purely decorative.
 */
export function PathLine({ className = "" }: { className?: string }) {
  return (
    <svg className={`pathline hidden lg:block ${className}`} viewBox="0 0 1000 3000" preserveAspectRatio="none" aria-hidden="true">
      <path
        data-draw
        d="M 120 0 C 120 260, 880 260, 880 520 S 120 780, 120 1040 S 880 1300, 880 1560 S 120 1820, 120 2080 S 880 2340, 880 2600 S 500 2860, 500 3000"
        fill="none"
        stroke="rgb(0 126 252 / 0.35)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="1 14"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
