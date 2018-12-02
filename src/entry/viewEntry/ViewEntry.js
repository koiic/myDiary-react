import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import swal from 'sweetalert';
import { fetchSingleEntries } from './viewSingleEntryAction';
import { updateSingleEntry } from '../updateEntry/updateEntryAction';
/**
 * @export
 * @class ViwE
 * @param {object} event
 * @extends Component
 */
class ViewEntry extends Component {
  constructor() {
    super();
    this.titleRef = React.createRef();
    this.noteRef = React.createRef();
    this.state = {
      title: '',
      note: '',
      editArticle: false,
      fetchedArticle: [],
    };
  }

  editTrue = () => {
    this.setState({
      editArticle: true,
    });
  }

  handleUpdate = (event, entryId) => {
    event.preventDefault();
    const entryObject = {
      title: this.titleRef.current.textContent,
      note: this.noteRef.current.textContent
    };
    this.props.updateOneEntry(entryObject, entryId).then((updateRespond) => {
      if (updateRespond.status === 'success') {
        swal('Success', 'Entry updated successfully', 'success');
      } else {
        swal('Failed', 'Unable to updated article', 'error');
      }
      this.setState({
        editArticle: false,
      });
    });
  }

  componentDidMount = () => {
    const { entryId } = this.props.match.params;
    this.props.fetchSingle(entryId).then((result) => {
      this.setState({
        fetchedArticle: result.data
      });
    });
  };

  // showEdit = () => {
  //   this.setState({
  //     editArticle: true,
  //   });
  // };

  render() {
    const FetchedEntry = this.state.fetchedArticle[0];
    const editable = this.state.editArticle;
    return (
      <Fragment>
        <div className='app'>
          <section>
            <div className='shelter'>
              <div className='dashboard__card mt-5'>
                    <div className='row entry ' id='entryContent'>
                      <div className='entry-header'>
                        <h2
                           contentEditable={this.state.editArticle}
                           ref={this.titleRef}
                           >
                          {FetchedEntry && FetchedEntry.title }
                        </h2>
                        <div className='card__image'>
                          <img
                            className='img__shelter'
                            src='/images/noteroom-icon.png'
                          />
                        </div>
                      </div>
                      <div className='entry-content'>
                        <p
                          className='text-format text-indent'
                          contentEditable={this.state.editArticle}
                          ref={this.noteRef}>
                          { FetchedEntry && FetchedEntry.note}
                        </p>
                        <p id='createdDate'>Created date : { FetchedEntry && FetchedEntry.created_at}</p>
                        <div className='text-right'>
                        {
                          editable
                            ? <button
                          className='btn account__btn'
                          onClick={event => this.handleUpdate(event, FetchedEntry.id)}
                          >
                          Update
                        </button>
                            : <button
                            className='btn account__btn'
                            id='edit'
                            onClick={this.editTrue}>
                            Edit
                            </button>
                        }
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
        </div>
      </Fragment>
    );
  }
}
ViewEntry.propTypes = {
  fetchSingle: PropTypes.func,
  match: PropTypes.object,
  singleEntries: PropTypes.object,
};
const mapDispatchToProps = dispatch => ({
  fetchSingle: entryId => dispatch(fetchSingleEntries(entryId)),
  updateOneEntry: (details, entryId) => dispatch(updateSingleEntry(details, entryId))
});
const mapStateToProps = state => ({
  singleEntries: state.fetchSingleEntriesReducer,
  updateEntry: state.updateEntryReducer
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewEntry);
