"use client";

import { motion } from "framer-motion";
import React from "react";
import { templates } from "../components/Template";
import Link from "next/link";
import { ProjectType } from "../../typing";

export const Templates = () => {
  const renderProjects = (templates: ProjectType[]) => {
    const rows = [];
    for (let i = 0; i < templates.length; i += 2) {
      const template1 = templates[i];
      const template2 = templates[i + 1];
      rows.push(
        <div
          className="grid grid-cols-2 gap-1 p-5 md:p-20 mt-60 w-screen h-screen flex-shrink-0"
          key={i}
        >
          {template1 && (
            <div key={template1.id}>
              <Link
                href={template1.link}
                target="_blank"
                rel="noopener noreferrer"
              >
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
                  src={template1.src}
                  alt="Project screenshot"
                />
              </Link>
              <div className="space-y-5 px-0 md:px-10 max-w-6xl">
                <h4 className="underline decoration-[red]/50 text-2xl md:text-4xl font-semibold text-center">
                  {template1.name}
                </h4>
                <p className="text-sm text-center md:text-left">
                  {template1.description}
                </p>
              </div>
            </div>
          )}
          {template2 && (
            <div key={template2.id}>
              <Link
                href={template2.link}
                target="_blank"
                rel="noopener noreferrer"
              >
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
                  src={template2.src}
                  alt="Project screenshot"
                />
              </Link>
              <div className="space-y-5 px-0 md:px-10 max-w-6xl">
                <h4 className="underline decoration-[red]/50 text-2xl md:text-4xl font-semibold text-center">
                  {template2.name}
                </h4>
                <p className="text-sm text-center md:text-left">
                  {template2.description}
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
        Templates
      </h3>

      <p className="absolute top-36 uppercase  text-white text-sm font-fira">
        Templates de sites profissionais que demonstram meu estilo de trabalho e
        podem inspirar projetos para atender às suas necessidades
      </p>

      <div
        className="z-50 relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory
     scrollbar scrollbar-track-blue-400/20 scrollbar-thumb-[#1f4b99]/80 "
      >
        {renderProjects(templates)}
      </div>
      <div className="w-full absolute top-[30%] bg-[#8d991f]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
};
