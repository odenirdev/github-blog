import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";

import { Post as PostInterface } from "../../usePosts";

import { PostContainer } from "./styles";

export const Post: React.FC<PostInterface> = ({
  number,
  title,
  description,
  createdAt,
}) => {
  const renderDescription = () => {
    return (
      <p className="text-m">
        <ReactMarkdown>{`${description.slice(0, 255)}... `}</ReactMarkdown>
        <Link to={`/post/${number}`}>ver mais</Link>
      </p>
    );
  };

  return (
    <PostContainer>
      <header>
        <strong className="title-m">{title}</strong>

        <span className="text-s">
          {formatDistanceToNow(new Date(createdAt), {
            locale: ptBr,
            addSuffix: true,
          })}
        </span>
      </header>

      <section>{renderDescription()}</section>
    </PostContainer>
  );
};
