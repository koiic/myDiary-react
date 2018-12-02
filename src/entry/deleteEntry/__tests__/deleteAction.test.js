// third party library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// actionType
import {
  DELETE_ENTRY_FAILURE,
  DELETE_ENTRY_REQUEST,
  DELETE_ENTRY_SUCCESS,
} from '../../diaryActionTypes';

// actions
import { deleteSingleEntry } from '../deleteEntryAction';

const message = 'Entries cannot be created';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);
const entryId = 14;

describe('Actions related with entry creation', () => {
  afterEach(() => {
    mock.reset();
  });
  it('Delete entry is successful', () => {
    mock
      .onPut(
        `https://diarry.herokuapp.com/api/v1/entries/archive/${entryId}`
      )
      .reply(200, {});

    const mockedActions = [
      {
        type: DELETE_ENTRY_REQUEST,
        payload: true,
      },
      {
        type: DELETE_ENTRY_SUCCESS,
        payload: {},
      },
    ];

    const store = mockStore({ publishedEntries: {} });
    return store.dispatch(deleteSingleEntry(entryId)).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });
  it('Delete entry is unsuccessful', () => {
    mock
      .onPut(
        `https://diarry.herokuapp.com/api/v1/entries/archive/${entryId}`
      )
      .reply(401, {});

    const mockedActions = [
      {
        type: DELETE_ENTRY_REQUEST,
        payload: true,
      },
      {
        type: DELETE_ENTRY_FAILURE,
        payload: {},
      },
    ];

    const store = mockStore({ publishedEntries: {} });
    return store.dispatch(deleteSingleEntry(entryId)).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });
});
