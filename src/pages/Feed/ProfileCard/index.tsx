import React from "react";
import { ArrowSquareOut, GithubLogo, Buildings, Users } from "phosphor-react";

import {
  AssetsContainer,
  NameContainer,
  ProfileCardContainer,
  ProfileCardHeader,
} from "./styles";

import { Profile } from "../useUser";
import { useParams } from "react-router-dom";

export const ProfileCard: React.FC<Profile> = ({
  avatar,
  name,
  url,
  bio,
  company,
  followers,
}) => {
  const { username = "" } = useParams();

  return (
    <ProfileCardContainer>
      <img src={avatar} alt="" />

      <section>
        <ProfileCardHeader>
          <NameContainer>
            <h1>{name}</h1>

            <a href={url} target="_blank">
              Github <ArrowSquareOut />
            </a>
          </NameContainer>

          <p className="text-m">{bio}</p>
        </ProfileCardHeader>

        <AssetsContainer>
          <span>
            <GithubLogo /> {username}
          </span>

          {company && (
            <span>
              <Buildings /> {company}
            </span>
          )}

          <span>
            <Users /> {followers} seguidores
          </span>
        </AssetsContainer>
      </section>
    </ProfileCardContainer>
  );
};
