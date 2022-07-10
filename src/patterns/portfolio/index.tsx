import { Button } from "../../components/button/styles";
import { PortfolioCard } from "../../components/cards/index";
import { Description } from "../../components/description/styles";
import { Grid, Section } from "../../components/layout/styles";
import { Title } from "../../components/title/styles";

const Portfolio = () => {
  return (
    <Section>
      <Title>My Projects</Title>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quos excepturi doloribus dignissimos fugit ipsam. Ipsa obcaecati unde laudantium, repudiandae dicta sint earum molestiae libero tempore fuga accusantium, aliquid veritatis?
      </Description>
      <Grid width="290px" gap="1rem">
        <PortfolioCard/>
        <PortfolioCard/>
        <PortfolioCard/>
        <PortfolioCard/>
        <PortfolioCard/>
        <PortfolioCard/>
      </Grid>
    </Section>
  );
};

export default Portfolio;
