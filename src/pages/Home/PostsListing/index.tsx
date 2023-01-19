import React from "react";

import { Input } from "../../../components/Input";

import { Post as PostInterface } from "../usePosts";

import { Post } from "./Post";

import { PostsListingContainer } from "./styles";

interface PostsListingProps {
  posts: PostInterface[];
}

export const PostsListing: React.FC<PostsListingProps> = ({
  posts,
}: PostsListingProps) => {
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
          {posts.map((post) => (
            <li>
              <Post {...post} />
            </li>
          ))}
        </ul>
      </section>
    </PostsListingContainer>
  );
};
