import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Courses from './components/courses';
import LogIn from './components/login';
import RegistrationForm from './components/application';
import ContactUs from './components/contact';

//import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById("root");

ReactDOM.render(    <BrowserRouter>
    <Switch>
     <Route exact path="/" component={App} />
     <Route path="/components/courses" component={Courses} exact />
     <Route path="/components/login" component={LogIn} exact />
     <Route path="/components/application" component={RegistrationForm} exact />
     <Route path="/components/contact" component={ContactUs} exact />
   </Switch>
   </BrowserRouter>, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
