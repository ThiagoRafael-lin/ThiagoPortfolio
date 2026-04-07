"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/header").then(mod => ({ default: mod.Header })), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const nameRef = useRef(null);
  const professionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.7 } });

    const name = nameRef.current;
    const profession = professionRef.current;

    tl.fromTo(
      name,
      {
        opacity: 0,
        y: 100,
      },
      { opacity: 1, y: 0, delay: 0.5 }
    ).fromTo(
      profession,
      {
        opacity: 0,
        y: 100,
      },
      { opacity: 1, y: 0 },
      "-=0.7"
    );
  }, []);

  // useGSAP(() => {
  //   const project = gsap.utils.toArray(scrollRefLeft.current.children);

  //   project.forEach((projectLeft) => {
  //     gsap.to(projectLeft, {
  //       opacity: 1,
  //       scrollTrigger: {
  //         trigger: projectLeft,
  //         start: "-20%, center",
  //         end: "top 20%",
  //         markers: true,
  //         scrub: true,
  //       },
  //     });
  //   });
  // });

  // useGSAP(() => {
  //   const project = gsap.utils.toArray(scrollRefRight.current.children);

  //   project.forEach((projectRight) => {
  //     gsap.to(projectRight, {
  //       opacity: 1,
  //       scrollTrigger: {
  //         trigger: projectRight,
  //         start: "-20%, center",
  //         end: "top 20%",
  //         // markers: true,
  //         scrub: true,
  //       },
  //     });
  //   });
  // });

  return (
    <div>
      <Header />
      <div
        className="flex flex-col items-center justify-center gap-7 pt-48"
        ref={nameRef}
      >
        <h2 className="text-black dark:text-white text-8xl font-comfortaa bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text">Thiago Rafael</h2>
        <p
          ref={professionRef}
          className="font-comfortaa text-3xl text-gray-400 dark:text-gray-500"
        >
          Desenvolvedor FullStack
        </p>
        <div className="flex gap-6 flex-col lg:flex-row">
          <Button
            className="bg-accent-primary text-white hover:opacity-90 dark:hover:opacity-80 border-0 rounded-lg font-comfortaa"
            variant="default"
          >
            <a href="/ThiagoDominguesRafael.pdf" download>
              Baixar currículo
            </a>
          </Button>
          <Link href="/screen-projects">
            <Button
              className="bg-accent-secondary text-white hover:opacity-90 dark:hover:opacity-80 border-0 rounded-lg font-comfortaa"
              variant="default"
            >
              Projetos
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
