import Link from "next/link";

interface GradientButtonProps {
  href: string;
  text: string;
  className?: string;
}

export default function GradientButton({
  href,
  text,
  className = "",
}: GradientButtonProps) {
  return (
    <Link
      href={href}
      className={`bg-gradient-to-r from-[#ff9b26] to-[#ff0c00] rounded-2xl py-4 px-8 hover:scale-105 transition-all inline-block ${className}`}
    >
      <span className="text-white font-sans text-base font-bold">{text}</span>
    </Link>
  );
}
