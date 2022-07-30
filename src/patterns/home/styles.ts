import styled from "styled-components";
import { obj } from "../../global/styles/variables";

const StyledHome = styled.section`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 70vh;
  }
`;

const HomeImg = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  justify-content: end;
  
  @media screen and (min-width: 768px) {
    width: 50%;
    order: 2;
    margin: 0;
  }
`;

const HomeTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: #fff;

  span {
    display: block;
    
    &.name {
      color: ${obj.colors.mainColor};
      font-size: 3rem;
      margin-bottom: .25rem;
    }

    &.job {
      color: #fff;
      font-size: 1rem;
    }
  }
`;

const HomeDescription = styled.p`
  margin-bottom: 1rem;
`;

export { StyledHome, HomeImg, HomeTitle, HomeDescription };