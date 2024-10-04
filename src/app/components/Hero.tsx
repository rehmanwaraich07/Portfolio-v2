/* eslint-disable */

"use client";

import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./ui/BackgroundCircles";
import Image from "next/image";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The name's M.Rehman Waraich",
      "Guy-who-loves-Coffee.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex flex-col space-y-0 items-center justify-center text-center overflow-hidden h-screen">
      <BackgroundCircles />
      <Image
        src="/hero.png"
        width={256}
        height={256}
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        alt="M.Rehman's Image"
        quality={100}
      />
      <div className="z-20">
        {/* heaings  */}
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[12px] mt-4">
          Full-Stack Developer
        </h2>
        <h1 className="text-4xl lg:text-5xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          {/* Link 1: About */}
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          {/* Link 2: Experience */}
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>

          {/* Link 3: Skills */}
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>

          {/* Link 4: Projects */}
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
