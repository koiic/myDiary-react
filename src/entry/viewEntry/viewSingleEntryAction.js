import http from 'axios';
import * as fetchEntryActionTypes from '../diaryActionTypes';

// actions
// import { authenticateUser } from '../auth/authActions';


export const fetchSingleRequest = data => ({
  type: fetchEntryActionTypes.FETCH_SINGLE_ENTRIES_REQUEST,
  payload: data

});

export const fetchSingleSuccess = data => ({
  type: fetchEntryActionTypes.FETCH_SINGLE_ENTRIES_SUCCESS,
  payload: data
});

export const fetchSingleFailure = data => ({
  type: fetchEntryActionTypes.FETCH_SINGLE_ENTRIES_FAILURE,
  payload: data
});


export const fetchSingleEntries = entryId => (dispatch) => {
  const token = localStorage.getItem('userToken');
  console.log('the token', entryId);
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
  };
  dispatch(fetchSingleRequest(true));
  return http.get(`https://diarry.herokuapp.com/api/v1/entries/${entryId}`, headers)
    .then((response) => {
      console.log(' RESPONSE', response);
      dispatch(fetchSingleSuccess(response.data));
      return response.data;
    })
    .catch(error => dispatch(fetchSingleFailure(error.response.data.message)));
};
