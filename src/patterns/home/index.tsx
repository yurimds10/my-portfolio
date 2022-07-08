import Link from "next/link";
import { Flex } from "../../components/layout/styles";
import { HomeImg, StyledHome } from "./styles";
import { GoMarkGithub } from 'react-icons/go';
import { ImLinkedin } from 'react-icons/im';
import { FaInstagram } from 'react-icons/fa';
import Socials from "../../components/socials";



const Home = () => {
  return (
    <StyledHome>      
      <HomeImg>
          
      </HomeImg>
      <div>
        <Socials margin="1.5rem"/>
        <div>
          <h1>Yuri Mendes</h1>
          <span>Front-end Developer</span>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime rem, non eum aspernatur, amet perspiciatis voluptates necessitatibus quas quae illo eveniet esse itaque aut unde nisi natus sequi sit? Mollitia?
          </p>
        </div>
        
      </div>
      
    </StyledHome>
  );
};

export default Home;
