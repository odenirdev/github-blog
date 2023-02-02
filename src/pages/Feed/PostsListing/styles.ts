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
  }

  & > section {
    ul {
      list-style: none;

      li + li {
        margin-top: 1rem;
      }
    }
  }
`;
