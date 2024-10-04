"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-6xl px-10 justify-evenly items-center mx-auto">
      <h3 className="absolute top-24 uppercase tracking-[18px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
        }}
      >
        <Image
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56  rounded-full object-cover md:rounded-lg md:w-96 md:h-[28rem] xl:w-[400px] xl:h-[500px] mt-8 lg:mt-16"
          src="/about.png"
          width={850}
          height={850}
          alt="M.Rehman's Image"
        />
      </motion.div>

      <motion.div
        className="space-y-10 px-0 md:px-10"
        initial={{
          x: 200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
        }}
      >
        <h4 className="text-3xl font-semibold uppercase underline decoration-[#F7AB0A]">
          Biography
        </h4>
        <p className="text-base lg:max-w-[32rem] md:max-w-96">
          Hi, I'm M.Rehman Waraich, a full stack developer and designer with a
          passion for creating beautiful, functional, and user-centered digital
          experiences. I am always looking for new and innovative ways to bring
          my clients' visions to life.
          <br />
          <br />
          Whether I'm working on a website, a web application, or any other
          digital product, I bring my commitment to design excellence and
          user-centered thinking to every project I undertake. I look forward to
          the opportunity to bring my skills and passion to your next project.
        </p>
      </motion.div>
    </div>
  );
}

export default About;
