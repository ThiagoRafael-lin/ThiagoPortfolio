"use client";

import dynamic from "next/dynamic";
import { FormContact } from "@/components/form";

const Header = dynamic(() => import("@/components/header").then(mod => ({ default: mod.Header })), { ssr: false });

export default function Contact() {
  return (
    <div>
      <Header />
      <FormContact />
    </div>
  );
}
