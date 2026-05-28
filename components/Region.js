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
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="region"
      className="relative py-28 md:py-36 px-6 md:px-10 bg-[#050505] text-white overflow-hidden border-b border-white/5"
    >
      <div aria-hidden="true" className="absolute inset-0 tech-grid opacity-50" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p data-anim className="label-mono text-[#9162a4] mb-6">
            / Servicegebiet
          </p>
          <h2 data-anim className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] leading-[1.05] max-w-sm">
            Vor Ort im <span className="text-[#9162a4]">Rhein-Main-Gebiet.</span>
          </h2>
          <p data-anim className="mt-6 text-zinc-400 max-w-sm leading-relaxed">
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
              className="border-b border-white/10 py-4 text-sm md:text-base font-medium tracking-tight flex items-center justify-between text-zinc-200"
            >
              <span>{city}</span>
              <span aria-hidden="true" className="text-[#9162a4] text-xs">
                ●
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
