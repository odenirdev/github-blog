import styled from "styled-components";

export const PostHeaderContainer = styled.header`
  background: ${(props) => props.theme.base.profile};
  padding: 2rem;
  border-radius: 10px;

  h1 {
    margin-bottom: 2rem;
  }
`;

export const PostHeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  a {
    color: ${(props) => props.theme.brand.blue};
    text-transform: uppercase;
    font-weight: 700;
    line-height: 0;
    font-size: 0.875rem;
    text-decoration: none;

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const AssetsContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 764px) {
    flex-direction: column;
    align-items: center;
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
