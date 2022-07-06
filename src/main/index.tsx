import { Container } from "../components/layout/styles";
import About from "../patterns/about";
import Contact from "../patterns/contact";
import Home from "../patterns/home";
import Portfolio from "../patterns/portfolio";
import Services from "../patterns/services";
import Skills from "../patterns/skills";
import { StyledMain } from "./styles";

const Main = () => {
  return (
    <StyledMain>
      <Container>
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Portfolio/>
        <Contact/>
      </Container>
    </StyledMain>
  );
};

export default Main;
