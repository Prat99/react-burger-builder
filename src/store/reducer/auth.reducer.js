import * as actions from "../actions/actionTypes";

const initialState = {
  token: null,
  showLoader: false,
  error: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.AUTH_START:
      return {
        ...state,
        showLoader: true,
        error: false
      };
    case actions.AUTH_SUCCESS:
      return {
        ...state,
        showLoader: false,
        error: false,
        token: action.idToken
      };
    case actions.AUTH_FAILED:
      return {
        ...state,
        showLoader: false,
        error: true,
        token: null
      };
    case actions.AUTH_LOGOUT:
      return {
        ...state,
        showLoader: false,
        error: false,
        token: null
      };
    default:
      return state;
  }
};

export default authReducer;
