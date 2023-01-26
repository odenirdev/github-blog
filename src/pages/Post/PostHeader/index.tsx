import React from "react";
import {
  ArrowSquareOut,
  Calendar,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from "phosphor-react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";

import { Post } from "../usePost";

import { AssetsContainer, PostHeaderContainer, PostHeaderNav } from "./styles";

interface PostHeaderProps {
  post: Post;
}

export const PostHeader: React.FC<PostHeaderProps> = ({ post }) => {
  return (
    <PostHeaderContainer>
      <PostHeaderNav>
        <Link to="/">
          <CaretLeft size={16} /> Voltar
        </Link>

        <a href={post.url} target="_blank">
          Ver no Github <ArrowSquareOut size={16} />
        </a>
      </PostHeaderNav>

      <h1>{post.title}</h1>

      <AssetsContainer>
        <span>
          <GithubLogo /> {post.username}
        </span>

        <span>
          <Calendar />{" "}
          {formatDistanceToNow(new Date(post.createdAt), {
            locale: ptBr,
            addSuffix: true,
          })}
        </span>

        <span>
          <ChatCircle /> {post.comments} comentários
        </span>
      </AssetsContainer>
    </PostHeaderContainer>
  );
};
