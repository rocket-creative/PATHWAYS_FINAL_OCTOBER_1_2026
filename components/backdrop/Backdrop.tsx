"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Stop } from "@/content/types";
import { BACKDROP_RATIO, STOPS } from "./stops";

gsap.registerPlugin(ScrollTrigger);

const WIDTHS = [960, 1440, 1920, 2560, 3840, 5000];
const srcSet = (ext: "avif" | "webp") => WIDTHS.map((w) => `/img/backdrop/branch-${w}.${ext} ${w}w`).join(", ");

/**
 * The floating branch sits behind every page. Sections declare `data-stop`
 * and the camera glides to that part of the branch as they enter the viewport,
 * zooming in on the cairn, the tide pool, the labyrinth, or the two figures.
 * Nothing here blocks scrolling; it only moves the picture.
 */
export default function Backdrop() {
  const imgRef = useRef<HTMLImageElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let current: Stop = "wide";
    const state = { x: 0, y: 0, scale: 1 };

    /** Translate so that the focal point lands at the viewport centre. */
    const target = (stop: Stop) => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const mobile = vw < 760;
      const f = STOPS[stop];
      // object-fit: cover geometry
      const coverScale = Math.max(vw / BACKDROP_RATIO, vh) / 1; // rendered height
      const renderedH = Math.max(vh, vw / BACKDROP_RATIO);
      const renderedW = renderedH * BACKDROP_RATIO;
      void coverScale;
      const s = mobile ? f.mobileScale : f.scale;
      const x = (0.5 - f.x) * renderedW * s;
      const y = (0.5 - f.y) * renderedH * s;
      // keep the branch inside the frame: never translate past the edges
      // Leave room for the scroll drift (1.5% of height) so the edge never shows.
      const maxX = Math.max(0, (renderedW * s - vw) / 2);
      const maxY = Math.max(0, (renderedH * s - vh) / 2 - vh * 0.02);
      return {
        x: Math.max(-maxX, Math.min(maxX, x)),
        y: Math.max(-maxY, Math.min(maxY, y)),
        scale: s,
      };
    };

    const apply = () => {
      gsap.set(img, { x: state.x, y: state.y, scale: state.scale });
    };

    const go = (stop: Stop, instant = false) => {
      current = stop;
      const t = target(stop);
      if (reduce || instant) {
        Object.assign(state, t);
        apply();
        return;
      }
      gsap.to(state, {
        ...t,
        duration: 1.6,
        ease: "power3.inOut",
        overwrite: true,
        onUpdate: apply,
      });
    };

    // Start wide, then settle on the first section's stop.
    Object.assign(state, target("wide"));
    gsap.set(img, { ...state, opacity: 0 });
    gsap.to(img, { opacity: 1, duration: 1.2, ease: "power2.out", delay: 0.1 });

    const triggers: ScrollTrigger[] = [];
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-stop]"));
    sections.forEach((el) => {
      const stop = (el.dataset.stop as Stop) || "wide";
      triggers.push(
        ScrollTrigger.create({
          trigger: el,
          start: "top 60%",
          end: "bottom 40%",
          onEnter: () => go(stop),
          onEnterBack: () => go(stop),
        }),
      );
    });

    // Gentle drift so the picture never feels frozen between stops.
    let drift: gsap.core.Tween | undefined;
    if (!reduce) {
      drift = gsap.to(img, {
        yPercent: -1.0,
        ease: "none",
        scrollTrigger: { start: 0, end: "max", scrub: 1.5 },
      });
    }

    const onResize = () => go(current, true);
    const onLeave = () => go("wide");
    window.addEventListener("resize", onResize);
    window.addEventListener("backdrop:wide", onLeave);
    ScrollTrigger.refresh();

    return () => {
      triggers.forEach((t) => t.kill());
      drift?.scrollTrigger?.kill();
      drift?.kill();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("backdrop:wide", onLeave);
    };
  }, [pathname]);

  return (
    <div className="backdrop" aria-hidden="true">
      <picture>
        <source type="image/avif" srcSet={srcSet("avif")} sizes="100vw" />
        <img
          ref={imgRef}
          className="backdrop__img"
          src="/img/backdrop/branch-1920.webp"
          srcSet={srcSet("webp")}
          sizes="100vw"
          alt=""
          width={16368}
          height={9207}
          decoding="async"
          fetchPriority="high"
          style={{ backgroundImage: "url(/img/backdrop/branch-lqip.webp)", backgroundSize: "cover" }}
        />
      </picture>
      <div className="backdrop__veil" />
    </div>
  );
}
