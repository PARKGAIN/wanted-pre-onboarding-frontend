import React from "react";
import { FormContainer, Title, Input, Button } from "./styles";

const SignInForm = () => {
  return (
    <FormContainer>
      <Title>로그인</Title>
      <Input type="text" placeholder="이메일" data-testid="email-input" />
      <Input
        type="password"
        placeholder="비밀번호"
        data-testid="password-input"
      />
      <Button data-testid="signin-button">로그인</Button>
    </FormContainer>
  );
};

export default SignInForm;
