import { AboutMe } from "@/components/aboutMe";
import { Header } from "@/components/Header";
import { Presentation } from "@/components/presentation";
import { SkillsTools } from "@/components/SkillsTools";
import React from "react";

export default function Home() {
  return (
    <div>
      <Header />
      <Presentation />
      <AboutMe />
      <SkillsTools />
    </div>
  );
}
