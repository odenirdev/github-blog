import styled from "styled-components";

export const PostsListingContainer = styled.div`
  margin-top: 4.5rem;
  max-width: 54rem;
  margin-inline: auto;

  & > header {
    margin-bottom: 3rem;

    & > div {
      display: flex;
      justify-content: space-between;

      span {
        color: ${(props) => props.theme.base.span};
      }
    }

    input {
      width: 100%;
    }
  }

  & > section {
    ul {
      list-style: none;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
`;
