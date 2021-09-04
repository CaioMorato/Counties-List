// vitals
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as BrowserRouter } from 'react-router-dom';
// components
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
