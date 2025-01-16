import Image from "next/image";
import React from "react";

import LogoThiago from "@/assets/Image/LogoThiago.svg";
import DownloadIcon from "@/assets/Icon/DownloadIcon.svg";
import SolIcon from "@/assets/Icon/SolIcon.svg";
import LuaIcon from "@/assets/Icon/LuaIcon.svg";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Image src={LogoThiago} alt="Logo do Thiago Rafael" />
        <ul className="text-[#fff] font-comfortaa flex flex-row gap-10">
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
        </ul>

        <div className="flex flex-row gap-5">
          <Button
            className="border-[#fff] bg-[#000] text-[#fff] rounded-[12px] font-comfortaa"
            variant="outline"
          >
            <Image src={DownloadIcon} width={15} alt="Icone de download" />
            Download cv
          </Button>

          <Select>
            <SelectTrigger className="w-[65px] bg-black text-white rounded-[12px]">
              <SelectValue placeholder="pt" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pt">pt</SelectItem>
              <SelectItem value="en">en</SelectItem>
              <SelectItem value="es">es</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex flex-row items-center gap-2">
            <Image src={SolIcon} width={20} alt="Icone de Sol" />
            <Switch />
            <Image src={LuaIcon} width={20} alt="icone de Lua" />
          </div>
        </div>
      </div>
    </>
  );
};
