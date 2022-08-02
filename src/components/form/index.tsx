/* eslint-disable react/no-unescaped-entities */
import { Button } from "../button/styles";
import { StyledForm, FormTitle, Label, Input, TextArea } from "./styles";

export const Form = () => {

  return (
    <StyledForm action="https://formsubmit.co/contato.yurimendess@gmail.com" method="POST" >
      <FormTitle>Contact me, let's make magic together</FormTitle>
      <Label htmlFor="name">
        Name
        <Input type="text" required/>
      </Label>

      <Label htmlFor="email">
        Email
        <Input type="email" required/>
      </Label>

      <Label htmlFor="name">
        Message
        <TextArea required/>
      </Label>
      <Button type="submit" color="primary">Send</Button>
    </StyledForm>
  );
};
