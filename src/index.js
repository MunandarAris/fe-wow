import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { GlobalContextProviders } from "./context/globalContext";

ReactDOM.render(
  <React.StrictMode>
    <GlobalContextProviders>
      <App />
    </GlobalContextProviders>
  </React.StrictMode>,
  document.getElementById('root')
);

