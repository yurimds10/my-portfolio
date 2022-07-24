import { Container, Flex, Grid } from "../../components/layout/styles";
import { Nav, NavLink, NavList } from "../../components/nav/styles";
import { FaUserAlt, FaPhoneAlt } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import { StyledHeader } from "./styles";
import { IoMdApps } from 'react-icons/io';
import {IoDocumentText, IoBag} from 'react-icons/io5';
import { AiFillPicture } from 'react-icons/ai';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { IconButton } from "../../components/button/styles";
import { Logo } from "../../components/logo/styles";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <StyledHeader>
      <Container>
        <Flex
          width="100%"
          height="4rem"
          direction="row"
          justify="space-between"
          align="center"
        >
          <Logo>Yuri Mendes</Logo>
          <Nav toggle={toggle}>
            <IconButton onClick={() => setToggle(false)}>
              <RiCloseFill/>
            </IconButton>
            <NavList>
              <NavLink href="#">
                <BsFillHouseDoorFill/>
                Home
              </NavLink>

              <NavLink href="#about">
                <FaUserAlt/>
                About
              </NavLink>

              <NavLink href="#skills">
                <IoDocumentText/>
                Skills
              </NavLink>

              <NavLink href="#services">
                <IoBag/>
                Services
              </NavLink>

              <NavLink href="#portfolio">
                <AiFillPicture/>
                Portfolio
              </NavLink>

              <NavLink href="#contact">
                <FaPhoneAlt/>
                Contact Me
              </NavLink>
            </NavList>
          </Nav>
          <IconButton onClick={() => setToggle(true)}>
            <IoMdApps/>
          </IconButton>
          
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
