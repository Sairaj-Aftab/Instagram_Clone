import React from "react";
import { BsHeartFill, BsChatFill } from "react-icons/bs";
import "./ProfileAllPosts.scss";

const ProfileAllPosts = () => {
  return (
    <div className="user-pro-all-post">
      <div className="user-pro-all-posting">
        <img
          src="https://pbs.twimg.com/profile_images/1534982764772347904/dvgipluy_400x400.jpg"
          alt=""
        />
        <div className="like-comment-count">
          <div className="user-like-side">
            <div className="icon">
              <BsHeartFill />
            </div>
            <span>65</span>
          </div>
          <div className="user-like-side">
            <div className="icon">
              <BsChatFill />
            </div>
            <span>21</span>
          </div>
        </div>
      </div>
      {/* <div className="user-pro-all-posting">
    <img
      src="https://pbs.twimg.com/profile_images/1534982764772347904/dvgipluy_400x400.jpg"
      alt=""
    />
    <div className="like-comment-count">
      <div className="user-like-side">
        <div className="icon">
          <GiEternalLove />
        </div>
        <span>65</span>
      </div>
      <div className="user-like-side">
        <div className="icon">
          <FaMicroblog />
        </div>
        <span>21</span>
      </div>
    </div>
  </div>
  <div className="user-pro-all-posting">
    <img
      src="https://pbs.twimg.com/profile_images/1534982764772347904/dvgipluy_400x400.jpg"
      alt=""
    />
    <div className="like-comment-count">
      <div className="user-like-side">
        <div className="icon">
          <GiEternalLove />
        </div>
        <span>65</span>
      </div>
      <div className="user-like-side">
        <div className="icon">
          <FaMicroblog />
        </div>
        <span>21</span>
      </div>
    </div>
  </div>
  <div className="user-pro-all-posting">
    <img
      src="https://pbs.twimg.com/profile_images/1534982764772347904/dvgipluy_400x400.jpg"
      alt=""
    />
    <div className="like-comment-count">
      <div className="user-like-side">
        <div className="icon">
          <GiEternalLove />
        </div>
        <span>65</span>
      </div>
      <div className="user-like-side">
        <div className="icon">
          <FaMicroblog />
        </div>
        <span>21</span>
      </div>
    </div>
  </div>
  <div className="user-pro-all-posting">
    <img
      src="https://pbs.twimg.com/profile_images/1534982764772347904/dvgipluy_400x400.jpg"
      alt=""
    />
    <div className="like-comment-count">
      <div className="user-like-side">
        <div className="icon">
          <GiEternalLove />
        </div>
        <span>65</span>
      </div>
      <div className="user-like-side">
        <div className="icon">
          <FaMicroblog />
        </div>
        <span>21</span>
      </div>
    </div>
  </div> */}
    </div>
  );
};

export default ProfileAllPosts;
