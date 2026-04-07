import React from "react";
import Image from "next/image";
import JogoSecreto from "@/assets/image/JogoSecreto.png";
import Link from "next/link";

import EyeViewer from "@/assets/icons/eye-solid.svg";
import Github from "@/assets/icons/github.svg";

export const ProjectsFour = ({ title, description, tech1, tech2, tech3 }) => {
  return (
    <div className="flex flex-col lg:flex-row-reverse items-center w-full pb-24 px-12">
      <div className="font-comfortaa pr-0 lg:pr-12 flex flex-col gap-6 text-start lg:text-end pt-6 lg:pt-0">
        <h2 className="font-comfortaaBold text-2xl text-[#211184] dark:text-purple-400">{title}</h2>
        <p className="text-black dark:text-white">{description}</p>
        <div className="flex gap-6 text-[#211184] dark:text-purple-400 justify-start lg:justify-end flex-wrap">
          <p className="border-[2px] border-black dark:border-white p-2 text-[12px] font-comfortaaBold rounded-lg hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-white hover:transition-all">
            {tech1}
          </p>
          <p className="border-[2px] border-black dark:border-white p-2 text-[12px] font-comfortaaBold rounded-lg hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-white hover:transition-all ">
            {tech2}
          </p>
          <p className="border-[2px] border-black dark:border-white p-2 text-[12px] font-comfortaaBold rounded-lg hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-white hover:transition-all ">
            {tech3}
          </p>
        </div>
        <div className="flex gap-6 justify-start lg:justify-end">
          <Link
            className="flex gap-2 items-center hover:underline text-black dark:text-white"
            href={"https://jogo-numero-secreto-beta-murex.vercel.app/"}
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
            href={"https://github.com/ThiagoRafael-lin/SecretNumberQuest.git"}
            target="_blank"
          >
            <Image src={Github} width={25} alt="icone do github" className="dark:invert" />
            <p>Git Hub</p>
          </Link>
        </div>
      </div>
      <Image
        src={JogoSecreto}
        width={500}
        alt="Imagem do projeto numero secreto"
        className="rounded-xl"
      />
    </div>
  );
};
