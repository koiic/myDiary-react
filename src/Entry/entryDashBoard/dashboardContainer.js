import React, { Component, Fragment } from 'react';
// third party libraries
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import swal from 'sweetalert';

// Components
import Header from '../../reusables/Header';

// Actions
import { fetchAllEntries, fetchTodaysEntries, fetchCreatedEntriesCount, deleteCount } from './dashboardAction';
import { deleteSingleEntry } from '../deleteEntry/deleteEntryAction';


/**
 * @export
 * @class CommentReply
 * @param {object} event
 * @extends Component
 */
class EntryDashBoard extends Component {
  state = {
    todayEntry: 0,
    deletedEntries: 0,
    allEntries: 0,
  }

  handleDelete = (event, entryId) => {
    event.preventDefault();
    this.props.deleteOne(entryId).then((updateRespond) => {
      if (updateRespond.status === 'success') {
        swal('Success', 'Entry deleted successfully', 'success');
        this.props.fetchAll();
      } else {
        swal('Failed', 'Unable to delete entry', 'error');
      }
    });
  }

  componentDidMount = () => {
    this.props.fetchAll();
    this.props.todayCount()
      .then((response) => {
        const { count } = response.data[0];
        this.setState({
          todayEntry: count
        });
      });
    this.props.allEntriesCount()
      .then((response) => {
        const { count } = response.data[0];
        this.setState({
          allEntries: count
        });
      });
    this.props.deletedEntriesCount()
      .then((response) => {
        const { count } = response.data[0];
        this.setState({
          deletedEntries: count
        });
      });
  };

  render() {
    const fetchEntries = this.props.entries.entries.data;
    let loggedUserName;
    const { props } = this;
    if (props.auth.isAuth === true) {
      loggedUserName = localStorage.getItem('username');
      loggedUserName = JSON.parse(loggedUserName);
    } else {
      loggedUserName = null;
    }


    return (
      <Fragment>
          <Header
          loggedUserName = { loggedUserName }
          />        <section>
          <div className='shelter'>
            <div className='dashboard__card mt-5'>
              <div className='orders'>
                <div className='row'>
                  <div className='column'>
                    <div className='card'>
                      <div className='card__row'>
                        <div>
                          <span>
                            <i className='wechat fa-3x fa fa-check-square' />
                          </span>
                        </div>
                        <div>
                          <div className='card__title app-color'>
                          <p> Today's Entry </p>
                           {this.state.todayEntry}
                          </div>
                          <div className='card__body' id='todayCount' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='column'>
                    <div className='card'>
                      <div className='card__row'>
                        <div>
                          <span>
                            <i className='wechat fa-3x fa fa-trash' />
                          </span>
                        </div>
                        <div>
                          <div className='card__title app-color'>
                          <p> Deleted Entries </p>
                            {this.state.deletedEntries}
                          </div>
                          <div className='card__body' id='archiveCount' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='column'>
                    <div className='card'>
                      <div className='card__row'>
                        <div>
                          <span>
                            <i className='wechat fa-3x fa fa-caret-down' />
                          </span>
                        </div>
                        <div>
                          <div className='card__title app-color'>
                          <p> All Entries </p>
                            {this.state.allEntries}
                          </div>
                          <div className='card__body' id='entryCount' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='column'>
                    <h2 className='lightblue'>Recent </h2>
                    {fetchEntries && fetchEntries.map((entry, index) => (
                      <div className="row" key={index}>
                      <div className="column">
                      <div className="card" id="entryCard">
                          <div className="justify-content-space-between">
                              <div>
                                  <p>{entry.title}</p>
                                  <div>
                                      <span>Date Created: {entry.created_at}</span>
                                  </div>
                              </div>
                              <div>
                                  <a href={`/viewentry/${entry.id}`}><button className="btn account__btn"> View</button></a>
                              </div>
                              <div>
                                  <button className="btn delete-btn" onClick={event => this.handleDelete(event, entry.id)}>Delete </button>
                              </div>
                          </div>
                      </div>
                  </div>
                  </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='footer'>
            <div className='navbar fixed-bottom py-1 bg-white'>
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

EntryDashBoard.propTypes = {
  entries: PropTypes.object,
  fetchAll: PropTypes.func

};
const mapDispatchToProps = dispatch => ({
  fetchAll: () => dispatch(fetchAllEntries()),
  deleteOne: entryId => dispatch(deleteSingleEntry(entryId)),
  todayCount: () => dispatch(fetchTodaysEntries()),
  allEntriesCount: () => dispatch(fetchCreatedEntriesCount()),
  deletedEntriesCount: () => dispatch(deleteCount())
});
const mapStateToProps = state => ({
  entries: state.fetchEntriesReducer,
  auth: state.authReducer
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EntryDashBoard);
