"use client";

import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export function FormContact() {
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.7 } });

    const title = titleRef.current;
    const subTitle = subTitleRef.current;
    const email = emailRef.current;
    const subject = subjectRef.current;
    const mensage = messageRef.current;
    const button = buttonRef.current;
    tl.fromTo(
      title,
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, delay: 1 },
      "-=0.5"
    )
      .fromTo(subTitle, { opacity: 0, y: -100 }, { opacity: 1, y: 0 }, "-=0.5")
      .fromTo(email, { opacity: 0, y: -100 }, { opacity: 1, y: 0 }, "-=0.5")
      .fromTo(subject, { opacity: 0, y: -100 }, { opacity: 1, y: 0 }, "-=0.5")
      .fromTo(mensage, { opacity: 0, y: -100 }, { opacity: 1, y: 0 }, "-=0.5")
      .fromTo(button, { opacity: 0, y: -100 }, { opacity: 1, y: 0 }, "-=0.5");
  }, []);

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const serviceId = "service_5r1wdw5";
    const templateId = "template_8lrexfu";
    const publicKey = "YIEsMGGQTFZ7RAgLq";

    const templateParams = {
      from_email: email,
      Subject: subject,
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email enviado com sucesso", templateParams, response);
        toast.success("Email enviado com sucesso! 🎉");
        setEmail("");
        setSubject("");
        setMessage("");
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("erro ao enviar seu email", error);
        toast.error("Erro ao enviar email. Tente novamente!");
        setIsLoading(false);
      });
  };

  return (
    <section className="dark:bg-slate-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2
          ref={titleRef}
          className="font-comfortaaBold mb-4 text-4xl tracking-tight font-extrabold text-center text-accent-primary"
        >
          Vamos nos Conectar
        </h2>
        <p
          ref={subTitleRef}
          className="font-comfortaa mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"
        >
          Interessado em colaborar? Tem um projeto em mente? Entre em contato!
        </p>

        <form action="#" onSubmit={handleSubmit} className="space-y-8">
          <div ref={emailRef}>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-comfortaa text-gray-900 dark:text-gray-300"
            >
              Seu Email
            </label>
            <input
              type="email"
              id="email"
              className="font-comfortaa shadow-sm bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="seu.email@exemplo.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div ref={subjectRef}>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-comfortaa text-gray-900 dark:text-gray-300"
            >
              Assunto
            </label>
            <input
              type="text"
              id="subject"
              className="font-comfortaa block p-3 w-full text-sm text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Consulta sobre Projeto ou Colaboração"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            ></input>
          </div>
          <div ref={messageRef} className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-comfortaa text-gray-900 dark:text-gray-400"
            >
              Sua Mensagem
            </label>
            <textarea
              id="message"
              rows="6"
              className="font-comfortaa block p-2.5 w-full text-sm text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm border border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Fale-me sobre seu projeto ou necessidades."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            ref={buttonRef}
            type="submit"
            disabled={isLoading}
            className="py-3 px-5 text-sm font-comfortaa text-center text-white rounded-lg bg-accent-primary sm:w-fit hover:opacity-90 dark:hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-accent-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {isLoading ? "Enviando..." : "Enviar Mensagem"}
          </button>
        </form>
      </div>
    </section>
  );
}
