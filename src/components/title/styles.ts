import styled from "styled-components";
import { obj } from "../../global/styles/variables";

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${obj.colors.mainColor};
  margin-bottom: 1rem;

  @media screen and (min-width: 968px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;