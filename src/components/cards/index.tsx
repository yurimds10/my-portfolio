import Link from "next/link";
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
  repository: string;
  website: string;
}

const PortfolioCard = ({ name, description, repository, website }: Portfolio) => {
  return (
    <StyledPortfolioCard>
      <div className="image-content">

      </div>
      <h3>{name}</h3>
      <Description>{description}</Description>
      <Grid width="40%" gap="1rem">
        <Button href={website} target="_blank" color="primary">
          Live
        </Button>
        <Button href={repository} target="_blank" color="secondary">
          Repository
        </Button>
      </Grid>
      
    </StyledPortfolioCard>
  )
}

export { PortfolioCard };