"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const productItems = [
  { href: "/product/luci-pin", label: "LUCI Pin" },
  { href: "/product/desktop-app", label: "Desktop App" },
  { href: "/product/mobile-app", label: "Mobile App" },
];

const useCaseItems = [
  { href: "/use-cases/marketing", label: "Marketing" },
  { href: "/use-cases/sales", label: "Sales" },
  { href: "/use-cases/cross-functional", label: "Cross-functional" },
];

function Dropdown({
  label,
  items,
}: {
  label: string;
  items: { href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="group relative flex items-center gap-1 py-1 font-sans text-[13px] tracking-wide text-white/50 transition-colors duration-200 hover:text-white"
      >
        {label}
        <ChevronDown
          size={12}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-[#ff5c00] to-transparent transition-all duration-300 group-hover:w-full" />
      </button>

      <div
        className={`absolute left-1/2 top-full mt-3 -translate-x-1/2 min-w-[180px] rounded-xl border border-white/10 bg-black/90 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.5)] transition-all duration-200 ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"}`}
      >
        <div className="flex flex-col gap-0.5 p-1.5">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 font-sans text-[13px] text-white/60 transition-colors hover:bg-white/8 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed left-1/2 top-4 z-50 w-[min(1120px,calc(100%-24px))] -translate-x-1/2">
      <div className="relative flex h-[56px] items-center rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] px-4 shadow-[0_18px_50px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:px-5">
        {/* Glass highlight */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_18%_0%,rgba(255,255,255,0.15),transparent_50%),radial-gradient(circle_at_92%_120%,rgba(255,92,0,0.1),transparent_42%)]"
          aria-hidden="true"
        />

        {/* Logo */}
        <Link href="/" className="relative z-10 shrink-0">
          <Image src="/lucilogo.svg" alt="LUCI" width={72} height={28} />
        </Link>

        {/* Spacer */}
        <div className="relative z-10 flex-1" />

        {/* Desktop Nav Links */}
        <div className="relative z-10 hidden items-center gap-7 md:flex">
          <Dropdown label="Product" items={productItems} />
          <Dropdown label="Use Cases" items={useCaseItems} />
          <Link
            href="/pricing"
            className="group relative py-1 font-sans text-[13px] tracking-wide text-white/50 transition-colors duration-200 hover:text-white"
          >
            Pricing
            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-[#ff5c00] to-transparent transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/blog"
            className="group relative py-1 font-sans text-[13px] tracking-wide text-white/50 transition-colors duration-200 hover:text-white"
          >
            Blog
            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-[#ff5c00] to-transparent transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>

        {/* Divider */}
        <div className="relative z-10 mx-4 hidden h-5 w-px bg-white/10 md:block" />

        {/* CTA Button */}
        <Link
          href="/download"
          className="relative z-10 hidden rounded-xl bg-gradient-to-r from-[#ff9b26] to-[#ff0c00] px-4 py-2 transition-all duration-200 hover:scale-[1.04] hover:shadow-[0_0_20px_rgba(255,92,0,0.35)] active:scale-[0.97] md:inline-block"
        >
          <span className="font-sans text-sm font-semibold text-white">
            Get Started
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-10 ml-2 flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
        >
          <div className="flex w-4 flex-col items-center gap-[5px]">
            <span
              className={`h-px w-full bg-white transition-all duration-300 ${mobileOpen ? "translate-y-[3px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-full bg-white transition-all duration-300 ${mobileOpen ? "-translate-y-[3px] -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`mt-2 overflow-hidden rounded-2xl border border-white/10 bg-black/80 backdrop-blur-2xl transition-all duration-300 md:hidden ${mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 border-transparent"}`}
      >
        <div className="flex flex-col gap-1 p-3">
          {/* Product */}
          <p className="px-3 pt-2 pb-1 font-sans text-[11px] font-medium uppercase tracking-wider text-white/30">
            Product
          </p>
          {productItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2.5 font-sans text-sm text-white/60 transition-colors hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}

          <div className="my-1 h-px bg-white/10" />

          {/* Use Cases */}
          <p className="px-3 pt-2 pb-1 font-sans text-[11px] font-medium uppercase tracking-wider text-white/30">
            Use Cases
          </p>
          {useCaseItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2.5 font-sans text-sm text-white/60 transition-colors hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}

          <div className="my-1 h-px bg-white/10" />

          <Link
            href="/pricing"
            onClick={() => setMobileOpen(false)}
            className="rounded-lg px-3 py-2.5 font-sans text-sm text-white/60 transition-colors hover:bg-white/5 hover:text-white"
          >
            Pricing
          </Link>
          <Link
            href="/blog"
            onClick={() => setMobileOpen(false)}
            className="rounded-lg px-3 py-2.5 font-sans text-sm text-white/60 transition-colors hover:bg-white/5 hover:text-white"
          >
            Blog
          </Link>

          <div className="my-1 h-px bg-white/10" />

          <Link
            href="/download"
            onClick={() => setMobileOpen(false)}
            className="rounded-lg bg-gradient-to-r from-[#ff9b26] to-[#ff0c00] px-3 py-2.5 text-center font-sans text-sm font-semibold text-white"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
