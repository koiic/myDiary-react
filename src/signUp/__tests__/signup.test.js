// React Libraries
import React from 'react';

// third-party libraries
import { shallow, configure } from 'enzyme';

import { Provider } from 'react-redux';

// modules imports
import configureStore from '../../app/mainStore/store';

// modules importation
import SignUpContainer from '../SignUpContainer';
import SignUpComponent from '../SignUpComponent';

// SnapShot Test
describe('Renders the singup container', () => {
  it('should render the signup form', () => {
    const store = configureStore();
    const wrapper = shallow(
      <Provider store={store}>
        <SignUpContainer />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });
});

describe('Renders the singup page', () => {
  it('should render the signup form', () => {
    const component = shallow(
      <SignUpComponent auth={{ signup: { processing: true } }}/>
    );
    expect(component).toMatchSnapshot();
  });
});
