import React, { Component, Fragment } from 'react';

// third party library
import { Redirect } from 'react-router-dom';
import Loader from 'react-loader';


/**
 * @param {object} props
 * @desc renders signup page
 */
class SignUp extends Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    username: '',
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      username,
      password,
      firstname,
      lastname,
      email
    } = this.state;
    this.props.userRegistration({
      username, password, firstname, lastname, email
    });
  };

  render() {
    const {
      firstname, lastname, email, password, username
    } = this.state;
    const { props } = this;
    const loading = props.auth.signup.processing
      ? { display: 'block' }
      : { display: 'none' };
    if (props.auth.isAuth === true) {
      return <Redirect to='/' />;
    }
    return (
      <Fragment>
        <section>
        <div className="shelter">
        <div className="row">
          <div className="column" />
          <div className="column">
            <div className="form">
              <h1 className="text-center nav__logo app-color">
                Registration
              </h1>
              <div style={loading}>
                        <Loader color='#0FC86F' speed={1} className='spinner' />
                      </div>
              <div className="form-card">
                <form onSubmit={this.handleSubmit} >
                  <div className="form-row">
                    <label htmlFor="name">Firstname:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your firstname"
                      name="firstname"
                      value={firstname}
                      onChange={this.handleChange}
                      required
                      minLength={3}
                      maxLength={30}
                    />
                  </div>
                  <div className="form-row">
                    <label htmlFor="name">Lastname:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your lastname"
                      required
                      name="lastname"
                      value={lastname}
                      onChange={this.handleChange}
                      minLength={3}
                      maxLength={30}
                    />
                  </div>
                  <div className="form-row">
                    <label htmlFor="name">Username:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your username"
                      required
                      name="username"
                      value={username}
                      onChange={this.handleChange}
                      minLength={3}
                      maxLength={30}
                    />
                  </div>
                  <div className="form-row">
                    <label htmlFor="name">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      required
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                      minLength={3}
                      maxLength={30}
                    />
                  </div>
                  <div className="form-row">
                    <label htmlFor="name">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      required
                      name="password"
                      value={password}
                      onChange={this.handleChange}
                      placeholder="Enter your password"
                    />
                  </div>
                    <button
                      className="btn account__btn btn-block"
                    >
                      Sign up
                    </button>
                </form>
              </div>
              <p>
                Already Have an Account Sign In{' '}
                <a href="/login">here</a>
              </p>
            </div>
          </div>
          <div className="column" />
        </div>
      </div>
    </section>
    <section>
      <div className="footer">
        <div className="navbar py-1 bg-white">
          <div className="shelter">

            <nav className="nav__items nav__items-right">
              <div className="navbar__nav">
                <div className="display">
                  <a href="#" className="dodgerblue">
                    © Ismail Ibrahim [Andela Cycle34 2018].
                  </a>
                </div>
              </div>
            </nav>
          </div>
          {/* end shelter */}
        </div>
        {/* end navbar */}
      </div>
    </section>
  </Fragment>

    );
  }
}

export default SignUp;
