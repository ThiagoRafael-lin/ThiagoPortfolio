"use client";

import dynamic from "next/dynamic";
import About from "@/components/About";

const Header = dynamic(() => import("@/components/header").then(mod => ({ default: mod.Header })), { ssr: false });

export default function AboutMe() {
  return (
    <div>
      <Header />
      <About />
    </div>
  );
}
