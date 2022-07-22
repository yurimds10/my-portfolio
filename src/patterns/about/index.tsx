import { Description } from "../../components/description/styles";
import { Flex, Section } from "../../components/layout/styles";
import { Title } from "../../components/title/styles";
import { Number, Experience } from "./styles";

const About = () => {
  return (
    <Section id="about">
      <Title>About Me</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur itaque recusandae aperiam, facilis possimus veritatis ex dolorem maiores? Magni ab quidem obcaecati in. Temporibus, similique tempore eum sint minus veritatis.
      </Description>
      <Flex align="center">
        <Number>1+</Number>
        <Experience>
          Years of experience. Specialised in building apps, while ensuring a seamless web experience for end users.
        </Experience>
      </Flex>
    </Section>
  );
};

export default About;
