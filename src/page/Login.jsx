import React from "react";
import MainTemplate from "../component/Layout/Main";
import Header from "../component/Element/Header";
import LoginForm from "../component/Login/LoginForm";

const Login = () => {
  const LoginContent = (
    <>
      <Header text="Login" />
      <LoginForm />
    </>
  );

  return <MainTemplate contents={LoginContent} />;
};

export default Login;
