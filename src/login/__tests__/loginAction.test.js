// third party library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// import dotenv from 'dotenv';

// actionType
import {
  LOGIN_SUCCESS,
  LOGIN_LOADING,
  LOGIN_FAILURE,
} from '../loginActionType';
import { AUTHENTICATE_USER } from '../../auth/authActionTypes';


// actions
import { authenticateUser } from '../../auth/authActions';
import { userLogin} from '../loginAction';

// dotenv.config();
const user = { id: 1, roleId: 2 };
const message = 'Password required.';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);


describe('Actions related with login', () => {
  afterEach(() => {
    mock.reset();
  });
  it('User login is successful', () => {
    mock.onPost('https://diarry.herokuapp.com/api/v1/auth/login')
      .reply(201, {});

    const mockedActions = [
      {
        type: LOGIN_LOADING,
        payload: true,
      },
      {
        type: LOGIN_SUCCESS,
        payload: {}
      },
      {
        type: AUTHENTICATE_USER,
      },
    ];

    const store = mockStore({ auth: {} });
    return store.dispatch(userLogin())
      .then(() => {
        expect(store.getActions()).toEqual(mockedActions);
      });
  });
  it('User login is unsuccessful', () => {
    mock.onPost('https://diarry.herokuapp.com/api/v1/auth/login')
      .reply(401, {
        status: 'failed',
        message,
      });

    const mockedActions = [
      {
        type: LOGIN_LOADING,
        payload: true,
      },
      {
        type: LOGIN_FAILURE,
        payload: message,
      },
    ];

    const store = mockStore({ auth: {} });
    return store.dispatch(userLogin())
      .then(() => {
        expect(store.getActions()).toEqual(mockedActions);
      });
  });
});
