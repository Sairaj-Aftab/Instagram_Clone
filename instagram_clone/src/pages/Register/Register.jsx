import React from "react";
// import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { GrFacebook } from "react-icons/gr";
import { BiCheckCircle, BiXCircle } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import AuthFooter from "../../components/AuthFooter/AuthFooter";
import "./Register.scss";
import axios from "axios";
import { errorToast, successToast } from "../../utility/toast";
import { register } from "../../redux/auth/actionType";
// import { errorToast } from "../../../utility/Toast";

const Register = () => {
  // Use Navigate for Redirect to Login Page
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [checkIcon, setCheckIcon] = useState(false);
  const [xIcon, setXIcon] = useState(false);

  const [input, setInput] = useState({
    auth: "",
    full_name: "",
    user_name: "",
    password: "",
  });

  // Handle Input Change
  const handleInput = (e) => {
    e.preventDefault();

    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Submit Register Form
  const handleRegister = async (e) => {
    e.preventDefault();

    dispatch(register(input, navigate, setInput));
  };

  return (
    <div className="register-container">
      <div className="register-wraper">
        <a href="#">
          <img
            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
            alt=""
          />
        </a>
        <p className="title">
          Sign up to see photos and videos from your friends.
        </p>
        <button className="register-with-fb">
          <GrFacebook className="fb-icon" /> Log in with facebook
        </button>
        <div className="or">OR</div>
        <form action="" onSubmit={handleRegister}>
          <div className="input">
            <input
              name="auth"
              value={input.auth}
              onChange={handleInput}
              type="text"
              placeholder="Mobile Number or Email"
            />
            {checkIcon && (
              <div className="check-icon">
                <BiCheckCircle />
              </div>
            )}
            {xIcon && (
              <div className="x-icon">
                <BiXCircle />
              </div>
            )}
          </div>
          <div className="input">
            <input
              name="full_name"
              value={input.full_name}
              onChange={handleInput}
              type="text"
              placeholder="Full Name"
            />
            {checkIcon && (
              <div className="check-icon">
                <BiCheckCircle />
              </div>
            )}
            {xIcon && (
              <div className="x-icon">
                <BiXCircle />
              </div>
            )}
          </div>
          <div className="input">
            <input
              name="user_name"
              value={input.user_name}
              onChange={handleInput}
              type="text"
              placeholder="Username"
            />
            {checkIcon && (
              <div className="check-icon">
                <BiCheckCircle />
              </div>
            )}
            {xIcon && (
              <div className="x-icon">
                <BiXCircle />
              </div>
            )}
          </div>
          <div className="input">
            <input
              name="password"
              value={input.password}
              onChange={handleInput}
              type="password"
              placeholder="Password"
            />
            {checkIcon && (
              <div className="check-icon">
                <BiCheckCircle />
              </div>
            )}
            {xIcon && (
              <div className="x-icon">
                <BiXCircle />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="log-in"
            disabled={
              !input.auth ||
              !input.full_name ||
              !input.user_name ||
              !input.password
            }
          >
            Sign up
          </button>
        </form>
      </div>
      <div className="register-button">
        Have an account?{" "}
        <Link to="/login" className="link">
          Log In
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
      <AuthFooter />
    </div>
  );
};

export default Register;
