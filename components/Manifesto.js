"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const acts = [
  {
    eyebrow: "/ 01 · Analyse",
    line1: "Erst hören wir zu,",
    line2: "und planen präzise.",
  },
  {
    eyebrow: "/ 02 · Umsetzung",
    line1: "Saubere Technik,",
    line2: "normgerecht installiert.",
  },
  {
    eyebrow: "/ 03 · Begleitung",
    line1: "Service & Wartung,",
    line2: "über Jahre hinweg.",
  },
];

export default function Manifesto() {
  const containerRef = useRef(null);
  const actsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const actEls = actsRef.current.filter(Boolean);
      actEls.forEach((el) => {
        const lines = el.querySelectorAll("[data-reveal]");
        const eyebrow = el.querySelector("[data-eyebrow]");
        gsap.set(lines, { yPercent: 110 });
        gsap.set(eyebrow, { autoAlpha: 0, y: 12 });

        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
        tl.to(eyebrow, { autoAlpha: 1, y: 0, duration: 0.5 })
          .to(lines, { yPercent: 0, duration: 0.85, stagger: 0.12 }, "-=0.25");
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-base text-fg py-24 md:py-32 px-6 md:px-10 overflow-hidden border-y border-line/5"
      aria-label="Unser Vorgehen"
    >
      <div aria-hidden="true" className="absolute inset-0 tech-grid opacity-60" />

      <div className="relative max-w-6xl mx-auto flex flex-col gap-24 md:gap-40">
        {acts.map((act, i) => (
          <div
            key={i}
            ref={(el) => (actsRef.current[i] = el)}
            className="text-center"
          >
            <p
              data-eyebrow
              className="label-mono text-[#9162a4] mb-8"
            >
              {act.eyebrow}
            </p>
            <div className="text-[2rem] sm:text-5xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.03em] leading-[1.05] sm:leading-[1.02] max-w-4xl mx-auto">
              <span className="block overflow-hidden pb-[0.12em]">
                <span data-reveal className="block">
                  {act.line1}
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.12em]">
                <span data-reveal className="block text-[#9162a4]">
                  {act.line2}
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
