import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
// import { errorToast, successToast } from "../../utility/Toast";
import "./Verify.scss";
import { errorToast, successToast } from "../../utility/toast";
import { useDispatch } from "react-redux";
import { accountVerifyByLink } from "../../redux/auth/actionType";

const Verify = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useParams();
  console.log(token);

  useEffect(() => {
    try {
      axios
        .get(`/api/v1/user/activate-account/${token}`)
        .then((res) => {
          successToast("Your account successfully verified");
        })
        .catch((err) => {
          errorToast("Verified failed");
        });
    } catch (error) {
      errorToast("Verified failed");
    }
  });

  //Go to Log In Button
  const handleGoLogIn = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="verify">
      <div className="contents">
        <h4>Only verified account</h4>
        <h6>If you can verify successfully then Click</h6>
        <button onClick={handleGoLogIn}>Click for Log In</button>
      </div>
    </div>
  );
};

export default Verify;
