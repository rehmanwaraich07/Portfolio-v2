/* eslint-disable */
"use client";

import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ui/ExperienceCard";
import { experiences } from "./data";

type Props = {};

function Experience({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-6xl px-10 justify-evenly items-center mx-auto"
    >
      <h3 className="absolute top-24 uppercase tracking-[18px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}

export default Experience;
