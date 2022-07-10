import styled from "styled-components";
import { obj } from "../../global/styles/variables";

const FormTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  width: 100%;
  padding: 1rem 0 1rem 1rem;
  background-color: ${obj.colors.lowPriority};
  border-radius: .5rem;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  margin-top: .5rem;
  width: 100%;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 1rem;
  outline: none;
`;

const TextArea = styled.input`
  margin-top: .5rem;
  width: 100%;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 1rem;
  outline: none;
`;

export { FormTitle, Label, Input, TextArea };