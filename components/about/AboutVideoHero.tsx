"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutVideoHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const videoWrap = videoWrapRef.current;
    if (!section || !videoWrap) return;

    const ctx = gsap.context(() => {
      // Phase 1: Video shrinks from fullscreen to content size with rounded corners
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          pin: videoWrap,
        },
      });

      tl.to(videoWrap, {
        scale: 0.45,
        borderRadius: "2rem",
        ease: "power2.inOut",
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[200vh]">
      {/* Video container — pinned during scroll, shrinks from fullscreen */}
      <div
        ref={videoWrapRef}
        className="w-screen h-screen overflow-hidden will-change-transform"
        style={{ transformOrigin: "center center" }}
      >
        <video
          src="/videos/bounty.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
