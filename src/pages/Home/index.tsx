import React from "react";
import { PaperPlaneTilt } from "phosphor-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Input } from "../../components/Input";

import { HomeContainer } from "./styles";

interface onSubmitInitData {
  username: string;
}

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<onSubmitInitData>();

  const onSubmitInit = ({ username }: onSubmitInitData) => {
    navigate(`/${username}`);
  };

  return (
    <HomeContainer>
      <h1>Entre com seu username do Github para iniciar com seu blog</h1>

      <form onSubmit={handleSubmit(onSubmitInit)}>
        <Input placeholder="https://github.com/" {...register("username")} />

        <button title="Iniciar">
          <PaperPlaneTilt size={24} />
        </button>
      </form>
    </HomeContainer>
  );
};
