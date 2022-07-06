import styled from "styled-components";

export const StyledNav = styled.nav`
  position: absolute;
  bottom: -100%;

  @media screen and (min-width: 768px) {
    position: static;
  }
`;