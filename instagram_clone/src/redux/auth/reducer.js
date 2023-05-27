import initialState from "./initialState";
import {
  GET_ALL_USER,
  GET_SINGLE_USER,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
  PROFILE_UPDATED,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  UPDATED_ME,
  VERIFY_FAIL,
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
} from "./type";

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        loadingBar: true,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        loadingBar: false,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loadingBar: false,
      };
    case VERIFY_REQUEST:
      return {
        ...state,
        loadingBar: true,
      };
    case VERIFY_FAIL:
      return {
        ...state,
        loadingBar: false,
      };
    case VERIFY_SUCCESS:
      return {
        ...state,
        loadingBar: false,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        loadingBar: true,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loadingBar: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        me: payload,
        isLogedIn: true,
        loadingBar: false,
      };
    case LOG_OUT:
      return {
        ...state,
        me: null,
        isLogedIn: false,
      };
    case PROFILE_UPDATED:
      return {
        ...state,
        me: {
          ...state.me,
          ...payload,
        },
      };
    case UPDATED_ME:
      return {
        ...state,
        me: payload,
      };
    case GET_ALL_USER:
      return {
        ...state,
        allUser: payload,
      };
    case GET_SINGLE_USER:
      return {
        ...state,
        singleUser: payload,
      };

    default:
      return state;
  }
};

export default authReducer;
