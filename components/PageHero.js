"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function PageHero({ eyebrow, title, accent, intro, children }) {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const root = ref.current;
      if (!root) return;
      const reveal = root.querySelectorAll("[data-reveal]");
      const fades = root.querySelectorAll("[data-fade]");

      gsap.set(reveal, { yPercent: 110 });
      gsap.set(fades, { autoAlpha: 0, y: 18 });
      root.querySelectorAll("[data-ready]").forEach((el) =>
        el.setAttribute("data-ready", "1")
      );

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      const eyebrowEl = root.querySelector("[data-fade='eyebrow']");
      const introEl = root.querySelector("[data-fade='intro']");
      const extraEl = root.querySelector("[data-fade='extra']");

      if (eyebrowEl) tl.to(eyebrowEl, { autoAlpha: 1, y: 0, duration: 0.45 });
      if (reveal.length)
        tl.to(reveal, { yPercent: 0, duration: 0.7, stagger: 0.08 }, eyebrowEl ? "-=0.2" : 0);
      if (introEl) tl.to(introEl, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.3");
      if (extraEl) tl.to(extraEl, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.35");
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative bg-[#050505] text-white pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-10 overflow-hidden border-b border-white/5"
    >
      <div aria-hidden="true" className="absolute inset-0 tech-grid opacity-50" />
      <div aria-hidden="true" className="absolute inset-0 lime-glow opacity-50" />

      <div className="relative max-w-6xl mx-auto">
        {eyebrow && (
          <p
            data-fade="eyebrow"
            data-ready
            className="vc-pre-reveal label-mono text-[#9162a4] mb-6"
          >
            {eyebrow}
          </p>
        )}

        <h1
          data-ready
          className="vc-pre-reveal text-4xl sm:text-5xl md:text-7xl font-semibold tracking-[-0.03em] leading-[0.98] max-w-4xl"
        >
          <span className="block overflow-hidden pb-[0.12em]">
            <span data-reveal className="block">
              {title}
            </span>
          </span>
          {accent && (
            <span className="block overflow-hidden pb-[0.12em]">
              <span data-reveal className="block text-[#9162a4]">
                {accent}
              </span>
            </span>
          )}
        </h1>

        {intro && (
          <p
            data-fade="intro"
            data-ready
            className="vc-pre-reveal mt-6 max-w-2xl text-base md:text-lg text-zinc-300 leading-relaxed"
          >
            {intro}
          </p>
        )}

        {children && (
          <div data-fade="extra" data-ready className="vc-pre-reveal mt-8">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
