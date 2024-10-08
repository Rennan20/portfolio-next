import { ProjectType } from '../../../typing';
import { api } from '../api';

export const getTemplates = async (): Promise<ProjectType[]> => {
  try {
    const response = await api.get('/templates');

    return response.data as ProjectType[];
  } catch (error) {
    console.error('Erro ao buscar templates:', error);
    return [];
  }
};
