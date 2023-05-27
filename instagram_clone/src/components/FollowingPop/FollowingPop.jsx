import React from "react";
import FullWideModal from "../FullWideModal/FullWideModal";
import { IoClose } from "react-icons/io5";
import profile from "../../assets/profile.png";
import "./FollowingPop.scss";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser, unFollow } from "../../redux/auth/actionType";
import { useNavigate } from "react-router-dom";

const FollowingPop = ({ close }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { me, allUser } = useSelector((state) => state.auth);
  const handleUnFollow = (id) => {
    dispatch(unFollow(me._id, id));
  };
  const handleSingleUser = (username) => {
    dispatch(getSingleUser(username, navigate));
  };
  return (
    <div>
      <FullWideModal>
        <div className="following-popup">
          <div className="wraper">
            <div className="box">
              <div className="header">
                <h2>Following</h2>
                <div className="icon" onClick={close}>
                  <IoClose />
                </div>
              </div>
              <div className="body">
                {allUser &&
                  allUser.map((data, index) => {
                    if (me.following.includes(data._id)) {
                      return (
                        <div className="user">
                          <div
                            className="user-info"
                            onClick={() => handleSingleUser(data.user_name)}
                          >
                            <img
                              src={
                                data.profile_photo
                                  ? `/profile/${data.profile_photo}`
                                  : profile
                              }
                              alt=""
                            />
                            <div className="name-info">
                              <div className="user-name">{data.user_name}</div>
                              <div className="full-name">{data.full_name}</div>
                            </div>
                          </div>
                          <button onClick={() => handleUnFollow(data._id)}>
                            Following
                          </button>
                        </div>
                      );
                    }
                  })}
                {me.following.length === 0 && (
                  <h2>You haven't followed anyone yet</h2>
                )}
              </div>
            </div>
          </div>
        </div>
      </FullWideModal>
    </div>
  );
};

export default FollowingPop;
