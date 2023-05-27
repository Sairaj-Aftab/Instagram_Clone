import React, { useRef } from "react";
import profile from "../../assets/profile.png";
import { IoSearchOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { HiOutlineBookmark } from "react-icons/hi";
import { BiCertification } from "react-icons/bi";
import { FiRefreshCw } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { LOG_OUT } from "../../redux/auth/type";
import CreatePostModal from "../CreatePostModal/CreatePostModal";
import CreatePostModalCrop from "../CreatePostModalCrop/CreatePostModalCrop";
import "./TopBar.scss";

const TopBar = () => {
  const { me } = useSelector((state) => state.auth);
  const [clickShow, setClickShow] = useState(false);
  const dispatch = useDispatch();
  const [showCreatePostModal, setShowCreatePostModal] = useState(false);

  const topbar = useRef(null);

  const handleLogOut = (e) => {
    e.preventDefault();
    Cookies.remove("authToken");
    dispatch({ type: LOG_OUT });
  };

  return (
    <div className="top-bar">
      <div className="topbar-container">
        <div className="topbar-wraper">
          <Link to="/" className="logo">
            <img
              className="logo-img"
              src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
              alt=""
            />
          </Link>
          <div className="right-side-bar">
            <div className="search-bar">
              <label htmlFor="search">
                <IoSearchOutline />
              </label>
              <input type="text" id="search" placeholder="Search" />
            </div>
            <ul className="right-side">
              {/* Home Icon */}
              <li>
                <Link to="/">
                  <svg
                    aria-label="Home"
                    className="_ab6-"
                    color="#262626"
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M22 23h-6.001a1 1 0 01-1-1v-5.455a2.997 2.997 0 10-5.993 0V22a1 1 0 01-1 1H2a1 1 0 01-1-1V11.543a1.002 1.002 0 01.31-.724l10-9.543a1.001 1.001 0 011.38 0l10 9.543a1.002 1.002 0 01.31.724V22a1 1 0 01-1 1z"></path>
                  </svg>
                </Link>
              </li>
              {/* Share Icon */}
              <li>
                <a href="/">
                  <svg
                    aria-label="Direct"
                    className="_ab6-"
                    color="#262626"
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <line
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      x1="22"
                      x2="9.218"
                      y1="3"
                      y2="10.083"
                    ></line>
                    <polygon
                      fill="none"
                      points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></polygon>
                  </svg>
                </a>
              </li>
              {/* Post Icon */}
              <li onClick={() => setShowCreatePostModal(!showCreatePostModal)}>
                <a href="#">
                  <svg
                    aria-label="New post"
                    className="_ab6-"
                    color="#262626"
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path
                      d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                    <line
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      x1="6.545"
                      x2="17.455"
                      y1="12.001"
                      y2="12.001"
                    ></line>
                    <line
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      x1="12.003"
                      x2="12.003"
                      y1="6.545"
                      y2="17.455"
                    ></line>
                  </svg>
                </a>
              </li>
              {showCreatePostModal && (
                <CreatePostModal close={() => setShowCreatePostModal(false)} />
              )}

              <li>
                <a href="/">
                  <svg
                    aria-label="Find People"
                    className="_ab6-"
                    color="#262626"
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <polygon
                      fill="none"
                      points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></polygon>
                    <polygon
                      fillRule="evenodd"
                      points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
                    ></polygon>
                    <circle
                      cx="12.001"
                      cy="12.005"
                      fill="none"
                      r="10.5"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></circle>
                  </svg>
                </a>
              </li>
              <li>
                <a href="/">
                  <svg
                    aria-label="Activity Feed"
                    className="_ab6-"
                    color="#262626"
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                  </svg>
                </a>
              </li>
              <div className="profile">
                <div
                  className="profile-button"
                  onClick={(e) => setClickShow(!clickShow)}
                >
                  <img
                    src={
                      me.profile_photo
                        ? `/profile/${me.profile_photo}`
                        : profile
                    }
                    alt=""
                  />
                </div>
                {clickShow && (
                  <div className="top-bar-profile-card" ref={topbar}>
                    <ul>
                      <Link to="/fdkj5656">
                        <li>
                          <div className="icon">
                            <CgProfile />
                          </div>
                          <span>Profile</span>
                        </li>
                      </Link>
                      <li>
                        <div className="icon">
                          <HiOutlineBookmark />
                        </div>
                        <span>Saved</span>
                      </li>
                      <li>
                        <div className="icon">
                          <BiCertification />
                        </div>
                        <span>Settings</span>
                      </li>
                      <li>
                        <div className="icon">
                          <FiRefreshCw />
                        </div>
                        <span>Switch accounts</span>
                      </li>
                    </ul>
                    <div className="logout" onClick={handleLogOut}>
                      Log Out
                    </div>
                  </div>
                )}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
