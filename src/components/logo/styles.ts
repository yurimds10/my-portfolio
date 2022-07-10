import styled from "styled-components";
import { obj } from "../../global/styles/variables";

export const Logo = styled.h3`
  color: ${obj.colors.mainColor};
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -1px;

  &:hover {
    color: ${obj.colors.mainColor};
  }
`;
