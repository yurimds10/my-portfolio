/* eslint-disable react/no-unescaped-entities */
import { Content, Section } from "../../components/layout/styles";
import { HomeImg, StyledHome, HomeTitle, HomeDescription } from "./styles";
import { Button } from "../../components/button/styles";
import homeImg from '../../assets/img/home.png';
import Image from "next/image";
import { Description } from "../../components/description/styles";
import { FaUserAlt } from "react-icons/fa";
import { AiFillPicture } from "react-icons/ai";

const Home = () => {
  return (
    <Section paddingTop="0" id="home">
      <StyledHome>
        <HomeImg>
          <Image src={homeImg} alt="home image"/>
        </HomeImg>
        <Content>
          <HomeTitle>
            Olá, Eu sou <br/>
            <span className="name">Yuri Mendes</span>
            <span className="job">Desenvolvedor front-end</span>
          </HomeTitle>
          <Description>
            Estudante de desenvolvimento front-end e apaixonado por tecnologia
          </Description>
          <Button href="#about" color="primary" margin="1rem">
            Sobre Mim
            <FaUserAlt/>
          </Button>
          <Button href="#portfolio" color="secondary">
            Meus Projetos
            <AiFillPicture/>
          </Button>
        </Content>
      </StyledHome>
    </Section>
  );
};

export default Home;
