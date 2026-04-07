"use client";

import Image from "next/image";
import LogoThiago from "@/assets/image/LogoThiago.png";
import { Button } from "./ui/button";
import Link from "next/link";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  const HeaderRef = useRef(null);
  const sideItensRef = useRef(null);
  const buttonRef = useRef(null);
  const themeButtonRef = useRef(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.7 } });

    const header = HeaderRef.current;
    const sideItens = sideItensRef.current;
    const button = buttonRef.current;
    const themeButton = themeButtonRef.current;

    if (header && sideItens && button && themeButton) {
      tl.fromTo(header, { opacity: 0, y: -100 }, { opacity: 1, y: 0 })
        .fromTo(sideItens, { opacity: 0, y: -100 }, { opacity: 1, y: 0 })
        .fromTo(button, { opacity: 0, y: -100 }, { opacity: 1, y: 0 }, "-=0.7")
        .fromTo(themeButton, { opacity: 0, y: -100 }, { opacity: 1, y: 0 }, "-=0.7");
    }
  }, []);

  return (
    <nav className="text-black dark:text-white flex justify-between lg:justify-center items-center gap-4 lg:gap-96 font-comfortaa pt-4 px-4 lg:px-0">
      <Link href="/">
        <Image
          ref={sideItensRef}
          src={LogoThiago}
          width={80}
          alt="Logo do Thiago Rafael"
          className="dark:invert"
        />
      </Link>

      {/* Desktop Menu */}
      <div ref={HeaderRef} className="hidden lg:flex gap-6">
        <Link
          href="/"
          className="hover:text-gray-400 hover:underline transition-all delay-75"
        >
          Início
        </Link>
        <Link
          href="/screen-projects"
          className="hover:text-gray-400 hover:underline transition-all delay-75"
        >
          Projetos
        </Link>
        <Link
          href="/screen-skills"
          className="hover:text-gray-400 hover:underline transition-all delay-75"
        >
          Habilidades
        </Link>
        <Link
          href="/screen-about"
          className="hover:text-gray-400 hover:underline transition-all delay-75"
        >
          Sobre mim
        </Link>
      </div>

      {/* Desktop Contact Button + Theme Toggle */}
      <div className="hidden lg:flex gap-4 items-center">
        <button
          ref={themeButtonRef}
          onClick={toggleTheme}
          className="text-2xl hover:opacity-70 transition-opacity"
          aria-label="Alternar tema"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <Link href="/screen-contact">
          <Button
            ref={buttonRef}
            className="bg-transparent border-black dark:border-white text-black dark:text-white rounded-lg font-comfortaa hover:bg-gray-100 dark:hover:bg-gray-800"
            variant="outline"
          >
            Contato
          </Button>
        </Link>
      </div>

      {/* Mobile Menu + Theme Toggle */}
      <div className="lg:hidden flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="text-2xl hover:opacity-70 transition-opacity"
          aria-label="Alternar tema"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <MobileMenu />
      </div>
    </nav>
  );
};
