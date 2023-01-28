import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './components/App';
import reducers from './reducers';

const store = configureStore({reducer: reducers})
ReactDOM.createRoot(
  document.querySelector('#root')
).render(
  <Provider store = {store}>
    <App/>
  </Provider>
)
//test