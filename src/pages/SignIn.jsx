import Header from "components/Header";
import SignInForm from "components/SignInForm";
import { PageContainer } from "components/SignInForm/styles";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
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
