import UserActionTypes from './user.types'

const INITIAL_STATE = {
  currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
        return {
          ...state,
          currentUser: action.payload
        };
      break;
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error : null
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
        return {
          ...state,
          error: action.payload
        };
      break;
    default:
      return state;
      break;
  }
}


export default userReducer;
