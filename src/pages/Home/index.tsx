import { useEffect, useState } from "react";

import { PostsListing } from "./PostsListing";
import { ProfileCard } from "./ProfileCard";

import { api } from "../../services/api";

import { ShowUserResponseDTO, useGithubApi } from "../../hooks/useGithubApi";

import { HomeContainer } from "./styles";

export interface Profile {
  avatar: string;
  name: string;
  url: string;
  bio: string;
  company: string;
  followers: number;
}

const initialProfile: Profile = {
  avatar: "",
  name: "",
  url: "",
  bio: "",
  company: "",
  followers: 0,
};

export const Home: React.FC = () => {
  const USERNAME = "odenirdev";

  const [profile, setProfile] = useState<Profile>(initialProfile);

  const { showUser } = useGithubApi();

  const parseProfile = (userResponse: ShowUserResponseDTO): Profile => {
    return {
      avatar: userResponse.avatar_url,
      name: userResponse.name,
      bio: userResponse.bio,
      company: userResponse.company,
      url: userResponse.html_url,
      followers: userResponse.followers,
    };
  };

  const onShowUser = async () => {
    try {
      const userResponse = await showUser(USERNAME);

      setProfile(parseProfile(userResponse));
    } catch (error) {
      window.alert("Buscar informações de usuário falhou!");
    }
  };

  useEffect(() => {
    onShowUser();
  }, []);

  return (
    <HomeContainer>
      <header>
        <ProfileCard {...profile} />
      </header>

      <main>
        <PostsListing />
      </main>
    </HomeContainer>
  );
};
