"use client";

import { motion } from "framer-motion";
import React from "react";

export const BackgroundCircles = () => {
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
        className="absolute border border-[#333333] rounded-full size-[200px]  mt-[13rem]
      animate-ping opacity-20 z-0"
      />
      <div className="absolute border border-[#333333] rounded-full size-[250px] mt-[13rem] z-1" />
      <div className="absolute border border-[#333333] rounded-full sizze-[350px]  mt-[13rem] z-2" />
      <div className="rounded-full border border-[#1f4b99] opacity-20 size-[500px] absolute  mt-[13rem] animate-pulse z-3" />
      <div className="absolute border border-[#1f4b99] rounded-full size-[600px]  mt-[13rem] z-4" />
    </motion.div>
  );
};
