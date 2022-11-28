import React from "react";
import MainTemplate from "../component/Layout/Main";
import Header from "../component/Element/Header";
import SignUpForm from "../component/Signup/SignUpForm";

const SignUp = () => {
  const SignUpContent = (
    <>
      <Header text="Sign Up" />
      <SignUpForm />
    </>
  );

  return <MainTemplate contents={SignUpContent} />;
};

export default SignUp;
