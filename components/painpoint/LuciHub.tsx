"use client";
import React from "react";
import Image from "next/image";
import luciSvg from "./luci.svg";
export function LuciHub() {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Luci Logo */}
      <Image src={luciSvg} alt="Luci" className="w-24" />

      {/* Label */}
    </div>
  );
}
