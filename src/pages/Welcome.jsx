import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
`;

const SignupButton = styled.button`
  padding: 10px 40px;
  margin: 0 10px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0062cc;
  }
`;

const SigninButton = styled.button`
  padding: 10px 50px;
  margin: 25px 10px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  background-color: #28a745;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`;

const Footer = styled.div`
  margin-top: 50px;
  text-align: center;
`;

const Copyright = styled.p`
  font-size: 14px;
  color: #999;
`;

const Welcome = () => {
  return (
    <MainContainer>
      <LogoContainer>
        <Title>✍TO DO</Title>
      </LogoContainer>
      <Link to="/signup">
        <SignupButton>회원가입</SignupButton>
      </Link>
      <Link to="/signin">
        <SigninButton>로그인</SigninButton>
      </Link>
      <Footer />
      <Copyright />
    </MainContainer>
  );
};

export default Welcome;
