import React from "react";

// import Image from "next/image";

export const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center text-[#fff]">
      <h2 className="flex justify-center items-center text-[48px] font-comfortaa">
        My&nbsp; <span className="text-azul">Projects</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-3 mt-12">
        <div className="w-[35rem] h-72 border border-white">
          {/* <Image src={} alt="" /> */}
        </div>
        <div className="w-[35rem] h-72 border border-white ">
          {/* <Image src={} alt="" /> */}
        </div>
        <div className="w-[35rem] h-72 border border-white ">
          {/* <Image src={} alt="" /> */}
        </div>
        <div className="w-[35rem] h-72 border border-white ">
          {/* <Image src={} alt="" /> */}
        </div>
        <div className="w-[35rem] h-72 border border-white ">
          {/* <Image src={} alt="" /> */}
        </div>
        <div className="w-[35rem] h-72 border border-white ">
          {/* <Image src={} alt="" /> */}
        </div>
      </div>
    </div>
  );
};
