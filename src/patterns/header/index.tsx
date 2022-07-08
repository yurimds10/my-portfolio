import { Container, Flex, Grid } from "../../components/layout/styles";
import Nav from "../../components/nav";
import { Buttons, StyledHeader } from "./styles";
import { IoMdApps } from 'react-icons/io';
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
          <Nav toggle={toggle}/>
          <Buttons>
            <IconButton></IconButton>
            <IconButton onClick={() => setToggle(true)}>
              <IoMdApps/>
            </IconButton>
          </Buttons>
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
