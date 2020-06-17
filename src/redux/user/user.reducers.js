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
    case UserActionTypes.SIGN_IN_FAILURE:
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
