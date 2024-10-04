/* eslint-disable */
"use client";

import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-5xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 1.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://www.x.com/reachrehman"
          bgColor="transparent"
          fgColor="gray"
          target="_blank"
        />
        <SocialIcon
          url="https://www.instagram.com/rehmanwaraich07"
          bgColor="transparent"
          fgColor="gray"
          target="_blank"
        />
        <SocialIcon
          url="https://www.github.com/rehmanwaraich07"
          bgColor="transparent"
          fgColor="gray"
          target="_blank"
        />
        <SocialIcon
          url="https://linkedin.com/reachrehman"
          bgColor="transparent"
          fgColor="gray"
          target="_blank"
        />
      </motion.div>

      {/* Get in Touch */}
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <Link href="#contact" className="flex flex-row items-center">
          <EnvelopeIcon className="text-gray-400/50 h-7 w-7 cursor-pointer" />
          <p className="uppercase text-gray-400 text-sm hidden md:inline-flex ml-2">
            Get in Touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
