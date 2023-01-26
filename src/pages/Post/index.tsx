import React from "react";
import ReactMarkdown from "react-markdown";

import { PostHeader } from "./PostHeader";

import { usePost } from "./usePost";

import { PostContainer } from "./styles";

interface PostProps {
  username: string;
}

export const Post: React.FC<PostProps> = ({ username }) => {
  const { post } = usePost({ username });

  return (
    <PostContainer>
      <PostHeader {...{ post }} />

      <section>
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </section>
    </PostContainer>
  );
};
