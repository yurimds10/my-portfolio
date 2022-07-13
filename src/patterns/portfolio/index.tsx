import axios from "axios";
import { useQuery } from "react-query";
import { PortfolioCard } from "../../components/cards/index";
import { Description } from "../../components/description/styles";
import { Grid, Section } from "../../components/layout/styles";
import { Title } from "../../components/title/styles";

type Repository = {
  id: string;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
}

const Portfolio = () => {
  const { data, isFetching } = useQuery<Repository[]>('repos', async () => {
    const response = await axios.get('https://api.github.com/users/YuriMendess/repos');
    return response.data;
  }, {
    staleTime: 1000 * 60 * 10, // 10 min
  });

  return (
    <Section id="portfolio">
      <Title>My Projects</Title>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quos excepturi doloribus dignissimos fugit ipsam. Ipsa obcaecati unde laudantium, repudiandae dicta sint earum molestiae libero tempore fuga accusantium, aliquid veritatis?
      </Description>
      <Grid width="290px" gap="1rem">
        { isFetching && <p style={{textAlign: 'center', fontSize: '1.25rem'}}>loading...</p> }
        {data?.map(repository => {
          return (
            <PortfolioCard
              key={repository.id}
              name={repository.name}
              description={repository.description}
              repository={repository.html_url}
              website={repository.homepage}
            />
          );
        })}
      </Grid>
    </Section>
  );
};

export default Portfolio;
