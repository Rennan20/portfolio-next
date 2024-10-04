"use client";

import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { BackgroundCircles } from "@/components/BackgroundCircles";
import Link from "next/link";

export const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      `Hi, The Name's Rennan Silva`,
      "Live-and-breath-code.tsx",
      "<Developer />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        alt="/profile pic.jpg"
        width={128}
        height={128}
        className="relative size-32 mx-auto rounded-full object-cover"
        src="https://i.imgur.com/FOt7eko.jpg"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-[0.5rem] tracking-[0.938rem]"></h2>
        <h1 className="text-4xl font-semibold px-[2.5rem]">
          <span className="mr-[0.75rem]">{text}</span>
          <Cursor cursorColor="#1f4b99" />
        </h1>
        <div className="pt-[1.25rem]">
          <Link href="#about">
            <button className="heroButton">Sobre</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Stack</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projetos</button>
          </Link>
          <Link href="#contact">
            <button className="heroButton">Contato</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
