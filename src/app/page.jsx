"use client";

import { Header } from "@/components/header";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const HeaderRef = useRef(null);
  const NameRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1 } });
    const header = HeaderRef.current;
    const name = NameRef.current;

    tl.fromTo(
      header,
      {
        opacity: 0,
        y: -100,
      },
      { opacity: 1, y: 0 }
    ).fromTo(
      name,
      {
        opacity: 0,
        y: -100,
      },
      { opacity: 1, y: 0 }
    );
  }, []);

  return (
    <div>
      <div ref={HeaderRef}>
        <Header />
      </div>
      <div
        className="flex flex-col items-center justify-center gap-7 mt-48"
        ref={NameRef}
      >
        <h2 className="text-black text-8xl font-comfortaa text-center ">
          Thiago Rafael
        </h2>
        <p className="font-comfortaa text-3xl text-gray-400">
          Desenvolvedor FullStack
        </p>
      </div>
    </div>
  );
}
