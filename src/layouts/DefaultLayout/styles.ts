import styled from "styled-components";

import headerCoverJpg from "../../assets/header-cover.jpg";

export const DefaultLayoutContainer = styled.div``;

export const DefaultLayoutHeader = styled.header`
  padding: 3rem 1rem 5rem;

  background: url(${headerCoverJpg});
  background-position: center;
  background-size: cover;

  img {
    display: block;
    margin: 0 auto;
  }
`;
