//import React from 'react';
import React, { Component } from 'react';
import './styles/index.css';
import Header from './components/header';
import Navbar from './components/nav';
import SideNav from './components/sidenav';
import HomeContent from './components/HomeContent'

class App extends Component {
    render() { 
        return (
                <React.Fragment>
                 <Header />
                 <Navbar />
                 <HomeContent />
                 <SideNav />
                </React.Fragment>
             );
    }
}
 
export default App;