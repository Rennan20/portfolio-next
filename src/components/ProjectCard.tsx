import Image from 'next/image';
import Link from 'next/link';

import { ProjectType } from '../../typing';

interface ProjectCardProps {
  project: ProjectType;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className='flex flex-col items-center pb-8'>
      <Link href={project.link} target='_blank' rel='noopener noreferrer'>
        <Image
          className='h-auto max-w-full'
          src={project.src}
          alt={project.name}
          width={300}
          height={150}
        />
      </Link>
      <h4 className='text-center text-2xl font-semibold underline decoration-[red]/50'>
        {project.name}
      </h4>
    </div>
  );
};
