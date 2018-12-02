// third party library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// import dotenv from 'dotenv';

// actionType
import {
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from '../signUpActionTypes';
import { AUTHENTICATE_USER } from '../../auth/authActionTypes';


// actions
import { userRegistration } from '../signUpAction';

// dotenv.config();
// const user = { id: 1, roleId: 2 };
const message = 'Password required.';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);


describe('Actions related with signup', () => {
  afterEach(() => {
    mock.reset();
  });
  it('User signup is successful', () => {
    mock.onPost('https://diarry.herokuapp.com/api/v1/auth/signup')
      .reply(201, {});

    const mockedActions = [
      {
        type: SIGNUP_LOADING,
        payload: true,
      },
      {
        type: SIGNUP_SUCCESS,
        payload: {}
      },
      {
        type: AUTHENTICATE_USER,
      },
    ];

    const store = mockStore({ auth: {} });
    return store.dispatch(userRegistration())
      .then(() => {
        expect(store.getActions()).toEqual(mockedActions);
      });
  });
  it('User login is unsuccessful', () => {
    mock.onPost('https://diarry.herokuapp.com/api/v1/auth/signup')
      .reply(401, {
        status: 'failed',
        message,
      });

    const mockedActions = [
      {
        type: SIGNUP_LOADING,
        payload: true,
      },
      {
        type: SIGNUP_FAILURE,
        payload: message,
      },
    ];

    const store = mockStore({ auth: {} });
    return store.dispatch(userRegistration())
      .then(() => {
        expect(store.getActions()).toEqual(mockedActions);
      });
  });
});
