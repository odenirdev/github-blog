import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { ShowPostsResponseDTO, useGithubApi } from "../../hooks/useGithubApi";

interface UsePostsProps {
  username: string;
}

export interface Post {
  id: number;
  number: number;
  title: string;
  description: string;
  createdAt: string;
}

interface OnSubmitSearchData {
  search: string;
}

export const usePosts = ({ username }: UsePostsProps) => {
  const { register, handleSubmit } = useForm();

  const [posts, setPosts] = useState<Post[]>([]);

  const [configured, setConfigured] = useState(false);

  const { showPosts } = useGithubApi();

  const parsePosts = (responsePosts: ShowPostsResponseDTO): Post[] => {
    return responsePosts.items.map((responsePost) => ({
      id: responsePost.id,
      number: responsePost.number,
      title: responsePost.title,
      description: responsePost.body,
      createdAt: responsePost.created_at,
    }));
  };

  const onShowPosts = async (query?: string) => {
    try {
      const responsePosts = await showPosts(username, query);

      setPosts(parsePosts(responsePosts));

      setConfigured(true);
    } catch (error: any) {
      const { status } = error.response;
      if (status === 422) return;

      window.alert("Listar posts falhou");
    }
  };

  useEffect(() => {
    onShowPosts();
  }, []);

  const onSubmitSearch = (data: OnSubmitSearchData) => {
    onShowPosts(data.search);
  };

  return { configured, posts, register, handleSubmit, onSubmitSearch };
};
