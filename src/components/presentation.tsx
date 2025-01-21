import React from "react";
import Image from "next/image";
import ThiagoFotoPerfil from "@/assets/Image/FotoThiagoPefil.png";

export const Presentation = () => {
  return (
    <div className="flex justify-center items-center gap-[200px] w-full h-screen">
      <ul className="text-[#fff] text-[46px] font-comfortaa leading-[65px]">
        <li>
          <h1>Hello</h1>
        </li>
        <li>
          I&apos;m <span className="text-azul">Thiago</span>,
        </li>
        <li>FullStack Developer</li>
        <li className="font-Work_Sans">
          <span className="text-azul">&</span> Web Designer
        </li>
      </ul>
      <Image
        src={ThiagoFotoPerfil}
        alt="Imagem foto de perfil de Thiago"
        width={400}
        className=""
      />
    </div>
  );
};
