import { Container, Grid } from "../../components/layout/styles";
import Nav from "../../components/nav";
import { StyledHeader } from "./styles";
import { FaUserAlt } from 'react-icons/fa';
import { RiCloseFill } from 'react-icons/ri';

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <h3>Yuri Mendes</h3>
        <Nav/>
        <div>
          <button></button>
          <button></button>
        </div>
      </Container>
    </StyledHeader>
  );
};

export default Header;
