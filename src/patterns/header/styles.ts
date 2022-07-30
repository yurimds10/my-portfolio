import styled from "styled-components";
import { obj } from "../../global/styles/variables";

const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 4rem;
  z-index: 2;
  background-color: ${obj.colors.bodyColor};  

  @media screen and (min-width: 768px) {
    top: 0;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export { StyledHeader, Buttons };
