import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProfilePhoto,
  updateProfilePhoto,
} from "../../redux/auth/actionType";
import FullWideModal from "../FullWideModal/FullWideModal";
import "./ChangeProPicPop.scss";

const ChangeProPicPop = ({ close }) => {
  const { me } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // Upload Profile Picture
  const uploadProfile = (e) => {
    const data = new FormData();
    data.append("profile", e.target.files[0]);
    dispatch(updateProfilePhoto(me._id, data, close));
  };
  // Delete Profile Photo
  const deleteProfile = () => {
    dispatch(deleteProfilePhoto(me.profile_photo, me._id, close));
  };
  return (
    <div>
      <FullWideModal>
        <div className="change-pro-pic-pop">
          <div className="wraper">
            <div className="box">
              <div className="header">
                <h2>Change Profile Photo</h2>
              </div>
              <ul>
                <li>
                  <span>Upload photo</span>
                  <input type="file" onChange={uploadProfile} />
                </li>
                <li onClick={deleteProfile}>Remove current photo</li>
                <li onClick={close}>Cancel</li>
              </ul>
            </div>
          </div>
        </div>
      </FullWideModal>
    </div>
  );
};

export default ChangeProPicPop;
