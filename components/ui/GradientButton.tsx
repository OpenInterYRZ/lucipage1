"use client";

import { useRouter } from "next/navigation";

interface GradientButtonProps {
  href: string;
  text: string;
  className?: string;
  download?: boolean;
}

export default function GradientButton({
  href,
  text,
  className = "",
  download = false,
}: GradientButtonProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    if (!download) return;
    e.preventDefault();

    // Trigger file download
    const a = document.createElement("a");
    a.href = "/LUCI.dmg";
    a.download = "LUCI.dmg";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Navigate to success page
    router.push("/download/success");
  };

  if (download) {
    return (
      <button
        onClick={handleClick}
        className={`bg-text-0 rounded-lg py-2.5 px-6 hover:opacity-90 transition-all inline-block cursor-pointer ${className}`}
      >
        <span className="text-bg-0 text-sm font-semibold">{text}</span>
      </button>
    );
  }

  return (
    <a
      href={href}
      className={`bg-text-0 rounded-lg py-2.5 px-6 hover:opacity-90 transition-all inline-block ${className}`}
    >
      <span className="text-bg-0 text-sm font-semibold">{text}</span>
    </a>
  );
}
