"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const partners = [
  "AJAX Systems",
  "Gira",
  "Hager",
  "Siedle",
  "Dahua",
  "Doorbird",
  "Unifi",
  "Mobotix",
  "HIK Vision",
  "Busch-Jaeger",
  "Schneider Electric",
  "KNX",
];

export default function Partners() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current.querySelectorAll("[data-anim]"),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const track = trackRef.current;
        if (!track) return;
        const totalWidth = track.scrollWidth / 2;
        gsap.to(track, { x: -totalWidth, duration: 40, ease: "none", repeat: -1 });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-white text-zinc-900 overflow-hidden border-b border-zinc-200"
      aria-label="Partner und Herstellermarken"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 mb-12 md:mb-16 grid md:grid-cols-12 gap-8">
        <p data-anim className="md:col-span-3 text-xs uppercase tracking-[0.3em] text-violet-600">
          Partner
        </p>
        <div className="md:col-span-9">
          <h2 data-anim className="text-3xl md:text-4xl font-semibold tracking-tight max-w-3xl leading-tight">
            Marken, denen wir <span className="italic font-light text-violet-600">vertrauen.</span>
          </h2>
          <p data-anim className="mt-4 max-w-2xl text-zinc-600 leading-relaxed">
            Wir arbeiten ausschließlich mit zertifizierten Herstellern aus
            Sicherheits- und Gebäudetechnik. Direkter Herstellerzugang,
            neueste Firmware, Original-Komponenten.
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
        <div
          ref={trackRef}
          className="flex gap-12 md:gap-16 whitespace-nowrap will-change-transform"
          aria-hidden="true"
        >
          {[...partners, ...partners].map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="shrink-0 flex items-center justify-center px-6 py-4 rounded-lg border border-zinc-200 bg-zinc-50"
            >
              <span className="text-xl md:text-2xl font-semibold tracking-tight text-zinc-700">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
