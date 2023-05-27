import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/auth/actionType";
import { GrFacebook } from "react-icons/gr";
import "./LoginForm.scss";

const LoginForm = () => {
  // Use Navigate for redirect Home Page
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Loading Bar Context

  const [input, setInput] = useState({
    auth: "",
    password: "",
  });

  // Input Changes
  const inputChange = (e) => {
    e.preventDefault();

    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle Submit Login
  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(login({ auth: input.auth, password: input.password }, navigate));
  };
  return (
    <div>
      <div className="login-wraper">
        <a href="#">
          <img
            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
            alt=""
          />
        </a>
        <form onSubmit={handleLogin}>
          <input
            name="auth"
            value={input.auth}
            onChange={inputChange}
            type="text"
            placeholder="Phone number, username, or email"
          />
          <input
            name="password"
            value={input.password}
            onChange={inputChange}
            type="password"
            placeholder="Password"
          />
          <button type="submit" className="log-in">
            Log In
          </button>
        </form>
        <div className="or">OR</div>
        <a href="#" className="login-with-fb">
          <GrFacebook className="fb-icon" /> Log in with facebook
        </a>
        <Link to="/user/forgotpassword" className="forgot-password">
          Forgot password?
        </Link>
      </div>
      <div className="login-button">
        Don't have an account?{" "}
        <Link to="/register" className="link">
          Sign Up
        </Link>
      </div>
      <div className="get-app">
        <p>Get the app.</p>
        <div className="app-img">
          <a href="#">
            <img
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
              alt=""
            />
          </a>
          <a href="#">
            <img
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
