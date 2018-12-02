// state
import initialState from '../../app/mainStore/initialState';

// action types
import * as fetchSingleActionTypes from '../diaryActionTypes';

/**
 * @param {object} state
 * @param {string} action
 * @desc login reducer
 * @returns {object} type
 */
const fetchSingleEntriesReducer = (state = initialState.publishedEntries, action) => {
  switch (action.type) {
    case fetchSingleActionTypes.FETCH_SINGLE_ENTRIES_REQUEST:
      return {
        ...state,
        processing: action.payload,
      };
    case fetchSingleActionTypes.FETCH_SINGLE_ENTRIES_SUCCESS:
      return {
        ...state,
        processing: false,
        entries: action.payload,
        error: '',
        fetched: true
      };
    case fetchSingleActionTypes.FETCH_SINGLE_ENTRIES_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default fetchSingleEntriesReducer;
