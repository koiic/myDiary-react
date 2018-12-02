// actionType
import {
  LOGIN_SUCCESS,
  LOGIN_LOADING,
  LOGIN_FAILURE,
} from '../loginActionType';

// reducer
import reducer from '../loginReducer';

const message = 'Password required.';

describe('login reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      login: {
        error: '',
        processing: false,
      },
      signup: {
        verified: false,
        registered: false,
        processing: false,
      },
      isAuth: false,
      user: {},
    });
  });
  it('should run while login page makes request', () => {
    expect(
      reducer([], {
        type: LOGIN_LOADING,
        payload: true,
      })
    ).toEqual({
      processing: true,
    });
  });
  it('should run on successful login', () => {
    expect(
      reducer([], {
        type: LOGIN_SUCCESS,
      })
    ).toEqual({
      processing: false,
      error: '',
    });
  });
  it('should run on unsuccessful login', () => {
    expect(
      reducer([], {
        type: LOGIN_FAILURE,
        payload: message,
      })
    ).toEqual({
      processing: false,
      error: message,
    });
  });
});
