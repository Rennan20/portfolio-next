'use client';

import Link from 'next/link';
import React from 'react';

import { Icon } from './Icons';
import { SocialIcon } from './SocialIcon';

export const Header = () => {
  return (
    <header className='sticky top-0 z-20 mx-auto flex max-w-7xl items-start justify-between p-[1.25rem] xl:items-center'>
      <div className='flex flex-row items-center'>
        <SocialIcon
          url='https://www.instagram.com/r_ennan_silva/'
          icon={<Icon.Instagram />}
        />
        <SocialIcon url='https://github.com/Rennan20' icon={<Icon.GitHub />} />
        <SocialIcon
          url='https://www.linkedin.com/in/rennan-silva-47831a186/'
          icon={<Icon.Linkedin />}
        />
        <SocialIcon
          url='https://linktr.ee/rennansilva'
          icon={<Icon.Linktree />}
        />
      </div>

      <Link href='#contact' passHref>
        <div className='animate-slideInLeft flex cursor-pointer flex-row items-center space-x-2 text-gray-300 delay-200'>
          <Icon.Mail />
          <p className='hidden text-sm uppercase text-gray-400 md:inline-flex'>
            Entre em Contato!
          </p>
        </div>
      </Link>
    </header>
  );
};
