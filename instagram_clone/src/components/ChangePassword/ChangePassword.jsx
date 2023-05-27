import React from "react";
import { useSelector } from "react-redux";
import profile from "../../assets/profile.png";
import "./ChangePassword.scss";

const ChangePassword = () => {
  const { me } = useSelector((state) => state.auth);
  return (
    <div className="change-password">
      <ul>
        <div className="user-info">
          <div className="profile-img">
            <img
              src={me.profile_photo ? `/profile/${me.profile_photo}` : profile}
              alt=""
            />
          </div>
          <p>{me.user_name}</p>
        </div>
        <li>
          <h4>Old password</h4>
          <input type="password" />
        </li>
        <li>
          <h4>New password</h4>
          <input type="password" />
        </li>
        <li>
          <h4>Confirm new password</h4>
          <input type="password" />
        </li>
        <div className="buttons">
          <button disabled>Change password</button>
          <p>Forgot password?</p>
        </div>
      </ul>
    </div>
  );
};

export default ChangePassword;
