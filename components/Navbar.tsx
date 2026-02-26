export default function Navbar() {
  return (
    <nav className="flex items-center gap-[32px] h-[72px] px-[80px] w-full">
      {/* Logo */}
      <div className="text-brand font-mono text-[20px] font-semibold tracking-[4px]">
        LUCI
      </div>

      {/* Spacer */}
      <div className="h-[1px] flex-1" />

      {/* Nav Links */}
      <div className="flex items-center gap-[32px]">
        <a href="#features" className="text-[#8B8B90] font-sans text-[14px] hover:text-primary transition-colors">
          Features
        </a>
        <a href="#how-it-works" className="text-[#8B8B90] font-sans text-[14px] hover:text-primary transition-colors">
          How It Works
        </a>
        <a href="#compare" className="text-[#8B8B90] font-sans text-[14px] hover:text-primary transition-colors">
          Compare
        </a>
      </div>

      {/* CTA Button */}
      <div className="bg-brand rounded-[8px] py-[10px] px-[20px] hover:opacity-90 transition-opacity cursor-pointer">
        <span className="text-primary font-sans text-[13px] font-medium">
          Get Started
        </span>
      </div>
    </nav>
  );
}
