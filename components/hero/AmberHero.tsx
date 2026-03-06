"use client";

import { useEffect, useRef } from "react";
import { motion, type Variants } from "framer-motion";

// ─── Animation variants ─────────────────────────────────────────────
const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.4 },
  },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Canvas-rendered amber orb ──────────────────────────────────────
function AmberOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const size = 640;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;

    // Memory specks — tiny particles drifting inside the amber
    const specks = Array.from({ length: 45 }, () => ({
      x: cx + (Math.random() - 0.5) * size * 0.35,
      y: cy + (Math.random() - 0.5) * size * 0.35,
      r: Math.random() * 1.4 + 0.4,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.35 + 0.08,
      phase: Math.random() * Math.PI * 2,
    }));

    function draw(t: number) {
      ctx!.clearRect(0, 0, size, size);

      const breath = 1 + Math.sin(t * 0.0006) * 0.025;
      const pulse = Math.sin(t * 0.0008) * 0.5 + 0.5;

      ctx!.save();
      ctx!.translate(cx, cy);
      ctx!.scale(breath, breath);
      ctx!.translate(-cx, -cy);

      // ── Layer 1: Deep warm core ──
      const core = ctx!.createRadialGradient(
        cx,
        cy * 0.96,
        0,
        cx,
        cy,
        size * 0.26,
      );
      core.addColorStop(0, `rgba(255, 185, 80, ${0.32 + pulse * 0.08})`);
      core.addColorStop(0.35, `rgba(210, 110, 10, ${0.18 + pulse * 0.04})`);
      core.addColorStop(0.65, "rgba(180, 85, 0, 0.05)");
      core.addColorStop(1, "transparent");
      ctx!.fillStyle = core;
      ctx!.fillRect(0, 0, size, size);

      // ── Layer 2: Off-center highlight (asymmetry = organic) ──
      const hl = ctx!.createRadialGradient(
        cx - 45,
        cy - 55,
        0,
        cx - 20,
        cy - 30,
        size * 0.2,
      );
      hl.addColorStop(0, `rgba(255, 210, 130, ${0.22 + pulse * 0.06})`);
      hl.addColorStop(0.5, "rgba(255, 165, 60, 0.06)");
      hl.addColorStop(1, "transparent");
      ctx!.fillStyle = hl;
      ctx!.fillRect(0, 0, size, size);

      // ── Layer 3: Secondary refraction (bottom-right) ──
      const ref2 = ctx!.createRadialGradient(
        cx + 65,
        cy + 50,
        0,
        cx + 65,
        cy + 50,
        size * 0.16,
      );
      ref2.addColorStop(0, `rgba(255, 145, 10, ${0.1 + pulse * 0.03})`);
      ref2.addColorStop(0.6, "rgba(200, 95, 0, 0.03)");
      ref2.addColorStop(1, "transparent");
      ctx!.fillStyle = ref2;
      ctx!.fillRect(0, 0, size, size);

      // ── Layer 4: Drifting memory specks ──
      const maxR = size * 0.22;
      for (const s of specks) {
        s.x += s.vx;
        s.y += s.vy;
        s.phase += 0.008;

        const dx = s.x - cx;
        const dy = s.y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > maxR) {
          s.x = cx + (dx / dist) * maxR * 0.85;
          s.y = cy + (dy / dist) * maxR * 0.85;
          s.vx *= -0.6;
          s.vy *= -0.6;
        }

        const flicker = Math.sin(s.phase + t * 0.0015) * 0.5 + 0.5;
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255, 215, 145, ${s.alpha * flicker})`;
        ctx!.fill();
      }

      // ── Layer 5: Outer haze ──
      const haze = ctx!.createRadialGradient(
        cx,
        cy,
        size * 0.2,
        cx,
        cy,
        size * 0.42,
      );
      haze.addColorStop(0, "transparent");
      haze.addColorStop(0.5, `rgba(255, 155, 70, ${0.025 + pulse * 0.01})`);
      haze.addColorStop(1, "transparent");
      ctx!.fillStyle = haze;
      ctx!.fillRect(0, 0, size, size);

      ctx!.restore();
      animRef.current = requestAnimationFrame(draw);
    }

    animRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none"
      style={{
        width: "min(640px, 90vw)",
        height: "min(640px, 90vw)",
      }}
    />
  );
}

// ─── Main component ─────────────────────────────────────────────────
export default function AmberHero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{
        minHeight: "100vh",
        backgroundColor: "#FAF8F5",
        fontFamily: "'Manrope', sans-serif",
      }}
    >
      {/* Grain texture */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full z-[2] opacity-[0.035]">
        <filter id="hero-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-grain)" />
      </svg>

      {/* Amber orb — centered, slightly below vertical center */}
      <div
        className="absolute inset-0 z-[1] flex items-center justify-center"
        style={{ paddingTop: "5vh" }}
      >
        <AmberOrb />
      </div>

      {/* Text content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6"
        style={{ maxWidth: "820px" }}
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={rise}
          className="tracking-[-0.035em]"
          style={{
            fontSize: "clamp(36px, 5.5vw, 72px)",
            fontWeight: 800,
            color: "#111111",
            lineHeight: 1.06,
          }}
        >
          Your AI that sees,
          <br />
          remembers, and acts.
        </motion.h1>

        <motion.p
          variants={rise}
          style={{
            fontSize: "clamp(14px, 1.15vw, 18px)",
            fontWeight: 400,
            color: "#666666",
            lineHeight: 1.65,
            maxWidth: "560px",
            marginTop: "28px",
          }}
        >
          Meet LUCI — a personal AI with its own memory. It&nbsp;connects
          your&nbsp;tools, understands your&nbsp;context, and gets things done.
          Privately, on&nbsp;your&nbsp;terms.
        </motion.p>

        <motion.div
          variants={rise}
          className="flex items-center gap-4"
          style={{ marginTop: "48px" }}
        >
          {/* Primary CTA */}
          <a
            href="/signup"
            className="inline-flex items-center justify-center rounded-lg text-[16px] font-semibold transition-all duration-300 hover:-translate-y-px"
            style={{
              padding: "14px 32px",
              backgroundColor: "#FF8C00",
              color: "#0A0A0A",
              fontFamily: "'Manrope', sans-serif",
              boxShadow: "0 1px 2px rgba(0,0,0,0.06)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#E67A00";
              e.currentTarget.style.boxShadow =
                "0 6px 28px rgba(255,140,0,0.28)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#FF8C00";
              e.currentTarget.style.boxShadow = "0 1px 2px rgba(0,0,0,0.06)";
            }}
          >
            Sign up for Cloud
          </a>

          {/* Secondary CTA */}
          <a
            href="/download"
            className="inline-flex items-center justify-center rounded-lg text-[16px] font-medium transition-all duration-300"
            style={{
              padding: "14px 32px",
              backgroundColor: "transparent",
              border: "1px solid rgba(17,17,17,0.12)",
              color: "#111111",
              fontFamily: "'Manrope', sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(17,17,17,0.03)";
              e.currentTarget.style.borderColor = "rgba(17,17,17,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.borderColor = "rgba(17,17,17,0.12)";
            }}
          >
            Download Loca
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(153,153,153,0.35)"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <path d="M7 10l5 5 5-5" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
