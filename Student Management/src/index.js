import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Adminview from './components/adminview';
import Logout from './components/logout'
import Students from './components/students'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const rootElement =  document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route exact path='/' component = {App} />
    <Route path='/adminview' component = {Adminview} />
    <Route path='/logout' component = {Logout} />
    <Route path='/students' component = {Students} />
  </Switch>
  </BrowserRouter>, rootElement)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
