import React from "react";
import {
  FormContainer,
  Title,
  Input,
  Button,
} from "components/SignInForm/styles";

const SignUpForm = () => {
  return (
    <FormContainer>
      <Title>회원가입</Title>
      <Input type="text" placeholder="이메일" data-testid="email-input" />
      <Input
        type="password"
        placeholder="비밀번호"
        data-testid="password-input"
      />
      <Input type="password" placeholder="비밀번호 확인" />
      <Button data-testid="signup-button">가입하기</Button>
    </FormContainer>
  );
};

export default SignUpForm;
