// actionType
import {
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from '../signUpActionTypes';

// reducer
import reducer from '../signUpReducer';

const message = ' unable to signup ';

describe('signup reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      verified: false,
      registered: false,
      processing: false,
    });
  });
  it('should run while signup page makes request', () => {
    expect(
      reducer([], {
        type: SIGNUP_LOADING,
        payload: true,
      })
    ).toEqual({
      processing: true,
    });
  });
  it('should run on successful login', () => {
    expect(
      reducer([], {
        type: SIGNUP_SUCCESS,
      })
    ).toEqual({
      processing: false,
      error: '',
      registered: true,
      verified: true
    });
  });
  it('should run on unsuccessful signup', () => {
    expect(
      reducer([], {
        type: SIGNUP_FAILURE,
        payload: message,
      })
    ).toEqual({
      processing: false,
      error: message,
    });
  });
});
