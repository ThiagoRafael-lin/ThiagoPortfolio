"use client";

import React, { useRef } from "react";
import Image from "next/image";
import fotoThiago from "@/assets/image/fotoThiago 1.png";
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
      { opacity: 1, y: 0, delay: 0.3 }
    )
      .fromTo(
        name,
        {
          opacity: 0,
          y: -100,
        },
        { opacity: 1, y: 0 },
        "-=0.5"
      )
      .fromTo(
        age,
        {
          opacity: 0,
          y: -100,
        },
        { opacity: 1, y: 0 },
        "-=0.5"
      )
      .fromTo(
        formations,
        {
          opacity: 0,
          y: -100,
        },
        { opacity: 1, y: 0 },
        "-=0.5"
      )
      .fromTo(
        locality,
        {
          opacity: 0,
          y: -100,
        },
        { opacity: 1, y: 0 },
        "-=0.5"
      );
  }, []);

  return (
    <div>
      <div className="flex items-center justify-center pt-32 gap-6">
        <Image
          ref={photoRef}
          src={fotoThiago}
          alt="Foto do Thiago Rafael"
          className="rounded-full border border-black"
          width={300}
        />

        <div className="font-comfortaa text-xl">
          <p ref={nameRef} className="pb-2">
            <span className="font-comfortaaBold">Name:</span> Thiago Domingues
            Rafael
          </p>
          <p ref={ageRef} className="border-y-2 py-2">
            <span className="font-comfortaaBold">Age:</span> 19 years old
          </p>
          <p ref={FormationsRef} className="border-b-2 py-2">
            <span className="font-comfortaaBold">Formations:</span> Systems
            Development Technician <br /> Multimedia Technician
          </p>
          <p ref={localityRef} className="pt-2">
            <span className="font-comfortaaBold">locality:</span> São Paulo, SP
          </p>
        </div>
      </div>
    </div>
  );
}
