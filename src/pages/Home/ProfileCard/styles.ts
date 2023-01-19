import styled from "styled-components";

export const ProfileCardContainer = styled.div`
  max-width: 54rem;
  margin: 0 auto;
  margin-top: -3rem;

  background: ${(props) => props.theme.base.profile};

  border-radius: 10px;

  display: grid;
  grid-template-columns: 9.25rem 1fr;
  gap: 1rem;
  padding: 2rem 2.5rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
  }
`;

export const ProfileCardHeader = styled.header`
  h1 {
    margin-bottom: 0.5rem;
  }

  p {
    color: ${(props) => props.theme.base.text};
    margin-bottom: 1.5rem;
  }
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${(props) => props.theme.brand.blue};
    text-transform: uppercase;
    text-decoration: none;

    line-height: 0;

    font-size: 0.75rem;
    font-weight: 700;

    display: flex;
    align-items: center;

    gap: 0.2rem;
  }
`;

export const AssetsContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
