"use client";

import gsap from "gsap";
import React, { useEffect, useRef } from "react";

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

  return (
    <section className="dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2
          ref={titleRef}
          className="font-comfortaaBold mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white"
        >
          Let's Connect
        </h2>
        <p
          ref={subTitleRef}
          className="font-comfortaa mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"
        >
          Interested in collaborating? Have a project in mind? Get in touch!
        </p>
        <form action="#" className="space-y-8">
          <div ref={emailRef}>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-comfortaa text-gray-900 dark:text-gray-300"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="font-comfortaa shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="your.email@example.com"
              required
            ></input>
          </div>
          <div ref={subjectRef}>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-comfortaa text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="font-comfortaa block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Project Inquiry or Collaboration"
              required
            ></input>
          </div>
          <div ref={messageRef} className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-comfortaa text-gray-900 dark:text-gray-400"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows="6"
              className="font-comfortaa block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Tell me about your project or needs."
            ></textarea>
          </div>
          <button
            ref={buttonRef}
            type="submit"
            className="py-3 px-5 text-sm font-comfortaa text-center text-white rounded-lg bg-black sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
