'use client';

import Image from 'next/image';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/Tooltip';

import { skills } from '../utils/mockedData/Skill';

export const Skills = () => {
  return (
    <div className='relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly space-y-20 overflow-hidden text-left'>
      <h2 className='absolute top-24 hidden text-2xl uppercase tracking-[20px] text-gray-500 md:block'>
        Tecnologias
      </h2>
      <div className='grid grid-cols-4 gap-2 md:grid-cols-5'>
        {skills.map((skill) => (
          <div key={skill.id} className='relative mx-5'>
            <TooltipProvider>
              <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                  <Image
                    src={skill.src}
                    alt={skill.alt}
                    width={60}
                    height={60}
                    className='size-16 rounded-full shadow-lg transition-transform duration-300 ease-in-out hover:scale-105'
                  />
                </TooltipTrigger>
                <TooltipContent className='z-50 rounded-md bg-gray-100 p-2 text-sm text-black shadow-lg'>
                  <p>{skill.description}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <span className='mt-2 text-sm text-white'>{skill.alt}</span>
          </div>
        ))}
      </div>
      <div className='pointer-events-none absolute left-0 top-[30%] z-10 h-[500px] w-full -skew-y-12 bg-[#1f4b99]/10'></div>
    </div>
  );
};
