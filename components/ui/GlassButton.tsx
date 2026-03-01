import Link from "next/link";

interface GlassButtonProps {
  href: string;
  text: string;
  className?: string;
}

export default function GlassButton({
  href,
  text,
  className = "",
}: GlassButtonProps) {
  return (
    <Link
      href={href}
      className={`backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 rounded-xl py-4 px-8 hover:bg-white/20 dark:hover:bg-black/30 transition-all inline-block ${className}`}
    >
      <span className="text-text-0 font-sans text-base font-semibold">
        {text}
      </span>
    </Link>
  );
}
