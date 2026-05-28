"use client";
import { useEffect, useRef } from "react";

// Lightweight particle field with connection lines + subtle mouse repulsion.
// Pure black background, white particles, lime-tinted connections to match brand.

const PARTICLE_COLOR = "rgba(255, 255, 255, 0.55)";
const LINE_RGB = "145, 98, 164"; // lime accent

export default function HeroFX() {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d");
    let raf;
    let particles = [];
    const mouse = { x: null, y: null, radius: 130 };
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      const w = wrap.offsetWidth;
      const h = wrap.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function init() {
      const w = wrap.offsetWidth;
      const h = wrap.offsetHeight;
      const target = Math.floor((w * h) / 14000);
      const count = Math.max(40, Math.min(120, target));
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          dx: (Math.random() - 0.5) * 0.35,
          dy: (Math.random() - 0.5) * 0.35,
          r: Math.random() * 1.6 + 0.6,
        });
      }
    }

    function step() {
      const w = wrap.offsetWidth;
      const h = wrap.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      // update + draw particles
      for (const p of particles) {
        if (p.x < 0 || p.x > w) p.dx *= -1;
        if (p.y < 0 || p.y > h) p.dy *= -1;
        if (mouse.x != null) {
          const ddx = p.x - mouse.x;
          const ddy = p.y - mouse.y;
          const d2 = ddx * ddx + ddy * ddy;
          if (d2 < mouse.radius * mouse.radius && d2 > 0) {
            const d = Math.sqrt(d2);
            const f = (mouse.radius - d) / mouse.radius;
            p.x += (ddx / d) * f * 1.4;
            p.y += (ddy / d) * f * 1.4;
          }
        }
        p.x += p.dx;
        p.y += p.dy;

        ctx.beginPath();
        ctx.fillStyle = PARTICLE_COLOR;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // connection lines
      const maxDist = 140;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < maxDist) {
            const alpha = (1 - d / maxDist) * 0.35;
            ctx.strokeStyle = `rgba(${LINE_RGB}, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(step);
    }

    function onMove(e) {
      const rect = wrap.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }
    function onLeave() {
      mouse.x = null;
      mouse.y = null;
    }
    function onResize() {
      resize();
      init();
    }

    resize();
    init();
    if (!prefersReduced) {
      raf = requestAnimationFrame(step);
    } else {
      // single static frame
      step();
      cancelAnimationFrame(raf);
    }
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div ref={wrapRef} className="vc-hero-fx" aria-hidden="true">
      <canvas ref={canvasRef} className="vc-fx-canvas" />
      <div className="vc-scanline" />
      <div className="vc-fx-fade" />
    </div>
  );
}
