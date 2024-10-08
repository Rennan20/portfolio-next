'use client';

import { useRef, useState } from 'react';

import { NavigationButtons } from '@/components/NavigationSwiper';
import { ProjectCard } from '@/components/ProjectCard';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { RepositoryTemplates } from '@/repositories/RepositoryTemplates';
import { Swiper as SwiperClass } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

export const Templates = () => {
  const { data: templates, isLoading, isError } = RepositoryTemplates();

  const sliderRef = useRef<SwiperRef>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [realIndex, setRealIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(false);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Erro ao carregar os templates</p>;

  if (!templates) return <p>Nenhum template disponível.</p>;

  return (
    <div className='relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left'>
      <h3 className='font-roboto absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500'>
        Templates
      </h3>

      <p className='font-fira absolute top-36  text-sm uppercase text-white'>
        Templates de sites profissionais que demonstram meu estilo de trabalho e
        podem inspirar projetos para atender às suas necessidades
      </p>

      <Swiper
        ref={sliderRef} // Usando o SwiperRef corrigido aqui
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        modules={[Navigation, Pagination]}
        onSlideChange={(swiper) => {
          setRealIndex(swiper.realIndex);
          setIsEnd(swiper.isEnd);
        }}
        onInit={(swiper) => {
          if (swiper.navigation) {
            if (prevRef.current && nextRef.current) {
              swiper.navigation.prevEl = prevRef.current;
              swiper.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
        className='w-full items-center'
      >
        {templates.map((template) => (
          <SwiperSlide key={template.id}>
            <ProjectCard project={template} />
          </SwiperSlide>
        ))}
      </Swiper>
      <NavigationButtons
        sliderRef={sliderRef as React.RefObject<{ swiper: SwiperClass }>} // Cast para o tipo correto
        realIndex={realIndex}
        setRealIndex={setRealIndex}
        isEnd={isEnd}
        setIsEnd={setIsEnd}
      />
      <div className='absolute left-0 top-[30%] h-[500px] w-full -skew-y-12 bg-[#1f4b99]/10'></div>
    </div>
  );
};
