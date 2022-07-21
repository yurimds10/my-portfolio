import styled from "styled-components";
import { obj } from "../../global/styles/variables";

export const Logo = styled.h3`
  color: ${obj.colors.mainColor};
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: -1px;

  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }

  &:hover {
    color: ${obj.colors.mainColor};
  }
`;
