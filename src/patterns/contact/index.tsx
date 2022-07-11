import { Description } from "../../components/description/styles";
import { Form } from "../../components/form";
import { Grid, Section } from "../../components/layout/styles";
import Socials from "../../components/socials";
import { Title } from "../../components/title/styles";

const Contact = () => {
  return (
    <Section id="contact">
      <Grid width="270px" gap="3rem">
        <div>
          <Title>Connect with me:</Title>
          <Description>Satisfied with me? Please contact me!</Description>
          <Socials/>
        </div>
        <Form/>
      </Grid>
    </Section>
  );
};

export default Contact;
