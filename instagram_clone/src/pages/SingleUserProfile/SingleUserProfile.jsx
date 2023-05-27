import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import { NavLink, Outlet } from "react-router-dom";
import { MdOutlineGridOn } from "react-icons/md";
import { BiBookmark } from "react-icons/bi";
import { FaUserTag } from "react-icons/fa";
import UserHeader from "./UserHeader/UserHeader";
import "./SingleUserProfile.scss";

const SingleUserProfile = () => {
  return (
    <div>
      <TopBar />
      <div className="single-user-profile">
        <div className="user-profile-wraper">
          <UserHeader />
          <div className="user-pro-contents">
            <div className="user-pro-con-buttons">
              <ul>
                <NavLink to={``}>
                  <li>
                    <div className="icon">
                      <MdOutlineGridOn />
                    </div>
                    <span>POSTS</span>
                  </li>
                </NavLink>

                <li>
                  <div className="icon">
                    <FaUserTag />
                  </div>
                  <span>TAGGED</span>
                </li>
              </ul>
            </div>
            <Outlet />
            {/* <ProfileAllPosts /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUserProfile;
