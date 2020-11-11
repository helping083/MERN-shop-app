import * as UserActions from "../constants/userConstants";

const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case UserActions.USER_LOGIN_REQUEST:
      return {
        loading: true,
      };
    case UserActions.USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case UserActions.USER_LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case UserActions.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export { userLoginReducer };
