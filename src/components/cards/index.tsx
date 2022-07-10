import { Button } from "../button/styles";
import { Description } from "../description/styles";
import { Flex, Grid } from "../layout/styles";
import { StyledPortfolioCard } from "./styles";

const ServicesCard = () => {
  return (
    <div></div>
  )
}

type Portfolio = {
  name: string;
  description: string | null;
}

const PortfolioCard = ({ name, description }: Portfolio) => {
  return (
    <StyledPortfolioCard>
      <div className="image-content">

      </div>
      <h3>{name}</h3>
      <Description>{description}</Description>
      <Grid width="40%" gap="1rem">
        <Button color="primary">Live</Button>
        <Button color="secundary">Repository</Button>
      </Grid>
      
    </StyledPortfolioCard>
  )
}

export { PortfolioCard };