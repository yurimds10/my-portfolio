import styled from "styled-components";
import { obj } from "../../global/styles/variables";

interface ICardsProps {
  border: 'primary' | 'secundary',
}

export const ServicesCard = styled.div`
  padding: 3rem 2rem;
  border-radius: .5rem;
  border: 2px solid ${(props: ICardsProps) => props.border === 'primary' ? obj.colors.mainColor : obj.colors.lightColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: .3s;

  &:hover {
    transform: translateY(-.5rem);
    
    svg {
      color: ${obj.colors.mainColor};
    }
  }

  svg {
    font-size: 5rem;
    margin-bottom: .5rem;
  }

  h3 {
    text-align: center;
    text-transform: uppercase;
    color: ${(props: ICardsProps) => props.border === 'secundary' ? obj.colors.mainColor : obj.colors.lightColor};
    margin-bottom: 1rem;
  }

  p {
    text-align: center;
  }
`;