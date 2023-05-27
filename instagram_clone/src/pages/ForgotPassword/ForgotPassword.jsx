import axios from "axios";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./ForgotPassword.scss";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  // Handle Submit Button for Sending Link to Email
  //   const handleSubFor = (e) => {
  //     e.preventDefault();

  //     if (!email) {
  //       errorToast("Please input your email");
  //     } else {
  //       axios
  //         .post(`http://localhost:5050/api/user/forgot-password`, { email })
  //         .then((res) => {
  //           setEmail("");
  //           successToast("Please check your email");
  //         })
  //         .catch((err) => {
  //           errorToast("The email cannot match");
  //         });
  //     }
  //   };

  return (
    <div className="forgot-passwordd">
      <div className="contents">
        <form action="" onSubmit="" method="POST">
          <h4>Forgot Password</h4>
          <input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <button type="submit">Send Link</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
