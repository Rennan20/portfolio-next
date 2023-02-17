import {
  ArrowRightCircleIcon,
  ArrowLeftCircleIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { projects, ProjectType } from "./Project";

type Props = {};

function Projects({}: Props) {
  const [currentProject, setCurrentProject] = useState<ProjectType>(
    projects[0]
  );

  const goToPreviousProject = () => {
    const currentIndex = projects.findIndex(
      (project) => project.id === currentProject.id
    );
    const previousIndex =
      (currentIndex - 1 + projects.length) % projects.length;
    setCurrentProject(projects[previousIndex]);
  };

  const goToNextProject = () => {
    const currentIndex = projects.findIndex(
      (project) => project.id === currentProject.id
    );
    const nextIndex = (currentIndex + 1) % projects.length;
    setCurrentProject(projects[nextIndex]);
  };
  const renderProjects = (projects: ProjectType[]) => {
    return projects.map((project) => (
      <div
        key={project.id}
        className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center
          justify-center p-20 md:p-44 h-screen"
      >
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <motion.img
            initial={{ y: -300, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src={project.src}
            alt={project.alt}
          />
        </a>
        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
          <h4 className="underline decoration-[red]/50 text-4xl font-semibold text-center">
            {project.name}
          </h4>

          <p className="text-lg text-center md:text-left">
            {project.description}
          </p>
        </div>
      </div>
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory
      z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#1f4b99]/80"
      >
        {renderProjects(projects)}

        <button onClick={goToNextProject}>
          <ArrowRightCircleIcon className=" h-10 w-10 animate-pulsenext-project-button absolute top-1/2 right-4 transform -translate-y-1/2" />
        </button>
        <button onClick={goToPreviousProject}>
          <ArrowLeftCircleIcon className=" h-10 w-10 animate-pulsenext-project-button absolute top-1/2 left-4 transform -translate-y-1/2" />
        </button>
      </div>
      <div className="w-full absolute top-[30%] bg-[#1f4b99]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
