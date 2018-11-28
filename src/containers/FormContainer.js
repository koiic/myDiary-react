// react modules
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from '../components/Input';
import LandingPage from '../components/LandingPage'

class FormContainer extends Component {
  state = {
    seo_title:''
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render() {
    const { seo_title } = this.state;
    return (
      <LandingPage/>
    // <form id="article-form">
    //   <Input
    //     text="SEO title"
    //     label="seo_title"
    //     type="text"
    //     id="seo_title"
    //     value={seo_title}
    //     handleChange={this.handleChange}
    //   />
    // </form>
    )
  }
}


export default FormContainer;