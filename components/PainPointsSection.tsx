import Badge from './Badge';
import BeforeCard from './BeforeCard';
import AfterCard from './AfterCard';

export default function PainPointsSection() {
  return (
    <section className="bg-bg w-full flex flex-col gap-[60px] py-[100px] px-[80px]">
      {/* Header */}
      <div className="flex flex-col items-center gap-[24px]">
        <Badge
          text="The Problem"
          dotColor="#EF4444"
          textColor="#EF4444"
          bgColor="#EF444418"
        />
        <h2 className="text-primary font-serif text-[48px] text-center">
          Tired of switching between tools?
        </h2>
        <p className="text-tertiary font-sans text-[18px] text-center">
          Your day: juggling 5 tools, scattered memory, low efficiency
        </p>
      </div>

      {/* Compare Row */}
      <div className="flex gap-[32px] w-full">
        {/* Before */}
        <BeforeCard />

        {/* Arrow */}
        <div className="bg-[#FF5C0018] rounded-full w-[64px] h-[64px] flex items-center justify-center flex-shrink-0 self-center">
          <span className="text-brand font-sans text-[28px] font-bold">
            →
          </span>
        </div>

        {/* After */}
        <AfterCard />
      </div>
    </section>
  );
}
