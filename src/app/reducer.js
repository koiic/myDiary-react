// redux library
import { combineReducers } from 'redux';

import loginReducer from '../login/loginReducer';
import authReducer from '../auth/authReducer';
import signupReducer from '../signUp/signUpReducer';
import entryReducer from '../Entry/createEntry/createDiaryReducer';
import fetchEntriesReducer from '../Entry/entryDashBoard/dashBoardReducer';
import fetchSingleEntriesReducer from '../Entry/viewEntry/viewSingleArticleReducer';
import updateEntryReducer from '../Entry/updateEntry/updateEntryAction';
import deleteEntryReducer from '../Entry/deleteEntry/deleteEntryReducer';

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
