import { Button } from "../../components/button/styles";
import { Section } from "../../components/layout/styles";
import { Subtitle } from "../../components/subtitle/styles";
import { Title } from "../../components/title/styles";
import { StyledAbout } from "./styles";

const About = () => {
  return (
    <Section>
      <StyledAbout>
        <Title>About Me</Title>
        <Subtitle>Um pouco sobre mim</Subtitle>
        <div>
          <div>
            <img src="/" alt="Porra nenhuma" />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore quo aspernatur distinctio aliquam eum, repudiandae omnis sed at error doloremque suscipit magni enim, qui deleniti beatae, nam repellat impedit sequi?
            </p>
            <div>
              <div>
                <h4>01</h4>
                <span>Years experience</span>
              </div>
              <div>
                <h4>01</h4>
                <span>Years experience</span>
              </div>
            </div>
            <Button color="primary">Download CV</Button>
          </div>
        </div>
      </StyledAbout>
    </Section>
  );
};

export default About;
