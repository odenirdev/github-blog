import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ShowPostResponseDTO, useGithubApi } from "../../hooks/useGithubApi";

interface UsePostProps {
  username: string;
}

export interface Post {
  id: number;
  number: number;
  title: string;
  body: string;
  url: string;
  comments: number;
  createdAt: string;
  username: string;
}

const initialPost: Post = {
  id: 0,
  number: 0,
  title: "",
  body: "",
  url: "",
  comments: 0,
  createdAt: new Date().toISOString(),
  username: "",
};

export const usePost = ({ username }: UsePostProps) => {
  const [post, setPost] = useState<Post>(initialPost);

  const { postId } = useParams();

  const { showPost } = useGithubApi();

  const parsePost = (responsePost: ShowPostResponseDTO): Post => {
    return {
      id: responsePost.id,
      number: responsePost.number,
      title: responsePost.title,
      body: responsePost.body,
      comments: responsePost.comments,
      url: responsePost.url,
      createdAt: responsePost.created_at,
      username: responsePost.user.login,
    };
  };

  const onShowPost = useCallback(() => {
    (async () => {
      try {
        const responsePost = await showPost(username, postId!);

        setPost(parsePost(responsePost));
      } catch (error) {
        window.alert("Listar post falhou");
      }
    })();
  }, []);

  useEffect(() => {
    onShowPost();
  }, []);

  return { post };
};
