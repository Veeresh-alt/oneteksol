import React, { Component } from 'react';
import Header from './header.js'
import Navbar from './nav.js'

class RegistrationForm extends Component {
    state = {  }
    render() { 
        return (<div>
            <Header />
            <Navbar />
            <div>
                <form>
                    <h1>Hello Veeresh</h1>
                </form>
            </div>
            </div>
          );
    }
}
 
export default RegistrationForm;