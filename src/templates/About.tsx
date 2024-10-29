'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { CertificateLink } from '@/components/CertificateLink';

export const About = () => {
  const { t } = useTranslation();
  return (
    <section
      className='animate-fadeIn relative mx-auto flex min-h-screen max-w-7xl flex-col
      items-center justify-evenly overflow-hidden py-20 text-center md:flex-row md:text-left'
    >
      <h3 className='absolute top-24 hidden text-2xl uppercase tracking-[20px] text-gray-500 md:block'>
        {t('titulo')}
      </h3>

      <Image
        src='https://i.imgur.com/2xyYnFx.jpg'
        width={200}
        height={250}
        className='animate-slideInLeft -mb-20 hidden flex-shrink-0 rounded-full object-cover
        lg:mb-0 lg:block lg:size-32 lg:rounded-lg xl:h-[250px] xl:w-[200px]'
        alt='Foto de perfil de Rennan'
        priority
        style={{ height: 'auto' }}
      />

      <div className='space-y-3 p-10'>
        <p className='text-sm md:text-base'>{t('descrição')}</p>
        <p>
          {t('links')}{' '}
          <Link
            className='font-semibold text-green-500 underline hover:text-green-800'
            href='https://www.w3profile.com/RennanSilva'
            rel='noreferrer'
            target='_blank'
          >
            {t('plataformas.0.titulo')}
          </Link>
          ,{' '}
          <Link
            href='https://b7web.com.br/'
            target='_blank'
            rel='noreferrer'
            className='font-semibold text-blue-800 underline hover:text-blue-900'
          >
            {t('plataformas.1.titulo')}
          </Link>
        </p>
        <p>{t('certificados.0.titulo')}</p>
        <ul className='list-inside list-disc'>
          <CertificateLink href='https://drive.google.com/file/d/1U1LUQ8syeYl3sWuaV28AdzDrhE7L9uPO/view'>
            {t('certificados.1.css')}
          </CertificateLink>
          <CertificateLink href='https://drive.google.com/file/d/1U1LUQ8syeYl3sWuaV28AdzDrhE7L9uPO/view'>
            {t('certificados.2.html')}
          </CertificateLink>
          <CertificateLink href='https://drive.google.com/file/d/1NwVI5I7OTLkC5oVQELQgSXTmD1XT7HN1/view'>
            {t('certificados.3.javascript')}
          </CertificateLink>
        </ul>
      </div>
    </section>
  );
};
