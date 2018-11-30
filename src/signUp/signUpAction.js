import http from 'axios';
import * as signUpTypes from './signUpActionTypes';

// actions
import { authenticateUser } from '../auth/authActions';


export const signUpRequest = data => ({
  type: signUpTypes.SIGNUP_LOADING,
  payload: data

});

export const signUpSuccess = data => ({
  type: signUpTypes.SIGNUP_SUCCESS,
  payload: data
});

export const signUpFailure = data => ({
  type: signUpTypes.SIGNUP_FAILURE,
  payload: data
});

/**
 * @param {object} data
 * @desc clear error while login
 * @returns {object} type
*/
export function clearError() {
  return {
    type: signUpTypes.SIGNUP_ERROR_CLEARED
  };
}

export const userRegistration = userObject => (dispatch) => {
  dispatch(signUpRequest(true));
  return http.post('https://diarry.herokuapp.com/api/v1/auth/signup', userObject)
    .then((userPayload) => {
      dispatch(signUpSuccess(userPayload.data));
      dispatch(authenticateUser(userPayload.data.user));
      localStorage.setItem('userToken', userPayload.data.data);
      localStorage.setItem(
        'username',
        JSON.stringify(userPayload.data.user)
      );
    })
    .catch((error) => {
      dispatch(signUpFailure(error.response.data.message));
    });
};
