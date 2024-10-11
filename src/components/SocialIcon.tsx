'use client';

import Link from 'next/link';
import React from 'react';

type SocialIconProps = {
  url: string;
  icon: React.ReactNode;
};

export const SocialIcon = ({ url, icon }: SocialIconProps) => {
  return (
    <Link href={url} passHref target='_blank' rel='noopener noreferrer'>
      <div className='cursor-pointer p-2 transition duration-200 hover:text-blue-500'>
        {icon}
      </div>
    </Link>
  );
};
