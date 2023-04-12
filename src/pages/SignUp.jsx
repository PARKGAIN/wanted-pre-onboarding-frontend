import Header from "components/Header";
import { PageContainer } from "components/SignInForm/styles";
import SignUpForm from "components/SignUpForm";
import React from "react";

function SignUp() {
  return (
    <PageContainer>
      <Header />
      <SignUpForm />
    </PageContainer>
  );
}

export default SignUp;
