/* eslint-disable react/no-unescaped-entities */
import { Button } from "../button/styles";
import { StyledForm, FormTitle, Label, Input, TextArea } from "./styles";

type Message = {
  myEmail: string;
  name: string;
  email: string;
  message: string;
}

export const Form = () => {

  const sendMessage = () => {
    const messageForMe: Message = {
      myEmail: 'contato.yurimendess@gmail.com',
      name: '',
      email: '',
      message: ''
    };

    console.log(messageForMe);
  };

  return (
    <StyledForm method="POST" >
      <FormTitle>Contact me, let's make magic together</FormTitle>
      <Label htmlFor="name">
        Name
        <Input type="text" onChange={(e) => e.target.value}/>
      </Label>

      <Label htmlFor="email">
        Email
        <Input type="email" />
      </Label>

      <Label htmlFor="name">
        Message
        <TextArea />
      </Label>
      <Button color="primary" onClick={() => sendMessage()}>Send</Button>
    </StyledForm>
  );
};
