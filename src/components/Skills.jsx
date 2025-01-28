import Image from "next/image";
import React from "react";
import html from "@/assets/icons/html-5.png";
import ccs from "@/assets/icons/css-3.png";
import javascript from "@/assets/icons/js.png";
import next from "@/assets/icons/next-js.svg";
import tailwind from "@/assets/icons/tailwindcss-original.svg";
import gsap from "@/assets/icons/gsapLogo.webp";
import csharp from "@/assets/icons/Csharp.png";
import mysql from "@/assets/icons/development+logo+mysql+icon-1320184807686758112.png";
import react from "@/assets/icons/React-icon.svg.png";
import visualcode from "@/assets/icons/vscode-original.svg";
import visualcommunity from "@/assets/icons/visualstudio-original.svg";

export const Skills = () => {
  return (
    <div className="flex flex-col items-center pt-12 border-b-2">
      <div className="flex flex-col items-center">
        <h2 className="font-comfortaaBold text-4xl pb-8">Techs</h2>
        <div className="flex gap-12">
          <Image src={html} width={50} alt="" />
          <Image src={ccs} width={50} alt="" />
          <Image src={javascript} width={50} alt="" />
          <Image src={react} width={55} alt="" />
          <Image src={next} width={50} alt="" />
          <Image src={tailwind} width={50} alt="" />
          <Image src={gsap} width={50} alt="" className="rounded-full" />
          <Image src={csharp} width={50} alt="" />
          <Image src={mysql} width={50} alt="" />
        </div>
      </div>

      <div className="flex flex-col items-center py-12">
        <h2 className="font-comfortaaBold text-4xl pb-8">IDEs</h2>
        <div className="flex gap-12">
          <Image src={visualcode} width={50} alt="" />
          <Image src={visualcommunity} width={50} alt="" />
        </div>
      </div>
    </div>
  );
};
