import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import { IconButton } from "../button/styles";
import { Grid } from "../layout/styles";
import { StyledNav } from "./styles";

const Nav = ({ toggleProps }: any) => {
  const [toggle, setToggle] = useState<boolean>(false);

  //setToggle(toggleProps);

  return (
    <StyledNav toggle={toggle}>
      <div>
        <IconButton onClick={() => setToggle(false)}>
          <RiCloseFill/>
        </IconButton>
      </div>
      <Grid width="80px" gap="1.5rem">
        <a href="#home">
          <FaUserAlt/>
          Home
        </a>
        <a href="#about">
          <FaUserAlt/>
          About
        </a>
        <a href="#skills">
          <FaUserAlt/>
          Skills
        </a>
        <a href="#services">
          <FaUserAlt/>
          Services
        </a>
        <a href="#portfolio">
          <FaUserAlt/>
          Portfolio
        </a>
        <a href="#contact">
          <FaUserAlt/>
          Contact Me
        </a>
      </Grid>
    </StyledNav>
  );
};

export default Nav;
