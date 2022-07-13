import { useState } from "react";
import { Grid, Section } from "../../components/layout/styles";
import { Title } from "../../components/title/styles";
import { SkillCard } from "./styles";

const Skills = () => {
  const [content, setContent] = useState<string>('');
  const [skill,  setSkill] = useState<string>('');

  return (
    <Section>
      <Title>My skills</Title>
      <Grid width="100px" gap="1rem">
        <SkillCard>{"html"}</SkillCard>
        <SkillCard>{"css"}</SkillCard>
        <SkillCard>{"javascript"}</SkillCard>
        <SkillCard>{"typescript"}</SkillCard>
        <SkillCard>{"sass"}</SkillCard>
        <SkillCard>{"reactjs"}</SkillCard>
        <SkillCard>{"nextjs"}</SkillCard>
        <SkillCard>{"styled"}</SkillCard>
        <SkillCard>{"nodejs"}</SkillCard>
        <SkillCard>{"express"}</SkillCard>
      </Grid>
    </Section>
  );
};

export default Skills;
