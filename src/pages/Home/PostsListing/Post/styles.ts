import styled from "styled-components";

export const PostContainer = styled.div`
  background: ${(props) => props.theme.base.post};
  border-radius: 10px;
  padding: 2rem;

  & > header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    strong {
      color: ${(props) => props.theme.base.title};
    }

    span {
      color: ${(props) => props.theme.base.span};
    }
  }

  & > section {
    p {
      color: ${(props) => props.theme.base.text};
    }
  }
`;
