'use client';

import dynamic from 'next/dynamic';
import NextTalent from '@/assets/image/NextTalent.png';
import Eteriali from '@/assets/image/Eteriali.png';
import Event from '@/assets/image/Event+.png';
import JogoSecreto from '@/assets/image/JogoSecreto.png';
import AzureDevOps from '@/assets/icons/devops preto.svg';
import { ProjectCard } from '@/components/ProjectCard';
import gsap from 'gsap/all';
import { useEffect, useRef } from 'react';

const Header = dynamic(() => import('@/components/header').then(mod => ({ default: mod.Header })), { ssr: false });

const projectsData = [
  {
    id: 1,
    title: 'Next Talent',
    description:
      'Next Talent é uma plataforma inovadora que otimiza processos seletivos, tornando a experiência mais eficiente para recrutadores e candidatos. Com uma interface interativa, oferece uma seção exclusiva para vagas e facilita candidaturas. Para recrutadores, disponibiliza telas dinâmicas que agilizam a seleção. O diferencial é o uso de inteligência artificial para automatizar e otimizar etapas.',
    technologies: ['HTML', 'CSS', 'TypeScript', 'C#', 'API REST', 'MySQL', 'VS Code', 'VS Community'],
    image: NextTalent,
    imageAlt: 'Next Talent Platform',
    links: [
      { label: 'Deploy', url: 'https://next-talent.vercel.app/' },
      { label: 'Azure DevOps', url: 'https://dev.azure.com/NextTalent/_git/NextTalent?path=%2F&version=GBmain&_a=contents' }
    ]
  },
  {
    id: 2,
    title: 'Eteriali',
    description:
      'Eteriali é um projeto inovador que transforma itens orgânicos em diamantes eternos. Nosso site apresenta uma interface moderna e intuitiva, detalhando nosso processo de produção sustentável e a filosofia da marca.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'VS Code'],
    image: Eteriali,
    imageAlt: 'Eteriali',
    links: [
      { label: 'Deploy', url: 'https://site-eteriali.vercel.app/' },
      { label: 'GitHub', url: 'https://github.com/ThiagoRafael-lin/SiteEteriali.git' }
    ]
  },
  {
    id: 3,
    title: 'Event+',
    description:
      'O Event+ é um site para organização de eventos que facilita a criação, o gerenciamento e a divulgação de seus eventos. Com uma interface intuitiva e diversas funcionalidades, o Event+ torna o planejamento de eventos uma tarefa simples e eficiente.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'C#', 'API REST', 'MySQL', 'VS Code', 'VS Community'],
    image: Event,
    imageAlt: 'Event+ Platform',
    links: [
      { label: 'Deploy', url: 'https://event-plus-pi.vercel.app/' },
      { label: 'GitHub', url: 'https://github.com/ThiagoRafael-lin/Event-Plus.git' }
    ]
  },
  {
    id: 4,
    title: 'Jogo do número secreto',
    description:
      'SecretNumberQuest é um jogo simples onde o objetivo do usuário é descobrir um número secreto gerado aleatoriamente. O jogo foi desenvolvido com HTML, CSS e JavaScript, e serve como um exercício de lógica e manipulação de eventos.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: JogoSecreto,
    imageAlt: 'Jogo do Número Secreto',
    links: [
      { label: 'Deploy', url: 'https://jogo-numero-secreto-beta-murex.vercel.app/' },
      { label: 'GitHub', url: 'https://github.com/ThiagoRafael-lin/SecretNumberQuest.git' }
    ]
  }
];

export default function Project() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 }
      );
    }
  }, []);

  return (
    <div>
      <Header />

      <div ref={containerRef} className="px-4 lg:px-12 py-16">
        {/* Título da seção */}
        <div className="text-center mb-16">
          <h1 className="font-comfortaaBold text-4xl lg:text-5xl text-black dark:text-white mb-4">
            Meus Projetos
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg font-comfortaa max-w-2xl mx-auto">
            Aqui você encontra alguns dos meus projetos mais recentes. Cada um representa meu aprendizado e dedicação em desenvolvimento.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
              imageAlt={project.imageAlt}
              links={project.links}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
