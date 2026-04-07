"use client";

import React, { useRef } from "react";
import Image from "next/image";
import fotoThiago from "@/assets/image/FotoThiagoPerfil.jpg";
import { useEffect } from "react";
import gsap from "gsap";

export default function About() {
  const photoRef = useRef(null);
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const FormationsRef = useRef(null);
  const localityRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.7 } });

    const photo = photoRef.current;
    const name = nameRef.current;
    const age = ageRef.current;
    const formations = FormationsRef.current;
    const locality = localityRef.current;

    tl.fromTo(
      photo,
      {
        opacity: 0,
        y: -100,
      },
      { opacity: 1, y: 0, delay: 0.3 },
    )
      .fromTo(
        name,
        {
          opacity: 0,
          y: -100,
        },
        { opacity: 1, y: 0 },
        "-=0.5",
      )
      .fromTo(
        age,
        {
          opacity: 0,
          y: -100,
        },
        { opacity: 1, y: 0 },
        "-=0.5",
      )
      .fromTo(
        formations,
        {
          opacity: 0,
          y: -100,
        },
        { opacity: 1, y: 0 },
        "-=0.5",
      )
      .fromTo(
        locality,
        {
          opacity: 0,
          y: -100,
        },
        { opacity: 1, y: 0 },
        "-=0.5",
      );
  }, []);

  return (
    <div className="px-4 lg:px-12 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="font-comfortaaBold text-sm uppercase tracking-[0.3em] text-accent-primary mb-4">
            Sobre mim
          </p>
          <h1 className="text-5xl lg:text-6xl font-comfortaaBold text-black dark:text-white">
            Desenvolvedor FullStack em formação
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-lg leading-8">
            Oi, sou o Thiago e sempre fui fascinado pela forma como a tecnologia
            pode simplificar o dia a dia, criando aplicações que unem estruturas
            sólidas a um design limpo e intuitivo. Meu foco é entregar clareza e
            confiança em cada linha de código.{" "}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[360px_1fr] items-center rounded-[2rem] border border-gray-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 shadow-2xl shadow-slate-900/10 backdrop-blur-xl p-8">
          <div
            ref={photoRef}
            className="flex justify-center rounded-[2rem] overflow-hidden border-2 border-accent-primary/20 shadow-xl shadow-accent-primary/10"
          >
            <Image
              src={fotoThiago}
              alt="Foto do Thiago Rafael"
              className="h-full w-full object-cover"
              width={360}
              height={360}
            />
          </div>

          <div className="space-y-6 font-comfortaa text-black dark:text-white">
            <div className="grid gap-4 sm:grid-cols-2">
              <div
                ref={nameRef}
                className="rounded-3xl border border-gray-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/60 p-5"
              >
                <p className="text-sm text-gray-500 dark:text-gray-400">Nome</p>
                <p className="mt-2 text-xl font-comfortaaBold text-black dark:text-white">
                  Thiago Domingues Rafael
                </p>
              </div>
              <div
                ref={ageRef}
                className="rounded-3xl border border-gray-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/60 p-5"
              >
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Idade
                </p>
                <p className="mt-2 text-xl font-comfortaaBold text-black dark:text-white">
                  21 anos
                </p>
              </div>
            </div>

            <div
              ref={FormationsRef}
              className="rounded-3xl border border-gray-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/60 p-5"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-accent-secondary/10 text-accent-secondary text-lg">
                  🎓
                </span>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Formações
                </p>
              </div>
              <p className="text-base text-black dark:text-white leading-7">
                Técnico em Desenvolvimento de Sistemas
                <br />
                Faculdade de Engenharia de Software
              </p>
            </div>

            <div
              ref={localityRef}
              className="rounded-3xl border border-gray-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/60 p-5"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-accent-primary/10 text-accent-primary text-lg">
                  📍
                </span>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Localidade
                </p>
              </div>
              <p className="text-base text-black dark:text-white leading-7">
                São Paulo, SP
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
