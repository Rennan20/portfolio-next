import { getProjects } from '@/services/projects';
import { useQuery } from '@tanstack/react-query';

import { ProjectType } from '../../../typing';

export const RepositoryProjects = () => {
  const { data, refetch, isError, isLoading } = useQuery<ProjectType[]>({
    queryKey: ['projects'],
    queryFn: () => getProjects(),
  });

  return {
    data,
    refetch,
    isError,
    isLoading,
  };
};
