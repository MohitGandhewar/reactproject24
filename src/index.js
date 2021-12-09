import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Check2Component from './Check2Component';
import UseContextDemo from './UseContextDemo';

import {Provider} from 'react-redux'
import reducer from './reactredux/reducers'
import { createStore } from 'redux';

const store=createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
      <UseContextDemo/>
  </Provider>
    
  ,
  document.getElementById('root')
);
