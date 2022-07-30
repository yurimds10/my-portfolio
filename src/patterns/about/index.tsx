import { Description } from "../../components/description/styles";
import { Flex, Section } from "../../components/layout/styles";
import { Title } from "../../components/title/styles";
import { Number, Experience } from "./styles";

const About = () => {
  return (
    <Section paddingTop="3rem" id="about">
      <Title>Sobre mim</Title>
      <Description>
        Apaixonado por tecnologia e seus impactos na nossa sociedade. Meu desejo sempre foi causar impacto no mundo e ajudar as pessoas. Atrelado por essa minha vontade, me encontrei no mundo da programação, assim causando impacto através dos códigos e soluções. Hoje trabalho tanto com front-end como também back-end, apesar do meu foco estar mais atrelado ao front-end.
      </Description>
      <Flex align="center">
        <Number>1+</Number>
        <Experience>
          Ano de experiência. Atualmente estudando e criando projetos front-end para ganhar mais experiência.
        </Experience>
      </Flex>
    </Section>
  );
};

export default About;
