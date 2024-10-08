import { ProjectType } from '../../../typing';
import { api } from '../api';

export const getProjects = async (): Promise<ProjectType[]> => {
  try {
    const response = await api.get('/projects');

    return response.data as ProjectType[];
  } catch (error) {
    console.error('Erro ao buscar projetos:', error);
    return [];
  }
};
