// state
import initialState from '../app/mainStore/initialState';

// action types
import * as loginActionTypes from './loginActionType';

/**
 * @param {object} state
 * @param {string} action
 * @desc login reducer
 * @returns {object} type
 */
const loginReducer = (state = initialState.auth, action) => {
  switch (action.type) {
    case loginActionTypes.LOGIN_LOADING:
      return {
        ...state,
        processing: action.payload,
      };
    case loginActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        processing: false,
        error: '',
      };
    case loginActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.payload
      };
    case loginActionTypes.LOGIN_ERROR_CLEARED:
      return {
        ...state,
        error: ''
      };
    default:
      return state;
  }
};

export default loginReducer;
