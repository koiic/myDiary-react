// react modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/mainStore/store';
import './index.css';
// container
import AppRouter from './app/routers';

// helpers
import Auth from './helper/tokenCheck';
// import setAuthToken from './helper/authToken';
import { authenticateUser, logOutUser } from './auth/authActions';


const reduxStore = store();
const token = localStorage.getItem('userToken');
const checker = Auth.verifyUserToken(token);

if (checker) {
  const user = localStorage.getItem('username');
  reduxStore.dispatch(authenticateUser(user));
} else {
  reduxStore.dispatch(logOutUser());
}

// if (localStorage.userToken) {
//   // setting token to request headers for authentication
//   setAuthToken(localStorage.token);
//   // adding user object to User's store
//   reduxStore.dispatch(asyncActions(LOG_IN).success(jwtDecode(localStorage.userToken)));
// }

const wrapper = document.getElementById('root');
ReactDOM.render(
  <Provider store={reduxStore}>
    <AppRouter/>
  </Provider>,
  wrapper
);
