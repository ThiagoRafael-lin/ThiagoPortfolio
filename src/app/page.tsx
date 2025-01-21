import { AboutMe } from "@/components/aboutMe";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Presentation } from "@/components/presentation";
import { Projects } from "@/components/Projects";
import { SkillsTools } from "@/components/SkillsTools";
import React from "react";

export default function Home() {
  return (
    <div>
      <Header />
      <Presentation />
      <AboutMe />
      <SkillsTools />
      <Projects />
      <Footer />
    </div>
  );
}
