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
    number: number;
    title: string;
    body: string;
    created_at: string;
  }[];
}

export interface ShowPostResponseDTO {
  id: number;
  number: number;
  title: string;
  body: string;
  url: string;
  comments: number;
  created_at: string;
  user: {
    login: string;
  };
}

export const useGithubApi = () => {
  const showUser = (username: string): Promise<ShowUserResponseDTO> => {
    return api.get(`/users/${username}`);
  };

  const showPosts = (
    username: string,
    query?: string
  ): Promise<ShowPostsResponseDTO> => {
    return api.get(
      `/search/issues?q=${query || ""}%20repo:${username}/github-blog`
    );
  };

  const showPost = (
    username: string,
    postId: string
  ): Promise<ShowPostResponseDTO> => {
    return api.get(`/repos/${username}/github-blog/issues/${postId}`);
  };

  return { showUser, showPosts, showPost };
};
