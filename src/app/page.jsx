"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProjectsLeft, ProjectsRight } from "@/components/Projects";
import { Header } from "@/components/header"; //Possivel erro no header na hora de deploy
import { useGSAP } from "@gsap/react";
import { Skills } from "@/components/Skills";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const NameRef = useRef(null);
  const scrollRefLeft = useRef(null);
  const scrollRefRight = useRef(null);

  useEffect(() => {
    const name = NameRef.current;

    gsap.fromTo(
      name,
      {
        opacity: 0,
        y: -100,
      },
      { opacity: 1, y: 0, delay: 1.5 }
    );
  }, []);

  useGSAP(() => {
    const project = gsap.utils.toArray(scrollRefLeft.current.children);

    project.forEach((projectLeft) => {
      gsap.to(projectLeft, {
        opacity: 1,
        scrollTrigger: {
          trigger: projectLeft,
          start: "-20%, center",
          end: "top 20%",
          // markers: true,
          scrub: true,
        },
      });
    });
  });

  useGSAP(() => {
    const project = gsap.utils.toArray(scrollRefRight.current.children);

    project.forEach((projectRight) => {
      gsap.to(projectRight, {
        opacity: 1,
        scrollTrigger: {
          trigger: projectRight,
          start: "-20%, center",
          end: "top 20%",
          // markers: true,
          scrub: true,
        },
      });
    });
  });

  return (
    <div>
      <Header />
      <div
        className="flex h-screen flex-col items-center justify-center gap-7 pb-32 border-b-2"
        ref={NameRef}
      >
        <h2 className="text-black text-8xl font-comfortaa">Thiago Rafael</h2>
        <p className="font-comfortaa text-3xl text-gray-400">
          Desenvolvedor FullStack
        </p>
      </div>
      <div>
        <div ref={scrollRefLeft}>
          <ProjectsLeft
            title={"Jogo do número secreto"}
            description={
              "SecretNumberQuest é um jogo simples onde o objetivo do usuário é descobrir um número secreto gerado aleatoriamente. O jogo foi desenvolvido com HTML, CSS e JavaScript, e serve como um exercício de lógica e manipulação de eventos."
            }
            tech1={"html"}
            tech2={"css"}
            tech3={"javascript"}
            tech4={"visual studio code"}
            tech5={"lógica de programação"}
          />
        </div>
        <div ref={scrollRefRight}>
          <ProjectsRight
            title={"Jogo do número secreto"}
            description={
              "SecretNumberQuest é um jogo simples onde o objetivo do usuário é descobrir um número secreto gerado aleatoriamente. O jogo foi desenvolvido com HTML, CSS e JavaScript, e serve como um exercício de lógica e manipulação de eventos."
            }
            tech1={"html"}
            tech2={"css"}
            tech3={"javascript"}
            tech4={"visual studio code"}
            tech5={"lógica de programação"}
          />
        </div>
      </div>
    </div>
  );
}
