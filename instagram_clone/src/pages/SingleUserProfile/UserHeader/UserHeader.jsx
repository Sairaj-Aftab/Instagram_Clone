import React, { useEffect, useState } from "react";
import profile from "../../../assets/profile.png";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import "./UserHeader.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  follow,
  getSingleUser,
  unFollow,
} from "../../../redux/auth/actionType";
import FollowersPopUser from "../../../components/FollowersPopUser/FollowersPopUser";
import FollowingPopUser from "../../../components/FollowingPopUser/FollowingPopUser";

const UserHeader = () => {
  const dispatch = useDispatch();
  const {
    me,
    singleUser: {
      _id,
      profile_photo,
      user_name,
      full_name,
      bio,
      posts,
      followers,
      following,
      web_link,
    },
  } = useSelector((state) => state.auth);

  const [showFollowerPop, setShowFollowerPop] = useState(false);
  const [showFollowingPop, setShowFollowingPop] = useState(false);

  const handleFollowing = (id) => {
    dispatch(follow(me._id, id));
  };
  const handleUnFollow = (id) => {
    dispatch(unFollow(me._id, id));
  };
  return (
    <div>
      {/* {showChangeProPicPop && (
        <ChangeProPicPop close={() => setShowChangeProPicPop(false)} />
      )} */}
      {showFollowingPop && (
        <FollowingPopUser close={() => setShowFollowingPop(false)} />
      )}
      {showFollowerPop && (
        <FollowersPopUser close={() => setShowFollowerPop(false)} />
      )}
      <div className="single-user-pro-title">
        <img
          className="user-pro-logo"
          src={profile_photo ? `/profile/${profile_photo}` : profile}
          alt=""
        />

        <div className="user-pro-title-right">
          <div className="user-pro-title-right-top">
            <div className="user-name">{user_name}</div>
            {!me.following.includes(_id) && (
              <div
                className="follow-button"
                onClick={() => handleFollowing(_id)}
              >
                Follow
              </div>
            )}
            {me.following.includes(_id) && (
              <div
                className="following-button"
                onClick={() => handleUnFollow(_id)}
              >
                Following
              </div>
            )}
          </div>
          <div className="user-pro-title-right-middle">
            <div className="user-pro-post-count count">
              <strong>{posts.length}</strong>
              <span>posts</span>
            </div>
            <div
              className="user-pro-follower-count count"
              onClick={() => setShowFollowerPop(!showFollowerPop)}
            >
              <strong>{followers.length}</strong>
              <span>followers</span>
            </div>
            <div
              className="user-pro-following-count count"
              onClick={() => setShowFollowingPop(!showFollowingPop)}
            >
              <strong>{following.length}</strong>
              <span>following</span>
            </div>
          </div>
          <div className="user-pro-title-right-bottom">
            <div className="real-name">{full_name}</div>
            <div className="user-about">{bio}</div>
            <a href={web_link} target="_blank" className="user-web-link">
              {web_link}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
