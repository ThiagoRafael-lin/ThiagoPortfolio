import React from "react";
import Image from "next/image";
import NextTalent from "@/assets/image/NextTalent.png";
import Link from "next/link";

import EyeViewer from "@/assets/icons/eye-solid.svg";
import AzureDevOps from "@/assets/icons/devops preto.svg";

export const ProjectsOne = ({
  title,
  description,
  tech1,
  tech2,
  tech3,
  tech4,
  tech5,
  tech6,
  tech7,
  tech8,
  tech9,
}) => {
  return (
    <div className="flex flex-col lg:flex-row w-full items-center pb-24 pt-24 px-12">
      <Image
        src={NextTalent}
        width={500}
        alt="imagem da event plus"
        className="rounded-xl"
      />
      <div className="font-comfortaa pl-0 lg:pl-12 flex flex-col gap-6 pt-6 lg:pt-0">
        <h2 className="font-comfortaaBold text-2xl text-[#211184] dark:text-purple-400">{title}</h2>
        <p className="text-black dark:text-white">{description}</p>
        <div className="flex gap-6 text-[#211184] dark:text-purple-400 flex-wrap">
          <p className="border-[2px] border-black dark:border-white p-2 text-[12px] font-comfortaaBold rounded-lg hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-white hover:transition-all">
            {tech1}
          </p>
          <p className="border-[2px] border-black dark:border-white p-2 text-[12px] font-comfortaaBold rounded-lg hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-white hover:transition-all ">
            {tech2}
          </p>
          <p className="border-[2px] border-black dark:border-white p-2 text-[12px] font-comfortaaBold rounded-lg hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-white hover:transition-all ">
            {tech3}
          </p>
          <p className="border-[2px] border-black dark:border-white p-2 text-[12px] font-comfortaaBold rounded-lg hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-white hover:transition-all ">
            {tech4}
          </p>
          <p className="border-[2px] border-black dark:border-white p-2 text-[12px] font-comfortaaBold rounded-lg hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-white hover:transition-all ">
            {tech5}
          </p>
          <p className="border-[2px] border-black dark:border-white p-2 text-[12px] font-comfortaaBold rounded-lg hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-white hover:transition-all ">
            {tech6}
          </p>
          <p className="border-[2px] border-black dark:border-white p-2 text-[12px] font-comfortaaBold rounded-lg hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-white hover:transition-all ">
            {tech7}
          </p>
          <p className="border-[2px] border-black dark:border-white p-2 text-[12px] font-comfortaaBold rounded-lg hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-white hover:transition-all ">
            {tech8}
          </p>
        </div>
        <div className="flex gap-6">
          <Link
            className="flex gap-2 items-center hover:underline text-black dark:text-white"
            href={"https://next-talent.vercel.app/"}
            target="_blank"
          >
            <Image
              src={EyeViewer}
              width={25}
              alt="icone de olho"
              className="dark:invert"
            />
            <p>Deploy</p>
          </Link>
          <Link
            className="flex gap-2 items-center hover:underline text-black dark:text-white"
            href={
              "https://dev.azure.com/NextTalent/_git/NextTalent?path=%2F&version=GBmain&_a=contents"
            }
            target="_blank"
          >
            <Image src={AzureDevOps} width={25} alt="icone do Azure DevOps" className="dark:invert" />
            <p>Azure DevOps</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
