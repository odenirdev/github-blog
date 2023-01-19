import React from "react";
import { Link } from "react-router-dom";

import { Post as PostInterface } from "../../usePosts";

import { PostContainer } from "./styles";

export const Post: React.FC<PostInterface> = ({ title, description }) => {
  const renderDescription = () => {
    return (
      <p className="text-m">
        {`${description.slice(0, 255)}... `}
        <Link to="">ver mais</Link>{" "}
      </p>
    );
  };

  return (
    <PostContainer>
      <header>
        <strong className="title-m">{title}</strong>

        <span className="text-s">Há 1 dia</span>
      </header>

      <section>{renderDescription()}</section>
    </PostContainer>
  );
};
