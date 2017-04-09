// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//   <App/>,
//   document.getElementById('root')
// );




import React, { Component} from 'react';
import { render } from 'react-dom';
import {Router,Route,Link, hashHistory} from 'react-router'
import App from './App'


const root = document.getElementById('root');

const routes=(
  <Router history={ hashHistory}>
    <Route path='/' component={App}/>
     
  </Router>

)

render (routes,root);