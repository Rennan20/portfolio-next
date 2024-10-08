'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

import { Inputs } from '../../typing';

export const Contact = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    /* window.location.href = */ `
  mailto:jrennan99@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}.
 ${formData.message} (${formData.email})`;
  };
  return (
    <div className='relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-[2.5rem] text-center md:flex-row md:text-left'>
      <h3 className='absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500'>
        Contato
      </h3>

      <h4 className='text-center text-2xl font-semibold'>
        Eu tenho tudo que você precisa.
        <span className='underline decoration-[red]/50'>Entre em contato.</span>
      </h4>

      <div className='flex flex-col space-y-10'>
        <div className='space-y-8'>
          <div className='flex items-center justify-center space-x-5'>
            <PhoneIcon className='size-7 animate-pulse' />
            <p className='text-1xl'>+55 (88) 996080529</p>
          </div>

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
          <div className='flex space-x-2'>
            <input
              {...register('name')}
              placeholder='Name'
              className='contactInput'
              type='text'
            />
            <input
              {...register('email')}
              placeholder='Email'
              className='contactInput'
              type='email'
            />
          </div>

          <input
            {...register('subject')}
            placeholder='Subject'
            className='contactInput'
            type='text'
          />
          <textarea
            {...register('message')}
            placeholder='Message'
            className='contactInput'
          />

          <button
            type='submit'
            className='rounded-md bg-[#1f4b99] px-10 py-5 text-lg font-bold text-black'
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
