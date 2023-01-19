import { api } from "../services/api";

export interface ShowUserResponseDTO {
  avatar_url: string;
  name: string;
  bio: string;
  company: string;
  followers: number;
  html_url: string;
}

export interface ShowPostsResponseDTO {
  total_count: number;
  items: {
    id: number;
    title: string;
    body: string;
    created_at: string;
  }[];
}

export const useGithubApi = () => {
  const showUser = (username: string): Promise<ShowUserResponseDTO> => {
    return api.get(`/users/${username}`);
  };

  const showPosts = (username: string): Promise<ShowPostsResponseDTO> => {
    return api.get(`/search/issues?q=repo:${username}/github-blog`);
  };

  return { showUser, showPosts };
};
