import styled from "styled-components";
import { obj } from "../../global/styles/variables";

interface INavProps {
  toggle: boolean;
}

const Nav = styled.nav`
  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 2rem 1rem;
    background: ${obj.colors.mainColorLighter};
    position: fixed;
    bottom: ${(props: INavProps) => props.toggle === false ? "-100%" : "0"};
    left: 0;
    border-radius: 1.5rem 1.5rem 0 0;
    transition: .3s;
  }

  padding: 0;
  background: transparent;
`;

const NavList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media screen and (min-width: 768px) {
    display: flex;
    column-gap: 3rem;  
  }

  @media screen and (min-width: 968px) {
    column-gap: 4rem;
  }
`;

const NavLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: .3s;
  font-weight: 400;

  &.active-link {
    position: relative;
    color: ${obj.colors.mainColor};
    
    @media screen and (min-width: 768px) {
      &::after {
        content: '';
        position: absolute;
        bottom: -.5rem;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: ${obj.colors.mainColor};
      }
    }
  } 
  

  &:hover {
    color: ${obj.colors.mainColor};
  }

  svg {
    font-size: 1.5rem;
    margin-bottom: .5rem;
  }

  @media screen and (min-width: 768px) {
    &:hover {
      color: ${obj.colors.mainColor};
    }

    svg { display: none; }
  }
`;

export { Nav, NavList, NavLink }; 