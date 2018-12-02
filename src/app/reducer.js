// redux library
import { combineReducers } from 'redux';

import loginReducer from '../login/loginReducer';
import authReducer from '../auth/authReducer';
import signupReducer from '../signUp/signUpReducer';
import entryReducer from '../entry/createEntry/createDiaryReducer';
import fetchEntriesReducer from '../entry/entryDashBoard/dashBoardReducer';
import fetchSingleEntriesReducer from '../entry/viewEntry/viewSingleArticleReducer';
import updateEntryReducer from '../entry/updateEntry/updateEntryAction';
import deleteEntryReducer from '../entry/deleteEntry/deleteEntryReducer';

/**
 * @desc combines all the reducers
*/
export default combineReducers({
  loginReducer,
  authReducer,
  signupReducer,
  entryReducer,
  fetchEntriesReducer,
  fetchSingleEntriesReducer,
  updateEntryReducer,
  deleteEntryReducer

});
