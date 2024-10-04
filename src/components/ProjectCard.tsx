import React from "react";
import Link from "next/link";
import { ProjectType } from "../../typing";
import Image from "next/image";

interface ProjectCardProps {
  project: ProjectType;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="flex flex-col items-center pb-8">
      <Link href={project.link} target="_blank" rel="noopener noreferrer">
        <Image
          className="max-w-full h-auto"
          src={project.src}
          alt={project.name}
          width={300}
          height={150}
        />
      </Link>
      <h4 className="underline decoration-[red]/50 text-2xl font-semibold text-center">
        {project.name}
      </h4>
    </div>
  );
};
