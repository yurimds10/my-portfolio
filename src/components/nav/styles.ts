import styled from "styled-components";
import { obj } from "../../global/styles/variables";

interface INavProps {
  toggle: boolean;
}

export const StyledNav = styled.nav`
  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 2rem 1rem;
    background: ${obj.colors.mainColor};
    position: fixed;
    bottom: ${(props: INavProps) => props.toggle === false ? "-100%" : "0"};
    left: 0;
    border-radius: 1.5rem 1.5rem 0 0;
    transition: .3s;
    
  }
  border: 1px solid red;
  display: none;
  

  @media screen and (min-width: 768px) {
    
    padding: 0;
    background: transparent;
  }
`;