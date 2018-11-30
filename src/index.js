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


const wrapper = document.getElementById('root');
ReactDOM.render(
  <Provider store={reduxStore}>
    <AppRouter/>
  </Provider>,
  wrapper
);
