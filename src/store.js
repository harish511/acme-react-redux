import {createStore, applyMiddleware} from 'redux';
import rootReducer from './product-reducer';
import thunkMiddleware from 'redux-thunk';

export default createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware
  )
);