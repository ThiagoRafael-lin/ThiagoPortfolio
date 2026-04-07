"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import fotoThiago from "@/assets/image/fotoThiago 1.png";
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
