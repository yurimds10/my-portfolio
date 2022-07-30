import { ServicesCard } from "./styles";
import { Grid, Section } from "../../components/layout/styles";
import { Title } from "../../components/title/styles";
import { TbBrandJavascript } from 'react-icons/tb';
import { BiCodeBlock } from 'react-icons/bi';
import { RiPagesFill } from 'react-icons/ri';

const Services = () => {
  return (
    <Section paddingTop="3rem" id="services">
      <Title>Os serviços que eu ofereço:</Title>
      <Grid width="220px" gap="1rem">
        <ServicesCard border="primary">
          <BiCodeBlock/>
          <h3>Soluções Front-end</h3>
          <p>
            Criação de Landing Pages, Websites Institucionais, WebApps e Ecommerce.
          </p>
        </ServicesCard>
        <ServicesCard border="secundary">
          <RiPagesFill/>
          <h3>SEO e Performance</h3>
          <p>
            Otimização de SEO para seu negócio ser visto por todos e otimização de aplicações para melhor desempenho e experiência de usuário.
          </p>
        </ServicesCard>
        <ServicesCard border="primary">
          <TbBrandJavascript/>
          <h3>Soluções Back-end</h3>
          <p>
            Criação de API's, manipulação de banco de dados e formulários.
          </p>
        </ServicesCard>
      </Grid>
    </Section>
  );
};

export default Services;
