import styled from "styled-components";
import { obj } from "../../global/styles/variables";

export const Blob = styled.div`
  @keyframes morph {
    0%, 100% {
      border-radius: 
        42% 56% 72% 28% / 42% 42% 56% 48%;
    }
    33% {
      border-radius: 
        72% 28% 48% 48% / 28% 28% 72% 72%;
    }
    66% {
      border-radius: 
        100% 56% 56% 100% / 100% 100% 56% 56%;
    }
  }

  overflow: hidden;
  width: 300px;
  height: 300px;
  border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;
  background-color: ${obj.colors.mainColor};
  animation: morph 3.75s linear infinite;

  @media screen and (min-width: 968px){
    width: 500px;
    height: 500px;
  }
`;
