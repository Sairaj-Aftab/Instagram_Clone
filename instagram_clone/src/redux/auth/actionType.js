import axios from "axios";
import Cookies from "js-cookie";
import { errorToast, successToast } from "../../utility/toast";
import {
  GET_ALL_USER,
  GET_SINGLE_USER,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  PROFILE_UPDATED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  UPDATED_ME,
  VERIFY_FAIL,
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
} from "./type";

export const register = (data, navigate, setInput) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST });
    await axios
      .post(`/api/v1/user/register`, data)
      .then((res) => {
        dispatch({ type: REGISTER_SUCCESS });
        setInput((prev) => ({
          full_name: "",
          user_name: "",
          auth: "",
          password: "",
        }));

        // navigate('/user/verify')
        navigate("/user/verify");
        successToast("Successfully created");
      })
      .catch((err) => {
        errorToast(err.response.data.message);
      });
  } catch (error) {
    errorToast("Something Wrong");
  }
};

// Account Verify By OTP Code
export const accountVerifyByOTP = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: VERIFY_REQUEST });
    await axios
      .post(`/api/v1/user/activate-account`, {
        auth: data.auth,
        code: data.code,
      })
      .then((res) => {
        dispatch({ type: VERIFY_SUCCESS });
        successToast("Your account successfully verified");
        navigate("/login");
        Cookies.remove("auth");
      })
      .catch((err) => {
        dispatch({ type: VERIFY_FAIL });
        errorToast(err.response.data.message);
      });
  } catch (error) {
    errorToast("Something Wrong");
  }
};
// Account Verify By OTP Code
// export const accountVerifyByLink = (token, navigate) => async (dispatch) => {
//   try {
//     dispatch({ type: VERIFY_REQUEST });
//     await axios
//       .get(`/api/v1/user/activate-account/${token}`)
//       .then((res) => {
//         dispatch({ type: VERIFY_SUCCESS });
//         successToast("Your account successfully verified");
//         navigate("/login");
//         Cookies.remove("auth");
//       })
//       .catch((err) => {
//         dispatch({ type: VERIFY_FAIL });
//         errorToast(err.response.data.message);
//       });
//   } catch (error) {
//     errorToast("Something Wrong");
//   }
// };

// Login
export const login = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    axios
      .post(`/api/v1/user/login`, {
        auth: data.auth,
        password: data.password,
      })
      .then((res) => {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.user });
        navigate("/");
        successToast("Successfully Log In");
      })
      .catch((err) => {
        dispatch({ type: LOGIN_FAIL });
        errorToast(err.response.data.message);
      });
  } catch (error) {
    errorToast("Something wrong");
  }
};

// LogedIN
export const logedInMe = (data) => async (dispatch) => {
  try {
    axios
      .get(`/api/v1/user/me`, {
        headers: {
          Authorization: `Bearer ${data}`,
        },
      })
      .then((res) => {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.user });
      })
      .catch((err) => {
        // errorToast(err.response.data.message);
      });
  } catch (error) {
    errorToast("Something wrong");
  }
};

// Account Edit
export const AccountEdit = (id, data) => async (dispatch) => {
  try {
    await axios
      .put(`/api/v1/user/account-edit/${id}`, data)
      .then((res) => {
        dispatch({ type: UPDATED_ME, payload: res.data.user });
        successToast(res.data.message);
      })
      .catch((err) => {
        errorToast(err.response.data.message);
      });
  } catch (error) {}
};

// Profile Photo Update
export const updateProfilePhoto = (id, data, close) => async (dispatch) => {
  try {
    await axios
      .put(`/api/v1/user/change-profile-photo/${id}`, data)
      .then((res) => {
        dispatch({
          type: PROFILE_UPDATED,
          payload: { profile_photo: res.data.filename },
        });
        close(false);
      })
      .catch((err) => {
        errorToast(err.response.data.message);
      });
  } catch (error) {
    console.log(error);
  }
};

// Profile Photo Delete
export const deleteProfilePhoto = (file, id, close) => async (dispatch) => {
  try {
    await axios
      .delete(`/api/v1/user/delete-profile-photo/${file}/${id}`)
      .then((res) => {
        dispatch({
          type: PROFILE_UPDATED,
          payload: { profile_photo: null },
        });
        close(false);
      })
      .catch((err) => {
        errorToast(err.response.data.message);
      });
  } catch (error) {
    console.log(error);
  }
};

// Get All User
export const getAllUser = (id) => async (dispatch) => {
  try {
    await axios
      .get(`/api/v1/user/all-user/${id}`)
      .then((res) => {
        dispatch({ type: GET_ALL_USER, payload: res.data.user });
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
  }
};
// Get Single User
export const getSingleUser = (userName, navigate) => async (dispatch) => {
  try {
    await axios
      .get(`/api/v1/user/get-single-user/${userName}`)
      .then((res) => {
        dispatch({ type: GET_SINGLE_USER, payload: res.data.user });
        navigate(`/user/${userName}`);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
  }
};

// Following
export const follow = (me, other) => async (dispatch) => {
  try {
    await axios
      .put(`/api/v1/user/following/${me}/${other}`)
      .then((res) => {
        dispatch({ type: UPDATED_ME, payload: res.data.user });
        // dispatch({ type: GET_SINGLE_USER, payload: res.data.otherUser });
      })
      .catch((err) => {
        errorToast("Please try again");
      });
  } catch (error) {
    console.log(error);
  }
};

// Unfollow
export const unFollow = (me, other) => async (dispatch) => {
  try {
    await axios
      .put(`/api/v1/user/unfollow/${me}/${other}`)
      .then((res) => {
        dispatch({ type: UPDATED_ME, payload: res.data.user });
        // dispatch({ type: GET_SINGLE_USER, payload: res.data.otherUser });
      })
      .catch((err) => {
        errorToast("Please try again");
      });
  } catch (error) {
    console.log(error);
  }
};

// Remove Follower
export const removeFollower = (me, other) => async (dispatch) => {
  try {
    await axios
      .put(`/api/v1/user/remove-follower/${me}/${other}`)
      .then((res) => {
        dispatch({ type: UPDATED_ME, payload: res.data.user });
        // dispatch({ type: GET_SINGLE_USER, payload: res.data.otherUser });
      })
      .catch((err) => {
        errorToast("Please try again");
      });
  } catch (error) {
    console.log(error);
  }
};
