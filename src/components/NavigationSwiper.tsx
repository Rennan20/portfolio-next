import React from 'react';

import { Swiper as SwiperInstance } from 'swiper';
type NavigationButtonsProps = {
  sliderRef: React.RefObject<{ swiper: SwiperInstance }>;
  realIndex: number;
  setRealIndex: React.Dispatch<React.SetStateAction<number>>;
  isEnd: boolean;
  setIsEnd: React.Dispatch<React.SetStateAction<boolean>>;
};
export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  sliderRef,
  realIndex,
  setRealIndex,
  isEnd,
  setIsEnd,
}) => {
  return (
    <>
      <button
        disabled={realIndex === 0}
        onClick={() => {
          if (sliderRef.current && sliderRef.current.swiper) {
            sliderRef.current.swiper.slidePrev();
            setRealIndex(sliderRef.current.swiper.realIndex);
            setIsEnd(sliderRef.current.swiper.isEnd);
          }
        }}
        className={`absolute left-2 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer rounded-full p-2 text-xl text-white ${
          realIndex === 0 ? 'cursor-not-allowed' : ''
        }`}
      >
        ←
      </button>

      <button
        disabled={isEnd}
        onClick={() => {
          if (sliderRef.current && sliderRef.current.swiper) {
            sliderRef.current.swiper.slideNext();
            setRealIndex(sliderRef.current.swiper.realIndex);
            setIsEnd(sliderRef.current.swiper.isEnd);
          }
        }}
        className={`absolute right-2 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer rounded-full p-2 text-white ${
          isEnd ? 'cursor-not-allowed' : ''
        }`}
      >
        →
      </button>
    </>
  );
};
