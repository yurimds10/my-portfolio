import styled from "styled-components";

export const Container = styled.div`
  max-width: 1168px;
  margin-left: 1.5rem;
  margin-right: 1.5rem;

  @media screen and (min-width: 1168px) {
    margin: auto;
  }
`;

export const Grid = styled.div`
  display: grid;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;