import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import profile from "../../assets/profile.png";
// import Cookies from "js-cookie";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./TimeLineRight.scss";
import {
  follow,
  getAllUser,
  getSingleUser,
  unFollow,
} from "../../redux/auth/actionType";

const TimeLineRight = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userName } = useParams();
  const { me, allUser } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getAllUser(me._id));
  }, [dispatch]);

  const handleFollowing = (id) => {
    dispatch(follow(me._id, id));
  };
  const handleUnFollow = (id) => {
    dispatch(unFollow(me._id, id));
  };

  // useEffect(() => {
  //   dispatch(getSingleUser(userName));
  // }, [userName]);
  // Show Single User
  const handleSingleUser = (username) => {
    dispatch(getSingleUser(username, navigate));
  };
  //   const handleLogout = (e) => {
  //     e.preventDefault();
  //     Cookies.remove("token");
  //     dispatch({ type: "LOG_OUT" });
  //     navigate("/login");
  //   };

  return (
    <div className="timeline-right">
      <div className="container">
        <div className="profile">
          <div className="profile-info">
            <Link to="/jfkd44">
              <img
                src={
                  me.profile_photo ? `/profile/${me.profile_photo}` : profile
                }
                alt=""
              />
            </Link>
            <div className="name">
              <Link to="/fjdkfjd">
                <div className="username">{me.user_name}</div>
                <div className="set-name">{me.full_name}</div>
              </Link>
            </div>
          </div>
          <a href="#" className="button">
            Switch
          </a>
        </div>
        <div className="sugg-follower">
          <div className="heading">
            <div className="title">Suggestions For You</div>
            <button>See All</button>
          </div>
          {allUser &&
            allUser.map((data, index) => {
              return (
                <div className="sugg-profile">
                  <div
                    className="info"
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
                    <div className="info-name">
                      <div className="name">{data.user_name}</div>
                      <div className="population">Popular</div>
                    </div>
                  </div>
                  {!me.following.includes(data._id) && (
                    <button onClick={() => handleFollowing(data._id)}>
                      Follow
                    </button>
                  )}

                  {me.following.includes(data._id) && (
                    <button
                      className="following"
                      onClick={() => handleUnFollow(data._id)}
                    >
                      Following
                    </button>
                  )}
                </div>
              );
            })}
        </div>
        <div className="footer-link">
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">API</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Locations</a>
            </li>
            <li>
              <a href="#">Language</a>
            </li>
          </ul>
          <p>© 2022 INSTAGRAM FROM META</p>
        </div>
      </div>
    </div>
  );
};

export default TimeLineRight;
