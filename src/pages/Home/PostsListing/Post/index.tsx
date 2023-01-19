import React from "react";

import { PostContainer } from "./styles";

export const Post: React.FC = () => {
  return (
    <PostContainer>
      <header>
        <strong className="title-m">
          JavaScript data types and data structures
        </strong>

        <span className="text-s">Há 1 dia</span>
      </header>

      <section>
        <p className="text-m">
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in...
        </p>
      </section>
    </PostContainer>
  );
};
