"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const SHAPES = {
  node: (
    <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
      <circle cx="100" cy="100" r="92" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <circle cx="100" cy="100" r="62" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <circle cx="100" cy="100" r="6" fill="currentColor" />
      <circle cx="100" cy="8" r="3" fill="currentColor" />
      <circle cx="100" cy="192" r="3" fill="currentColor" />
      <circle cx="8" cy="100" r="3" fill="currentColor" />
      <circle cx="192" cy="100" r="3" fill="currentColor" />
      <line x1="100" y1="14" x2="100" y2="94" stroke="currentColor" strokeWidth="0.6" opacity="0.6" />
      <line x1="100" y1="106" x2="100" y2="186" stroke="currentColor" strokeWidth="0.6" opacity="0.6" />
      <line x1="14" y1="100" x2="94" y2="100" stroke="currentColor" strokeWidth="0.6" opacity="0.6" />
      <line x1="106" y1="100" x2="186" y2="100" stroke="currentColor" strokeWidth="0.6" opacity="0.6" />
    </svg>
  ),
  mesh: (
    <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
      <polygon points="100,20 170,60 170,140 100,180 30,140 30,60" stroke="currentColor" strokeWidth="0.9" opacity="0.5" />
      <polygon points="100,60 140,80 140,120 100,140 60,120 60,80" stroke="currentColor" strokeWidth="0.7" opacity="0.4" />
      <circle cx="100" cy="20" r="2.5" fill="currentColor" />
      <circle cx="170" cy="60" r="2.5" fill="currentColor" />
      <circle cx="170" cy="140" r="2.5" fill="currentColor" />
      <circle cx="100" cy="180" r="2.5" fill="currentColor" />
      <circle cx="30" cy="140" r="2.5" fill="currentColor" />
      <circle cx="30" cy="60" r="2.5" fill="currentColor" />
      <circle cx="100" cy="100" r="4" fill="currentColor" />
    </svg>
  ),
  pulse: (
    <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
      <circle cx="100" cy="100" r="20" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="0.9" opacity="0.55" strokeDasharray="3 6" />
      <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.7" opacity="0.35" strokeDasharray="2 8" />
      <circle cx="100" cy="100" r="3" fill="currentColor" />
    </svg>
  ),
  circuit: (
    <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
      <path d="M 20 100 L 70 100 L 70 60 L 130 60 L 130 140 L 180 140" stroke="currentColor" strokeWidth="1.2" />
      <path d="M 20 40 L 50 40 L 50 100" stroke="currentColor" strokeWidth="0.9" opacity="0.55" />
      <path d="M 180 40 L 150 40 L 150 80" stroke="currentColor" strokeWidth="0.9" opacity="0.55" />
      <circle cx="70" cy="60" r="4" fill="currentColor" />
      <circle cx="130" cy="60" r="4" fill="currentColor" />
      <circle cx="130" cy="140" r="4" fill="currentColor" />
      <circle cx="50" cy="100" r="3" fill="currentColor" />
      <circle cx="150" cy="80" r="3" fill="currentColor" />
    </svg>
  ),
  scanner: (
    <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
      <rect x="40" y="40" width="120" height="120" stroke="currentColor" strokeWidth="1" />
      <path d="M 40 40 L 60 40 M 40 40 L 40 60" stroke="currentColor" strokeWidth="2" />
      <path d="M 160 40 L 140 40 M 160 40 L 160 60" stroke="currentColor" strokeWidth="2" />
      <path d="M 40 160 L 60 160 M 40 160 L 40 140" stroke="currentColor" strokeWidth="2" />
      <path d="M 160 160 L 140 160 M 160 160 L 160 140" stroke="currentColor" strokeWidth="2" />
      <line x1="40" y1="100" x2="160" y2="100" stroke="currentColor" strokeWidth="0.8" opacity="0.6" strokeDasharray="4 4" />
    </svg>
  ),
};

export default function TechShape({
  variant = "node",
  className = "",
  size = 320,
  rotate = 90,
  y = -160,
  scrub = 1.2,
  opacity = 0.6,
  reverseRotate = false,
}) {
  const wrapRef = useRef(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el || !el.parentElement) return;
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          el,
          { rotate: 0, y: 0 },
          {
            rotate: reverseRotate ? -rotate : rotate,
            y,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub,
              invalidateOnRefresh: true,
            },
          }
        );
      });
    }, wrapRef);
    return () => ctx.revert();
  }, [rotate, y, scrub, reverseRotate]);

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className={`pointer-events-none absolute text-brand will-change-transform ${className}`}
      style={{ width: size, height: size, opacity }}
    >
      {SHAPES[variant]}
    </div>
  );
}
