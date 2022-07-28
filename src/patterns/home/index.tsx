/* eslint-disable react/no-unescaped-entities */
import { Content, Section } from "../../components/layout/styles";
import { HomeImg, StyledHome, HomeTitle, HomeDescription } from "./styles";
import { Button } from "../../components/button/styles";
import { ReactElement as SVG } from "../../assets/img/home.svg";
import Image from "next/image";

const Home = () => {
  return (
    <Section id="home">
      <StyledHome>      
        <HomeImg>
          <Image src={SVG} alt="home-img"/>
        </HomeImg>
        <Content>
          <HomeTitle>Hello, I'm <br/> <span>Yuri Mendes</span></HomeTitle>
          <HomeDescription>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime rem, non eum aspernatur, amet perspiciatis voluptates necessitatibus quas quae illo eveniet esse itaque aut unde nisi natus sequi sit? Mollitia?
          </HomeDescription>
          <Button href="#about" color="primary" margin="1rem">About Me</Button>
          <Button href="#portfolio" color="secondary">My Projects</Button>
        </Content>
      </StyledHome>
    </Section>
  );
};

export default Home;
