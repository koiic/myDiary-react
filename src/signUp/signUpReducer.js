// state
import initialState from '../app/mainStore/initialState';

// action types
import * as signupActionTypes from './signUpActionTypes';

/**
 * @param {object} state
 * @param {string} action
 * @desc login reducer
 * @returns {object} type
 */
const signupReducer = (state = initialState.auth.signup, action) => {
  switch (action.type) {
    case signupActionTypes.SIGNUP_LOADING:
      return {
        ...state,
        processing: action.payload,
      };
    case signupActionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        processing: false,
        registered: true,
        verified: true,
        error: '',
      };
    case signupActionTypes.SIGNUP_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.payload
      };
    case signupActionTypes.SIGNUP_ERROR_CLEARED:
      return {
        ...state,
        error: ''
      };
    default:
      return state;
  }
};

export default signupReducer;
