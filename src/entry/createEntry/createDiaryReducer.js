// state
import initialState from '../../app/mainStore/initialState';

// action types
import * as createEntryTypes from '../diaryActionTypes';

/**
 * @param {object} state
 * @param {string} action
 * @desc login reducer
 * @returns {object} type
 */
const entryReducer = (state = initialState.publishedEntries, action) => {
  switch (action.type) {
    case createEntryTypes.CREATE_ENTRY_REQUEST:
      return {
        ...state,
        processing: action.payload,
      };
    case createEntryTypes.CREATE_ENTRY_SUCCESS:
      return {
        ...state,
        processing: false,
        entry: action.payload,
        error: '',
        isCreated: true
      };
    case createEntryTypes.CREATE_ENTRY_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default entryReducer;
