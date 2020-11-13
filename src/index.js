import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as consts from './Consts'

ReactDOM.render(
  <React.StrictMode>
    <App lessons={consts.LESSONS} />
  </React.StrictMode>,
  document.getElementById('root')
);
