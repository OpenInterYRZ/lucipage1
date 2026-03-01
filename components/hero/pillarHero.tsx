"use client";

import GradientButton from "../ui/GradientButton";
import GlassButton from "../ui/GlassButton";
import LightPillar from "../ui/LightPillar";

export default function PillarHero() {
  return (
    <section className="bg-bg-0 relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center gap-12 py-25 px-20">
      {/* Black overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40 z-[5]" />
      <div className="relative z-10 w-full flex flex-col items-center gap-12">
        {/* Hero Title */}
        <h1 className="text-text-0 text-7xl font-bold tracking-tight text-center">
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
      </div>
    </section>
  );
}
