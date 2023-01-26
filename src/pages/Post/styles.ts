import styled from "styled-components";

export const PostContainer = styled.div`
  padding: 0 1rem;
  margin-top: -3rem;
  max-width: 54rem;
  margin-inline: auto;

  & > section {
    padding: 2rem;

    a {
      color: ${(props) => props.theme.brand.blue};
    }
  }
`;
