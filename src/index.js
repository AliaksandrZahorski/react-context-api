import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './app'

const title = '2My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <div>
    {title}
    <App />
  </div>,
  document.getElementById('app')
);

module.hot.accept();