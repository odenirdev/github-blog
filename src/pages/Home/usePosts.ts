import { useEffect, useState } from "react";

import { ShowPostsResponseDTO, useGithubApi } from "../../hooks/useGithubApi";

interface UsePostsProps {
  username: string;
}

export interface Post {
  id: number;
  title: string;
  description: string;
  createdAt: string;
}

export const usePosts = ({ username }: UsePostsProps) => {
  const [posts, setPosts] = useState<Post[]>([]);

  const { showPosts } = useGithubApi();

  const parsePosts = (responsePosts: ShowPostsResponseDTO): Post[] => {
    return responsePosts.items.map((responsePost) => ({
      id: responsePost.id,
      title: responsePost.title,
      description: responsePost.body,
      createdAt: responsePost.created_at,
    }));
  };

  const onShowPosts = async () => {
    try {
      const responsePosts = await showPosts(username);

      setPosts(parsePosts(responsePosts));
    } catch (error) {
      window.alert("Listar posts falhou");
    }
  };

  useEffect(() => {
    onShowPosts();
  }, []);

  return { posts };
};
