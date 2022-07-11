import styled from "styled-components";
import { obj } from "../../global/styles/variables";

interface ISocialsProps {
  margin?: string;
}

export const StyledSocials = styled.div`
  
  width: 25%;  
  margin-right: ${(props: ISocialsProps) => props.margin};

  span {
    font-size: 1.5rem;
    color: ${obj.colors.mainColor};
    cursor: pointer;
    transition: .3s;

    &:hover {
      color: ${obj.colors.mainColorLighter};
    }
  }
`;
