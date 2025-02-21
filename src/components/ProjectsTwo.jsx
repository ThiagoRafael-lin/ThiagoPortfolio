import React from "react";
import Image from "next/image";
import Eteriali from "@/assets/image/Eteriali.png";
import Link from "next/link";

import EyeViewer from "@/assets/icons/eye-solid.svg";
import Github from "@/assets/icons/github.svg";

export const ProjectsTwo = ({
  title,
  description,
  tech1,
  tech2,
  tech3,
  tech4,
}) => {
  return (
    <div className="flex flex-row items-center w-full pb-24 px-12">
      <div className="font-comfortaa pr-12 flex flex-col  gap-6 text-end">
        <h2 className="font-comfortaaBold text-2xl text-[#211184]">{title}</h2>
        <p>{description}</p>
        <div className="flex gap-6 text-[#211184] justify-end">
          <p className="border-[2px] border-black p-2 text-[12px] font-comfortaaBold rounded-lg hover:text-white hover:bg-black hover:transition-all">
            {tech1}
          </p>
          <p className="border-[2px] border-black p-2 text-[12px] font-comfortaaBold rounded-lg hover:text-white hover:bg-black hover:transition-all ">
            {tech2}
          </p>
          <p className="border-[2px] border-black p-2 text-[12px] font-comfortaaBold rounded-lg hover:text-white hover:bg-black hover:transition-all ">
            {tech3}
          </p>
          <p className="border-[2px] border-black p-2 text-[12px] font-comfortaaBold rounded-lg hover:text-white hover:bg-black hover:transition-all ">
            {tech4}
          </p>
        </div>
        <div className="flex gap-6 justify-end">
          <Link
            className="flex gap-2 items-center hover:underline"
            href={"https://site-eteriali.vercel.app/"}
            target="_blank"
          >
            <Image
              src={EyeViewer}
              width={25}
              alt="icone de olho"
              className=""
            />
            <p>Deploy</p>
          </Link>
          <Link
            className="flex gap-2 items-center hover:underline"
            href={"https://github.com/ThiagoRafael-lin/SiteEteriali.git"}
            target="_blank"
          >
            <Image src={Github} width={25} alt="icone do github" />
            <p>Git Hub</p>
          </Link>
        </div>
      </div>
      <Image
        src={Eteriali}
        width={500}
        alt="Imagem do projeto numero secreto"
        className="rounded-xl"
      />
    </div>
  );
};
