'use client';

import Image from 'next/image';

import { skills } from '../components/Skill';

export const Skills = () => {
  return (
    <div className='relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly space-y-10 overflow-hidden text-left'>
      <h2 className='absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500'>
        Tecnologias
      </h2>
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4'>
        {skills.map((skill) => (
          <div key={skill.id} className='relative mx-5'>
            <Image
              src={skill.src}
              alt={skill.alt}
              width={80}
              height={80}
              className='size-20 rounded-full shadow-lg'
            />
          </div>
        ))}
      </div>
      <div className='absolute left-0 top-[30%] h-[500px] w-full -skew-y-12 bg-[#1f4b99]/10'></div>
    </div>
  );
};
