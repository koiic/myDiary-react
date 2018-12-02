// actionType
import {
  CREATE_ENTRY_FAILURE,
  CREATE_ENTRY_SUCCESS,
  CREATE_ENTRY_REQUEST,
} from '../../diaryActionTypes';

// reducer
import reducer from '../createDiaryReducer';

const message = 'Password required.';
const payload = undefined;

describe('login reducer', () => {
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
        type: CREATE_ENTRY_REQUEST,
        payload: true,
      })
    ).toEqual({
      processing: true,
    });
  });
  it('should run on successful creation', () => {
    expect(
      reducer([], {
        type: CREATE_ENTRY_SUCCESS,
      })
    ).toEqual({
      processing: false,
      entry: payload,
      error: '',
      isCreated: true
    });
  });
  it('should run on unsuccessful login', () => {
    expect(
      reducer([], {
        type: CREATE_ENTRY_FAILURE,
        payload: message,
      })
    ).toEqual({
      processing: false,
      error: message,
    });
  });
});
