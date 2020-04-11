import React, { Component } from 'react';
import Header from './header.js'
import Navbar from './nav.js'
import SideNav from './sidenav.js'

class Courses extends Component {
    state = {  }
    render() { 
        return (<div>
            <Header />
            <Navbar />
            <SideNav />
            <div>
                <form>
                    <h1>Address</h1>
                </form>
            </div>
            </div>
          );
    }
}
 
export default Courses;