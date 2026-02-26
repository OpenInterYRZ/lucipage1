import Badge from './Badge';
import FeatureCard from './FeatureCard';
import VideoMemoryScene from './scenes/VideoMemoryScene';
import AutoExecuteScene from './scenes/AutoExecuteScene';
import DataSovereigntyScene from './scenes/DataSovereigntyScene';

export default function DifferentiatorsSection() {
  return (
    <section className="bg-bg w-full flex flex-col gap-[60px] py-[100px] px-[80px]">
      {/* Header */}
      <div className="flex flex-col items-center gap-[24px]">
        <Badge
          text="Core Advantages"
          dotColor="#785DE1"
          textColor="#785DE1"
          bgColor="#785DE115"
        />
        <h2 className="text-primary font-serif text-[48px] tracking-[-1px] text-center">
          Three Core Differentiators
        </h2>
        <p className="text-secondary font-sans text-[18px] leading-[1.6] text-center">
          Not just a tool upgrade — a fundamental change in how you work
        </p>
      </div>

      {/* Cards Row */}
      <div className="flex gap-[24px] w-full">
        <FeatureCard
          scene={<VideoMemoryScene />}
          title="Video Memory, Not Just Text"
          description="Record meetings, fitness moves — LUCI understands video and builds memory. CEO auto-contacts available devs after meetings."
          badgeText="vs Limitless / Granola → text-only recording"
          badgeColor="#785DE110"
        />

        <FeatureCard
          scene={<AutoExecuteScene />}
          title="Auto-Execute, Not Just Record"
          description="Agents auto-invoked from memory to complete tasks — no manual steps. End-to-end automation from meeting to execution."
          badgeText="vs Limitless / Granola → record only, no execution"
          badgeColor="#22C55E10"
        />

        <FeatureCard
          scene={<DataSovereigntyScene />}
          title="Your Data, Your Control"
          description="Cloud-hosted (your VM) or self-hosted, built on open source OpenClaw. Open data format, export anytime."
          badgeText="vs ChatGPT → data locked by platform"
          badgeColor="#FF5C0010"
        />
      </div>
    </section>
  );
}
