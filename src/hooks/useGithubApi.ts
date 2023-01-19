import { api } from "../services/api";

export interface ShowUserResponseDTO {
  avatar_url: string;
  name: string;
  bio: string;
  company: string;
  followers: number;
  html_url: string;
}

export const useGithubApi = () => {
  const showUser = (username: string): Promise<ShowUserResponseDTO> => {
    return api.get(`/users/${username}`);
  };

  return { showUser };
};
