import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  AUTHENTICATION_FAIL,
  AUTHENTICATION_SUCCESS,
  PASSWORD_RESET_CONFIRM_FAIL,
  PASSWORD_RESET_CONFIRM_SUCCESS,
  PASSWORD_RESET_FAIL,
  PASSWORD_RESET_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  ACTIVATION_FAIL,
  ACTIVATION_SUCCESS,
  GOOGLE_AUTH_FAIL,
  GOOGLE_AUTH_SUCCESS,
  LOGOUT,
} from "../actions/types";

const initialState = {
  access: localStorage.getItem("access"),
  refresh: localStorage.getItem("refresh"),
  isAutenticated: null,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case AUTHENTICATION_SUCCESS:
      return {
        ...state,
        isAutenticated: true,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("access", payload.access);
      localStorage.setItem("refresh", payload.refresh);
      return {
        ...state,
        isAutenticated: true,
        access: payload.access,
        refresh: payload.refresh,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isAutenticated: false,
      };
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        user: payload,
      };
    case AUTHENTICATION_FAIL:
      return {
        ...state,
        isAutenticated: false,
      };
    case LOAD_USER_FAIL:
      return {
        ...state,
        user: null,
      };
    case GOOGLE_AUTH_SUCCESS:
      localStorage.setItem("access", payload.access);
      return {
        ...state,
        isAutenticated: true,
        access: payload.access,
        refresh: payload.refresh,
      };
    case GOOGLE_AUTH_FAIL:
    case LOGIN_FAIL:
    case SIGNUP_FAIL:
    case LOGOUT:
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      return {
        ...state,
        isAutenticated: false,
        access: null,
        refresh: null,
        user: null,
      };
    case PASSWORD_RESET_CONFIRM_FAIL:
    case PASSWORD_RESET_CONFIRM_SUCCESS:
    case PASSWORD_RESET_FAIL:
    case PASSWORD_RESET_SUCCESS:
    case ACTIVATION_SUCCESS:
    case ACTIVATION_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
