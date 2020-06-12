import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login';
import PrimeiroPasso from './PrimeiroPasso';
import SegundoPasso from './SegundoPasso';
import TerceiroPasso from './TerceiroPasso';
import QuartoPasso from './QuartoPasso';
import * as serviceWorker from './serviceWorker';
import 'materialize-css/dist/css/materialize.min.css'
import './main.css';




ReactDOM.render(
  <React.StrictMode>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <PrimeiroPasso />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
