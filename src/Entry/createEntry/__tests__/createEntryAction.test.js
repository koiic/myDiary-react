// third party library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// actionType
import {
  CREATE_ENTRY_FAILURE,
  CREATE_ENTRY_SUCCESS,
  CREATE_ENTRY_REQUEST,
} from '../../diaryActionTypes';


// actions
import { createNewEntry } from '../diaryAction';

const entryObject = {
  title: 'my first title',
  note: 'the mean are wise'
};
const message = 'Entries cannot be created';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);


describe('Actions related with entry creation', () => {
  afterEach(() => {
    mock.reset();
  });
  it('Entry creation is successful', () => {
    mock.onPost('https://diarry.herokuapp.com/api/v1/entries')
      .reply(201, {});

    const mockedActions = [
      {
        type: CREATE_ENTRY_REQUEST,
        payload: true,
      },
      {
        type: CREATE_ENTRY_SUCCESS,
        payload: {}
      },
    ];

    const store = mockStore({ publishedEntries: {} });
    return store.dispatch(createNewEntry())
      .then(() => {
        expect(store.getActions()).toEqual(mockedActions);
      });
  });
  it('Entry creation is unsuccessful', () => {
    mock.onPost('https://diarry.herokuapp.com/api/v1/entries')
      .reply(401, {});

    const mockedActions = [
      {
        type: CREATE_ENTRY_REQUEST,
        payload: true,
      },
      {
        type: CREATE_ENTRY_FAILURE,
        payload: {},
      },
    ];

    const store = mockStore({ publishedEntries: {} });
    return store.dispatch(createNewEntry())
      .then(() => {
        expect(store.getActions()).toEqual(mockedActions);
      });
  });
});
