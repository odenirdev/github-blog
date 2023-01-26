import { PostsListing } from "./PostsListing";
import { ProfileCard } from "./ProfileCard";

import { usePosts } from "./usePosts";
import { useUser } from "./useUser";

import { HomeContainer } from "./styles";

interface HomeProps {
  username: string;
}

export const Home: React.FC<HomeProps> = ({ username }) => {
  const { profile } = useUser({ username });

  const { posts, register, handleSubmit, onSubmitSearch } = usePosts({
    username,
  });

  return (
    <HomeContainer>
      <header>
        <ProfileCard {...profile} />
      </header>

      <main>
        <PostsListing {...{ posts, register, handleSubmit, onSubmitSearch }} />
      </main>
    </HomeContainer>
  );
};
