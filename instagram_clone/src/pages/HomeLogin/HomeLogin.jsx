import React from "react";
import { GrFacebook } from "react-icons/gr";
import { Link } from "react-router-dom";
import AuthFooter from "../../components/AuthFooter/AuthFooter";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./HomeLogin.scss";
import Slider from "./Slider";

const HomeLogin = () => {
  return (
    <div className="login-container">
      <div className="auth-container">
        <div className="left-side">
          <Slider />
        </div>
        <LoginForm />
      </div>
      <AuthFooter />
    </div>
  );
};

export default HomeLogin;
