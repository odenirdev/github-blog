import styled from "styled-components";

export const Input = styled.input`
  border: 1px solid ${(props) => props.theme.base.border};
  background-color: ${(props) => props.theme.base.input};
  color: ${(props) => props.theme.base.color};

  &::placeholder {
    color: ${(props) => props.theme.base.label};
  }

  padding: 0.75rem 1rem;
  border-radius: 6px;
`;
