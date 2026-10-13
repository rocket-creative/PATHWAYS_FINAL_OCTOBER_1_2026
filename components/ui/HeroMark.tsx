import Image from "next/image";

/**
 * Decorative Pathways lockup. Always out of flow.
 * `stage` fills the homepage's open right field; `badge` sits on a photo or glass corner.
 * `home` is the smaller homepage badge, shown only below the stage breakpoint.
 */
export default function HeroMark({ variant, home = false, card = false }: { variant: "stage" | "badge"; home?: boolean; card?: boolean }) {
  const stage = variant === "stage";
  return (
    <div className={`hero-mark hero-mark--${variant}${home ? " hero-mark--home" : ""}${card ? " hero-mark--card" : ""}`} aria-hidden="true">
      <Image src="/img/logo.webp" alt="" width={640} height={640} className="hero-mark__logo" sizes={stage ? "440px" : card ? "200px" : home ? "112px" : "148px"} />
    </div>
  );
}
