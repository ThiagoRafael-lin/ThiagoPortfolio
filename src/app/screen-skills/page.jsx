"use client";

import dynamic from "next/dynamic";
import { Skills } from "@/components/Skills";

const Header = dynamic(() => import("@/components/header").then(mod => ({ default: mod.Header })), { ssr: false });

export default function SkillsThiago() {
  return (
    <div>
      <Header />
      <Skills />
    </div>
  );
}
