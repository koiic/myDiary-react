import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
/**
 * @param {object} props
 * @desc renders login page
 */
class Header extends Component {
  render() {
    const { loggedUserName } = this.props;

    return (
      <Fragment>
        {loggedUserName ? (
          <>
            <div className='header'>
              <div className='navbar fixed-top'>
                <div className='shelter'>
                  <div className='navbar__nav nav__logo nav__underline'>
                    <i className='fa fa-book' />
                    <Link to= '/'> <span className='highlight'>My</span>-Diarry </Link>
                  </div>
                  <div className='navbar__nav navbar__nav-toggle'>
                    <i className='fa fa-bars' />
                  </div>
                  <nav className='nav__items'>
                    <div className='navbar__nav nav__underline'>
                      <Link to='/dashboard' className='nav__link '>
                        <span /> Dashboard
                      </Link>
                    </div>
                    <div className='navbar__nav nav__underline'>
                      <Link to='/entries' className='nav__link'>
                        <span /> Entries
                        {/* <i class="pr-1 fa fa-book"> </i> */}
                      </Link>
                    </div>
                    <div className='navbar__nav nav__underline'>
                      <Link to='/settings' className='nav__link'>
                        <span /> Profile
                      </Link>
                    </div>
                  </nav>
                  <nav className='nav__items nav__items-right'>
                    <div className='navbar__nav'>
                      <div className='navbar__nav my-1' id='username'>
                        <span />
                      </div>
                    </div>
                  </nav>
                  <nav className='nav__items nav__items-right'>
                    <button className='btn btn-light'>{loggedUserName}</button>
                    <span>&nbsp; </span>
                    <Link to='/create'>
                      <button
                        type='button'
                        className='btn account__btn'
                        id='modalBtn'>
                        Create Entry <i className='fa fa-plus' />
                      </button>
                    </Link>
                    <Link to='/logout'>
                      <span>&nbsp; </span>
                      <button type='button' className='btn btn-light'>
                        LogOut
                      </button>
                    </Link>
                  </nav>
                </div>
                {/* end container */}
              </div>
              {/* end navbar */}
            </div>
          </>
        ) : (
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
                    <a href='/login'>
                      <button className='btn btn-light'>Login</button>
                    </a>
                  </div>
                </nav>
              </div>
              {/* end container */}
            </div>
            {/* end navbar */}
          </div>
        )}
      </Fragment>
    );
  }
}
export default Header;
