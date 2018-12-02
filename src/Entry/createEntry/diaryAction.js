import http from 'axios';
import * as createEntryTypes from '../diaryActionTypes';

// actions
// import { authenticateUser } from '../auth/authActions';


export const publishRequest = data => ({
  type: createEntryTypes.CREATE_ENTRY_REQUEST,
  payload: data

});

export const publishSuccess = data => ({
  type: createEntryTypes.CREATE_ENTRY_SUCCESS,
  payload: data
});

export const publishFailure = data => ({
  type: createEntryTypes.CREATE_ENTRY_FAILURE,
  payload: data
});


export const createNewEntry = entryObject => (dispatch) => {
  const token = localStorage.getItem('userToken');
  console.log('the token', token);
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
  };
  console.log(headers);
  dispatch(publishRequest(true));
  return http.post('https://diarry.herokuapp.com/api/v1/entries', entryObject, headers)
    .then((response) => {
      dispatch(publishSuccess(response.data));
    })
    .catch((error) => {
      dispatch(publishFailure(error.response.data.message));
    });
};
