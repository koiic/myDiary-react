import http from 'axios';
import * as dashboardActionTypes from '../diaryActionTypes';

// actions
// import { authenticateUser } from '../auth/authActions';


export const fetchEntriesRequest = data => ({
  type: dashboardActionTypes.FETCH_ENTRIES_REQUEST,
  payload: data

});

export const fetchEntriesSuccess = data => ({
  type: dashboardActionTypes.FETCH_ENTRIES_SUCCESS,
  payload: data
});

export const fetchEntriesFailure = data => ({
  type: dashboardActionTypes.FETCH_ENTRIES_FAILURE,
  payload: data
});

export const fetchTodayEntryCount = data => ({
  type: dashboardActionTypes.FETCH_TODAY_ENTRYCOUNT,
  payload: data
});

export const fetchAllEntryCount = data => ({
  type: dashboardActionTypes.FETCH_ALL_ENTRYCOUNT,
  payload: data
});

export const fetchDeletedEntriesCount = data => ({
  type: dashboardActionTypes.FETCH_ALL_DELETED_COUNT,
  payload: data
});

export const fetchAllEntries = () => (dispatch) => {
  const token = localStorage.getItem('userToken');
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
  };
  dispatch(fetchEntriesRequest(true));
  return http.get('https://diarry.herokuapp.com/api/v1/entries', headers)
    .then((response) => {
      dispatch(fetchEntriesSuccess(response.data));
    })
    .catch(error => dispatch(fetchEntriesFailure(error.response.data)));
};

export const fetchTodaysEntries = () => (dispatch) => {
  const token = localStorage.getItem('userToken');
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
  };
  return http.get('https://diarry.herokuapp.com/api/v1/entries/today/count', headers)
    .then((response) => {
      dispatch(fetchTodayEntryCount(response.data));
      return response.data;
    })
    .catch(error => dispatch(fetchEntriesFailure(error.response.data.message)));
};


export const fetchCreatedEntriesCount = () => (dispatch) => {
  const token = localStorage.getItem('userToken');
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
  };
  return http.get('https://diarry.herokuapp.com/api/v1/entries/count', headers)
    .then((response) => {
      dispatch(fetchAllEntryCount(response.data));
      return response.data;
    })
    .catch(error => dispatch(fetchEntriesFailure(error.response.data.message)));
};

export const deleteCount = () => (dispatch) => {
  const token = localStorage.getItem('userToken');
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
  };
  return http.get('https://diarry.herokuapp.com/api/v1/entries/archive/count', headers)
    .then((response) => {
      dispatch(fetchDeletedEntriesCount(response.data));
      return response.data;
    })
    .catch(error => dispatch(fetchEntriesFailure(error.response.data.message)));
};
