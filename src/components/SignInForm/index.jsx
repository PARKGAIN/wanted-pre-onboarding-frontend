import React, { useCallback, useState } from "react";
import { FormContainer, Title, Input, Button } from "./styles";
import axios from "axios";
import { API_BASE_URL } from "baseurl";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signinError, setSigninError] = useState(false);
  const navigate = useNavigate();
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const signIn = async () => {
    try {
      const url = `${API_BASE_URL}/auth/signin`;
      const response = await axios.post(
        url,
        { email: email, password: password },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      const { access_token } = response.data;
      localStorage.setItem("token", access_token);
      navigate("/todo");
    } catch (error) {
      setSigninError(true);
    }
  };
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    signIn();
  });
  return (
    <FormContainer onSubmit={onSubmit}>
      <Title>로그인</Title>
      <Input
        type="text"
        placeholder="이메일"
        data-testid="email-input"
        value={email}
        onChange={onChangeEmail}
      />
      <Input
        type="password"
        placeholder="비밀번호"
        data-testid="password-input"
        value={password}
        onChange={onChangePassword}
      />
      <Button data-testid="signin-button">로그인</Button>
      {signinError && <div>이메일과 비밀번호 조합이 일치하지 않습니다.</div>}
    </FormContainer>
  );
};

export default SignInForm;
