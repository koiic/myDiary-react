// React Libraries
import React from 'react';

// third-party libraries
import { shallow, configure } from 'enzyme';

import { Provider } from 'react-redux';

// modules imports
import configureStore from '../../app/mainStore/store';

// modules importation
import LoginContainer from '../LoginContainer';
import LoginComponent from '../LoginComponent';

// SnapShot Test
describe('Renders the singup page', () => {
  it('should render the signup form', () => {
    const store = configureStore();
    const wrapper = shallow(
      <Provider store={store}>
        <LoginContainer />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });
});

describe('Renders the singup page', () => {
  it('should render the signup form', () => {
    const component = shallow(
      <LoginComponent auth={{ login: { processing: true } }} />
    );
    expect(component).toMatchSnapshot();
  });
});
