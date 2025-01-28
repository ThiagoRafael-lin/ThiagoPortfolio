"use client";

import Image from "next/image";
import LogoThiago from "@/assets/image/LogoThiago.png";
import { Button } from "./ui/button";
import Link from "next/link";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export const Header = () => {
  const HeaderRef = useRef(null);
  const sideItensRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    const header = HeaderRef.current;
    const sideItens = sideItensRef.current;
    const button = buttonRef.current;

    tl.fromTo(header, { opacity: 0, y: -100 }, { opacity: 1, y: 0 })
      .fromTo(sideItens, { opacity: 0, y: -100 }, { opacity: 1, y: 0 })
      .fromTo(button, { opacity: 0, y: -100 }, { opacity: 1, y: 0 }, "-=1.1");
  }, []);

  return (
    <nav className="text-black flex justify-center gap-96 font-comfortaa items-center pt-4">
      <Image
        ref={sideItensRef}
        src={LogoThiago}
        width={80}
        alt="Logo do Thiago Rafael"
      />
      <div ref={HeaderRef} className="flex gap-6">
        <Link
          href="/"
          className="hover:text-gray-400 hover:underline transition-all delay-75"
        >
          Projects
        </Link>
        <Link
          href="/tela-skills"
          className="hover:text-gray-400 hover:underline transition-all delay-75"
        >
          Skills
        </Link>
        <Link
          href=""
          className="hover:text-gray-400 hover:underline transition-all delay-75"
        >
          About Me
        </Link>
      </div>
      <Button
        ref={buttonRef}
        className="bg-transparent border-black  text-black rounded-lg font-comfortaa "
        variant="outline"
      >
        Contact
      </Button>
    </nav>
  );
};
