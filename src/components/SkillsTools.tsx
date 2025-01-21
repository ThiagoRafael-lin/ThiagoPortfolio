import React from "react";
import { BoxSkillTools } from "./BoxSkillTools";

export const SkillsTools = () => {
  return (
    <div className="flex flex-col h-screen text-[46px] text-[#fff] items-center">
      <h2 className="mb-12">
        Skills <span className="text-azul">&</span> Tools
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        <BoxSkillTools />
        <BoxSkillTools />
        <BoxSkillTools />
        <BoxSkillTools />
        <BoxSkillTools />
        <BoxSkillTools />
        <BoxSkillTools />
        <BoxSkillTools />
        <BoxSkillTools />
        <BoxSkillTools />
        <BoxSkillTools />
      </div>
    </div>
  );
};
