import Image from "next/image";
import JogoSecreto from "@/assets/image/JogoSecreto.png";
import Link from "next/link";

import EyeViewer from "@/assets/icons/eye-solid.svg";
import Github from "@/assets/icons/github.svg";

export const ProjectsLeft = ({
  title,
  description,
  tech1,
  tech2,
  tech3,
  tech4,
  tech5,
}) => {
  return (
    <div className="flex flex-row w-full 500 items-center pb-24 pt-24 px-12">
      <Image
        src={JogoSecreto}
        width={500}
        alt="imagem do jogo numero secreto"
        className="rounded-xl"
      />
      <div className="font-comfortaa pl-12 flex flex-col gap-6 ">
        <h2 className="font-comfortaaBold text-2xl text-[#211184]">{title}</h2>
        <p>{description}</p>
        <div className="flex gap-6 text-[#211184]">
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
          <p className="border-[2px] border-black p-2 text-[12px] font-comfortaaBold rounded-lg hover:text-white hover:bg-black hover:transition-all ">
            {tech5}
          </p>
        </div>
        <div className="flex gap-6">
          <Link
            className="flex gap-2 items-center hover:underline"
            href={"https://jogo-numero-secreto-beta-murex.vercel.app/"}
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
            href={"https://github.com/ThiagoRafael-lin/SecretNumberQuest.git"}
          >
            <Image src={Github} width={25} alt="icone do github" />
            <p>Git Hub</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const ProjectsRight = ({
  title,
  description,
  tech1,
  tech2,
  tech3,
  tech4,
  tech5,
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
          <p className="border-[2px] border-black p-2 text-[12px] font-comfortaaBold rounded-lg hover:text-white hover:bg-black hover:transition-all ">
            {tech5}
          </p>
        </div>
        <div className="flex gap-6 justify-end">
          <Link
            className="flex gap-2 items-center hover:underline"
            href={"https://jogo-numero-secreto-beta-murex.vercel.app/"}
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
            href={"https://github.com/ThiagoRafael-lin/SecretNumberQuest.git"}
          >
            <Image src={Github} width={25} alt="icone do github" />
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
