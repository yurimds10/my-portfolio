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
  name?: string;
}

const PortfolioCard = (props: Portfolio) => {
  return (
    <StyledPortfolioCard>
      <div className="image-content">

      </div>
      <h3>My Project</h3>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptatum pariatur, tempore, amet id sapiente vitae fuga nemo doloremque est suscipit dolorum aspernatur? Maiores velit iste in illo delectus obcaecati!
      </Description>
      <Grid width="40%" gap="1rem">
        <Button color="primary" padding="0 2rem">Live</Button>
        <Button color="secundary">Repository</Button>
      </Grid>
      
    </StyledPortfolioCard>
  )
}

export { PortfolioCard };