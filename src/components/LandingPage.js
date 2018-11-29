import React, { Fragment } from 'react';
import styles from '../index.css';


const LandingPage = () => (
  <Fragment>
    <div className="app">
  <div className="header">
    <div className="navbar fixed-top">
      <div className="shelter">
        <div className="navbar__nav nav__logo nav__underline">
          <i className="fa fa-book" />
          <span className="highlight">My</span>-Diarry
        </div>
        <div className="navbar__nav navbar__nav-toggle">
          <i className="fa fa-bars" />
        </div>
        <nav className="nav__items" />
        <nav className="nav__items nav__items-right">
          <div className="navbar__nav pr-0">
            <a href="signin.html">
              <button className="btn btn-light">Login</button>
            </a>
          </div>
        </nav>
      </div>
      {/* end container */}
    </div>
    {/* end navbar */}
  </div>
  <section className="py-5">
    <div className="shelter">
      <h1 className="text-center app-color">Go ahead, take a peek</h1>
      <div className="row">
        <div className="column">
          <img
            className="img__shelter"
            src="./public/images/address_book.png"
          />
        </div>
        <div className=" column ">
          <div className="flex ">
            <p className="text-format ">
              {' '}
              It's Personal, express yourself with pictures or word..<br
              />{' '}
              Ready to start writing? Sign up now!
            </p>
            <a href="signup.html ">
              <button type="button " className="btn account__btn ">
                Get Started
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* end row */}
      <div className="row ">
        <div className="column ">
          <div className="flex ">
            <h4>Digitize your private diary</h4>
            <p className="text-format ">
              Keep a journal of your daily activities, your travel,
              exercise, diet, or thoughts and prayers.
            </p>
            <a href="signup.html ">
              <button type="button " className="btn account__btn ">
                <i className="fa fa-dashcube " /> Register Now!
              </button>
            </a>
          </div>
        </div>
        <div className="column ">
          <img
            className="img__shelter "
            src="./public/images/notegif.gif "
          />
        </div>
      </div>
      {/* end row */}
    </div>
  </section>
  <section className="py-5">
    <div className="shelter">
      <h2 className="text-center pb-1 app-color">What we Offer!</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <div className="card__image">
              <img
                className="img__shelter"
                src="./public/images/pen-icon.png"
              />
            </div>
            <p className="text-format">
              Designed to focus on privacy, your entries are totally
              private by default!.
            </p>
          </div>
          {/* end card */}
        </div>
        <div className="column">
          <div className="card">
            <div className="card__image">
              <img
                className="img__shelter"
                src="./public/images/prior.png"
              />
            </div>
            <p className="text-format">
              Custom email reminders help you make sure you never
              forget to write.
            </p>
          </div>
          {/* end card */}
        </div>
        <div className="column">
          <div className="card">
            <div className="card__image">
              <img
                className="img__shelter"
                src="./public/images/book2.jpg"
              />
            </div>
            <p className="text-format">
              Make each journal your own with custom covers,
              backgrounds, and fonts..
            </p>
          </div>
          {/* end card */}
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="footer ">
      <div
        className="navbar fixed-bottom py-1 bg-white "
        id="footer "
      >
        <div className="shelter" />
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
  </section>
</div>

  </Fragment>
);

export default LandingPage;
