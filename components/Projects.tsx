import { motion } from "framer-motion";
import React from "react";
import { projects, ProjectType } from "./Project";

type Props = {};

function Projects({}: Props) {
  const renderProjects = (projects: ProjectType[]) => {
    const rows = [];
    for (let i = 0; i < projects.length; i += 2) {
      const project1 = projects[i];
      const project2 = projects[i + 1];
      rows.push(
        <div
          className="grid grid-cols-2 gap-1 p-5 md:p-20 mt-60 w-screen h-screen flex-shrink-0"
          key={i}
        >
          {project1 && (
            <div key={project1.id}>
              <a href={project1.link} target="_blank" rel="noopener noreferrer">
                <motion.img
                  style={{
                    width: "100%",
                    maxWidth: "300px",
                    maxHeight: "300px",
                    height: "auto",
                  }}
                  initial={{ y: -300, opacity: 0 }}
                  transition={{ duration: 1.2 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  src={project1.src}
                  alt="Project screenshot"
                />
              </a>
              <div className="space-y-5  px-0 md:px-10 max-w-6xl">
                <h4 className="underline decoration-[red]/50 text-2xl md:text-4xl font-semibold text-center">
                  {project1.name}
                </h4>
                <p className="text-sm text-center md:text-left">
                  {project1.description}
                </p>
              </div>
            </div>
          )}
          {project2 && (
            <div key={project2.id}>
              <a href={project2.link} target="_blank" rel="noopener noreferrer">
                <motion.img
                  style={{
                    width: "100%",
                    maxWidth: "300px",
                    maxHeight: "300px",
                    height: "auto",
                  }}
                  initial={{ y: -300, opacity: 0 }}
                  transition={{ duration: 1.2 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  src={project2.src}
                  alt="Project screenshot"
                />
              </a>
              <div className="space-y-5 px-0 md:px-10 max-w-6xl ">
                <h4 className="underline decoration-[red]/50 text-2xl md:text-4xl font-semibold text-center">
                  {project2.name}
                </h4>
                <p className="text-sm text-center md:text-left">
                  {project2.description}
                </p>
              </div>
            </div>
          )}
        </div>
      );
    }
    return rows;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl font-roboto">
        Projects
      </h3>

      <p className="absolute top-36 uppercase  text-white text-sm font-fira">
        Role para ver os projetos e acompanhar o meu progresso!
      </p>

      <div
        className="z-50 relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory
     scrollbar scrollbar-track-blue-400/20 scrollbar-thumb-[#1f4b99]/80"
      >
        {renderProjects(projects)}
      </div>
      <div className="w-full absolute top-[30%] bg-[#1f4b99]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
