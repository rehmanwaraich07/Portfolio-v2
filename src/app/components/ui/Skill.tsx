import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type SkillProps = {
  directionLeft?: boolean;
  img: string;
  efficiency: number;
};

function Skill({ directionLeft, img, efficiency }: SkillProps) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        className="relative w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24"
      >
        <Image
          className="rounded-full border border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out p-4"
          src={img}
          alt="Skill Image"
          layout="fill"
        />
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white rounded-full z-0 w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-bold text-black opacity-100">
            {efficiency}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
