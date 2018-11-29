// react modules
import React, { Component } from 'react';
import LandingPage from '../components/LandingPage';

/**
 * @desc renders login page
 */
class FormContainer extends Component {
  state = {
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
    });
  }

  render = () => {
    return (
      <LandingPage/>

    );
  }
}


export default FormContainer;
