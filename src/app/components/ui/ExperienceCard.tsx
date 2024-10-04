import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { ExperienceType } from "../data";

type Props = {
  experience: ExperienceType;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[450px] xl:w-[500px] text-left snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden mt-16 lg:mt-24">
      <motion.div
        initial={{
          y: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="flex flex-col items-center"
      >
        <Image
          src={experience.companyImage}
          className="w-28 h-28 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
          width={350}
          height={350}
          alt={experience.company}
        />

        <div className="px-0 md:px-10">
          <h4 className="text-3xl font-light mt-2">{experience.company}</h4>
          <p className="font-bold text-2xl mt-2">{experience.title}</p>
          <div className="flex space-x-4 my-2 mt-5">
            {experience.technologies.map((tech, index) => (
              <Image
                key={index}
                className="h-10 w-10 rounded-full"
                src={tech}
                width={50}
                height={50}
                alt={`Tech ${index + 1}`}
              />
            ))}
          </div>
          <p className="uppercase py-5 text-gray-300 text-center">
            {experience.dateStarted} -{" "}
            {experience.isCurrentlyWorkingHere
              ? "Present"
              : experience.dateEnded}
          </p>
          <ul className="list-disc space-y-4 ml-5 text-sm">
            {experience.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </article>
  );
}

export default ExperienceCard;
