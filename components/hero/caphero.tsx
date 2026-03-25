"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import GradientButton from "../ui/GradientButton";
import ProductShowcaseDesktop from "../showcase/ProductShowcaseDesktop";

export const CapHero = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div
      ref={ref}
      className="relative mx-auto flex flex-col items-center pt-24 pb-16 px-5 overflow-hidden"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/pb.webp')`,
          y: bgY,
        }}
      />

      {/* 白色蒙层 */}
      <div className="absolute inset-0 z-1 bg-white/30 pointer-events-none" />

      {/* 主要内容区 */}
      <div className="relative z-10 flex flex-col items-start w-full max-w-7xl mt-2 mb-12">
        {/* 1. 标题 */}
        <h1 className="text-text-0 text-[56px] font-semibold leading-[1.05] mt-12 tracking-tight ">
          See. Remember. Act.
        </h1>

        {/* 2. 副标题 */}
        <p className="text-text-1  text-base leading-[1.6] text-left max-w-[680px] mt-4 mb-8">
          LUCI is an all-purpose AI agent that understands your videos,
          <br />
          remembers your context, and automates your workflow.
        </p>

        {/* 3. 按钮组 */}
        <div className="flex gap-4">
          <GradientButton href="/download" text="Download for macOS" download />
        </div>
      </div>
      <ProductShowcaseDesktop />
    </div>
  );
};

export default CapHero;
