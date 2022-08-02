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
  transform: translateY(0);
  animation: floating 3s infinite alternate-reverse;

  @keyframes floating {
    to {
      transform: translateY(2rem);
    }
  }

  @media screen and (min-width: 420px) {
    width: 90%;
  }
  
  @media screen and (min-width: 568px) {
    width:70%;
  }

  @media screen and (min-width: 768px) {
    width: 50%;
    order: 2;
    margin: 0;

    @keyframes floating {
      to {
        transform: translateY(5rem);
      }
    }
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
      width: 275px;
      color: ${obj.colors.mainColor};
      font-size: 3rem;
      margin-bottom: .25rem;
      overflow: hidden;
      white-space: nowrap;
      border-right: 2px solid;
      animation: typing 3s steps(25), blink .4s infinite alternate;

      @keyframes typing {
        from {
          width: 0;
        }
      }

      @keyframes blink {
        40% {
          border-color: ${obj.colors.mainColor};
        }
      }
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