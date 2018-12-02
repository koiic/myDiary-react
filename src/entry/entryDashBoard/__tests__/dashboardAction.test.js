// third party library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// actionType
import {
  FETCH_ENTRIES_FAILURE,
  FETCH_ENTRIES_REQUEST,
  FETCH_ENTRIES_SUCCESS,
} from '../../diaryActionTypes';

// actions
import { fetchAllEntries } from '../dashboardAction';

const entryObject = {
  title: 'my first title',
  note: 'the mean are wise',
};
const message = 'Entries cannot be created';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);

describe('Actions related with fetch all entry', () => {
  afterEach(() => {
    mock.reset();
  });
  it('fetch entry is successful', () => {
    mock.onGet('https://diarry.herokuapp.com/api/v1/entries').reply(200, {});

    const mockedActions = [
      {
        type: FETCH_ENTRIES_REQUEST,
        payload: true,
      },
      {
        type: FETCH_ENTRIES_SUCCESS,
        payload: {},
      },
    ];

    const store = mockStore({ publishedEntries: {} });
    return store.dispatch(fetchAllEntries()).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });
  it('fetch entry is unsuccessful', () => {
    mock.onGet('https://diarry.herokuapp.com/api/v1/entries').reply(401, {});

    const mockedActions = [
      {
        type: FETCH_ENTRIES_REQUEST,
        payload: true,
      },
      {
        type: FETCH_ENTRIES_FAILURE,
        payload: {},
      },
    ];

    const store = mockStore({ publishedEntries: {} });
    return store.dispatch(fetchAllEntries()).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });
});
