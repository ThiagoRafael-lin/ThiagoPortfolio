"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import Image from "next/image";
import html from "@/assets/icons/html-5.png";
import ccs from "@/assets/icons/css-3.png";
import javascript from "@/assets/icons/js.png";
import next from "@/assets/icons/next-js.svg";
import tailwind from "@/assets/icons/tailwindcss-original.svg";
import gsapIcon from "@/assets/icons/gsapLogo.webp";
import csharp from "@/assets/icons/Csharp.png";
import mysql from "@/assets/icons/development+logo+mysql+icon-1320184807686758112.png";
import react from "@/assets/icons/React-icon.svg.png";
import visualcode from "@/assets/icons/vscode-original.svg";
import visualcommunity from "@/assets/icons/visualstudio-original.svg";
import expo from "@/assets/icons/expo.svg";
import git from "@/assets/icons/git.svg";
import shadcn from "@/assets/icons/shadcnIcon.png";
import aspNetCore from "@/assets/icons/aspNetCore.svg";
import axios from "@/assets/icons/axiosIcon.png";
import styledComponents from "@/assets/icons/styled-components.svg";
import azureDevops from "@/assets/icons/azure-devops-svgrepo-com.svg";
import npm from "@/assets/icons/npm-icon.png";

export const Skills = () => {
  const frontRef = useRef(null);
  const backRef = useRef(null);
  const ideRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.7 } });

    const front = frontRef.current;
    const back = backRef.current;
    const ide = ideRef.current;

    tl.fromTo(front, { opacity: 0, y: -100 }, { opacity: 1, y: 0, delay: 0.3 })
      .fromTo(back, { opacity: 0, y: -100 }, { opacity: 1, y: 0 })
      .fromTo(ide, { opacity: 0, y: -100 }, { opacity: 1, y: 0 }, "-=0.7");
  }, []);
  return (
    <div className="flex justify-center items-start pt-32 gap-12 flex-wrap">
      <div ref={backRef} className="flex flex-col items-center">
        <h2 className="font-comfortaaBold text-2xl ">Backend</h2>
        <div className="flex gap-12 py-12">
          <div className="flex flex-col items-center">
            <Image src={csharp} width={40} alt="C#" />
            <p className="text-center text-sm mt-2 font-comfortaa">C#</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src={mysql} width={40} alt="MySQL" />
            <p className="text-center text-sm mt-2 font-comfortaa">MySQL</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={aspNetCore}
              width={40}
              alt="ASP.NET Core"
              className="rounded-full"
            />
            <p className="text-center text-sm mt-2 font-comfortaa">ASP.NET</p>
          </div>
        </div>
        <h2 className="font-comfortaaBold text-2xl ">Tools</h2>
        <div className="flex gap-12 py-12">
          <div className="flex flex-col items-center">
            <Image src={git} width={40} alt="Git" />
            <p className="text-center text-sm mt-2 font-comfortaa">Git</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src={npm} width={40} alt="Npm" />
            <p className="text-center text-sm mt-2 font-comfortaa">Npm</p>
          </div>
        </div>
      </div>

      <div
        ref={frontRef}
        className="flex flex-col items-center border-x-2 px-14"
      >
        <h2 className="font-comfortaaBold text-2xl ">Frontend</h2>
        <div className="flex flex-col gap-12 justify-center items-center py-12">
          <div className="flex gap-12">
            <div className="flex flex-col items-center">
              <Image src={html} width={40} alt="HTML" />
              <p className="text-center text-sm mt-2 font-comfortaa">HTML</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={ccs} width={40} alt="CSS" />
              <p className="text-center text-sm mt-2 font-comfortaa">CSS</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={javascript} width={40} alt="JavaScript" />
              <p className="text-center text-sm mt-2 font-comfortaa">JS</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={react} width={45} alt="React" />
              <p className="text-center text-sm mt-2 font-comfortaa">React</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={next} width={40} alt="Next.js" />
              <p className="text-center text-sm mt-2 font-comfortaa">Next</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={tailwind} width={40} alt="Tailwind CSS" />
              <p className="text-center text-sm mt-2 font-comfortaa">
                Tailwind
              </p>
            </div>
          </div>
          <div className="flex gap-12">
            <div className="flex flex-col items-center">
              <Image
                src={gsapIcon}
                width={40}
                alt="GSAP"
                className="rounded-full"
              />
              <p className="text-center text-sm mt-2 font-comfortaa">GSAP</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={expo} width={40} alt="Expo" />
              <p className="text-center text-sm mt-2 font-comfortaa">Expo</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={shadcn} width={40} alt="Shadcn" />
              <p className="text-center text-sm mt-2 font-comfortaa">Shadcn</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={axios}
                width={40}
                alt="Axios"
                className="rounded-full"
              />
              <p className="text-center text-sm mt-2 font-comfortaa">Axios</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={styledComponents}
                width={40}
                alt="Styled Components"
              />
              <p className="text-center text-sm mt-2 font-comfortaa">
                Styled-C
              </p>
            </div>
          </div>
        </div>
      </div>

      <div ref={ideRef} className="flex flex-col items-center">
        <h2 className="font-comfortaaBold text-2xl">IDEs</h2>
        <div className="flex gap-12 py-12">
          <div className="flex flex-col items-center">
            <Image src={visualcode} width={40} alt="Visual Studio Code" />
            <p className="text-center text-sm mt-2 font-comfortaa">VS Code</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={visualcommunity}
              width={40}
              alt="Visual Studio Community"
            />
            <p className="text-center text-sm mt-2 font-comfortaa">
              VS Community
            </p>
          </div>
        </div>
        <h2 className="font-comfortaaBold text-2xl">Methodologies</h2>
        <div className="flex gap-12 py-12">
          <div className="flex flex-col items-center">
            <Image src={azureDevops} width={40} alt="Azure DevOps" />
            <p className="text-center text-sm mt-2 font-comfortaa">DevOps</p>
          </div>
        </div>
      </div>
    </div>
  );
};
