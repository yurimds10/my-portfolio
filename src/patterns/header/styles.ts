import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 4rem;
  border: 1px solid red;
  z-index: 100;
  background-color: #202020;

  @media screen and (min-width: 768px) {
    top: 0;
  }
`;