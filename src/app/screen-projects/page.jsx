import { Header } from "@/components/header";
import { ProjectsLeft, ProjectsRight } from "@/components/Projects";

export default function Project() {
  return (
    <div>
      <Header />
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
  );
}
