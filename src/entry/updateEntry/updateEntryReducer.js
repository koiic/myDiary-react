// state
import initialState from '../../app/mainStore/initialState';

// action types
import * as updateEntryActionType from '../diaryActionTypes';

/**
 * @param {object} state
 * @param {string} action
 * @desc login reducer
 * @returns {object} type
 */
const updateEntryReducer = (state = initialState.publishedEntries, action) => {
  switch (action.type) {
    case updateEntryActionType.UPDATE_ENTRY_REQUEST:
      return {
        ...state,
        processing: action.payload,
      };
    case updateEntryActionType.UPDATE_ENTRY_SUCCESS:
      return {
        ...state,
        processing: false,
        entries: action.payload,
        error: '',
        fetched: true
      };
    case updateEntryActionType.UPDATE_ENTRY_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default updateEntryReducer;
