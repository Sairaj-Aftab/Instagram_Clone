import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import profile from "../../assets/profile.png";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import "./ProfileHeader.scss";
import ChangeProPicPop from "../ChangeProPicPop/ChangeProPicPop";
import FollowingPop from "../FollowingPop/FollowingPop";
import FollowersPop from "../FollowersPop/FollowersPop";

const ProfileHeader = () => {
  const navigate = useNavigate();
  const { me } = useSelector((state) => state.auth);
  const [showChangeProPicPop, setShowChangeProPicPop] = useState(false);
  const [showFollowingPop, setShowFollowingPop] = useState(false);
  const [showFollowerPop, setShowFollowerPop] = useState(false);
  return (
    <div>
      {showChangeProPicPop && (
        <ChangeProPicPop close={() => setShowChangeProPicPop(false)} />
      )}
      {showFollowingPop && (
        <FollowingPop close={() => setShowFollowingPop(false)} />
      )}
      {showFollowerPop && (
        <FollowersPop close={() => setShowFollowerPop(false)} />
      )}
      <div className="user-pro-title">
        <img
          onClick={() => setShowChangeProPicPop(!showChangeProPicPop)}
          className="user-pro-logo"
          src={me.profile_photo ? `/profile/${me.profile_photo}` : profile}
          alt=""
        />

        <div className="user-pro-title-right">
          <div className="user-pro-title-right-top">
            <div className="user-name">{me.user_name}</div>
            <div className="edit-button" onClick={() => navigate("/edit")}>
              Edit profile
            </div>
            <div className="setting-icon">
              <MdOutlineSettingsSuggest />
            </div>
          </div>
          <div className="user-pro-title-right-middle">
            <div className="user-pro-post-count count">
              <strong>{me.posts.length}</strong>
              <span>posts</span>
            </div>
            <div
              className="user-pro-follower-count count"
              onClick={() => setShowFollowerPop(!showFollowerPop)}
            >
              <strong>{me.followers.length}</strong>
              <span>followers</span>
            </div>
            <div
              className="user-pro-following-count count"
              onClick={() => setShowFollowingPop(!showFollowingPop)}
            >
              <strong>{me.following.length}</strong>
              <span>following</span>
            </div>
          </div>
          <div className="user-pro-title-right-bottom">
            <div className="real-name">{me.full_name}</div>
            <div className="user-about">{me.bio}</div>
            <a href={me.web_link} target="_blank" className="user-web-link">
              {me.web_link}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
