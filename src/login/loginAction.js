import http from 'axios';
import * as loginTypes from './loginActionType';

// actions
import { authenticateUser } from '../auth/authActions';


export const loginRequest = data => ({
  type: loginTypes.LOGIN_LOADING,
  payload: data

});

export const loginSuccess = data => ({
  type: loginTypes.LOGIN_SUCCESS,
  payload: data
});

export const loginFailure = data => ({
  type: loginTypes.LOGIN_FAILURE,
  payload: data
});

/**
 * @param {object} data
 * @desc clear error while login
 * @returns {object} type
*/
export function clearError() {
  return {
    type: loginTypes.LOGIN_ERROR_CLEARED
  };
}

export const userLogin = userObject => (dispatch) => {
  dispatch(loginRequest(true));
  return http.post('https://diarry.herokuapp.com/api/v1/auth/login', userObject)
    .then((userPayload) => {
      dispatch(loginSuccess(userPayload.data));
      dispatch(authenticateUser(userPayload.data.username));
      localStorage.setItem('userToken', userPayload.data.token);
      localStorage.setItem(
        'username',
        JSON.stringify(userPayload.data.username)
      );
    })
    .catch((error) => {
      dispatch(loginFailure(error.response.data.message));
    });
};
