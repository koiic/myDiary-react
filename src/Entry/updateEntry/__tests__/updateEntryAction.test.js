// third party library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// actionType
import {
  UPDATE_ENTRY_FAILURE,
  UPDATE_ENTRY_REQUEST,
  UPDATE_ENTRY_SUCCESS
} from '../../diaryActionTypes';


// actions
import { updateSingleEntry } from '../updateEntryAction';

const message = 'Entries cannot be created';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);
const entryId = 1;
const payload = {
  title: 'mmy title',
  note: ' the new note'
};

describe('Actions related with entry creation', () => {
  afterEach(() => {
    mock.reset();
  });
  it('Update entry is successful', () => {
    mock.onPut(`https://diarry.herokuapp.com/api/v1/entries/${entryId}`)
      .reply(200, {});

    const mockedActions = [
      {
        type: UPDATE_ENTRY_REQUEST,
        payload: true,
      },
      {
        type: UPDATE_ENTRY_SUCCESS,
        payload: {}
      },
    ];

    const store = mockStore({ publishedEntries: {} });
    return store.dispatch(updateSingleEntry(payload, entryId))
      .then(() => {
        expect(store.getActions()).toEqual(mockedActions);
      });
  });
  it('Update entry is unsuccessful', () => {
    mock.onPut(`https://diarry.herokuapp.com/api/v1/entries/${entryId}`)
      .reply(401, {});

    const mockedActions = [
      {
        type: UPDATE_ENTRY_REQUEST,
        payload: true,
      },
      {
        type: UPDATE_ENTRY_FAILURE,
        payload: {},
      },
    ];

    const store = mockStore({ publishedEntries: {} });
    return store.dispatch(updateSingleEntry(payload, entryId))
      .then(() => {
        expect(store.getActions()).toEqual(mockedActions);
      });
  });
});
