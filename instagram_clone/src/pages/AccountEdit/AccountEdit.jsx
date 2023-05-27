import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import TopBar from "../../components/TopBar/TopBar";
import "./AccountEdit.scss";

const AccountEdit = () => {
  return (
    <div>
      <TopBar />
      <div className="account-edit">
        <div className="container">
          <div className="left-header">
            <ul>
              <li>
                <NavLink to="/edit">
                  <span>Edit profile</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/edit/change-password">
                  <span>Change password</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AccountEdit;
