import React, { useCallback, useState } from "react";
import {
  FormContainer,
  Title,
  Input,
  Button,
} from "components/SignInForm/styles";
import useInputValidation from "hooks/useInputValidation";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "apis/api";
import axios from "axios";

const SignUpForm = () => {
  const emailValidation = useInputValidation(/@/g);
  const passwordValidation = useInputValidation(/^.{8,}$/);
  const navigate = useNavigate();
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const [signUpError, setSignUpError] = useState("");

  const signup = async () => {
    try {
      const url = `${API_BASE_URL}/auth/signup`;
      await axios.post(
        url,
        { email: emailValidation.value, password: passwordValidation.value },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      setSignUpSuccess(true);
    } catch (error) {
      setSignUpError(error.response?.data?.statusCode === 400);
    }
  };
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      signup();
      if (signUpSuccess) navigate("/signin");
    },
    [emailValidation, passwordValidation]
  );

  return (
    <FormContainer onSubmit={onSubmit}>
      <Title>회원가입</Title>
      <Input
        type="text"
        placeholder="이메일"
        onChange={emailValidation.handleChange}
        data-testid="email-input"
      />
      <Input
        type="password"
        placeholder="비밀번호"
        onChange={passwordValidation.handleChange}
        data-testid="password-input"
      />
      <Button
        type="submit"
        data-testid="signup-button"
        disabled={!emailValidation.isValid || !passwordValidation.isValid}
      >
        가입하기
      </Button>
      {signUpError && <div>이미 가입된 이메일입니다.</div>}
    </FormContainer>
  );
};

export default SignUpForm;
