import React from "react";

import { Input } from "../../../components/Input";

import { Post } from "./Post";

import { PostsListingContainer } from "./styles";

export const PostsListing: React.FC = () => {
  return (
    <PostsListingContainer>
      <header>
        <div>
          <strong className="title-s">Publicações</strong>
          <span className="text-s">6 Publicações</span>
        </div>

        <Input type="search" placeholder="Buscar conteúdo" />
      </header>

      <section>
        <ul>
          <li>
            <Post />
          </li>
          <li>
            <Post />
          </li>
        </ul>
      </section>
    </PostsListingContainer>
  );
};
