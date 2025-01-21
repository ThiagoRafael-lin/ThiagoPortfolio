import React from "react";
import { BoxSkillTools } from "./BoxSkillTools";

export const SkillsTools = () => {
  return (
    <div className="flex flex-col h-screen text-[46px] text-[#fff] items-center">
      <h2 className="mb-12">
        Skills <span className="text-azul">&</span> Tools
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-10">
        <BoxSkillTools number="70%" tech="html" />
        <BoxSkillTools number="80%" tech="css" />
        <BoxSkillTools number="50%" tech="JavaScript" />
        <BoxSkillTools number="40%" tech="CSharp" />
        <BoxSkillTools number="80%" tech="Ux & Ui" />
        <BoxSkillTools number="70%" tech="React" />
        <BoxSkillTools number="70%" tech="Photoshop" />
        <BoxSkillTools number="70%" tech="Illustrator" />
        <BoxSkillTools number="90%" tech="Figma" />
        <BoxSkillTools number="70%" tech="After effects" />
        <BoxSkillTools number="80%" tech="Tailwind css" />
      </div>
    </div>
  );
};
