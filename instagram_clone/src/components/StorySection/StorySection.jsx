import React from "react";
import profile from "../../assets/profile.png";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import "./StorySection.scss";

const StorySection = () => {
  return (
    <div className="story-section">
      <div className="prev icon">
        <GrFormPrevious />
      </div>
      <div className="next icon">
        <GrFormNext />
      </div>
      <div className="wraper">
        <div className="user">
          <img
            src="http://localhost:3000/profile/16801905391126425abd18b2bf587320e279e-IMG_20230207_172715.jpg"
            alt=""
          />
          <h4>sairaj_aftab_sabuj</h4>
        </div>
        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1617331140180-e8262094733a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJhYnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <h4>sairaj_aftab</h4>
        </div>
        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1634513837961-a7da40696a92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <h4>sairaj_aftab</h4>
        </div>
        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1638397157673-7949327b6e74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <h4>sairaj_aftab</h4>
        </div>
        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1491013516836-7db643ee125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <h4>sairaj_aftab</h4>
        </div>
        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1566004100631-35d015d6a491?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFieXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <h4>sairaj_aftab</h4>
        </div>
        <div className="user">
          <img src={profile} alt="" />
          <h4>sairaj_aftab</h4>
        </div>
        <div className="user">
          <img src={profile} alt="" />
          <h4>sairaj_aftab</h4>
        </div>
        <div className="user">
          <img src={profile} alt="" />
          <h4>sairaj_aftab</h4>
        </div>
      </div>
    </div>
  );
};

export default StorySection;
