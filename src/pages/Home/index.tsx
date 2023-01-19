import { PostsListing } from "./PostsListing";
import { ProfileCard } from "./ProfileCard";

import { usePosts } from "./usePosts";
import { useUser } from "./useUser";

import { HomeContainer } from "./styles";

export const Home: React.FC = () => {
  const USERNAME = "odenirdev";

  const { profile } = useUser({ username: USERNAME });

  const { posts } = usePosts({ username: USERNAME });

  return (
    <HomeContainer>
      <header>
        <ProfileCard {...profile} />
      </header>

      <main>
        <PostsListing {...{ posts }} />
      </main>
    </HomeContainer>
  );
};
