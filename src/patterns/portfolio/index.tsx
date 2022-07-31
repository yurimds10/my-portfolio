import { Button } from "../../components/button/styles";
import { Description } from "../../components/description/styles";
import { Grid, Section } from "../../components/layout/styles";
import { Title } from "../../components/title/styles";
import { PortfolioCard } from "./styles";
import CoffeeImg from '../../assets/img/coffee.png';
import VueImg from '../../assets/img/vue.png';
import NftImg from '../../assets/img/nft.png';
import HeadphoneImg from '../../assets/img/headphone.png';
import PlantsImg from '../../assets/img/plants.png'
import PromodoroImg from '../../assets/img/promodoro.png'
import Image from "next/image";

const Portfolio = () => {
  return (
    <Section paddingTop="3rem" id="portfolio">
      <Title>Meus projetos</Title>
      <Description>
        Esses são meus projetos que desenvolvi ao longo da minha carreira como programador.
      </Description>
      <Grid width="290px" gap="1rem">
        <PortfolioCard>
          <div className="image-content">
            <Image src={HeadphoneImg} alt="headphone-image" />
          </div>
          <h3>Headphone - Landing Page</h3>
          <Description>
            🎧 | Uma Landing Page sobre headphones Beats
          </Description>
          <Grid width="40%" gap="1rem">
            <Button href="" target="_blank" color="primary">
              Acessar
            </Button>
            <Button href="" target="_blank" color="secondary">
              Repositório
            </Button>
          </Grid>
        </PortfolioCard>

        <PortfolioCard>
          <div className="image-content">
            <Image src={CoffeeImg} alt="coffee-image"/>
          </div>
          <h3>Coffee - Landing Page</h3>
          <Description>
            ☕ | Uma Landing Page do nicho de cafés
          </Description>
          <Grid width="40%" gap="1rem">
            <Button href="" target="_blank" color="primary">
              Live
            </Button>
            <Button href="" target="_blank" color="secondary">
              Repository
            </Button>
          </Grid>
        </PortfolioCard>

        <PortfolioCard>
          <div className="image-content">
            <Image src={NftImg} alt="nft-image" />
          </div>
          <h3>NFT Marketplace - Landing Page</h3>
          <Description>
            Uma Landing Page de um marketplace de nfts
          </Description>
          <Grid width="40%" gap="1rem">
            <Button href="" target="_blank" color="primary">
              Live
            </Button>
            <Button href="https://github.com/YuriMendess/NFT-Marketplace" target="_blank" color="secondary">
              Repository
            </Button>
          </Grid>
        </PortfolioCard>

        <PortfolioCard>
          <div className="image-content">
            <Image src={VueImg} alt="vuelamp-image" />
          </div>
          <h3>Vuelamp - Landing Page</h3>
          <Description>
            💡 | Uma Landing Page de vendas de Lampadas
          </Description>
          <Grid width="40%" gap="1rem">
            <Button href="" target="_blank" color="primary">
              Live
            </Button>
            <Button href="" target="_blank" color="secondary">
              Repository
            </Button>
          </Grid>
        </PortfolioCard>

        <PortfolioCard>
          <div className="image-content">
            <Image src={PlantsImg} alt="plants-image" />
          </div>
          <h3>Plants - Landing Page</h3>
          <Description>
            🎍 | Uma Landing Page de vendas de plantas.
          </Description>
          <Grid width="40%" gap="1rem">
            <Button href="https://plants-472428.netlify.app/" target="_blank" color="primary">
              Live
            </Button>
            <Button href="https://github.com/YuriMendess/plants-website" target="_blank" color="secondary">
              Repository
            </Button>
          </Grid>
        </PortfolioCard>

        <PortfolioCard>
          <div className="image-content">
            <Image src={PromodoroImg} alt="promodoro-image" />
          </div>
          <h3>Promodoro App</h3>
          <Description>
          ⏲ | Um WebApp de produtividade.
          </Description>
          <Grid width="40%" gap="1rem">
            <Button href="" target="_blank" color="primary">
              Live
            </Button>
            <Button href="" target="_blank" color="secondary">
              Repository
            </Button>
          </Grid>
        </PortfolioCard>
      </Grid>
    </Section>
  );
};

export default Portfolio;
