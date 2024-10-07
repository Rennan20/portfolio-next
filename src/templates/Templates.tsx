"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ProjectCard } from "@/components/ProjectCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { NavigationButtons } from "@/components/NavigationSwiper";
import { RepositoryTemplates } from "@/repositories/RepositoryTemplates";

export const Templates = () => {
  const { data: templates, isLoading, isError } = RepositoryTemplates();

  const sliderRef = useRef<any>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [realIndex, setRealIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(false);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Erro ao carregar os templates</p>;

  if (!templates) return <p>Nenhum template disponível.</p>;

  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl font-roboto">
        Templates
      </h3>

      <p className="absolute top-36 uppercase  text-white text-sm font-fira">
        Templates de sites profissionais que demonstram meu estilo de trabalho e
        podem inspirar projetos para atender às suas necessidades
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
        className="w-full items-center"
      >
        {templates.map((template) => (
          <SwiperSlide key={template.id}>
            <ProjectCard project={template} />
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
      <div className="w-full absolute top-[30%] bg-[#1f4b99]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
};
