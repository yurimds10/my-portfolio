import styled from "styled-components";
import { obj } from "../../global/styles/variables";

export const SkillCard = styled.div`
  border: 2px solid ${obj.colors.mainColor};
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: .5rem;
  font-size: 6rem;
  transition: .3s;

  &:hover {
    transform: translateY(-.5rem);
    border: 2px solid ${obj.colors.mainColorLighter};
  }
`;