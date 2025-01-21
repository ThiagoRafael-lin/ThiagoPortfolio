import React from "react";
import Image from "next/image";

import LogoThiago from "@/assets/Image/LogoThiago.svg";
import DownloadIcon from "@/assets/Icon/DownloadIcon.svg";
import SolIcon from "@/assets/Icon/SolIcon.svg";
import LuaIcon from "@/assets/Icon/LuaIcon.svg";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Image src={LogoThiago} alt="Logo do Thiago Rafael" />
        <ul className="text-[#fff] font-comfortaa flex flex-row gap-10">
          <li>
            <a href="about">About</a>
          </li>
          <li>
            <a href="skills">Skills</a>
          </li>
          <li>
            <a href="projects">Projects</a>
          </li>
        </ul>

        <div className="flex flex-row gap-5">
          <Button
            className="border-[#fff] bg-[#000] text-[#fff] rounded-[12px] font-comfortaa"
            variant="outline"
          >
            <Image src={DownloadIcon} width={15} alt="Icone de download" />
            Download curriculum
          </Button>

          <div className="flex flex-row items-center gap-2">
            <Image src={SolIcon} width={20} alt="Icone de Sol" />
            <Switch />
            <Image src={LuaIcon} width={20} alt="icone de Lua" />
          </div>

          <form className="max-w-sm mx-auto">
            <select
              id="countries"
              className="bg-transparent border border-[#fff] text-[#fff] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="pt" className="text-[black]">
                pt
              </option>
              <option className="text-[black]" value="en">
                en
              </option>
              <option className="text-[black]" value="es">
                es
              </option>
            </select>
          </form>
        </div>
      </div>
    </>
  );
};
