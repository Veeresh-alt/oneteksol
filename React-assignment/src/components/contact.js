import React, { Component } from 'react';
import Header from './header.js'
import Navbar from './nav.js'

class ContactUs extends Component {
    state = {  }
    render() { 
        return (<div>
            <Header />
            <Navbar />
            <div>
                <form>
                    <h1>Address</h1>
                </form>
            </div>
            </div>
          );
    }
}
 
export default ContactUs;