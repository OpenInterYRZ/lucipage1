"use client";
import { type ReactNode, useEffect, useRef } from "react";
import { gsap } from "gsap";

interface BounceCardsProps {
  className?: string;
  items?: ReactNode[];
  containerWidth?: number;
  containerHeight?: number;
  animationDelay?: number;
  animationStagger?: number;
  easeType?: string;
  transformStyles?: string[];
  enableHover?: boolean;
}

export default function BounceCards({
  className = "",
  items = [],
  containerWidth = 400,
  containerHeight = 600,
  animationDelay = 0.5,
  animationStagger = 0.06,
  easeType = "elastic.out(1, 0.8)",
  transformStyles = [
    "rotate(10deg) translateY(-170px)",
    "rotate(5deg) translateY(-85px)",
    "rotate(-3deg)",
    "rotate(-10deg) translateY(85px)",
    "rotate(2deg) translateY(170px)",
  ],
  enableHover = false,
}: BounceCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".card",
        { scale: 0 },
        {
          scale: 1,
          stagger: animationStagger,
          ease: easeType,
          delay: animationDelay,
        },
      );
    }, containerRef);
    return () => ctx.revert();
  }, [animationDelay, animationStagger, easeType]);

  const getNoRotationTransform = (transformStr: string): string => {
    const hasRotate = /rotate\([\s\S]*?\)/.test(transformStr);
    if (hasRotate) {
      return transformStr.replace(/rotate\([\s\S]*?\)/, "rotate(0deg)");
    } else if (transformStr === "none") {
      return "rotate(0deg)";
    } else {
      return `${transformStr} rotate(0deg)`;
    }
  };

  const getPushedTransform = (
    baseTransform: string,
    offsetY: number,
  ): string => {
    const translateRegex = /translateY\(([-0-9.]+)px\)/;
    const match = baseTransform.match(translateRegex);
    if (match) {
      const currentY = parseFloat(match[1]);
      const newY = currentY + offsetY;
      return baseTransform.replace(translateRegex, `translateY(${newY}px)`);
    } else {
      return baseTransform === "none"
        ? `translateY(${offsetY}px)`
        : `${baseTransform} translateY(${offsetY}px)`;
    }
  };

  const pushSiblings = (hoveredIdx: number) => {
    const q = gsap.utils.selector(containerRef);
    if (!enableHover || !containerRef.current) return;

    items.forEach((_, i) => {
      const selector = q(`.card-${i}`);
      gsap.killTweensOf(selector);

      const baseTransform = transformStyles[i] || "none";

      if (i === hoveredIdx) {
        const noRotation = getNoRotationTransform(baseTransform);
        gsap.to(selector, {
          transform: noRotation,
          duration: 0.4,
          ease: "back.out(1.4)",
          overwrite: "auto",
        });
      } else {
        const offsetY = i < hoveredIdx ? -160 : 160;
        const pushedTransform = getPushedTransform(baseTransform, offsetY);

        const distance = Math.abs(hoveredIdx - i);
        const delay = distance * 0.05;

        gsap.to(selector, {
          transform: pushedTransform,
          duration: 0.4,
          ease: "back.out(1.4)",
          delay,
          overwrite: "auto",
        });
      }
    });
  };

  const resetSiblings = () => {
    if (!enableHover || !containerRef.current) return;
    const q = gsap.utils.selector(containerRef);

    items.forEach((_, i) => {
      const selector = q(`.card-${i}`);
      gsap.killTweensOf(selector);

      const baseTransform = transformStyles[i] || "none";
      gsap.to(selector, {
        transform: baseTransform,
        duration: 0.4,
        ease: "back.out(1.4)",
        overwrite: "auto",
      });
    });
  };

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      ref={containerRef}
      style={{
        width: containerWidth,
        height: containerHeight,
      }}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className={`card card-${idx} absolute w-100 h-60 rounded-xl overflow-hidden`}
          style={{
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            transform: transformStyles[idx] || "none",
          }}
          onMouseEnter={() => pushSiblings(idx)}
          onMouseLeave={resetSiblings}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
