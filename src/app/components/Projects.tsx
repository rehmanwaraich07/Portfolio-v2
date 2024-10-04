/* eslint-disable */
"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { projects, ProjectType } from "./data";

type ProjectsProps = {};

function Projects({}: ProjectsProps) {
  return (
    <div className="relative h-screen flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[18px] text-2xl text-gray-500">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project: ProjectType, i: number) => (
          <motion.div
            key={project.id}
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.div
              initial={{ y: -300, opacity: 0 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.2,
              }}
            >
              <Image
                src={project.img}
                width={100}
                height={100}
                alt="Project Image"
                className="w-32 h-32 md:w-44 md:h-44 lg:w-52 lg:h-52"
              />
            </motion.div>
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center lg:text-3xl">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {project.title}
              </h4>
              <p className="text-lg text-center md:text-left lg:text-left">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  );
}

export default Projects;
