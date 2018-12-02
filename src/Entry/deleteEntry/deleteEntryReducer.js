// state
import initialState from '../../app/mainStore/initialState';

// action types
import * as deleteEntryActionType from '../diaryActionTypes';

/**
 * @param {object} state
 * @param {string} action
 * @desc login reducer
 * @returns {object} type
 */
const deleteEntryReducer = (state = initialState.publishedEntries, action) => {
  switch (action.type) {
    case deleteEntryActionType.DELETE_ENTRY_REQUEST:
      return {
        ...state,
        processing: action.payload,
      };
    case deleteEntryActionType.DELETE_ENTRY_SUCCESS:
      return {
        ...state,
        processing: false,
        entries: action.payload,
        error: '',
        fetched: true
      };
    case deleteEntryActionType.DELETE_ENTRY_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default deleteEntryReducer;
