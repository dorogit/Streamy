import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore, applyMiddleware,compose } from '@reduxjs/toolkit';
import App from './components/App';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = configureStore({reducer: reducers})
ReactDOM.render(
  <Provider store = {store}>
    <App/>
  </Provider>,
  document.querySelector('#root')
);
//test