import React from "react";
import AuthFooter from "../../components/AuthFooter/AuthFooter";
import "./Login.scss";
import LoginForm from "../../components/LoginForm/LoginForm";

const Login = () => {
  return (
    <div className="login-container">
      <LoginForm />
      <AuthFooter />
    </div>
  );
};

export default Login;
