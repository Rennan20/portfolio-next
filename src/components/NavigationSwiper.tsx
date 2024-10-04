import React from "react";

type NavigationButtonsProps = {
  sliderRef: React.RefObject<any>;
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
        className={`absolute top-1/2 left-2 transform -translate-y-1/2 p-2 rounded-full cursor-pointer z-10 text-white text-xl ${
          realIndex === 0 ? "cursor-not-allowed" : ""
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
        className={`absolute top-1/2 right-2 transform -translate-y-1/2 p-2 rounded-full cursor-pointer z-10 text-white ${
          isEnd ? "cursor-not-allowed" : ""
        }`}
      >
        →
      </button>
    </>
  );
};
