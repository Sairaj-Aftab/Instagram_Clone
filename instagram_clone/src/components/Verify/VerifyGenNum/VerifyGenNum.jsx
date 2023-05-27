import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./VerifyGenNum.scss";
import { errorToast, successToast } from "../../../utility/toast";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { accountVerifyByOTP } from "../../../redux/auth/actionType";

const VerifyGenNum = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [numberr, setNumberr] = useState();

  const handleVerify = async (e) => {
    e.preventDefault();

    dispatch(
      accountVerifyByOTP({ auth: Cookies.get("auth"), code: numberr }, navigate)
    );
  };

  return (
    <div className="verify-gen-number">
      <div className="contents">
        .<h4>Verify Generate Number</h4>
        <p>Please check your email for verification</p>
        <form action="" onSubmit={handleVerify}>
          <input type="text" onChange={(e) => setNumberr(e.target.value)} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default VerifyGenNum;
