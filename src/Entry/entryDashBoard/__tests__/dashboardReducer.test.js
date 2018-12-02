// actionType
import {
  FETCH_ENTRIES_FAILURE,
  FETCH_ENTRIES_REQUEST,
  FETCH_ENTRIES_SUCCESS,
} from '../../diaryActionTypes';

// reducer
import reducer from '../dashBoardReducer';

const message = 'Unable to fetch articles';
const payload = undefined;

describe('fetch all entries reducer', () => {
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
  it('should run while fetch entry page makes request', () => {
    expect(
      reducer([], {
        type: FETCH_ENTRIES_REQUEST,
        payload: true,
      })
    ).toEqual({
      processing: true,
    });
  });
  it('should run on successful fetch', () => {
    expect(
      reducer([], {
        type: FETCH_ENTRIES_SUCCESS,
      })
    ).toEqual({
      processing: false,
      entries: payload,
      error: '',
      fetched: true
    });
  });
  it('should run on unsuccessful fetch', () => {
    expect(
      reducer([], {
        type: FETCH_ENTRIES_FAILURE,
        payload: message,
      })
    ).toEqual({
      processing: false,
      error: message,
    });
  });
});
