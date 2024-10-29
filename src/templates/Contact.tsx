'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

import { Inputs } from '../../typing';

export const Contact = () => {
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:jrennan99@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className='relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-[2.5rem] text-center md:flex-row md:text-left'>
      <h3 className='absolute top-24 hidden text-2xl uppercase tracking-[20px] text-gray-500 lg:block'>
        {t('contatos.titulo')}
      </h3>

      <h4 className='hidden text-center text-2xl font-semibold md:block'>
        {t('contatos.sobre')}
        <span className='underline decoration-[red]/50'>{t('contato')}</span>
      </h4>

      <div className='flex flex-col space-y-10'>
        <div className='space-y-8'>
          <div className='flex items-center justify-center space-x-5'>
            <MapPinIcon className='size-7 animate-pulse' />
            <p className='text-1xl'>Limoeiro do Norte, CE - Brazil</p>
          </div>

          <div className='flex items-center justify-center space-x-5'>
            <EnvelopeIcon className='size-7 animate-pulse' />
            <p className='text-1xl'>jrennan99@gmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='mx-auto flex w-fit flex-col space-y-2'
        >
          <div className='flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0'>
            <input
              {...register('name')}
              id='name'
              name='name'
              placeholder={t('contatos.formulario.nome')}
              className='contactInput'
              type='text'
              autoComplete='name'
            />
            <input
              {...register('email')}
              id='email'
              name='email'
              placeholder={t('contatos.formulario.email')}
              className='contactInput'
              type='email'
              autoComplete='email'
            />
          </div>

          <input
            {...register('subject')}
            id='subject'
            name='subject'
            placeholder={t('contatos.formulario.assunto')}
            className='contactInput'
            type='text'
            autoComplete='subject'
          />
          <textarea
            {...register('message')}
            id='message'
            name='message'
            placeholder={t('contatos.formulario.mensagem')}
            className='contactInput'
            autoComplete='message'
          />

          <button
            type='submit'
            className='rounded-md bg-[#1f4b99] px-10 py-5 text-lg font-bold text-black'
          >
            {t('contatos.formulario.enviar')}
          </button>
        </form>
      </div>
    </div>
  );
};
