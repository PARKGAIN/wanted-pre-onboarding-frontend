import Header from "components/Header";
import SignInForm from "components/SignInForm";
import { PageContainer } from "components/SignInForm/styles";
import React from "react";

const SignIn = () => {
  return (
    <PageContainer>
      <Header />
      <SignInForm />
    </PageContainer>
  );
};

export default SignIn;
