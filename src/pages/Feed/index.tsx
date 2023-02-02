import { PostsListing } from "./PostsListing";
import { ProfileCard } from "./ProfileCard";
import { useParams } from "react-router-dom";

import { usePosts } from "./usePosts";
import { useUser } from "./useUser";

import { FeedContainer } from "./styles";
import { NeedConfiguration } from "./NeedConfiguration";

export const Feed: React.FC = () => {
  const { username = "" } = useParams();

  const { profile } = useUser({ username });

  const { configured, posts, register, handleSubmit, onSubmitSearch } =
    usePosts({
      username,
    });

  return (
    <FeedContainer>
      <header>
        <ProfileCard {...profile} />
      </header>

      <main>
        {configured ? (
          <PostsListing
            {...{ posts, register, handleSubmit, onSubmitSearch }}
          />
        ) : (
          <NeedConfiguration />
        )}
      </main>
    </FeedContainer>
  );
};
