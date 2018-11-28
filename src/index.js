// react modules
import React from 'react';
import ReactDOM from 'react-dom';

//container
import FormContainer from './containers/FormContainer';


const wrapper = document.getElementById('create-article-form');
wrapper? ReactDOM.render( <FormContainer/>, wrapper) : false;
