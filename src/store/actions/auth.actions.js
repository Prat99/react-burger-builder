import * as actions from "./actionTypes";
import axios from "axios";

export const auth_start = () => {
  return {
    type: actions.AUTH_START
  };
};

export const auth_success = (token, localId) => {
  return {
    type: actions.AUTH_SUCCESS,
    idToken: token,
    localId: localId
  };
};

export const auth_failed = error => {
  return {
    type: actions.AUTH_FAILED,
    err: error
  };
};

export const auth_logout = () => {
  return {
    type: actions.AUTH_LOGOUT
  }
}

export const authExpirationTimeout = (expirationTime) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(auth_logout())
    }, expirationTime * 1000);
  }
}

export const authRegister = (email, password) => {
  return dispatch => {
    dispatch(auth_start);
    let authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    axios
      .post(
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCv2SIbSsZw-Gamj_kU5S7tDJQLM0-Ufm0",
        authData
      )
      .then(response => {
        console.log("response", response);
        dispatch(auth_success(response.data.idToken, response.data.localId));
      })
      .catch(error => {
        console.log("error", error.response);
        dispatch(auth_failed(error.response.data.error));
      });
  };
};

export const authLogin = (email, password) => {
  return dispatch => {
    dispatch(auth_start());
    let authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    axios
      .post(
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCv2SIbSsZw-Gamj_kU5S7tDJQLM0-Ufm0",
        authData
      )
      .then(response => {
        console.log("response", response);
        dispatch(auth_success(response.data.idToken, response.data.localId));
        dispatch(authExpirationTimeout(response.data.expiresIn))
      })
      .catch(error => {
        console.log("error", error.response.data.error.message);
        dispatch(auth_failed(error.response.data.error.message));
      });
  };
};

