// redux library
import { combineReducers } from 'redux';

import loginReducer from '../login/loginReducer';
import authReducer from '../auth/authReducer';
import signupReducer from '../signUp/signUpReducer';

/**
 * @desc combines all the reducers
*/
export default combineReducers({
  loginReducer,
  authReducer,
  signupReducer

});
