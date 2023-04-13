import React, { useCallback } from "react";
import {
  FormContainer,
  Title,
  Input,
  Button,
} from "components/SignInForm/styles";
import useInput from "hooks/useInputValidation";

const SignUpForm = () => {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
    },
    [email, password]
  );

  return (
    <FormContainer onSubmit={onSubmit}>
      <Title>회원가입</Title>
      <Input
        type="text"
        placeholder="이메일"
        value={email}
        onChange={onChangeEmail}
        data-testid="email-input"
      />
      <Input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={onChangePassword}
        data-testid="password-input"
      />
      <Button type="submit" data-testid="signup-button" disabled={true}>
        가입하기
      </Button>
    </FormContainer>
  );
};

export default SignUpForm;
