// third-party modules
import http from 'axios';

// actionTypes
import * as deleteEntriesActionType from '../diaryActionTypes';


export const deleteSingleRequest = data => ({
  type: deleteEntriesActionType.DELETE_ENTRY_REQUEST,
  payload: data

});

export const deleteSingleSuccess = data => ({
  type: deleteEntriesActionType.DELETE_ENTRY_SUCCESS,
  payload: data
});

export const deleteSingleFailure = data => ({
  type: deleteEntriesActionType.DELETE_ENTRY_FAILURE,
  payload: data
});


export const deleteSingleEntry = entryId => (dispatch) => {
  const token = localStorage.getItem('userToken');
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
  };
  dispatch(deleteSingleRequest(true));
  return http.put(`https://diarry.herokuapp.com/api/v1/entries/archive/${entryId}`, null, headers)
    .then((response) => {
      dispatch(deleteSingleSuccess(response.data));
      return response.data;
    })
    .catch(error => dispatch(deleteSingleFailure(error.response.data.message)));
};
