import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 3rem 0 2rem 0;
  margin-bottom: 3rem;

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

const Copy = styled.p`
  text-align: center;
`;

export { StyledFooter, Copy };