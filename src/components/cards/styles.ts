import styled from "styled-components";
import { obj } from "../../global/styles/variables";

interface ICardsProps {
  border: 'primary' | 'secundary',
}

export const ServicesCard = styled.div`
  padding: 3rem 2rem;
  border-radius: .5rem;
  border: ${(props: ICardsProps) => `2px solid ${props.border === 'primary' ? obj.colors.mainColor : obj.colors.lightColor}`};
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    font-size: 5rem;
    margin-bottom: .5rem;
  }

  h3 {
    text-transform: uppercase;
    color: ${(props: ICardsProps) => props.border === 'secundary' ? obj.colors.mainColor : obj.colors.lightColor};
    margin-bottom: 1rem;
  }

  p {
    text-align: center;
  }
`;

export const StyledPortfolioCard = styled.div`
  padding: 1rem 1rem 2rem 1rem;
  border-radius: .5rem;
  background-color: ${obj.colors.lowPriority};

  .image-content {
    height: 13rem;
    margin-bottom: 1rem;
    border: 2px solid ${obj.colors.mainColor};
    border-radius: .5rem;
  }

  h3 {
    text-transform: uppercase;
    color: ${obj.colors.mainColor};
    margin-bottom: 1rem;
  }
`;
