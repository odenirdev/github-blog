import { useEffect, useState } from "react";

import { ShowUserResponseDTO, useGithubApi } from "../../hooks/useGithubApi";

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

interface UseUserProps {
  username: string;
}

export const useUser = ({ username }: UseUserProps) => {
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
      const userResponse = await showUser(username);

      setProfile(parseProfile(userResponse));
    } catch (error) {
      window.alert("Buscar informações de usuário falhou!");
    }
  };

  useEffect(() => {
    onShowUser();
  }, []);

  return { profile };
};
