import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INITIAL_STATE = {
  isSignedIn: null,
  googleId: null,
};
const AuthState = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, googleId: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, googleId: null };
    default:
      return state;
  }
};

export default AuthState;
