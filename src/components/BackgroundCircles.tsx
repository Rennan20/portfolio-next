'use client';

import React from 'react';

import { motion } from 'framer-motion';

export const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ['20%', '20%', '40%', '60%', '80%', '20'],
      }}
      transition={{
        duration: 2.5,
      }}
      className='relative flex items-center justify-center'
    >
      <div
        className='absolute z-0 mt-[13rem] size-[200px] animate-ping  rounded-full
      border border-[#333333] opacity-20'
      />
      <div className='z-1 absolute mt-[13rem] size-[250px] rounded-full border border-[#333333]' />
      <div className='sizze-[350px] z-2 absolute mt-[13rem] rounded-full  border border-[#333333]' />
      <div className='z-3 absolute mt-[13rem] size-[500px] animate-pulse rounded-full  border border-[#1f4b99] opacity-20' />
      <div className='z-4 absolute mt-[13rem] size-[600px] rounded-full  border border-[#1f4b99]' />
    </motion.div>
  );
};
