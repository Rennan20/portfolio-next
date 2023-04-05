import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header
      className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20
    xl:items-center p-5 "
    >
      <motion.div
        initial={{
          x: -500,
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
        <SocialIcon
          url="https://www.instagram.com/r_ennan_silva/"
          className="cursor-pointer"
          network="instagram"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/Rennan20"
          className="cursor-pointer"
          network="github"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/rennan-silva-47831a186/"
          className="cursor-pointer"
          network="linkedin"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://linktr.ee/rennansilva"
          className="cursor-pointer"
          network="sharethis"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        initial={{
          x: -500,
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
      ></motion.div>
      <Link href="#contact">
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
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          <Link href={"#contact"}>
            {" "}
            <SocialIcon
              className="cursor-pointer"
              network="email"
              fgColor="gray"
              bgColor="transparent"
            />{" "}
          </Link>

          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Entre em Contato!
          </p>
        </motion.div>
      </Link>
    </header>
  );
}
