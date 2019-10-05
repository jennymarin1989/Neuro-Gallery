import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import './styles/_app.scss';
import App from './App.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';



const history = createHistory()

ReactDOM.render(
    <Router history={history}>
      <App />
    </Router>,
    document.getElementById('root')
  )
  


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
