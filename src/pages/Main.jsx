import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Main = () => {
  return (
    <MainContainer>
      <ButtonContainer>
        <Link to="/signup">
          <Button>회원가입하러가기</Button>
        </Link>
        <Link to="/signin">
          <Button>로그인하러가기</Button>
        </Link>
      </ButtonContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 350px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #0077c2;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #005ea3;
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export default Main;
