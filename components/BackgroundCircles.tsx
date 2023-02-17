import { motion } from "framer-motion";
import React from "react";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "40%", "60%", "80%", "20"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div
        className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52
      animate-ping opacity-20 z-0"
      />
      <div className="absolute border border-[#333333] rounded-full h-[250px] w-[250px] mt-52 z-1" />
      <div className="absolute border border-[#333333] rounded-full h-[350px] w-[350px] mt-52 z-2" />
      <div className="rounded-full border border-[#1f4b99] opacity-20 h-[500px] w-[500px] absolute mt-52 animate-pulse z-3" />
      <div className="absolute border border-[#1f4b99] rounded-full h-[600px] w-[600px] mt-52 z-4" />
    </motion.div>
  );
}

export default BackgroundCircles;
