import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import productReducer from '../src/store/reducers'
import './index.css';
import App from './App';
import { createStore } from 'redux';

const store = createStore(productReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
