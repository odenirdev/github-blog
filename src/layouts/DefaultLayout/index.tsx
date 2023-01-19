import React from "react";
import { Outlet } from "react-router-dom";

import logoSvg from "../../assets/logo.svg";

import { DefaultLayoutContainer, DefaultLayoutHeader } from "./styles";

export const DefaultLayout: React.FC = () => {
  return (
    <DefaultLayoutContainer>
      <DefaultLayoutHeader>
        <h1>
          <img src={logoSvg} alt="" />
        </h1>
      </DefaultLayoutHeader>

      <Outlet />
    </DefaultLayoutContainer>
  );
};
