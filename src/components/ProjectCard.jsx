'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { Eye, Github } from 'lucide-react';

export const ProjectCard = ({
  title,
  description,
  technologies = [],
  image,
  imageAlt,
  links = [],
  index = 0
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, delay: index * 0.1 }
      );
    }
  }, [index]);

  const getLinkIcon = (label) => {
    if (label.toLowerCase().includes('deploy') || label.toLowerCase().includes('eye')) {
      return <Eye size={20} />;
    }
    return <Github size={20} />;
  };

  return (
    <div
      ref={cardRef}
      className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200 dark:border-slate-700"
    >
      {/* Imagem */}
      <div className="relative h-64 w-full overflow-hidden bg-gray-200 dark:bg-slate-700">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Conteúdo */}
      <div className="p-6 flex flex-col gap-4">
        {/* Título */}
        <h3 className="font-comfortaaBold text-2xl text-black dark:text-white">
          {title}
        </h3>

        {/* Descrição */}
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          {description}
        </p>

        {/* Tecnologias */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-comfortaa bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full border border-gray-300 dark:border-slate-600 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-2 border-t border-gray-200 dark:border-slate-700">
          {links.map((link, idx) => (
            <Link
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors font-comfortaa"
            >
              {getLinkIcon(link.label)}
              <span className="text-sm">{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
