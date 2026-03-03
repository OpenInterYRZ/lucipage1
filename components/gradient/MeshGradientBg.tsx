"use client";

/**
 * Full-page mesh-gradient background — purple + orange (CapCut style).
 *

 */
export default function MeshGradientBg({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={`relative ${className}`}>
      {/* Fixed gradient layer — stays in place while content scrolls over it */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: [
            // Top-left: purple blob
            "radial-gradient(ellipse 50% 35% at 10% 8%, rgba(232,208,255,0.5) 0%, transparent 70%)",
            // Top-center: light lavender
            "radial-gradient(ellipse 40% 30% at 50% 5%, rgba(245,232,255,0.4) 0%, transparent 70%)",
            // Top-right: warm peach
            "radial-gradient(ellipse 45% 35% at 90% 10%, rgba(255,214,194,0.5) 0%, transparent 70%)",
            // Mid-left: pink
            "radial-gradient(ellipse 35% 25% at 5% 35%, rgba(255,221,232,0.35) 0%, transparent 70%)",
            // Mid-right: light orange
            "radial-gradient(ellipse 35% 25% at 95% 30%, rgba(255,224,204,0.35) 0%, transparent 70%)",
            // Fade-to-white at bottom half
            "linear-gradient(to bottom, transparent 40%, white 75%)",
          ].join(", "),
          backgroundColor: "white",
        }}
      />
      {/* Content floats above */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
