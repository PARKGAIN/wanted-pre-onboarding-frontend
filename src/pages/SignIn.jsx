import Header from "components/Header";
import SignInForm from "components/SignInForm";
import { PageContainer } from "components/SignInForm/styles";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN } from "context/token";

const SignIn = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (ACCESS_TOKEN) {
      navigate("/todo");
    }
  }, []);

  return (
    <PageContainer>
      <Header />
      <SignInForm />
    </PageContainer>
  );
};

export default SignIn;
