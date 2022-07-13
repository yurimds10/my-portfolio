import styled from "styled-components";
import { obj } from "../../global/styles/variables";

interface INavProps {
  toggle: boolean;
}

const Nav = styled.nav`
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

  :hover {
    color: ${obj.colors.mainColor};
  }

  svg {
    font-size: 1.5rem;
    margin-bottom: .5rem;
  }

  @media screen and (min-width: 768px) {
    svg { display: none; }
  }
`;

export { Nav, NavList, NavLink }; 