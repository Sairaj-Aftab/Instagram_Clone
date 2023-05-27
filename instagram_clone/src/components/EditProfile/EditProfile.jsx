import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AccountEdit } from "../../redux/auth/actionType";
import profile from "../../assets/profile.png";
import "./EditProfile.scss";
import ChangeProPicPop from "../ChangeProPicPop/ChangeProPicPop";

const EditProfile = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.auth);
  const [showChangeProModal, setShowChangeProModal] = useState(false);
  const [input, setInput] = useState({
    full_name: me.full_name,
    user_name: me.user_name,
    web_link: me.web_link,
    bio: me.bio,
    email: me.email,
    phone: me.phone,
    gender: me.gender,
  });

  const handleChangeInput = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    dispatch(AccountEdit(me._id, input));
  };
  return (
    <div className="edit-profile">
      <div className="user-info">
        <div className="user-img">
          <img
            src={me.profile_photo ? `/profile/${me.profile_photo}` : profile}
            alt=""
            onClick={() => setShowChangeProModal(!showChangeProModal)}
          />
        </div>
        <div className="user-info-name">
          <h4>{me.user_name}</h4>
          <p onClick={() => setShowChangeProModal(!showChangeProModal)}>
            Change profile photo
          </p>
        </div>
        {showChangeProModal && (
          <ChangeProPicPop close={() => setShowChangeProModal(false)} />
        )}
      </div>
      <ul>
        <li>
          <h4>Name</h4>
          <div className="input-des">
            <input
              type="text"
              name="full_name"
              value={input.full_name}
              onChange={handleChangeInput}
            />
            <p>
              Help people discover your account by using the name you're known
              by: either your full name, nickname, or business name.
            </p>
          </div>
        </li>
        <li>
          <h4>Username</h4>
          <div className="input-des">
            <input
              type="text"
              name="user_name"
              value={input.user_name}
              onChange={handleChangeInput}
            />
            <p>
              In most cases, you'll be able to change your username back to
              sairaj_aftab for another 14 days
            </p>
          </div>
        </li>
        <li>
          <h4>Website</h4>
          <div className="input-des">
            <input
              type="text"
              name="web_link"
              value={input.web_link}
              onChange={handleChangeInput}
            />
            <p>
              Editing your links is only available on mobile. Visit the
              Instagram app and edit your profile to change the websites in your
              bio.
            </p>
          </div>
        </li>
        <li>
          <h4>Bio</h4>
          <div className="input-des">
            <textarea
              name="bio"
              value={input.bio}
              onChange={handleChangeInput}
            />
            <span>149 / 150</span>
          </div>
        </li>

        <div className="personal-information">
          <h4>Personal information</h4>
          <p>
            Provide your personal information, even if the account is used for a
            business, a pet or something else. This won't be a part of your
            public profile.
          </p>
        </div>
        <li>
          <h4>Email</h4>
          <div className="input-des">
            <input
              type="text"
              name="email"
              value={input.email}
              onChange={handleChangeInput}
            />
          </div>
        </li>
        <li>
          <h4>Phone number</h4>
          <div className="input-des">
            <input
              type="text"
              name="phone"
              value={input.phone}
              onChange={handleChangeInput}
            />
          </div>
        </li>
        <li>
          <h4>Gender</h4>
          <div
            className="input-des"
            // onClick={() => setShowGenderModal(!showGenderModal)}
          >
            <input
              type="text"
              name="gender"
              value={input.gender}
              onChange={handleChangeInput}
            />
          </div>
          {/* {showGenderModal && (
            <FullWideModal close={() => setShowGenderModal(false)}>
              <div className="gender-modal">
                <div className="header">
                  <h4>Gender</h4>
                  <div className="icon">
                    <IoClose />
                  </div>
                </div>
                <div className="body">
                  <input type="radio" name="male" value="Male" id="male" />
                  <label htmlFor="male">Male</label>
                  <input
                    type="radio"
                    name="female"
                    value="Female"
                    id="female"
                  />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
            </FullWideModal>
          )} */}
        </li>
        <div className="button">
          <button onClick={handleSubmit}>Submit</button>
          <p>Temporarily deactivate my account</p>
        </div>
      </ul>
    </div>
  );
};

export default EditProfile;
