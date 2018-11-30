import React, { Component, Fragment } from 'react';

/**
 * @param {object} props
 * @desc renders login page
 */
class Header extends Component {
  render() {
    const { loggedUserName } = this.props;

    return (
      <Fragment>
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
              <nav className='nav__items' />
              <nav className='nav__items nav__items-right'>
                <div className='navbar__nav pr-0'>
                {
                  loggedUserName ? (
                    <>
                    <button className='btn btn-light'>{loggedUserName}</button>
                        <span>&nbsp; </span><button type="button" className="btn account__btn" id="modalBtn">
                            Create Entry <i className="fa fa-plus"></i>
                        </button>
                      <a href='/logout'>
                      <span>&nbsp; </span><button type="button" className='btn btn-light'>LogOut</button>
                    </a>
                    </>
                  ) :
                  <a href='/login'>
                    <button className='btn btn-light'>Login</button>
                  </a>

                }
                </div>
              </nav>
            </div>
            {/* end container */}
          </div>
          {/* end navbar */}
        </div>
      </Fragment>
    );
  }
}
export default Header;
