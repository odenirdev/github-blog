import React from "react";
import { ArrowSquareOut, GithubLogo, Buildings, Users } from "phosphor-react";

import {
  AssetsContainer,
  NameContainer,
  ProfileCardContainer,
  ProfileCardHeader,
} from "./styles";

import { Profile } from "..";

export const ProfileCard: React.FC<Profile> = ({
  name,
  url,
  bio,
  company,
  followers,
}) => {
  return (
    <ProfileCardContainer>
      <img src="https://avatars.githubusercontent.com/u/49418374?v=4" alt="" />

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
            <GithubLogo /> odenirdev
          </span>

          <span>
            <Buildings /> {company}
          </span>

          <span>
            <Users /> {followers} seguidores
          </span>
        </AssetsContainer>
      </section>
    </ProfileCardContainer>
  );
};
