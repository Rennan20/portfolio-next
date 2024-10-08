"use client";

import { skills } from "../components/Skill";

export const Skills = () => {
  return (
    <div className="flex flex-col items-center space-y-10 h-screen relative overflow-hidden text-left max-w-full justify-evenly mx-auto z-0">
      <h2 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Tecnologias
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div key={skill.id} className="relative mx-5">
            <img
              src={skill.src}
              alt={skill.alt}
              className="size-20 rounded-full shadow-lg"
            />
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#1f4b99]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
};
