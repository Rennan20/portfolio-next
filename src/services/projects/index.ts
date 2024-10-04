import { api } from "../api";
import { ProjectType } from "../../../typing";

export const getProjects = async (): Promise<ProjectType[]> => {
  try {
    const response = await api.get("/projects");

    return response.data as ProjectType[];
  } catch (error) {
    console.error("Erro ao buscar projetos:", error);
    return [];
  }
};
