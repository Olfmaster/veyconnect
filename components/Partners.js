"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/gsap";

const logos = [
  { name: "Gira", src: "/partner/gira_logo.jpg" },
  { name: "Hager", src: "/partner/hager_logo.jpg" },
  { name: "Siedle", src: "/partner/siedle_logo.jpg" },
  { name: "Doorbird", src: "/partner/doorbird_logo.jpg" },
  { name: "Dahua", src: "/partner/dahua_logo.jpg" },
  { name: "UniFi", src: "/partner/unifi_logo.jpg" },
];

export default function Partners() {
  const sectionRef = useRef(null);

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
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="partner"
      className="relative bg-base text-fg py-28 md:py-36 px-6 md:px-10 overflow-hidden border-t border-line/5"
      aria-label="Partner und Herstellermarken"
    >
      <div aria-hidden="true" className="absolute inset-0 tech-grid opacity-50" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-12 gap-8 mb-14">
          <p data-anim className="md:col-span-3 label-mono text-[#9162a4]">
            / Partner
          </p>
          <div className="md:col-span-9">
            <h2 data-anim className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] max-w-3xl leading-[1.05]">
              Hersteller, denen wir vertrauen — und die uns vertrauen.
            </h2>
            <p data-anim className="mt-5 max-w-2xl text-fg-muted leading-relaxed">
              Direkter Herstellerzugang, neueste Firmware, Original-Komponenten und
              Premium-Support für unsere Kund:innen.
            </p>
          </div>
        </div>

        {/* AJAX premium spotlight */}
        <div
          data-anim
          className="relative tech-corners rounded-3xl border border-[#9162a4]/25 bg-gradient-to-br from-surface via-surface to-base p-6 md:p-10 mb-14 overflow-hidden"
        >
          <span className="tc-tl" />
          <span className="tc-br" />
          <div aria-hidden="true" className="absolute inset-0 lime-glow opacity-60 pointer-events-none" />

          <div className="relative grid md:grid-cols-12 gap-8 md:gap-10 items-center">
            <div className="md:col-span-5">
              <span className="inline-flex items-center gap-2 label-mono text-[#9162a4] mb-5">
                <span aria-hidden="true" className="inline-block w-1.5 h-1.5 rounded-full bg-[#9162a4]" />
                Premium-Partner / Tier 01
              </span>
              <div className="bg-white rounded-2xl p-6 md:p-8 inline-flex items-center justify-center w-full max-w-[280px]">
                <Image
                  src="/partner/ajax_logo.jpg"
                  alt="AJAX Systems"
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-xl"
                  priority={false}
                />
              </div>
            </div>

            <div className="md:col-span-7">
              <h3 className="text-2xl md:text-4xl font-semibold tracking-[-0.02em] leading-tight">
                AJAX Systems — wireless security, perfected.
              </h3>
              <p className="mt-4 text-fg-muted leading-relaxed">
                Als <span className="text-fg font-medium">zertifizierter Premium-Partner</span>{" "}
                installieren und konfigurieren wir das komplette AJAX-Ökosystem:
                Funkalarmanlagen, Außensirenen, Bewegungs-, Glasbruch- und
                Brandmelder, Smart-Home-Steuerung — alles in einer App, alles
                verschlüsselt, alles wartungsarm.
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-2.5 text-sm text-fg-muted">
                {[
                  "Direkter Herstellerzugang",
                  "Originalkomponenten & Garantie",
                  "Schulungen & Firmware-Updates",
                  "Premium-Support 24/7",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <span aria-hidden="true" className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#9162a4] shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-4">
                <Link href="/partner" className="btn-tech btn-tech-solid">
                  <span>Mehr zu unseren Partnern</span>
                  <span aria-hidden="true">→</span>
                </Link>
                <Link href="/leistungen" className="btn-tech">
                  <span>AJAX im Einsatz</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Other logos grid — 200×200 source, rendered as square tiles */}
        <div data-anim className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="relative aspect-square rounded-xl overflow-hidden border border-line/5 hover:scale-[1.02] transition-transform"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <p data-anim className="mt-8 label-mono text-fg-faint text-center">
          ajax · gira · hager · siedle · doorbird · dahua · unifi · mobotix · hik vision · busch-jaeger · knx
        </p>
      </div>
    </section>
  );
}
