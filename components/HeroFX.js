"use client";
import { useEffect, useRef } from "react";

// Interactive hero background:
//  - canvas particle field (slow, mouse-repulsion, connection-lines)
//  - hexagon-grid layer with hover-fill (CSS in globals.css)
//  - radial vignette so center stays readable

const PARTICLE_COLOR = "#a78bfa";
const LINE_COLOR_RGB = "196, 181, 253";

export default function HeroFX() {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const hexGridRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const hexGrid = hexGridRef.current;
    if (!wrap || !canvas || !hexGrid) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let raf;
    const mouse = { x: null, y: null, radius: 170 };

    function resize() {
      canvas.width = wrap.offsetWidth;
      canvas.height = wrap.offsetHeight;
    }

    class Particle {
      constructor(x, y, dx, dy, size) {
        this.x = x;
        this.y = y;
        this.dx = dx * 0.33;
        this.dy = dy * 0.33;
        this.size = size;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = PARTICLE_COLOR;
        ctx.fill();
      }
      update() {
        if (this.x > canvas.width || this.x < 0) this.dx = -this.dx;
        if (this.y > canvas.height || this.y < 0) this.dy = -this.dy;

        if (mouse.x != null && mouse.y != null) {
          const distX = mouse.x - this.x;
          const distY = mouse.y - this.y;
          const dist = Math.sqrt(distX * distX + distY * distY);
          if (dist < mouse.radius + this.size) {
            if (mouse.x < this.x && this.x < canvas.width - this.size * 10) this.x += 10;
            if (mouse.x > this.x && this.x > this.size * 10) this.x -= 10;
            if (mouse.y < this.y && this.y < canvas.height - this.size * 10) this.y += 10;
            if (mouse.y > this.y && this.y > this.size * 10) this.y -= 10;
          }
        }

        this.x += this.dx;
        this.y += this.dy;
        this.draw();
      }
    }

    function initParticles() {
      particles = [];
      const count = (canvas.height * canvas.width) / 9000 * 0.25;
      for (let i = 0; i < count; i++) {
        const size = Math.random() * 18 + 2;
        const x = Math.random() * (canvas.width - size * 4) + size * 2;
        const y = Math.random() * (canvas.height - size * 4) + size * 2;
        const dx = Math.random() * 5 - 2.5;
        const dy = Math.random() * 5 - 2.5;
        particles.push(new Particle(x, y, dx, dy, size));
      }
    }

    function connect() {
      const threshold = (canvas.width / 7) * (canvas.height / 7);
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dist = (a.x - b.x) ** 2 + (a.y - b.y) ** 2;
          if (dist < threshold) {
            const opacity = Math.max(0, 1 - dist / 20000);
            ctx.strokeStyle = `rgba(${LINE_COLOR_RGB}, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      raf = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) p.update();
      connect();
    }

    function buildHexGrid() {
      const W = wrap.offsetWidth;
      const H = wrap.offsetHeight;
      const rows = Math.ceil(H / 80) + 1;
      const cols = Math.ceil(W / 100) + 2;
      hexGrid.innerHTML = "";
      for (let r = 0; r < rows; r++) {
        const row = document.createElement("div");
        row.className = "vc-hex-row";
        for (let c = 0; c < cols; c++) {
          const hex = document.createElement("div");
          hex.className = "vc-hex";
          row.appendChild(hex);
        }
        hexGrid.appendChild(row);
      }
    }

    function onMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }
    function onMouseOut() {
      mouse.x = null;
      mouse.y = null;
    }
    function onResize() {
      resize();
      initParticles();
      buildHexGrid();
    }

    resize();
    initParticles();
    buildHexGrid();

    if (!prefersReduced) {
      animate();
    } else {
      for (const p of particles) p.draw();
      connect();
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseout", onMouseOut);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div ref={wrapRef} className="vc-hero-fx" aria-hidden="true">
      <canvas ref={canvasRef} className="vc-fx-canvas" />
      <div ref={hexGridRef} className="vc-fx-hex" />
      <div className="vc-fx-fade" />
    </div>
  );
}
