import http from 'axios';
import * as updateEntriesActionTYpe from '../diaryActionTypes';

// actions
// import { authenticateUser } from '../auth/authActions';


export const fetchSingleRequest = data => ({
  type: updateEntriesActionTYpe.UPDATE_ENTRY_REQUEST,
  payload: data

});

export const fetchSingleSuccess = data => ({
  type: updateEntriesActionTYpe.UPDATE_ENTRY_SUCCESS,
  payload: data
});

export const fetchSingleFailure = data => ({
  type: updateEntriesActionTYpe.UPDATE_ENTRY_FAILURE,
  payload: data
});


export const updateSingleEntry = (entryObject, entryId) => (dispatch) => {
  const token = localStorage.getItem('userToken');
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
  };
  dispatch(fetchSingleRequest(true));
  return http.put(`https://diarry.herokuapp.com/api/v1/entries/${entryId}`, entryObject, headers)
    .then((response) => {
      dispatch(fetchSingleSuccess(response.data));
      return response.data;
    })
    .catch(error => dispatch(fetchSingleFailure(error.response.data)));
};
