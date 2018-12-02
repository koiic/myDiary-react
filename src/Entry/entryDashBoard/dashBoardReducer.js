// state
import initialState from '../../app/mainStore/initialState';

// action types
import * as dashboardActionTypes from '../diaryActionTypes';

/**
 * @param {object} state
 * @param {string} action
 * @desc login reducer
 * @returns {object} type
 */
const fetchEntriesReducer = (state = initialState.publishedEntries, action) => {
  switch (action.type) {
    case dashboardActionTypes.FETCH_ENTRIES_REQUEST:
      return {
        ...state,
        processing: action.payload,
      };
    case dashboardActionTypes.FETCH_ENTRIES_SUCCESS:
      return {
        ...state,
        processing: false,
        entries: action.payload,
        error: '',
        fetched: true
      };
    case dashboardActionTypes.FETCH_ENTRIES_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default fetchEntriesReducer;
