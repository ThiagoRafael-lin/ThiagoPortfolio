"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProjectsLeft, ProjectsRight } from "@/components/ProjectsLeft";
import { Header } from "@/components/header"; //Possivel erro no header na hora de deploy
import { Button } from "@/components/ui/button";
import Link from "next/link";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const nameRef = useRef(null);
  const professionRef = useRef(null);
  const scrollRefLeft = useRef(null);
  const scrollRefRight = useRef(null);

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
        className="flex flex-col items-center justify-center gap-7 pt-48
        "
        ref={nameRef}
      >
        <h2 className="text-black text-8xl font-comfortaa">Thiago Rafael</h2>
        <p
          ref={professionRef}
          className="font-comfortaa text-3xl text-gray-400"
        >
          Desenvolvedor FullStack
        </p>
        <div className="flex gap-6">
          <Button
            className="bg-transparent border-black  text-black rounded-lg font-comfortaa"
            variant="outline"
          >
            <a href="/ThiagoDominguesRafael.pdf" download>
              Download curriculum
            </a>
          </Button>
          <Link href="/screen-projects">
            <Button
              className="bg-transparent border-black  text-black rounded-lg font-comfortaa"
              variant="outline"
            >
              Projetos
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
