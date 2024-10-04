"use client";

import React from "react";
import { motion } from "framer-motion";
import Skill from "./ui/Skill";
import { skills, SkillType } from "./data";

type SkillsProps = {};

function Skills({}: SkillsProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-3 gap-5 mt-32 md:mt-40 md:gap-8 lg:grid-cols-4 xl:grid-cols-4">
        {skills.map((skill: SkillType, index: number) => (
          <Skill
            key={skill.id}
            img={skill.img}
            efficiency={skill.efficiency}
            directionLeft={index % 2 === 0}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
