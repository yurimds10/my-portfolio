import styled from "styled-components";
import { obj } from "../../global/styles/variables";

export const PortfolioCard = styled.div`
  padding: 1rem 1rem 2rem 1rem;
  border-radius: .5rem;
  background-color: ${obj.colors.lowPriority};

  .image-content {
    height: auto;
    margin-bottom: 1rem;
    border: 2px solid ${obj.colors.mainColor};
    border-radius: .5rem;

    img {
      border-radius: .5rem;
    }
  }

  h3 {
    text-transform: uppercase;
    color: ${obj.colors.mainColor};
    margin-bottom: 1rem;
  }
`;