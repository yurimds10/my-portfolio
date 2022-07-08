import styled from "styled-components";
import { obj } from "../../global/styles/variables";

export const Button = styled.button`
  background-color: ${obj.colors.mainColor};
  border: none;
  cursor: pointer;
  transition: .3s;

  &:hover {
    background-color: ${obj.colors.mainColorLighter};
  }
`;

export const IconButton = styled.button`
  background-color: transparent;
  color: #FFF;
  border: none;
  display: inline-flex;
  align-items: center;
  font-size: 1.75rem;
  cursor: pointer;

  &:hover {
    color: ${obj.colors.mainColor};
  }
`;
