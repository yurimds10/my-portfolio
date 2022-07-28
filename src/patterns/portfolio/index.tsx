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
    <Section id="portfolio">
      <Title>My Projects</Title>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quos excepturi doloribus dignissimos fugit ipsam. Ipsa obcaecati unde laudantium, repudiandae dicta sint earum molestiae libero tempore fuga accusantium, aliquid veritatis?
      </Description>
      <Grid width="290px" gap="1rem">
        <PortfolioCard>
          <div className="image-content">
            <Image src={HeadphoneImg} alt="headphone-image" />
          </div>
          <h3>Headphone - Landing Page</h3>
          <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nobis adipisci unde. Ipsa cumque aliquid magnam voluptatibus iste iusto quisquam qui consectetur saepe facilis, modi sapiente et labore beatae totam.</Description>
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
            <Image src={CoffeeImg} alt="coffee-image"/>
          </div>
          <h3>Coffee - Landing Page</h3>
          <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nobis adipisci unde. Ipsa cumque aliquid magnam voluptatibus iste iusto quisquam qui consectetur saepe facilis, modi sapiente et labore beatae totam.</Description>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nobis adipisci unde. Ipsa cumque aliquid magnam voluptatibus iste iusto quisquam qui consectetur saepe facilis, modi sapiente et labore beatae totam.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nobis adipisci unde. Ipsa cumque aliquid magnam voluptatibus iste iusto quisquam qui consectetur saepe facilis, modi sapiente et labore beatae totam.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nobis adipisci unde. Ipsa cumque aliquid magnam voluptatibus iste iusto quisquam qui consectetur saepe facilis, modi sapiente et labore beatae totam.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nobis adipisci unde. Ipsa cumque aliquid magnam voluptatibus iste iusto quisquam qui consectetur saepe facilis, modi sapiente et labore beatae totam.
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
