// actionType
import {
  UPDATE_ENTRY_FAILURE,
  UPDATE_ENTRY_REQUEST,
  UPDATE_ENTRY_SUCCESS
} from '../../diaryActionTypes';

// reducer
import reducer from '../updateEntryReducer';

const message = 'Unable to update article';
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
  it('should run while update article page makes request', () => {
    expect(
      reducer([], {
        type: UPDATE_ENTRY_REQUEST,
        payload: true,
      })
    ).toEqual({
      processing: true,
    });
  });
  it('should run on successful creation', () => {
    expect(
      reducer([], {
        type: UPDATE_ENTRY_SUCCESS,
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
        type: UPDATE_ENTRY_FAILURE,
        payload: message,
      })
    ).toEqual({
      processing: false,
      error: message,
    });
  });
});
