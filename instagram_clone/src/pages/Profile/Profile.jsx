import React from "react";
import { MdOutlineGridOn } from "react-icons/md";
import { BsHeartFill, BsChatFill } from "react-icons/bs";
import { BiBookmark } from "react-icons/bi";
import { FaUserTag, FaMicroblog } from "react-icons/fa";
import { GiEternalLove } from "react-icons/gi";
import TopBar from "../../components/TopBar/TopBar";
import "./Profile.scss";
import { useSelector } from "react-redux";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileAllPosts from "../../components/ProfileAllPosts/ProfileAllPosts";
import { NavLink, Outlet } from "react-router-dom";

const Profile = () => {
  const { me } = useSelector((state) => state.auth);
  return (
    <div>
      <TopBar />
      <div className="user-profile">
        <div className="user-profile-wraper">
          <ProfileHeader />
          <div className="user-pro-contents">
            <div className="user-pro-con-buttons">
              <ul>
                <NavLink to={`/${me.user_name}`}>
                  <li>
                    <div className="icon">
                      <MdOutlineGridOn />
                    </div>
                    <span>POSTS</span>
                  </li>
                </NavLink>
                <NavLink to={`/${me.user_name}/saved`}>
                  <li>
                    <div className="icon">
                      <BiBookmark />
                    </div>
                    <span>SAVED</span>
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

export default Profile;
