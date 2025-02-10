"use client";

import { Header } from "@/components/header";
import { ProjectsLeft } from "@/components/ProjectsLeft";
import { ProjectsRight } from "@/components/ProjectsRight";
import gsap from "gsap/all";
import { useEffect, useRef } from "react";

export default function Project() {
  const LeftProjectRef = useRef(null);
  const RightProjectRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.7 } });
    const leftProject = LeftProjectRef.current;
    const rightProject = RightProjectRef.current;

    tl.fromTo(
      leftProject,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, delay: 0.5 }
    ).fromTo(rightProject, { opacity: 0, x: 100 }, { opacity: 1, x: 0 });
  }, []);
  return (
    <div>
      <Header />
      <div ref={LeftProjectRef}>
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
      <div ref={RightProjectRef}>
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
  );
}
