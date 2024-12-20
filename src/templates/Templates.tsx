'use client';

import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { NavigationButtons } from '@/components/NavigationSwiper';
import { ProjectCard } from '@/components/ProjectCard';
import { templates } from '@/utils/mockedData/Template';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Swiper as SwiperClass } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

export const Templates = () => {
  const { t } = useTranslation();

  const sliderRef = useRef<SwiperRef>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [realIndex, setRealIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(false);

  if (!templates || templates.length === 0)
    return <p>Nenhum template disponível.</p>;

  return (
    <div className='relative z-0 mx-auto flex h-screen flex-col items-center justify-evenly overflow-hidden text-left'>
      <h3 className='font-roboto absolute top-24 px-2 text-2xl uppercase tracking-[20px] text-gray-500'>
        Templates
      </h3>

      <p className='font-fira absolute top-36 px-2 text-sm uppercase text-white'>
        {t('templates.texto')}
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
        {templates.map((template) => (
          <SwiperSlide key={template.type}>
            <ProjectCard project={template} />
          </SwiperSlide>
        ))}
      </Swiper>
      <NavigationButtons
        sliderRef={sliderRef as React.RefObject<{ swiper: SwiperClass }>}
        realIndex={realIndex}
        setRealIndex={setRealIndex}
        isEnd={isEnd}
        setIsEnd={setIsEnd}
      />
      <div className='absolute left-0 top-[30%] h-[500px] w-full -skew-y-12 bg-[#1f4b99]/10'></div>
    </div>
  );
};
