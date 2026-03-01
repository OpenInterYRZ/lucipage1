import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import GradientButton from "./ui/GradientButton";

export default function Navbar() {
  return (
    <nav className="fixed left-1/2 top-4 z-50 w-[min(1120px,calc(100%-24px))] -translate-x-1/2">
      <div className="relative flex h-[64px] items-center rounded-[18px] border border-white/12 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] px-[14px] shadow-[0_18px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl md:px-[18px]">
        <div
          className="pointer-events-none absolute inset-0 rounded-[18px] bg-[radial-gradient(circle_at_18%_0%,rgba(255,255,255,0.2),transparent_50%),radial-gradient(circle_at_92%_120%,rgba(255,92,0,0.14),transparent_42%)]"
          aria-hidden="true"
        />

        {/* Logo */}
        <div className="relative z-10 text-brand font-mono text-[18px] font-semibold tracking-[3px] md:text-[20px] md:tracking-[4px]">
          LUCI
        </div>

        {/* Spacer */}
        <div className="relative z-10 h-[1px] flex-1" />

        {/* Nav Links */}
        <div className="relative z-10 hidden items-center gap-[26px] md:flex">
          <a
            href="/bird"
            className="text-[#a9a9ae] font-sans text-[13px] tracking-[0.2px] transition-colors hover:text-primary"
          >
            Bird
          </a>

          <a
            href="/sre"
            className="text-[#a9a9ae] font-sans text-[13px] tracking-[0.2px] transition-colors hover:text-primary"
          >
            sre
          </a>
        </div>

        {/* Theme Toggle */}

        {/* CTA Button */}
        <Link
          href="/signup"
          className="bg-gradient-to-r from-[#ff9b26] to-[#ff0c00] rounded-xl py-2 px-4 ml-4 transition-all inline-block"
        >
          <span className="text-white font-sans text-base font-bold">
            Get Started
          </span>
        </Link>
      </div>
    </nav>
  );
}
