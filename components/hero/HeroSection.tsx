"use client";

import { useRef } from "react";
import Badge from "../Badge";
import ProductMockup from "../ProductMockup";
import GradientButton from "../ui/GradientButton";
import GlassButton from "../ui/GlassButton";

export default function HeroSection() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    if (!backgroundRef.current) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    const maxOffset = 14;
    const offsetX = x * maxOffset;
    const offsetY = y * maxOffset;

    backgroundRef.current.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    if (!backgroundRef.current) return;
    backgroundRef.current.style.transform = "translate3d(0, 0, 0) scale(1.05)";
  };

  return (
    <section
      className="bg-bg-0 relative w-full overflow-hidden flex flex-col items-center gap-12 py-25 px-20"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-center bg-cover transition-transform duration-300 ease-out"
        style={{ backgroundImage: "url('/3.webp')", transform: "scale(1.05)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-bg-0/55 pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative z-10 w-full flex flex-col items-center gap-12">
        {/* Badge */}
        <Badge text="Personal AI Assistant" />

        {/* Hero Title */}
        <h1 className="text-text-0 font-serif text-7xl tracking-tight text-center">
          See, Remember & Act
        </h1>

        {/* Hero Subtitle */}
        <p className="text-text-1 font-sans text-xl leading-relaxed text-center max-w-3xl">
          LUCI remembers everything, then gets things done automatically.
          <br />
          Not just a note-taking tool — it&apos;s a personal AI assistant that
          builds memory and executes tasks.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4">
          {/* Primary CTA */}
          <GradientButton href="/signup" text="Sign Up for Cloud →" />

          {/* Secondary CTA */}
          <GlassButton href="/download" text="Download Local ↓" />
        </div>

        {/* Product Mockup */}
        <ProductMockup />

        {/* Trust Row */}
        <div className="flex items-center justify-center gap-10 w-full pt-10">
          <span className="text-text-3 font-sans text-xs font-medium tracking-wide">
            Built on open source
          </span>
          <div className="h-4 w-px bg-grey-2" />
          <span className="text-text-2 font-mono text-xss font-medium">
            OpenClaw
          </span>
          <div className="h-4 w-px bg-grey-2" />
          <span className="text-text-2 font-mono text-xss font-medium">
            Memories.ai
          </span>
          <div className="h-4 w-px bg-grey-2" />
          <span className="text-text-2 font-mono text-xss font-medium">
            Self-hosted
          </span>
        </div>
      </div>
    </section>
  );
}
