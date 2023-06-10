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
} from "./types";
import api from "../api/posts";
import axios from "axios";

export const load_user = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        'Authorization': `JWT ${localStorage.getItem("access")}`,
        'Accept': "application/json",
      },
    };
    try {
      const response = await api.get("api/v1/auth/v1/users/me/", config);
      dispatch({
        type: LOAD_USER_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      dispatch({
        type: LOAD_USER_FAIL,
      });
    }
  } else {
    dispatch({
      type: LOAD_USER_FAIL,
    });
  }
};

export const googleAuthenticate = (state, code) => async dispatch =>{
  if(state && code && !localStorage.getItem('access')){
    const config = {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      }
    }
    const detalis = {
      'state': state,
      'code': code
    }
    const formBody = Object.keys(detalis).map(key => encodeURIComponent(key)+ '='+ encodeURIComponent(detalis[key])).join('&');
    try{
      const response = await api.post(`api/v1/auth/o/?${formBody}`, config); //google-oauth2/
      dispatch({
        type: GOOGLE_AUTH_SUCCESS,
        payload: response.data
      })
      dispatch(load_user())
    }catch(err){
      dispatch({
        type: GOOGLE_AUTH_FAIL
      })
    }
  }
}

export const checkAuthenticated = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        'Accept': "application/json",
      },
    };
    const body = JSON.stringify({ token: localStorage.getItem("access") });
    try {
      const response = await axios.post("api/auth/jwt/verify/", body, config);
      if (response.data.code !== "token_not_valid") {
        dispatch({
          type: AUTHENTICATION_SUCCESS,
        });
      } else {
        dispatch({
          type: AUTHENTICATION_FAIL,
        });
      }
    } catch (err) {
      dispatch({
        type: AUTHENTICATION_FAIL,
      });
    }
  } else {
    dispatch({
      type: AUTHENTICATION_FAIL,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  console.log('Hello');
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });

  try {
    console.log('try api');
    const response = await api.post("api/v1/auth/v1/jwt/create/", body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data,
    });
    dispatch(load_user());
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};
export const signup = (first_name, last_name, email, password, re_password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ first_name, last_name, email, password, re_password });

  try {
    console.log('try api');
    const response = await api.post("api/v1/auth/users/", body, config);
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: response.data,
    });
    dispatch(load_user());
  } catch (err) {
    dispatch({
      type: SIGNUP_FAIL,
    });
  }
};

export const verify = (uid, token) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ uid, token });

  try {
    console.log('try api');
    await api.post("api/v1/auth/users/activation/", body, config);
    dispatch({
      type: ACTIVATION_SUCCESS,
    });
    dispatch(load_user());
  } catch (err) {
    dispatch({
      type: ACTIVATION_FAIL,
    });
  }
}

export const password_reset = (email) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({email});

  try{
    const response = await api.post("api/v1/auth/users/reset_password/", body, config);
    dispatch({
      type: PASSWORD_RESET_SUCCESS
    })
  }catch(err){
    dispatch({
      type: PASSWORD_RESET_FAIL
    })
  }
}

export const reset_password_confirmed = (uid, token, new_password, re_new_password) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({uid, token, new_password, re_new_password});
  try{
    const response = await api.post("api/v1/auth/users/reset_password_confirm/", body, config);
    dispatch({
      type: PASSWORD_RESET_CONFIRM_SUCCESS
    })
  }catch(err){
    dispatch({
      type: PASSWORD_RESET_CONFIRM_FAIL
    })
  }
}

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};