import React from "react";
import styled from "styled-components";

const NotFound = () => {
  return (
    <Container>
      <Content>
        <Title>404</Title>
        <Description>페이지를 찾을 수 없습니다.</Description>
        <Button>홈으로 돌아가기</Button>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

const Content = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 72px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 24px;
  margin-bottom: 40px;
`;

const Button = styled.button`
  background-color: #3f51b5;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #2c3e50;
  }
`;
export default NotFound;
