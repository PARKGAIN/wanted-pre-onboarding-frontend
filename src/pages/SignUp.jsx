import Header from "components/Header";
import { PageContainer } from "components/SignInForm/styles";
import SignUpForm from "components/SignUpForm";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
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
      <SignUpForm />
    </PageContainer>
  );
};

export default SignUp;
