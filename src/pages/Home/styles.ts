import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 1rem;
  max-width: 54rem;
  margin-inline: auto;

  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }

  & > form {
    display: grid;
    grid-template-columns: 1fr 48px;
    gap: 1rem;

    button {
      border: none;
      border-radius: 6px;

      background: ${(props) => props.theme.base.button};
      color: ${(props) => props.theme.base.color};
      cursor: pointer;
    }
  }
`;
