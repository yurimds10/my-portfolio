import { ServicesCard } from "../../components/cards/styles";
import { Flex, Grid, Section } from "../../components/layout/styles";
import { Title } from "../../components/title/styles";
import { TbBrandJavascript } from 'react-icons/tb';
import { BiCodeBlock } from 'react-icons/bi';
import { RiPagesFill } from 'react-icons/ri';

const Services = () => {
  return (
    <Section id="services">
      <Title>The services I offer:</Title>
      <Grid width="220px" gap="1rem">
        <ServicesCard border="primary">
          <BiCodeBlock/>
          <h3>Front-end Solutions</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum et ut necessitatibus maiores dignissimos, veniam ipsa sit perspiciatis aspernatur. Recusandae, aliquam. Soluta dolorum officia quasi quam dolor quis iste. Quos?
          </p>
        </ServicesCard>
        <ServicesCard border="secundary">
          <RiPagesFill/>
          <h3>SEO and Performance</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum et ut necessitatibus maiores dignissimos, veniam ipsa sit perspiciatis aspernatur. Recusandae, aliquam. Soluta dolorum officia quasi quam dolor quis iste. Quos?
          </p>
        </ServicesCard>
        <ServicesCard border="primary">
          <TbBrandJavascript/>
          <h3>Back-end Solutions</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum et ut necessitatibus maiores dignissimos, veniam ipsa sit perspiciatis aspernatur. Recusandae, aliquam. Soluta dolorum officia quasi quam dolor quis iste. Quos?
          </p>
        </ServicesCard>
      </Grid>
    </Section>
  );
};

export default Services;
