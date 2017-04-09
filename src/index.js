// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//   <App/>,
//   document.getElementById('root')
// );




import React, { Component} from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {Router,Route,Link, hashHistory} from 'react-router';
import store from './store';
import App from './App';


const root = document.getElementById('root');

const routes=(
	<Provider store={store}>
    <Router history={ hashHistory}>
    <Route path='/' component={App}/>
  </Router>
  </Provider>

)

render (routes,root);