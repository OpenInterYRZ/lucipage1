import Badge from './Badge';
import CompetitorCard from './CompetitorCard';
import LuciCard from './LuciCard';

export default function ComparisonSection() {
  return (
    <section className="bg-bg w-full flex flex-col items-center gap-[60px] py-[100px] px-[80px]">
      {/* Header */}
      <div className="flex flex-col items-center gap-[24px]">
        <Badge
          text="Why LUCI"
          dotColor="#FF5C00"
          textColor="#FF5C00"
          bgColor="#FF5C0015"
        />
        <h2 className="text-primary font-serif text-[48px] tracking-[-1px] text-center">
          Competitor Comparison
        </h2>
        <p className="text-secondary font-sans text-[18px] leading-[1.6] text-center">
          Others only record or only execute — LUCI is the only full-stack AI assistant
        </p>
      </div>

      {/* Compare Layout */}
      <div className="flex items-center gap-[32px] w-full">
        {/* Competitors Column */}
        <div className="flex-1 flex flex-col gap-[16px]">
          <span className="text-quaternary font-mono text-[13px] font-semibold tracking-[1px]">
            Other Tools
          </span>

          <CompetitorCard
            name="Limitless"
            tag="$35M funded"
            tagBg="#EF444415"
            tagColor="#EF4444"
            features={[
              { icon: '✓', iconColor: '#555558', text: 'Audio recording & transcription', textColor: '#555558' },
              { icon: '✗', iconColor: '#EF4444', text: 'No video memory', textColor: '#EF444480' },
              { icon: '✗', iconColor: '#EF4444', text: 'No auto-execution', textColor: '#EF444480' },
              { icon: '✗', iconColor: '#EF4444', text: 'Data locked in cloud', textColor: '#EF444480' },
            ]}
          />

          <CompetitorCard
            name="Granola"
            tag="Meeting notes"
            tagBg="#555558"
            tagColor="#0A0A0B"
            features={[
              { icon: '✓', iconColor: '#555558', text: 'Meeting notes generation', textColor: '#555558' },
              { icon: '✗', iconColor: '#EF4444', text: 'No Agent execution', textColor: '#EF444480' },
              { icon: '✗', iconColor: '#EF4444', text: 'No long-term memory', textColor: '#EF444480' },
            ]}
          />

          <CompetitorCard
            name="ChatGPT"
            tag="General AI"
            tagBg="#555558"
            tagColor="#0A0A0B"
            features={[
              { icon: '✓', iconColor: '#555558', text: 'Conversational AI Q&A', textColor: '#555558' },
              { icon: '~', iconColor: '#FF5C00', text: 'Limited Skills (plugins)', textColor: '#FF5C0080' },
              { icon: '✗', iconColor: '#EF4444', text: 'Data fully locked', textColor: '#EF444480' },
            ]}
          />
        </div>

        {/* VS */}
        <div className="flex flex-col items-center gap-[4px] w-[60px] flex-shrink-0">
          <span className="text-brand font-mono text-[28px] font-bold text-center">
            VS
          </span>
          <div className="bg-[#FF5C0040] w-[2px] h-[40px]" />
        </div>

        {/* LUCI Column */}
        <div className="flex-1">
          <LuciCard />
        </div>
      </div>
    </section>
  );
}
