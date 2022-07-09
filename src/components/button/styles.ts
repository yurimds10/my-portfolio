import styled from "styled-components";
import { obj } from "../../global/styles/variables";

interface IButtonProps {
  color: string;
  margin?: string;
}

const Button = styled.button`
  padding: .75rem 2.25rem;
  background-color: ${(props: IButtonProps) => props.color === 'primary' ? obj.colors.mainColor : 'transparent'};
  color: #fff;
  border: ${`2px solid ${obj.colors.mainColor}`};
  border-radius: .5rem;
  cursor: pointer;
  transition: .3s;
  margin: ${(props: IButtonProps) => `0 ${props.margin} 0 0`};

  &:hover {
    background-color: ${(props: IButtonProps) => props.color === 'primary' ? obj.colors.mainColorLighter : obj.colors.mainColor};
    border-color: ${(props: IButtonProps) => props.color === 'primary' ? obj.colors.mainColorLighter : ''};
  }
`;

const IconButton = styled.button`
  background-color: transparent;
  color: #FFF;
  border: none;
  display: inline-flex;
  align-items: center;
  font-size: 1.75rem;
  cursor: pointer;

  &:hover {
    color: ${obj.colors.mainColor};
  }
`;

export { Button, IconButton };