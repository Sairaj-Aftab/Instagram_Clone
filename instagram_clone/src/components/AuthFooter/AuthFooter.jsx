import React from "react";
import "./AuthFooter.scss";

const AuthFooter = () => {
  return (
    <div className="auth-footer">
      <div className="auth-wraper">
        <ul className="auth-link">
          <li>
            <a href="#">Meta</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">API</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Top Accounts</a>
          </li>
          <li>
            <a href="#">Hashtags</a>
          </li>
          <li>
            <a href="#">Locations</a>
          </li>
          <li>
            <a href="#">Instagram Lite</a>
          </li>
          <li>
            <a href="#">Contact Uploading & Non-Users</a>
          </li>
        </ul>
        <ul className="top-bottom">
          <li>
            <select name="" id="">
              <option value="en">English</option>
              <option value="bn">Bangla</option>
            </select>
          </li>
          <li>© 2022 Instagram from Meta</li>
        </ul>
      </div>
    </div>
  );
};

export default AuthFooter;
