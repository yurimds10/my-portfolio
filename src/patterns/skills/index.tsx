import { Grid, Section } from "../../components/layout/styles";
import { Title } from "../../components/title/styles";
import { SkillCard } from "./styles";

const Skills = () => {
  return (
    <Section paddingTop="3rem" id="skills">
      <Title>Minhas habilidades</Title>
      <Grid width="125px" gap="1rem">
        <SkillCard>
          <i className="devicon-html5-plain-wordmark colored"/>
        </SkillCard>

        <SkillCard>
          <i className="devicon-css3-plain-wordmark colored"/>
        </SkillCard>

        <SkillCard>
          <i className="devicon-javascript-plain colored"/>
        </SkillCard>

        <SkillCard>
          <i className="devicon-typescript-plain colored"/>
        </SkillCard>

        <SkillCard>
          <i className="devicon-sass-original colored"/>
        </SkillCard>

        <SkillCard>
          <i className="devicon-react-original-wordmark colored"/>
        </SkillCard>

        <SkillCard>
          <i className="devicon-nextjs-plain"/>
        </SkillCard>

        <SkillCard>
          <i className="devicon-nodejs-plain colored"/>
        </SkillCard>

        <SkillCard>
          <i className="devicon-express-original-wordmark" />
        </SkillCard>

        <SkillCard>
          <i className="devicon-git-plain colored"/>
        </SkillCard>
        
        <SkillCard>
          <i className="devicon-github-original"/>
        </SkillCard>
      </Grid>
    </Section>
  );
};

export default Skills;
