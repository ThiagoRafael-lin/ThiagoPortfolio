"use client";

import { Header } from "@/components/header";
import { ProjectsFour } from "@/components/ProjectsFour";
import { ProjectsOne } from "@/components/ProjectsOne";
import { ProjectsThree } from "@/components/ProjectsThree";
import { ProjectsTwo } from "@/components/ProjectsTwo";
import gsap from "gsap/all";
import { useEffect, useRef } from "react";

export default function Project() {
  const OneProjectRef = useRef(null);
  const TwoProjectRef = useRef(null);
  const ThreeProjectRef = useRef(null);
  const FourProjectRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.7 } });
    const oneProject = OneProjectRef.current;
    const twoProject = TwoProjectRef.current;
    const threeProject = ThreeProjectRef.current;
    const fourProject = FourProjectRef.current;

    tl.fromTo(
      oneProject,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, delay: 0.5 }
    )
      .fromTo(twoProject, { opacity: 0, x: 100 }, { opacity: 1, x: 0 })
      .fromTo(threeProject, { opacity: 0, x: 100 }, { opacity: 1, x: 0 })
      .fromTo(fourProject, { opacity: 0, x: 100 }, { opacity: 1, x: 0 });
  }, []);
  return (
    <div>
      <Header />
      <div ref={OneProjectRef}>
        <ProjectsOne
          title={"Next Talent"}
          description={
            "Next Talent é uma plataforma inovadora que otimiza processos seletivos, tornando a experiência mais eficiente para recrutadores e candidatos. Com uma interface interativa, oferece uma seção exclusiva para vagas e facilita candidaturas. Para recrutadores, disponibiliza telas dinâmicas que agilizam a seleção. O diferencial é o uso de inteligência artificial para automatizar e otimizar etapas, garantindo um recrutamento mais rápido e assertivo."
          }
          tech1={"HTML"}
          tech2={"CSS"}
          tech3={"TypeScript"}
          tech4={"C#"}
          tech5={"API REST"}
          tech6={"MySQL"}
          tech7={"VS Code"}
          tech8={"VS Community"}
        />
      </div>
      <div ref={TwoProjectRef}>
        <ProjectsTwo
          title={"Eteriali"}
          description={
            "Eteriali é um projeto inovador que transforma itens orgânicos em diamantes eternos. Nosso site apresenta uma interface moderna e intuitiva, detalhando nosso processo de produção sustentável e a filosofia da marca."
          }
          tech1={"HTML"}
          tech2={"CSS"}
          tech3={"JavaScript"}
          tech4={"VS Code"}
        />
        <div ref={ThreeProjectRef}>
          <ProjectsThree
            title={"Event+"}
            description={
              "O Event+ é um site para organização de eventos que facilita a criação, o gerenciamento e a divulgação de seus eventos. Com uma interface intuitiva e diversas funcionalidades, o Event+ torna o planejamento de eventos uma tarefa simples e eficiente."
            }
            tech1={"HTML"}
            tech2={"CSS"}
            tech3={"JavaScript"}
            tech4={"C#"}
            tech5={"API REST"}
            tech6={"MySQL"}
            tech7={"VS Code"}
            tech8={"VS Community"}
          />
        </div>
        <div ref={FourProjectRef}>
          <ProjectsFour
            title={"Jogo do número secreto"}
            description={
              "SecretNumberQuest é um jogo simples onde o objetivo do usuário é descobrir um número secreto gerado aleatoriamente. O jogo foi desenvolvido com HTML, CSS e JavaScript, e serve como um exercício de lógica e manipulação de eventos."
            }
            tech1={"HTML"}
            tech2={"CSS"}
            tech3={"JavaScript"}
          />
        </div>
      </div>
    </div>
  );
}
