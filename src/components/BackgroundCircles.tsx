export const BackgroundCircles = () => {
  return (
    <div className='relative flex items-center justify-center'>
      <div className='absolute z-0 mt-[13rem] h-[200px] w-[200px] animate-ping rounded-full border border-[#333333] opacity-20' />
      <div className='z-1 animate-scaleAndFade absolute mt-[13rem] h-[250px] w-[250px] rounded-full border border-[#333333]' />
      <div className='z-2 absolute mt-[13rem] h-[350px] w-[350px] rounded-full border border-[#333333]' />
      <div className='z-3 animate-scaleAndFade absolute mt-[13rem] h-[500px] w-[500px] animate-pulse rounded-full border border-[#1f4b99] opacity-20' />
      <div className='z-4 animate-scaleAndFade absolute mt-[13rem] h-[600px] w-[600px] rounded-full border border-[#1f4b99]' />
    </div>
  );
};
