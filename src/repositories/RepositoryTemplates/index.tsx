import { getTemplates } from '@/services/templates';
import { useQuery } from '@tanstack/react-query';

import { ProjectType } from '../../../typing';

export const RepositoryTemplates = () => {
  const { data, refetch, isError, isLoading } = useQuery<ProjectType[]>({
    queryKey: ['templates'],
    queryFn: () => getTemplates(),
  });

  return {
    data,
    refetch,
    isError,
    isLoading,
  };
};
