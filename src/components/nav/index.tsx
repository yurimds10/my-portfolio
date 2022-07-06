import { FaUserAlt } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import { Grid } from "../layout/styles";
import { StyledNav } from "./styles";

const Nav = () => {
  return (
    <StyledNav>
      <div>
        <button>
          <RiCloseFill/>
        </button>
      </div>
      <Grid>
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
