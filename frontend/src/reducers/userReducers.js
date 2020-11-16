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

const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case UserActions.USER_REGISTER_REQUEST:
      return {
        loading: true,
      };
    case UserActions.USER_REGISTER_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case UserActions.USER_REGISTER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case UserActions.USER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UserActions.USER_DETAILS_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };
    case UserActions.USER_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case UserActions.USER_UPDATE_PROFILE_REQUEST:
      return {
        loading: true,
      };
    case UserActions.USER_UPDATE_PROFILE_SUCCESS:
      return {
        loading: false,
        success: true,
        userInfo: action.payload,
      };
    case UserActions.USER_UPDATE_PROFILE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
};
