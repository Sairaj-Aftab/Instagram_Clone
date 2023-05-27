import React from "react";
import profile from "../../assets/profile.png";
import { IoClose } from "react-icons/io5";
import "./FollowersPop.scss";
import FullWideModal from "../FullWideModal/FullWideModal";
import { useDispatch, useSelector } from "react-redux";
import {
  follow,
  getSingleUser,
  removeFollower,
} from "../../redux/auth/actionType";
import { useNavigate } from "react-router-dom";

const FollowersPop = ({ close }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { me, allUser } = useSelector((state) => state.auth);
  const handleFollow = (id) => {
    dispatch(follow(me._id, id));
  };
  const handleRemoveFollower = (id) => {
    dispatch(removeFollower(me._id, id));
  };
  const handleSingleUser = (username) => {
    dispatch(getSingleUser(username, navigate));
  };
  return (
    <div>
      <FullWideModal>
        <div className="followers-popup">
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
                    if (me.followers.includes(data._id)) {
                      return (
                        <div className="user">
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
                                {!me.following.includes(data._id) && (
                                  <span
                                    className="follow"
                                    onClick={() => handleFollow(data._id)}
                                  >
                                    . Follow
                                  </span>
                                )}
                              </div>
                              <div className="full-name">{data.full_name}</div>
                            </div>
                          </div>
                          <button
                            onClick={() => handleRemoveFollower(data._id)}
                          >
                            Remove
                          </button>
                        </div>
                      );
                    }
                  })}
                {me.followers.length === 0 && (
                  <h2>Anyone hasn't followed you yet</h2>
                )}
              </div>
            </div>
          </div>
        </div>
      </FullWideModal>
    </div>
  );
};

export default FollowersPop;
