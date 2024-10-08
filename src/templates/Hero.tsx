'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

import { BackgroundCircles } from '@/components/BackgroundCircles';

export const Hero = () => {
  const [text] = useTypewriter({
    words: [
      `Hi, The Name's Rennan Silva`,
      'Live-and-breath-code.tsx',
      '<Developer />',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className='flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center'>
      <BackgroundCircles />
      <Image
        alt='foto de rennan'
        width={128}
        height={128}
        className='relative mx-auto size-32 rounded-full object-cover'
        src='/profile-pic.jpg'
      />
      <div className='z-20'>
        <h2 className='pb-[0.5rem] text-sm uppercase tracking-[0.938rem] text-gray-500'></h2>
        <h1 className='px-[2.5rem] text-4xl font-semibold'>
          <span className='mr-[0.75rem]'>{text}</span>
          <Cursor cursorColor='#1f4b99' />
        </h1>
        <div className='pt-[1.25rem]'>
          <Link href='#about'>
            <button className='heroButton'>Sobre</button>
          </Link>
          <Link href='#skills'>
            <button className='heroButton'>Stack</button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton'>Projetos</button>
          </Link>
          <Link href='#contact'>
            <button className='heroButton'>Contato</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
