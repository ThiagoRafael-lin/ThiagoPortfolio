import React from "react";
import Image from "next/image";
import DownloadIcon from "@/assets/Icon/DownloadIcon.svg";
import { Button } from "@/components/ui/button";

export const AboutMe = () => {
  return (
    <div className="flex flex-col justify-start items-start w-full h-screen pl-[10.9%]">
      <h2 className="font-comfortaa text-[#fff] text-[46px]">
        About <span className="text-azul">me</span>
      </h2>
      <Button
        className="border-[#fff] bg-[#000] text-[#fff] rounded-[12px] font-comfortaa"
        variant="outline"
      >
        <Image src={DownloadIcon} width={15} alt="Icone de download" />
        Download curriculum
      </Button>

      <div className="flex flex-col text-[#fff] font-comfortaa text-[16px]">
        <div className="flex bg-[#101010] rounded-[12px] py-4 mt-8">
          <div className="w-60">
            <p className="pl-4">Age</p>
          </div>
          <div>
            <p className="pr-3">19</p>
          </div>
        </div>

        <div className="flex rounded-[12px] py-4 my-6">
          <div className="w-60">
            <p className="pl-4">Residence</p>
          </div>
          <div>
            <p className="pr-3">Brazil</p>
          </div>
        </div>

        <div className="flex bg-[#101010] rounded-[12px] py-4">
          <div className="w-60">
            <p className="pl-4">E-mail</p>
          </div>
          <div>
            <p className="pr-3">thiagorafael2005@gmail.com</p>
          </div>
        </div>

        <div className="flex rounded-[12px] py-4 my-6">
          <div className="w-60">
            <p className="pl-4">Phone</p>
          </div>
          <div>
            <p className="pr-3">+55 (11) 98073-4391</p>
          </div>
        </div>

        <div className="flex bg-[#101010] rounded-[12px] py-4">
          <div className="w-60">
            <p className="pl-4">Freelance</p>
          </div>
          <div>
            <p className="pr-3">Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};
