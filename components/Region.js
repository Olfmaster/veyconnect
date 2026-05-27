"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const cities = [
  "Niederdorfelden",
  "Frankfurt am Main",
  "Offenbach",
  "Hanau",
  "Bad Vilbel",
  "Bad Homburg",
  "Maintal",
  "Bruchköbel",
  "Mühlheim",
  "Karben",
  "Friedberg",
  "Schöneck",
];

export default function Region() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current.querySelectorAll("[data-anim]"),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.05,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="region"
      className="relative py-32 md:py-40 px-6 md:px-10 bg-white text-zinc-900 overflow-hidden border-b border-zinc-200"
    >
      <div aria-hidden="true" className="absolute inset-0 dot-grid opacity-40" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p data-anim className="text-xs uppercase tracking-[0.3em] text-violet-600 mb-6">
            Servicegebiet
          </p>
          <h2 data-anim className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight max-w-sm">
            Vor Ort im Rhein-Main-Gebiet.
          </h2>
          <p data-anim className="mt-6 text-zinc-600 max-w-sm leading-relaxed">
            Hauptsitz in Niederdorfelden — wir sind in der Regel innerhalb
            weniger Tage vor Ort. Auch außerhalb dieser Liste sind wir auf
            Anfrage erreichbar.
          </p>
        </div>

        <ul className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-1 self-start">
          {cities.map((city) => (
            <li
              key={city}
              data-anim
              className="border-b border-zinc-200 py-4 text-sm md:text-base font-medium tracking-tight flex items-center justify-between text-zinc-800"
            >
              <span>{city}</span>
              <span aria-hidden="true" className="text-violet-500/70 text-xs">
                ●
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
