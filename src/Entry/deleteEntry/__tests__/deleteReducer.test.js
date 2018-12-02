// actionType
import {
  DELETE_ENTRY_FAILURE,
  DELETE_ENTRY_REQUEST,
  DELETE_ENTRY_SUCCESS
} from '../../diaryActionTypes';

// reducer
import reducer from '../deleteEntryReducer';

const message = 'Unable to delete article';
const payload = undefined;

describe('delete reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({

      entry: {},
      error: '',
      processing: false,
      isCreated: false,
      entries: [],
      fetched: false

    });
  });
  it('should run while createEntryAction page makes request', () => {
    expect(
      reducer([], {
        type: DELETE_ENTRY_REQUEST,
        payload: true,
      })
    ).toEqual({
      processing: true,
    });
  });
  it('should run on successful creation', () => {
    expect(
      reducer([], {
        type: DELETE_ENTRY_SUCCESS,
      })
    ).toEqual({
      processing: false,
      entries: payload,
      error: '',
      fetched: true
    });
  });
  it('should run on unsuccessful login', () => {
    expect(
      reducer([], {
        type: DELETE_ENTRY_FAILURE,
        payload: message,
      })
    ).toEqual({
      processing: false,
      error: message,
    });
  });
});
