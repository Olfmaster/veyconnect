"use client";
import { useEffect, useRef } from "react";
import { gsap, SplitText } from "@/lib/gsap";

const acts = [
  {
    eyebrow: "Schritt 01 · Analyse",
    line1: "Erst hören wir zu —",
    line2: "und planen präzise.",
  },
  {
    eyebrow: "Schritt 02 · Umsetzung",
    line1: "Saubere Technik,",
    line2: "normgerecht installiert.",
  },
  {
    eyebrow: "Schritt 03 · Begleitung",
    line1: "Service & Wartung,",
    line2: "über Jahre hinweg.",
  },
];

export default function Manifesto() {
  const containerRef = useRef(null);
  const actsRef = useRef([]);
  const progressRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const actEls = actsRef.current.filter(Boolean);

        actEls.forEach((el, i) => {
          if (i === 0) {
            gsap.set(el, { autoAlpha: 1, y: 0 });
          } else {
            gsap.set(el, { autoAlpha: 0, y: 80 });
          }
          const split = new SplitText(el.querySelectorAll("[data-line]"), { type: "words" });
          el._words = split.words;
          gsap.set(split.words, { y: 60, opacity: 0 });
        });

        gsap.to(actEls[0]._words, {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: { trigger: containerRef.current, start: "top 70%" },
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: () => "+=" + window.innerHeight * (actEls.length * 1.2),
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        for (let i = 1; i < actEls.length; i++) {
          const prev = actEls[i - 1];
          const curr = actEls[i];
          tl.to(prev._words, { y: -40, opacity: 0, duration: 1, stagger: 0.02 }, i)
            .to(prev, { autoAlpha: 0, duration: 0.6 }, i)
            .to(curr, { autoAlpha: 1, y: 0, duration: 0.8 }, i + 0.2)
            .to(curr._words, { y: 0, opacity: 1, duration: 1, stagger: 0.05 }, i + 0.3);
        }

        if (progressRef.current) {
          gsap.to(progressRef.current, {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: () => "+=" + window.innerHeight * (actEls.length * 1.2),
              scrub: true,
            },
          });
        }
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        actsRef.current.forEach((el) => {
          if (!el) return;
          gsap.set(el, { autoAlpha: 1, position: "relative" });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-[#0e0b1f] text-white motion-reduce:h-auto motion-reduce:py-32 border-y border-violet-950/40"
      aria-label="Unser Vorgehen"
    >
      <div aria-hidden="true" className="absolute inset-0 tech-grid opacity-60" />

      <div className="relative motion-reduce:space-y-24 motion-reduce:relative h-full">
        {acts.map((act, i) => (
          <div
            key={i}
            ref={(el) => (actsRef.current[i] = el)}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-10 motion-reduce:static motion-reduce:opacity-100 motion-reduce:transform-none"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-violet-400 mb-10">
              {act.eyebrow}
            </p>
            <p
              data-line
              className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.02] max-w-4xl"
            >
              {act.line1}
            </p>
            <p
              data-line
              className="text-5xl md:text-7xl lg:text-8xl font-light italic tracking-tight leading-[1.02] max-w-4xl mt-2 text-violet-400"
            >
              {act.line2}
            </p>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 w-40 h-px bg-violet-900 motion-reduce:hidden">
        <div
          ref={progressRef}
          className="h-px bg-violet-400 origin-left"
          style={{ transform: "scaleX(0)", width: "100%" }}
        />
      </div>
    </section>
  );
}
