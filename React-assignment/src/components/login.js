import React, { Component } from 'react';
import '../styles/App.css'
import Header from './header.js';
import Navbar from './nav.js';

class LogIn extends Component {
    render() { 
        return (
            <div>
            <Header />
            <Navbar />
            </div>
          );
    }
}
 
export default LogIn;