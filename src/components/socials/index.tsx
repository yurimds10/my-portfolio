import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { ImLinkedin } from "react-icons/im";
import { Flex } from "../layout/styles";
import { StyledSocials } from "./styles";

const links = {
  linkedin: 'https://www.linkedin.com/in/yuri-mendes-b34753214/',
  github: 'https://www.github.com/YuriMendess',
  instagram: 'https://www.instagram.com/yurimendes.io'
};

const Socials = (props: any) => {
  return (
    <StyledSocials margin={props.margin}>
      <Flex
        align="center"
        justify="space-between"
      >
        <Link
          href={links.linkedin}
          target="_blank"
        >
          <span><ImLinkedin/></span>
        </Link>

        <Link
          href={links.github}
          target="_blank"
        >
          <span><GoMarkGithub/></span>
        </Link>

        <Link
          href={links.instagram}
          target="_blank"
        >
          <span><FaInstagram/></span>
        </Link>
      </Flex>
    </StyledSocials>
  );
};

export default Socials;
