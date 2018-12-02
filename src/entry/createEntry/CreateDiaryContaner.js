// react libraries
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

// third-party libraries
import PropTypes from 'prop-types';
import Loader from 'react-loader';
import { Redirect } from 'react-router-dom';
// Action
import { createNewEntry } from './diaryAction';

//components
import Header from '../../reusables/Header';

/**
 * @export
 * @class CommentReply
 * @param {object} event
 * @extends Component
 */
class CreateEntryPage extends Component {
  myInput = React.createRef();

  state = {
    title: '',
    note: '',
    date: '',
    isModalOpen: false,
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, note, date } = this.state;
    this.props.createEntry({
      title,
      note,
      date,
    });
  };

  handleShowEditor = () => {
    const { showEditor } = this.state;

    this.setState({
      showEditor: !showEditor,
    });
  };

  render() {
    const { title, note, date } = this.state;
    let loggedUserName;
    const { props } = this;
    console.log('uuuuuuu', props);
    if (props.auth.isAuth === true) {
      loggedUserName = localStorage.getItem('username');
      loggedUserName = JSON.parse(loggedUserName);
    } else {
      loggedUserName = null;
    }
    const loading = props.entry.processing
      ? { display: 'block' }
      : { display: 'none' };
    if (props.entry.isCreated === true) {
      return <Redirect to='/dashboard' />;
    }
    return (
      <Fragment>
         <Header loggedUserName={loggedUserName} />
        <section>
          <div className='epic-shelter'>
            <div className='row'>
              <div className='column' />
              <div className='column'>
                <div className='form pt-5'>
                  <h1 className='nav__logo app-color'>New Entry</h1>
                  <div style={loading}>
                    <Loader color='#0FC86F' speed={1} className='spinner' />
                  </div>
                  <div className='form-card'>
                    {/* <p>Please fill in your details</p> */}
                    <form>
                      <div className='form-row'>
                        <label htmlFor='name'>Title</label>
                        <input
                          type='text'
                          name='title'
                          value={title}
                          onChange={this.handleChange}
                          className='form-control'
                          placeholder='Entry title'
                        />
                      </div>
                      <div className='form-row'>
                        <label htmlFor='name'>Body</label>
                        <textarea
                          type='text'
                          name='note'
                          value={note}
                          onChange={this.handleChange}
                          className='form-control'
                          placeholder='Description'
                          defaultValue={''}
                        />
                      </div>
                      <div>
                        <label htmlFor='name'>Upload Image</label>
                        <input type='file' name='pic' accept='image/*' />
                      </div>
                      <div className='form-row'>
                        <label htmlFor='name'>Date:</label>
                        <input
                          type='date'
                          name='date'
                          value={date}
                          onChange={this.handleChange}
                          className='form-control'
                          placeholder='Date'
                        />
                      </div>
                    </form>
                  </div>
                  <div>
                    <button
                      type='button'
                      onClick={this.handleSubmit}
                      className='btn account__btn'>
                      <i className='fa fa-plus' /> Add
                    </button>
                  </div>
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

CreateEntryPage.propTypes = {
  report: PropTypes.func,
  reportPublished: PropTypes.object,
  clear: PropTypes.func,
  createEntry: PropTypes.func,
};

const mapStateToProps = state => ({
  entry: state.entryReducer,
  auth: state.authReducer,
});

const mapDispatchToProps = dispatch => ({
  createEntry: detail => dispatch(createNewEntry(detail)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEntryPage);
