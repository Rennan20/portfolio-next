'use client';

import Image from 'next/image';
import Link from 'next/link';

import { CertificateLink } from '@/components/CertificateLink';
import { AboutText } from '@/utils/mockedData/About';

export const About = () => {
  return (
    <section
      className='animate-fadeIn relative mx-auto flex min-h-screen max-w-7xl flex-col
        items-center justify-evenly overflow-hidden py-20 text-center md:flex-row md:text-left'
    >
      <h3 className='absolute top-24 hidden text-2xl uppercase tracking-[20px] text-gray-500 md:block'>
        Sobre mim
      </h3>

      <Image
        src='https://i.imgur.com/2xyYnFx.jpg'
        width={200}
        height={250}
        className='animate-slideInLeft -mb-20 hidden flex-shrink-0 rounded-full object-cover lg:mb-0
          lg:block lg:size-32 lg:rounded-lg xl:h-[250px] xl:w-[200px]'
        alt='Foto de perfil de Rennan'
      />

      <div className='space-y-3 p-10'>
        {AboutText.map((paragraph, index) => (
          <p key={index} className='text-sm md:text-base'>
            {paragraph}
          </p>
        ))}
        <p>
          Possuo formação complementar por meio de plataformas como{' '}
          <Link
            className='font-semibold text-green-500 underline hover:text-green-800'
            href='https://www.w3profile.com/RennanSilva'
            rel='noreferrer'
            target='_blank'
          >
            W3SCHOOLS
          </Link>
          ,{' '}
          <Link
            href='https://b7web.com.br/'
            target='_blank'
            rel='noreferrer'
            className='font-semibold text-blue-800 underline hover:text-blue-900'
          >
            B7WEB.
          </Link>
        </p>

        <p>Alguns dos meus certificados:</p>
        <ul className='list-inside list-disc'>
          <CertificateLink href='https://drive.google.com/file/d/1U1LUQ8syeYl3sWuaV28AdzDrhE7L9uPO/view'>
            Certificado CSS da Scaler
          </CertificateLink>
          <CertificateLink href='https://drive.google.com/file/d/1U1LUQ8syeYl3sWuaV28AdzDrhE7L9uPO/view'>
            Certificado HTML da Scaler
          </CertificateLink>
          <CertificateLink href='https://drive.google.com/file/d/1NwVI5I7OTLkC5oVQELQgSXTmD1XT7HN1/view'>
            Certificado JavaScript da Scaler
          </CertificateLink>
        </ul>
      </div>
    </section>
  );
};
