import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import garageReducer from './reducers/garageReducer'

const garageStore = createStore(garageReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={garageStore}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root') 
);


