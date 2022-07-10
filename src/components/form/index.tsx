/* eslint-disable react/no-unescaped-entities */
import { Button } from "../button/styles";
import { FormTitle, Label, Input, TextArea } from "./styles";

export const Form = () => {
  return (
    <form>
      <FormTitle>Contact me, let's make magic together</FormTitle>
      <Label htmlFor="name">
        Name
        <Input type="text" />
      </Label>

      <Label htmlFor="email">
        Email
        <Input type="email" />
      </Label>

      <Label htmlFor="name">
        Message
        <TextArea></TextArea>
      </Label>
      <Button color="primary">Send</Button>
    </form>
  );
};
