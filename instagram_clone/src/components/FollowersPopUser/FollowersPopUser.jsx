import React from "react";
import profile from "../../assets/profile.png";
import { IoClose } from "react-icons/io5";
import "./FollowersPopUser.scss";
import FullWideModal from "../FullWideModal/FullWideModal";
import { useDispatch, useSelector } from "react-redux";
import { follow, getSingleUser, unFollow } from "../../redux/auth/actionType";
import { useNavigate } from "react-router-dom";

const FollowersPopUser = ({ close }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { me, allUser, singleUser } = useSelector((state) => state.auth);
  const handleFollow = (id) => {
    dispatch(follow(me._id, id));
  };
  const handleUnFollow = (id) => {
    dispatch(unFollow(me._id, id));
  };
  const handleSingleUser = (username) => {
    dispatch(getSingleUser(username, navigate));
  };
  return (
    <div>
      <FullWideModal>
        <div className="followers-popup-user">
          <div className="wraper">
            <div className="box">
              <div className="header">
                <h2>Followers</h2>
                <div className="icon" onClick={close}>
                  <IoClose />
                </div>
              </div>
              <div className="body">
                {allUser &&
                  allUser.map((data, index) => {
                    if (singleUser.followers.includes(data._id)) {
                      return (
                        <div className="user" key={index}>
                          <div className="user-info">
                            <img
                              onClick={() => handleSingleUser(data.user_name)}
                              src={
                                data.profile_photo
                                  ? `/profile/${data.profile_photo}`
                                  : profile
                              }
                              alt=""
                            />
                            <div className="name-info">
                              <div className="user-name">
                                <span
                                  onClick={() =>
                                    handleSingleUser(data.user_name)
                                  }
                                >
                                  {data.user_name}
                                </span>
                              </div>
                              <div className="full-name">{data.full_name}</div>
                            </div>
                          </div>
                          {!me.following.includes(data._id) && (
                            <button
                              className="follow-btn"
                              onClick={() => handleFollow(data._id)}
                            >
                              Follow
                            </button>
                          )}
                          {me.following.includes(data._id) && (
                            <button
                              className="following-btn"
                              onClick={() => handleUnFollow(data._id)}
                            >
                              Following
                            </button>
                          )}
                        </div>
                      );
                    }
                  })}
                {singleUser.followers.length === 0 && (
                  <h2>There are no followers</h2>
                )}
              </div>
            </div>
          </div>
        </div>
      </FullWideModal>
    </div>
  );
};

export default FollowersPopUser;
