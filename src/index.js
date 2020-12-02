import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App good={0} neutral={0} bad={0} />
  </React.StrictMode>,
  document.getElementById('root'),
);
