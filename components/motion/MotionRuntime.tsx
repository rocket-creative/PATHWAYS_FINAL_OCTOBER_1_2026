"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Site-wide motion: smooth scrolling (Lenis), scroll reveals, circle photo
 * parallax, scroll-drawn path lines, and magnetic buttons. Everything turns
 * off under prefers-reduced-motion and the document reads normally without JS.
 */
export default function MotionRuntime() {
  const pathname = usePathname();
  const router = useRouter();

  // Page transitions: the backdrop zooms out and the page fades before the route changes.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const onClick = (e: MouseEvent) => {
      if (reduce || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      const a = (e.target as HTMLElement).closest("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      if (!href.startsWith("/") || href.startsWith("/#") || a.target === "_blank") return;
      const url = new URL(href, location.href);
      if (url.pathname === location.pathname) return;
      e.preventDefault();
      window.dispatchEvent(new Event("backdrop:wide"));
      gsap.to("#main", { opacity: 0, y: -24, duration: 0.45, ease: "power2.in", onComplete: () => router.push(href) });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [router]);

  useEffect(() => {
    document.documentElement.classList.add("js");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      document.documentElement.classList.add("reduced-motion");
      return;
    }

    const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 0.95, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    window.scrollTo(0, 0);
    gsap.fromTo("#main", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", clearProps: "all" });

    const ctx = gsap.context(() => {
      // Reveals: each [data-reveal] rises in once; siblings stagger.
      const groups = new Map<Element, HTMLElement[]>();
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        const parent = el.parentElement ?? document.body;
        if (!groups.has(parent)) groups.set(parent, []);
        groups.get(parent)!.push(el);
      });
      groups.forEach((els) => {
        ScrollTrigger.batch(els, {
          start: "top 88%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 1.1,
              ease: "power3.out",
              stagger: 0.09,
              overwrite: true,
              onComplete: () => batch.forEach((b) => (b as HTMLElement).classList.add("is-in")),
            }),
        });
      });

      // Headline words rise one by one.
      document.querySelectorAll<HTMLElement>("[data-split]").forEach((el) => {
        const words = el.querySelectorAll<HTMLElement>(".w");
        if (!words.length) return;
        gsap.fromTo(
          words,
          { yPercent: 110, opacity: 0, rotateX: -30 },
          {
            yPercent: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1.2,
            ease: "power4.out",
            stagger: 0.045,
            delay: 0.15,
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          },
        );
      });

      // Photos drift at a different rate than text.
      document.querySelectorAll<HTMLElement>("[data-float]").forEach((el, i) => {
        const amount = Number(el.dataset.float || 60) * (i % 2 ? 1 : -1);
        gsap.fromTo(
          el,
          { y: -amount },
          { y: amount, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 1.2 } },
        );
      });

      // Scroll-drawn winding lines.
      document.querySelectorAll<SVGPathElement>("[data-draw]").forEach((path) => {
        const len = path.getTotalLength();
        gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(path, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: path.closest("[data-draw-scope]") ?? path,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 0.8,
          },
        });
      });

      // Magnetic buttons.
      document.querySelectorAll<HTMLElement>(".btn").forEach((btn) => {
        const strength = 0.28;
        const move = (e: PointerEvent) => {
          const r = btn.getBoundingClientRect();
          const dx = e.clientX - (r.left + r.width / 2);
          const dy = e.clientY - (r.top + r.height / 2);
          gsap.to(btn, { x: dx * strength, y: dy * strength, duration: 0.5, ease: "power3.out" });
        };
        const leave = () => gsap.to(btn, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.45)" });
        btn.addEventListener("pointermove", move);
        btn.addEventListener("pointerleave", leave);
      });

      // Counter on the 360 figure.
      document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
        const end = Number(el.dataset.count);
        const obj = { v: 0 };
        el.textContent = "0";
        gsap.to(obj, {
          v: end,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
          onUpdate: () => {
            el.textContent = Math.round(obj.v).toString();
          },
        });
      });
    });

    const refresh = () => ScrollTrigger.refresh();
    const t = window.setTimeout(refresh, 400);
    window.addEventListener("load", refresh);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, [pathname]);

  return null;
}
