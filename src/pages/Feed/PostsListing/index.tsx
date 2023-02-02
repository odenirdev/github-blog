import React from "react";
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { MagnifyingGlass } from "phosphor-react";

import { Input } from "../../../components/Input";

import { Post as PostInterface } from "../usePosts";

import { Post } from "./Post";

import { PostsListingContainer } from "./styles";

interface PostsListingProps {
  posts: PostInterface[];
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onSubmitSearch: (data: any) => void;
}

export const PostsListing: React.FC<PostsListingProps> = ({
  posts,
  register,
  handleSubmit,
  onSubmitSearch,
}: PostsListingProps) => {
  return (
    <PostsListingContainer>
      <header>
        <div>
          <strong className="title-s">Publicações</strong>
          <span className="text-s">{posts.length} Publicações</span>
        </div>

        <form onSubmit={handleSubmit(onSubmitSearch)}>
          <Input
            type="search"
            placeholder="Buscar conteúdo"
            {...register("search")}
          />
          <button title="Pesquisar">
            <MagnifyingGlass size={24} />
          </button>
        </form>
      </header>

      <section>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Post {...post} />
            </li>
          ))}
        </ul>
      </section>
    </PostsListingContainer>
  );
};
