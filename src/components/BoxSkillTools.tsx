import React from "react";

type Props = {
  tech?: string;
  number?: string;
};

export const BoxSkillTools = ({ tech, number }: Props) => {
  return (
    <div>
      <div className="flex flex-col items-center border  px-24 py-5 font-comfortaa">
        <p className={`text-[32px] ${number}`}>{number}</p>
        <p className={`text-[16px] ${tech}`}>{tech}</p>
      </div>
    </div>
  );
};
