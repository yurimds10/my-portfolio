import styled from "styled-components";

const StyledHome = styled.section`
  
  position: relative;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 300px) {
    height: 65vh;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const HomeImg = styled.div`
  width: 100%;
  margin-bottom: 3rem;
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

  span {
    font-size: 2.5rem;
  }
`;

const HomeDescription = styled.p`
  margin-bottom: 1rem;
`;

export { StyledHome, HomeImg, HomeTitle, HomeDescription };