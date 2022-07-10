import styled from "styled-components";

interface ISocialsProps {
  margin?: string;
}

const StyledSocials = styled.div`
  border: 1px solid red;
  position: absolute;
  left: 0;
  margin-right: ${(props: ISocialsProps) => props.margin};
`;

export { StyledSocials };