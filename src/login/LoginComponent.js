import React, { Component, Fragment } from 'react';

// third party library
import { Redirect } from 'react-router-dom';
import Loader from 'react-loader';

/**
 * @param {object} props
 * @desc renders login page
 */
class LoginComponent extends Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.login({ username, password });
  };

  render() {
    const { username, password } = this.state;

    const { props } = this;
    const loading = props.auth.login.processing
      ? { display: 'block' }
      : { display: 'none' };
    if (props.auth.isAuth === true) {
      return <Redirect to='/' />;
    }

    return (
      <Fragment>
        <div className='signup'>
          <div className='header'>
            <div className='navbar fixed-top'>
              <div className='shelter'>
                <div className='navbar__nav nav__logo nav__underline'>
                  <i className='fa fa-book' />
                  <span className='highlight'>My</span>-Diarry
                </div>
                <div className='navbar__nav navbar__nav-toggle'>
                  <i className='fa fa-bars' />
                </div>
                <nav className='nav__items nav__items-right'>
                  <div className='navbar__nav pr-0'>
                    <a href='signup.html'>
                      <button className='btn btn-light'>Create Account</button>
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <section>
            <div className='shelter'>
              <div className='row'>
                <div className='column' />
                <div className='column'>
                  <div className='form'>
                    <h1 className='text-center nav__logo app-color'>
                      Welcome Back
                    </h1>
                    <div className='form-card'>
                      <div style={loading}>
                        <Loader color='#0FC86F' speed={1} className='spinner' />
                      </div>
                      <form onSubmit={this.handleSubmit}>
                        <div className='form-row'>
                          <label htmlFor='name'>Username:</label>
                          <input
                            type='text'
                            className='form-control'
                            name='username'
                            value={username}
                            onChange={this.handleChange}
                            placeholder='Enter your username'
                            required
                            minLength={3}
                            maxLength={30}
                          />
                        </div>
                        <div className='form-row'>
                          <label htmlFor='name'>Password</label>
                          <input
                            type='password'
                            className='form-control'
                            required
                            placeholder='Enter your password'
                            name='password'
                            value={password}
                            onChange={this.handleChange}
                          />
                        </div>
                        <button className='btn account__btn btn-block'>
                          Login
                        </button>
                      </form>
                    </div>
                    <p>
                      Yet to Sign Up?Sign Up <a href='signup.html'>here</a>
                    </p>
                  </div>
                </div>
                <div className='column' />
              </div>
            </div>
          </section>
          <section>
            <div className='footer'>
              <div className='navbar py-1 bg-white'>
                <div className='shelter'>
                  <nav className='nav__items nav__items-right'>
                    <div className='navbar__nav'>
                      <div className='display'>
                        <a href='#' className='dodgerblue'>
                          © Ismail Ibrahim[Andela Cycle34 2018].
                        </a>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Fragment>
    );
  }
}

export default LoginComponent;
