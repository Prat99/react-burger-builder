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
        console.log("error", error);
        dispatch(auth_failed(error));
      });
  };
};

export const authLogin = (email, password) => {
    return dispatch => {
      dispatch(auth_start);
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
        })
        .catch(error => {
          console.log("error", error);
          dispatch(auth_failed(error));
        });
    };
  };

