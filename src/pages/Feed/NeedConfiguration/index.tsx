import React from "react";

import { NeedConfigurationContainer } from "./styles";

export const NeedConfiguration: React.FC = () => {
  return (
    <NeedConfigurationContainer>
      <h1>Configure seu perfil do github para habilitar seus posts</h1>

      <ol>
        <li>Crie um repositório com o nome de "github-blog"</li>
        <li>E crie uma issue como seu primeiro post</li>
      </ol>
    </NeedConfigurationContainer>
  );
};
