import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import * as serviceWorker from './serviceWorker';
import dataFetcher from './reducer';
import { fetchProfiles } from './actions';

export const store = createStore(
  dataFetcher,
  applyMiddleware(thunkMiddleware)
);

ReactDOM.render(
  <Provider store = {store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// store.dispatch(fetchProfiles()).then(() => console.log(store.getState()))