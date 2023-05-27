import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./PasswordRecover.scss";

const PasswordRecover = () => {
  const [password, setPassword] = useState({
    password: "",
    confirmPassword: "",
  });

  //   const { token } = useParams();

  //   const navigate = useNavigate();

  //   // Change Value
  //   const handleChangeValue = (e) => {
  //     e.preventDefault();

  //     setPassword((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  //   };

  //   // Handle Submit
  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     if (!password.password) {
  //       errorToast("Please input new password");
  //     } else if (password.password !== password.confirmPassword) {
  //       errorToast("Password cannot be matched");
  //     } else {
  //       axios
  //         .post(`http://localhost:5050/api/user/new-password`, {
  //           token: token,
  //           password: password.password,
  //         })
  //         .then((res) => {
  //           navigate("/login");
  //           successToast("Successfully Updated");
  //         })
  //         .catch((err) => {
  //           errorToast("Time expired!");
  //         });
  //     }
  //   };

  return (
    <div className="password-recover">
      <div className="contents">
        <form action="" onSubmit="" method="POST">
          <h5>Forgot your email</h5>
          <input
            type="password"
            name="password"
            // value={password.password}
            // onChange={handleChangeValue}
            placeholder="New password"
          />
          <input
            type="password"
            name="confirmPassword"
            // value={password.confirmPassword}
            // onChange={handleChangeValue}
            placeholder="Confirm password"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PasswordRecover;
