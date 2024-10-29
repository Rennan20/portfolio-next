'use client';

import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { NavigationButtons } from '@/components/NavigationSwiper';
import { ProjectCard } from '@/components/ProjectCard';
import { RepositoryProjects } from '@/repositories/RepositoryProjects';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export const Projects = () => {
  const { t } = useTranslation();

  const { data: projects, isLoading, isError } = RepositoryProjects();

  const sliderRef = useRef<SwiperRef>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [realIndex, setRealIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(false);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Erro ao carregar os projetos</p>;

  if (!projects) return <p>Nenhum projeto disponível.</p>;

  return (
    <div className='relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left'>
      <h3 className='font-roboto absolute top-24 px-2 text-2xl uppercase tracking-[20px] text-gray-500'>
        {t('projetos.titulo')}
      </h3>
      <p className='font-fira absolute top-36 px-2 text-sm uppercase text-white'>
        {t('projetos.texto')}
      </p>
      <Swiper
        ref={sliderRef}
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
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
      <NavigationButtons
        sliderRef={sliderRef}
        realIndex={realIndex}
        setRealIndex={setRealIndex}
        isEnd={isEnd}
        setIsEnd={setIsEnd}
      />
      <div className='absolute left-0 top-[30%] h-[500px] w-full -skew-y-12 bg-[#1f4b99]/10'></div>
    </div>
  );
};
